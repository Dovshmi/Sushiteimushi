# Sushi Taimushi Website TODO

Use this file as the handoff list for the next work session. Recommended order: improve real ordering flow first, then polish trust/SEO/docs.

## Priority 1 — Ordering flow upgrades

- [ ] Add a **delivery / pickup selector** in the cart:
  - Options: `משלוח` and `איסוף עצמי`.
  - If delivery is selected, show/require delivery address.
  - If pickup is selected, show optional pickup note/time.
  - Include the selected order type in the WhatsApp message.

- [x] Add **required field validation** before WhatsApp send:
  - Require customer name.
  - Current implementation requires the existing `כתובת למשלוח / הערת איסוף` field until the delivery/pickup selector is added.
  - Show a short Hebrew validation message instead of allowing incomplete orders.
  - Current copy covers missing name, missing address/pickup note, and empty cart.

- [x] Improve the **WhatsApp message format**:
  - Make the final message cleaner and easier for the business to read.
  - Include: customer name, order type, address/pickup note, item list, per-item notes, priced total, and general notes.
  - For `price: null` items, mark as `מחיר בתיאום` and do not add to total.
  - Hide per-item note lines when there is no item note.
  - Hide the general notes section when there are no general notes.
  - Opening line now ends with a period, not a colon.

## Priority 2 — Trust and customer clarity

- [ ] Add a compact **business info section**:
  - Pickup location: `קיבוץ גבולות`.
  - Delivery availability / delivery areas.
  - Orders are prepared by advance order.
  - Order is confirmed only after WhatsApp reply from the business.

- [ ] Add a small **FAQ section** in Hebrew:
  - איך מזמינים?
  - האם יש משלוחים?
  - מתי ההזמנה מאושרת?
  - האם אפשר לבקש סלמון בתנור?
  - האם המחירים כוללים רטבים?

## Priority 3 — Menu discovery and conversion polish

- [ ] Add optional item badges such as:
  - `מומלץ`
  - `פופולרי`
  - `חדש`
  - `חריף`
  - `מתאים לילדים`

- [ ] Consider highlighting 3–5 recommended products near the top or via badges.

- [ ] Add a `clear cart` action inside the cart drawer.

## Priority 4 — SEO, sharing, and documentation

- [ ] Add Open Graph / social preview tags in `index.html`:
  - `og:title`
  - `og:description`
  - `og:image`
  - `og:url`
  - Twitter card metadata.

- [ ] Add a polished social preview image under `public/`, for example `public/og-image.png`.

- [ ] Add local business / restaurant structured data if business details are stable.

- [ ] Add README screenshots:
  - One desktop screenshot.
  - One mobile screenshot.
  - Keep preview screenshots either under a dedicated docs/assets path if they should be tracked, or ignored if they are temporary.

## Verification checklist for each implementation session

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Test the cart manually in browser/mobile viewport.
- [ ] Verify WhatsApp URL/message content after adding cart items and notes.
- [ ] Check Hebrew RTL layout on mobile.
- [ ] Do not regenerate or overwrite approved food images in `public/images/menu/` unless explicitly requested.
