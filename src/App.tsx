import { Minus, Plus, Send, ShoppingBag, Trash2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import './App.css'
import { business, categories, menuItems, type MenuItem } from './data/menu'

type Cart = Record<string, number>

const formatShekel = (price: number) => `₪${price}`

function App() {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0])
  const [cart, setCart] = useState<Cart>({})
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [customerName, setCustomerName] = useState('')
  const [address, setAddress] = useState('')
  const [notes, setNotes] = useState('')

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, quantity]) => {
          const item = menuItems.find((menuItem) => menuItem.id === id)
          return item ? { item, quantity } : null
        })
        .filter((entry): entry is { item: MenuItem; quantity: number } => Boolean(entry)),
    [cart],
  )

  const cartCount = cartItems.reduce((sum, entry) => sum + entry.quantity, 0)
  const total = cartItems.reduce((sum, entry) => sum + (entry.item.price ?? 0) * entry.quantity, 0)

  const updateCart = (item: MenuItem, delta: number) => {
    if (item.price === null) {
      setNotes((current) => (current.includes('מגש מסיבה') ? current : `${current}${current ? '\n' : ''}מעוניין/ת במגש מסיבה - נא לחזור אליי עם מחיר.`))
      setIsCartOpen(true)
      return
    }

    setCart((current) => {
      const nextQuantity = Math.max((current[item.id] ?? 0) + delta, 0)
      const next = { ...current }
      if (nextQuantity === 0) delete next[item.id]
      else next[item.id] = nextQuantity
      return next
    })
  }

  const removeItem = (id: string) => {
    setCart((current) => {
      const next = { ...current }
      delete next[id]
      return next
    })
  }

  const buildWhatsappMessage = () => {
    const lines = [
      `שלום ${business.name}, אני רוצה לבצע הזמנה 🍣`,
      '',
      `שם: ${customerName || 'לא צוין'}`,
      `כתובת / איסוף: ${address || 'לא צוין'}`,
      '',
      'הזמנה:',
      ...cartItems.map(({ item, quantity }) => `${quantity}x #${item.number} ${item.name} — ${formatShekel((item.price ?? 0) * quantity)}`),
      '',
      `סה״כ: ${formatShekel(total)}`,
      '',
      `הערות: ${notes || 'אין'}`,
    ]

    return lines.join('\n')
  }

  const whatsappUrl = `https://wa.me/${business.whatsappPhone}?text=${encodeURIComponent(buildWhatsappMessage())}`

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label={business.name}>
          <span className="brand-mark">寿</span>
          <span>{business.name}</span>
        </a>
        <a className="phone-link" href={`https://wa.me/${business.whatsappPhone}`} target="_blank" rel="noreferrer">
          {business.phoneDisplay}
        </a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">סושי משפחתי · טרי · בהזמנה מראש</p>
          <h1>סושי מודרני בטעם ביתי, נשלח אליכם ב-WhatsApp.</h1>
          <p className="hero-text">
            בוחרים רולים, ממלאים פרטים ושולחים את סיכום ההזמנה ישירות ל-{business.name}. התשלום והאישור מתבצעים מול העסק ב-WhatsApp.
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
        <div className="hero-art" aria-hidden="true">
          <img src="/menu-cover.png" alt="" />
          <div className="floating-card">
            <strong>8 יח׳ בכל רול</strong>
            <span>מוגש עם וואסאבי, סויה, טריאקי, ספייסי וג׳ינג׳ר</span>
          </div>
        </div>
      </section>

      <section className="notice-card">
        <strong>חשוב לדעת:</strong> {business.note} להזמנות מיוחדות כמו מגש מסיבה — הוסיפו הערה ונחזור אליכם.
      </section>

      <section id="menu" className="menu-section">
        <div className="section-heading">
          <p className="eyebrow">התפריט</p>
          <h2>בחרו קטגוריה והוסיפו לסל</h2>
        </div>

        <nav className="category-tabs" aria-label="קטגוריות תפריט">
          {categories.map((category) => (
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

        <div className="menu-grid">
          {menuItems
            .filter((item) => item.category === activeCategory)
            .map((item) => {
              const quantity = cart[item.id] ?? 0
              return (
                <article className="menu-card" key={item.id}>
                  <div className="roll-number">#{item.number}</div>
                  <div className="menu-card-content">
                    <div className="menu-card-header">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price === null ? 'לפי בחירה' : formatShekel(item.price)}</span>
                    </div>
                    <p>{item.description}</p>
                    <div className="badges">
                      {(item.badges ?? ['8 יח׳']).map((badge) => <span key={badge}>{badge}</span>)}
                    </div>
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
                        {item.price === null ? 'בירור מחיר' : 'הוספה לסל'}
                      </button>
                    )}
                  </div>
                </article>
              )
            })}
        </div>
      </section>

      <footer className="footer">
        <strong>{business.name}</strong>
        <span>{business.phoneDisplay}</span>
        <span>{business.orderHours}</span>
      </footer>

      <button className="floating-cart" onClick={() => setIsCartOpen(true)} type="button">
        <ShoppingBag size={20} /> סל · {cartCount} · {formatShekel(total)}
      </button>

      <aside className={`cart-drawer ${isCartOpen ? 'open' : ''}`} aria-hidden={!isCartOpen}>
        <div className="cart-panel">
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
              {cartItems.map(({ item, quantity }) => (
                <div className="cart-line" key={item.id}>
                  <div>
                    <strong>{quantity}x {item.name}</strong>
                    <span>#{item.number} · {formatShekel((item.price ?? 0) * quantity)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" aria-label="מחיקה"><Trash2 size={16} /></button>
                </div>
              ))}
            </div>
          )}

          <label>
            שם מלא
            <input value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="לדוגמה: דוב" />
          </label>
          <label>
            כתובת למשלוח / הערת איסוף
            <input value={address} onChange={(event) => setAddress(event.target.value)} placeholder="לדוגמה: קיבוץ גבולות / משלוח ל..." />
          </label>
          <label>
            הערות להזמנה
            <textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="סלמון בתנור, בלי שומשום, רטבים נוספים..." />
          </label>

          <div className="cart-total">
            <span>סה״כ</span>
            <strong>{formatShekel(total)}</strong>
          </div>

          <a className={`whatsapp-button ${cartItems.length === 0 ? 'disabled' : ''}`} href={cartItems.length ? whatsappUrl : undefined} target="_blank" rel="noreferrer">
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
