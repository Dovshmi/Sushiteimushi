# Sushi Taimushi Website TODO

Use this file as the working roadmap for the next development sessions.

The current product direction is clear: this is a **WhatsApp-first sushi ordering website**. Do not turn it into a full e-commerce platform yet. The website should look premium, feel smooth on mobile, and make it very easy for a customer to build an order and send it through WhatsApp.

## Core product rules

- [ ] Keep ordering and payment **WhatsApp-only** for now.
- [ ] Do not add online payment, user accounts, database checkout, admin dashboard, or complex backend unless explicitly requested later.
- [ ] Treat the website as a polished ordering bridge: browse menu -> add to cart -> review order -> send to WhatsApp.
- [ ] Prioritize style, animation, mobile experience, and small useful functions over heavy infrastructure.
- [ ] Keep the Hebrew RTL experience clean and natural.

## Priority 1 — Agent/admin maintainability

The repo should be easy for the owner and future AI agents to maintain safely.

- [ ] Add an `AGENTS.md` file with clear instructions for future AI agents working on this repo.
- [ ] Keep all menu/product/business data edits centralized in `src/data/menu.ts` unless there is a strong reason to split it.
- [ ] Keep delivery/address helper data in `src/data/deliveryLocations.ts`.
- [ ] Keep food image filenames numeric because the number is the product/image ID.
- [ ] Do not rename food images unless the matching product/image references are also updated.
- [ ] Add an `IMAGE_MAP.md` file that maps image ID -> product name/category.
- [ ] Add short comments in `src/data/menu.ts` explaining how to safely add/edit products, prices, badges, and image IDs.
- [ ] Add comments explaining where to edit the WhatsApp number, pickup text, delivery text, and business display text.
- [ ] Keep the file/folder structure simple and predictable for future agents.
- [ ] Avoid clever abstractions that make simple menu edits harder.
- [ ] Before every agent change, check: lint, build, mobile layout, cart behavior, WhatsApp message, and image references.

## Priority 2 — WhatsApp ordering experience

WhatsApp is the main conversion point. Make it feel intentional and professional.

- [ ] Add a clear **delivery / pickup selector** in the cart:
  - Options: `משלוח` and `איסוף עצמי`.
  - If delivery is selected, require delivery address.
  - If pickup is selected, show optional pickup note/time.
  - Include the selected order type in the WhatsApp message.

- [x] Add required field validation before WhatsApp send:
  - Require customer name.
  - Current implementation requires the existing `כתובת למשלוח / הערת איסוף` field until the delivery/pickup selector is added.
  - Show a short Hebrew validation message instead of allowing incomplete orders.
  - Current copy covers missing name, missing address/pickup note, and empty cart.

- [x] Improve the WhatsApp message format:
  - Include customer name, order type, address/pickup note, item list, per-item notes, priced total, and general notes.
  - For `price: null` items, mark as `מחיר בתיאום` and do not add to total.
  - Hide empty note sections.
  - Keep the final message clean and easy for the business to read.

- [ ] Add an order summary preview before opening WhatsApp.
- [ ] Add a copy-order button as backup in case WhatsApp does not open.
- [ ] Add estimated preparation/pickup text if the business wants it.
- [ ] Make the final WhatsApp button visually strong and always easy to find.

## Priority 3 — Visual style and branding

The site should feel like a premium, family-style sushi business with a black/red luxury direction.

- [ ] Improve the hero section:
  - Stronger food image presence.
  - Bigger, clearer logo.
  - Better Hebrew headline and subtitle.
  - Clear main CTA to start ordering.
  - Clear WhatsApp CTA.

- [ ] Improve the black/red visual language:
  - More consistent shadows.
  - Better spacing.
  - More premium card design.
  - Optional gold accent color.
  - Cleaner glassmorphism where it helps.

- [ ] Improve product cards:
  - Better image treatment.
  - Better price/badge layout.
  - More polished add-to-cart button.
  - Clearer item notes behavior.

- [ ] Add a small business/trust section:
  - Pickup location: `קיבוץ גבולות`.
  - Delivery availability / delivery areas.
  - Orders are prepared by advance order.
  - Order is confirmed only after WhatsApp reply from the business.

## Priority 4 — Animation and micro-interactions

Add premium motion without making the site slow or annoying.

- [ ] Add smooth page/section entrance animations.
- [ ] Add scroll reveal animations for major sections.
- [ ] Add subtle floating background effects or smoke/particles if performance stays good.
- [ ] Add product card hover/tap animations.
- [ ] Add add-to-cart feedback animation.
- [ ] Add cart drawer slide animation polish.
- [ ] Add remove-item animation.
- [ ] Add total price count/update animation.
- [ ] Add mobile haptic-style feedback through visual button states.
- [ ] Keep animations subtle, fast, and mobile-friendly.

## Priority 5 — Menu discovery and conversion polish

- [ ] Add optional product badges:
  - `מומלץ`
  - `פופולרי`
  - `חדש`
  - `חריף`
  - `מתאים לילדים`
  - `מגש לאירועים`

- [ ] Highlight 3-5 recommended products near the top.
- [ ] Improve category navigation and make it easy to use on mobile.
- [ ] Consider sticky category navigation.
- [ ] Improve search empty state in Hebrew.
- [ ] Add a `clear cart` action inside the cart drawer.
- [ ] Make quantity controls easier to tap on mobile.
- [ ] Make custom/price-by-agreement items visually clear with `מחיר בתיאום`.

## Priority 6 — Mobile polish

Most users will probably order from a phone, so mobile should feel native and smooth.

- [ ] Improve thumb-friendly spacing for buttons and cart controls.
- [ ] Make cart access very clear from anywhere on the page.
- [ ] Improve keyboard behavior when filling customer details.
- [ ] Test common Android and iPhone screen sizes.
- [ ] Make sticky elements feel smooth and not block content.
- [ ] Keep RTL alignment consistent.

## Priority 7 — SEO, sharing, and public polish

- [ ] Add Open Graph/social preview tags in `index.html`:
  - `og:title`
  - `og:description`
  - `og:image`
  - `og:url`
  - Twitter card metadata.

- [ ] Add a polished social preview image under `public/`, for example `public/og-image.png`.
- [ ] Add favicon/app icons if missing or incomplete.
- [ ] Add local business / restaurant structured data only if business details are stable.
- [ ] Add README screenshots:
  - One desktop screenshot.
  - One mobile screenshot.

## Priority 8 — Performance and quality

- [ ] Optimize food images without changing their IDs.
- [ ] Use lazy loading where appropriate.
- [ ] Keep animations around 60fps on mobile.
- [ ] Avoid large libraries unless they clearly improve the site.
- [ ] Keep bundle size reasonable.
- [ ] Run Lighthouse or equivalent checks after major design changes.

## Future ideas — only if explicitly requested later

These are not current priorities.

- [ ] Admin menu editor.
- [ ] Backend order history.
- [ ] Online payment.
- [ ] User accounts.
- [ ] Real database checkout.
- [ ] Advanced delivery distance checker with maps/places API.

## Verification checklist for each implementation session

- [ ] Run `npm run lint`.
- [ ] Run `npm run build`.
- [ ] Test the site in a mobile viewport.
- [ ] Test the cart manually.
- [ ] Add/remove items and change quantities.
- [ ] Test item notes and general order notes.
- [ ] Verify WhatsApp URL/message content.
- [ ] Check delivery/pickup behavior if changed.
- [ ] Check Hebrew RTL layout.
- [ ] Check that image IDs still match product references.
- [ ] Do not regenerate, overwrite, rename, or replace approved food images in `public/images/menu/` unless explicitly requested.
