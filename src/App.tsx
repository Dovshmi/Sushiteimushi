import { Minus, Plus, Search, Send, ShoppingBag, Trash2 } from 'lucide-react'
import { createPortal } from 'react-dom'
import { useEffect, useMemo, useRef, useState, type MouseEvent } from 'react'
import './App.css'
import { business, categories, menuItems, type MenuItem } from './data/menu'
import {
  autoCorrectDeliveryAddress,
  getSuggestedDeliveryLocations,
} from './data/deliveryLocations'

type CartEntry = {
  quantity: number
  note: string
}

type Cart = Record<string, CartEntry>

const ALL_CATEGORY = 'הכל'
const categoryOptions = [ALL_CATEGORY, ...categories]
const formatShekel = (price: number) => `₪${price}`
const formatPrice = (item: MenuItem, quantity = 1) =>
  item.price === null ? 'מחיר בתיאום' : formatShekel(item.price * quantity)

const getItemEmoji = (item: MenuItem) => {
  if (item.category === 'שתייה') return '🥤'
  if (item.category === 'מנות ילדים') return '🍱'
  if (item.category === 'מגש מסיבה') return '🎉'
  return '🍣'
}

const hasAnyTerm = (text: string, terms: string[]) => terms.some((term) => text.includes(term))

const getItemBadges = (item: MenuItem) => {
  const text = `${item.name} ${item.description} ${item.category}`
  const badges = (item.badges ?? []).filter((badge) => !['8 יח׳', 'דג טרי', 'מטוגן', 'צמחוני', 'טבעוני'].includes(badge))

  if (item.category === 'שתייה' || item.category === 'מגש מסיבה') return badges

  const hasFish = hasAnyTerm(text, ['סלמון', 'טונה', 'דג', 'דגים'])
  const hasMeat = hasAnyTerm(text, ['עוף', 'שניצל', 'פרגית'])
  const hasEgg = hasAnyTerm(text, ['ביצה', 'ביצים', 'אומלט'])
  const hasDairy = hasAnyTerm(text, ['קרים-צ׳יז', 'צ׳יז', 'גבינה'])
  const isFried = hasAnyTerm(text, ['מטוגן', 'טמפורה'])

  if (hasFish) badges.push('דג טרי')
  if (isFried) badges.push('מטוגן')

  const hasAnimalProduct = hasFish || hasMeat || hasEgg || hasDairy
  if (!hasFish && !hasMeat && (hasEgg || hasDairy || item.category.includes('ירקות'))) {
    badges.push(hasAnimalProduct ? 'צמחוני' : 'טבעוני')
  }

  return badges
}

function App() {
  const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORY)
  const [cart, setCart] = useState<Cart>({})
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [address, setAddress] = useState('')
  const [notes, setNotes] = useState('')
  const [validationMessage, setValidationMessage] = useState('')
  const [openItemNotes, setOpenItemNotes] = useState<Record<string, boolean>>({})
  const [searchTerm, setSearchTerm] = useState('')
  const [areMenuControlsPinned, setAreMenuControlsPinned] = useState(false)
  const [isAddressSuggestionsOpen, setIsAddressSuggestionsOpen] = useState(false)
  const [addressDropdownRect, setAddressDropdownRect] = useState<{ top: number; left: number; width: number } | null>(null)
  const menuControlsRef = useRef<HTMLDivElement>(null)
  const addressInputRef = useRef<HTMLInputElement>(null)
  const cartPanelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const getPinOffset = () => (window.innerWidth <= 640 ? 8 : 14)

    const updatePinnedState = () => {
      const controls = menuControlsRef.current
      if (!controls) return
      setAreMenuControlsPinned(controls.getBoundingClientRect().top <= getPinOffset())
    }

    updatePinnedState()
    window.addEventListener('scroll', updatePinnedState, { passive: true })
    window.addEventListener('resize', updatePinnedState)

    return () => {
      window.removeEventListener('scroll', updatePinnedState)
      window.removeEventListener('resize', updatePinnedState)
    }
  }, [])

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, entry]) => {
          const item = menuItems.find((menuItem) => menuItem.id === id)
          return item ? { item, ...entry } : null
        })
        .filter((entry): entry is { item: MenuItem; quantity: number; note: string } => Boolean(entry)),
    [cart],
  )

  const filteredItems = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase()

    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === ALL_CATEGORY || item.category === activeCategory
      const searchableText = `${item.name} ${item.description} ${item.category} ${getItemBadges(item).join(' ')}`.toLowerCase()
      const matchesSearch = normalizedSearch.length === 0 || searchableText.includes(normalizedSearch)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchTerm])

  const cartCount = cartItems.reduce((sum, entry) => sum + entry.quantity, 0)
  const total = cartItems.reduce((sum, entry) => sum + (entry.item.price ?? 0) * entry.quantity, 0)
  const trimmedCustomerName = customerName.trim()
  const trimmedAddress = address.trim()
  const trimmedNotes = notes.trim()
  const addressSuggestions = useMemo(() => getSuggestedDeliveryLocations(address, 8), [address])
  const isOrderReady = cartItems.length > 0 && trimmedCustomerName.length > 0 && trimmedAddress.length > 0

  useEffect(() => {
    if (!isAddressSuggestionsOpen) return

    const updateDropdownRect = () => {
      const input = addressInputRef.current
      if (!input) return

      const rect = input.getBoundingClientRect()
      setAddressDropdownRect({
        top: rect.bottom + 8,
        left: rect.left,
        width: rect.width,
      })
    }

    updateDropdownRect()
    window.addEventListener('resize', updateDropdownRect)
    window.addEventListener('scroll', updateDropdownRect, true)
    cartPanelRef.current?.addEventListener('scroll', updateDropdownRect, { passive: true })

    return () => {
      window.removeEventListener('resize', updateDropdownRect)
      window.removeEventListener('scroll', updateDropdownRect, true)
      cartPanelRef.current?.removeEventListener('scroll', updateDropdownRect)
    }
  }, [isAddressSuggestionsOpen, address])

  const updateCart = (item: MenuItem, delta: number) => {
    const currentQuantity = cart[item.id]?.quantity ?? 0
    const shouldCloseNote = Math.max(currentQuantity + delta, 0) === 0

    setCart((current) => {
      const currentEntry = current[item.id] ?? { quantity: 0, note: '' }
      const nextQuantity = Math.max(currentEntry.quantity + delta, 0)
      const next = { ...current }
      if (nextQuantity === 0) delete next[item.id]
      else next[item.id] = { ...currentEntry, quantity: nextQuantity }
      return next
    })

    if (shouldCloseNote) {
      setOpenItemNotes((current) => {
        const next = { ...current }
        delete next[item.id]
        return next
      })
    }
  }

  const updateItemNote = (id: string, note: string) => {
    setCart((current) => {
      const currentEntry = current[id]
      if (!currentEntry) return current
      return {
        ...current,
        [id]: {
          ...currentEntry,
          note,
        },
      }
    })
  }

  const removeItem = (id: string) => {
    setCart((current) => {
      const next = { ...current }
      delete next[id]
      return next
    })

    setOpenItemNotes((current) => {
      const next = { ...current }
      delete next[id]
      return next
    })
  }

  const toggleItemNote = (id: string) => {
    setOpenItemNotes((current) => {
      const isOpen = Boolean(current[id])

      if (isOpen) {
        updateItemNote(id, '')
        const next = { ...current }
        delete next[id]
        return next
      }

      return {
        ...current,
        [id]: true,
      }
    })
  }

  const buildWhatsappMessage = () => {
    const itemLines = cartItems.flatMap(({ item, quantity, note }, index) => {
      const trimmedNote = note.trim()
      const lines = [`${index + 1}. #${item.number} ${item.name} x${quantity} — ${formatPrice(item, quantity)}`]

      if (trimmedNote) lines.push(`   הערה: ${trimmedNote}`)

      return lines
    })

    const lines = [
      `שלום ${business.name} 🍣`,
      'אני רוצה לבצע הזמנה.',
      '',
      `שם: ${trimmedCustomerName}`,
      `כתובת / איסוף: ${trimmedAddress}`,
      '',
      'פריטים:',
      ...itemLines,
      '',
      `סה״כ לפריטים עם מחיר: ${formatShekel(total)}`,
    ]

    if (trimmedNotes) {
      lines.push('', 'הערות כלליות:', trimmedNotes)
    }

    return lines.join('\n')
  }

  const whatsappUrl = `https://wa.me/${business.whatsappPhone}?text=${encodeURIComponent(buildWhatsappMessage())}`

  const handleAddressSelect = (locationName: string) => {
    setAddress(locationName)
    setValidationMessage('')
    setIsAddressSuggestionsOpen(false)
  }

  const handleAddressBlur = () => {
    window.setTimeout(() => {
      setAddress((current) => autoCorrectDeliveryAddress(current))
      setIsAddressSuggestionsOpen(false)
    }, 120)
  }

  const handleAddressFocus = () => {
    setIsAddressSuggestionsOpen(true)
  }

  const handleWhatsappClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (cartItems.length === 0) {
      event.preventDefault()
      setValidationMessage('הסל ריק כרגע. הוסיפו פריטים לפני שליחת הזמנה.')
      return
    }

    if (!trimmedCustomerName && !trimmedAddress) {
      event.preventDefault()
      setValidationMessage('כדי לשלוח הזמנה, מלאו שם וכתובת למשלוח או הערת איסוף.')
      return
    }

    if (!trimmedCustomerName) {
      event.preventDefault()
      setValidationMessage('כדי לשלוח הזמנה, מלאו שם מלא.')
      return
    }

    if (!trimmedAddress) {
      event.preventDefault()
      setValidationMessage('כדי לשלוח הזמנה, מלאו כתובת למשלוח או הערת איסוף.')
      return
    }

    setValidationMessage('')
  }

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label={business.name}>
          <span className="brand-mark"><img src="/images/design/black-red/topbar-sushi-symbol.png" alt="" /></span>
          <span>{business.name}</span>
        </a>
        <a className="phone-link" href={`https://wa.me/${business.whatsappPhone}`} target="_blank" rel="noreferrer">
          {business.phoneDisplay}
        </a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">סושי משפחתי · טרי · בהזמנה מראש</p>
          <h1>
            <span className="hero-title-line">סוּשִׁי טֶעִימוּשִׁי</span>{' '}
            <span className="hero-title-line">בטעם ביתי</span>
          </h1>
          <p className="hero-text">
            בוחרים רולים, ממלאים פרטים ושולחים את סיכום ההזמנה ישירות ל-{business.name}. אנחנו נדאג להכין לכם סושי טרי, צבעוני ומפנק.
          </p>
          <div className="hero-actions">
            <a href="#menu" className="primary-button">לתפריט</a>
            <button className="secondary-button" onClick={() => setIsCartOpen(true)} type="button">
              <ShoppingBag size={18} /> הסל שלי ({cartCount})
            </button>
          </div>
          <div className="info-grid" aria-label="פרטי הזמנה">
            <span>{business.orderHours}</span>
            <span>איסוף עצמי מ{business.pickup}</span>
            <span>יש משלוחים</span>
          </div>
        </div>
        <a className="hero-art" href="/menu-7b.pdf" target="_blank" rel="noreferrer" aria-label="פתח את התפריט כקובץ PDF" >
          <img className="hero-combined-image" src="/images/design/black-red/hero-combined-user.png" alt="" />
          <div className="floating-card">
            <strong>8 יח׳ בכל רול</strong>
            <span>מוגש עם וואסאבי, סויה, טריאקי, ספייסי וג׳ינג׳ר</span>
          </div>
        </a>
      </section>

      <section className="how-section" aria-label="איך מזמינים">
        <article className="step-card">
          <span>1</span>
          <strong>בוחרים מהתפריט</strong>
          <p>אפשר לסנן לפי קטגוריה, לחפש סלמון / טונה / מטוגן ולהוסיף פריטים לסל.</p>
        </article>
        <article className="step-card">
          <span>2</span>
          <strong>ממלאים פרטים</strong>
          <p>שם, כתובת למשלוח או איסוף, והערות כמו סלמון בתנור או בלי שומשום.</p>
        </article>
        <article className="step-card">
          <span>3</span>
          <strong>שולחים הזמנה</strong>
          <p>ההזמנה נשלחת לעסק, והעסק חוזר אליכם לאישור ותשלום.</p>
        </article>
      </section>

      <section id="menu" className="menu-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">התפריט</p>
            <h2>
              <span className="menu-title-line">בחרו קטגוריה</span>{' '}
              <span className="menu-title-line">והוסיפו לסל</span>
            </h2>
          </div>
          <span className="results-count">{filteredItems.length} פריטים</span>
        </div>

        <div className={`menu-sticky-controls${areMenuControlsPinned ? ' is-pinned' : ''}`} ref={menuControlsRef}>
          <div className="menu-sticky-controls-inner">
            <div className="menu-controls">
              <label className="search-box" aria-label="חיפוש בתפריט">
                <Search size={19} />
                <input
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="חיפוש: סלמון, טונה, מטוגן, שתייה..."
                />
              </label>
            </div>

            <nav className="category-tabs" aria-label="קטגוריות תפריט">
              {categoryOptions.map((category) => (
                <button
                  className={category === activeCategory ? 'active' : ''}
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="no-results">
            <strong>לא מצאנו פריטים מתאימים</strong>
            <span>נסו חיפוש אחר או בחרו ״הכל״.</span>
          </div>
        ) : (
          <div className="menu-grid">
            {filteredItems.map((item) => {
              const quantity = cart[item.id]?.quantity ?? 0
              const itemBadges = getItemBadges(item)
              return (
                <article className="menu-card" key={item.id}>
                  <div className="menu-image">
                    {item.image ? <img src={item.image} alt={item.name} /> : <span aria-hidden="true">{getItemEmoji(item)}</span>}
                  </div>
                  <div className="roll-number">#{item.number}</div>
                  <div className="menu-card-content">
                    <div className="menu-card-header">
                      <h3>{item.name}</h3>
                      <span className="price">{formatPrice(item)}</span>
                    </div>
                    <p>{item.description}</p>
                    {itemBadges.length > 0 && (
                      <div className="badges">
                        {itemBadges.map((badge) => <span key={badge}>{badge}</span>)}
                      </div>
                    )}
                  </div>
                  <div className="card-actions">
                    {quantity > 0 ? (
                      <div className="quantity-control">
                        <button onClick={() => updateCart(item, -1)} type="button" aria-label="הורדה"><Minus size={16} /></button>
                        <strong>{quantity}</strong>
                        <button onClick={() => updateCart(item, 1)} type="button" aria-label="הוספה"><Plus size={16} /></button>
                      </div>
                    ) : (
                      <button className="add-button" onClick={() => updateCart(item, 1)} type="button">
                        הוספה לסל
                      </button>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        )}
      </section>

      <footer className="footer">
        <strong>{business.name}</strong>
        <span>{business.phoneDisplay}</span>
        <span>{business.orderHours}</span>
        <span className="copyright-credit">
          © {new Date().getFullYear()} רוני שמידוב ·{' '}
          <a href="https://github.com/Dovshmi/Sushiteimushi" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </span>
      </footer>

      {cartCount > 0 && (
        <button className="floating-cart" onClick={() => setIsCartOpen(true)} type="button">
          <ShoppingBag size={20} /> סל · {cartCount} · {formatShekel(total)}
        </button>
      )}

      <aside className={`cart-drawer ${isCartOpen ? 'open' : ''}`} aria-hidden={!isCartOpen}>
        <div className="cart-panel" ref={cartPanelRef}>
          <div className="cart-header">
            <div>
              <p className="eyebrow">סיכום הזמנה</p>
              <h2>הסל שלך</h2>
            </div>
            <button className="close-button" onClick={() => setIsCartOpen(false)} type="button">×</button>
          </div>

          {cartItems.length === 0 ? (
            <p className="empty-cart">הסל ריק כרגע. בחרו רולים מהתפריט והם יופיעו כאן.</p>
          ) : (
            <div className="cart-lines">
              {cartItems.map(({ item, quantity, note }) => {
                const isNoteOpen = Boolean(openItemNotes[item.id])

                return (
                  <article className="cart-line" key={item.id}>
                    <div className="cart-line-top">
                      <div className="cart-item-text">
                        <strong>{quantity}x {item.name}</strong>
                        <span>#{item.number} · {formatPrice(item, quantity)}</span>
                        <small>{item.description}</small>
                      </div>
                      <button onClick={() => removeItem(item.id)} type="button" aria-label="מחיקה"><Trash2 size={16} /></button>
                    </div>

                    <div className="cart-item-controls" aria-label={`כמות עבור ${item.name}`}>
                      <button onClick={() => updateCart(item, -1)} type="button" aria-label="הורדת כמות"><Minus size={15} /></button>
                      <strong>{quantity}</strong>
                      <button onClick={() => updateCart(item, 1)} type="button" aria-label="הוספת כמות"><Plus size={15} /></button>
                    </div>

                    <div className="item-note-block">
                      <button
                        className={`item-note-toggle ${isNoteOpen ? 'open' : ''}`}
                        onClick={() => toggleItemNote(item.id)}
                        type="button"
                        aria-expanded={isNoteOpen}
                        aria-controls={`note-${item.id}`}
                      >
                        <span className="note-toggle-icon" aria-hidden="true"><Plus size={14} /></span>
                        <span>הוסף הערות</span>
                      </button>

                      {isNoteOpen && (
                        <label className="item-note-label" id={`note-${item.id}`}>
                          <span className="sr-only">הערות עבור {item.name}</span>
                          <textarea
                            value={note}
                            onChange={(event) => updateItemNote(item.id, event.target.value)}
                            placeholder="למשל: סלמון בתנור, בלי שומשום, רטבים בצד..."
                          />
                        </label>
                      )}
                    </div>
                  </article>
                )
              })}
            </div>
          )}

          <label>
            שם מלא
            <input
              value={customerName}
              onChange={(event) => {
                setCustomerName(event.target.value)
                setValidationMessage('')
              }}
              placeholder="לדוגמה: דוב"
            />
          </label>
          <label className="address-field">
            כתובת למשלוח / הערת איסוף
            <div className="address-autocomplete">
              <input
                ref={addressInputRef}
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value)
                  setValidationMessage('')
                  setIsAddressSuggestionsOpen(true)
                }}
                onFocus={handleAddressFocus}
                onBlur={handleAddressBlur}
                placeholder="לדוגמה: קיבוץ גבולות / משלוח ל..."
                autoComplete="off"
              />
              {isAddressSuggestionsOpen && addressSuggestions.length > 0 && addressDropdownRect && document.body && createPortal(
                <div
                  className="address-suggestions-dropdown"
                  role="listbox"
                  aria-label="הצעות לכתובת"
                  style={{
                    top: addressDropdownRect.top,
                    left: addressDropdownRect.left,
                    width: addressDropdownRect.width,
                  }}
                >
                  {addressSuggestions.map((location) => (
                    <button
                      key={location.name}
                      type="button"
                      className="address-suggestion-option"
                      onMouseDown={(event) => {
                        event.preventDefault()
                        handleAddressSelect(location.name)
                      }}
                    >
                      {location.name}
                    </button>
                  ))}
                </div>,
                document.body,
              )}
            </div>
          </label>
          <label>
            הערות כלליות להזמנה
            <textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="הערה כללית לכל ההזמנה..." />
          </label>

          <div className="cart-total">
            <span>סה״כ לפריטים עם מחיר</span>
            <strong>{formatShekel(total)}</strong>
          </div>

          {validationMessage && <p className="validation-message" role="alert">{validationMessage}</p>}

          <a className={`whatsapp-button ${!isOrderReady ? 'disabled' : ''}`} href={cartItems.length ? whatsappUrl : undefined} onClick={handleWhatsappClick} target="_blank" rel="noreferrer">
            <Send size={18} /> שליחה ב-WhatsApp
          </a>
          <small>{business.note}</small>
        </div>
        <button className="drawer-backdrop" onClick={() => setIsCartOpen(false)} type="button" aria-label="סגירת סל" />
      </aside>
    </main>
  )
}

export default App
