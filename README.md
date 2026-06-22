# סושי טָעִימוּשִי

אתר הזמנות בעברית עבור עסק משפחתי למשלוחי סושי.

## מה יש באתר

- תפריט בעברית וב־RTL
- מחירים בשקלים
- סל קניות עם כמויות וסה״כ
- שדות שם, כתובת והערות
- שליחת סיכום הזמנה ל־WhatsApp
- עיצוב מודרני בהשראת תפריט ה־PDF המקורי

## טכנולוגיות

- React
- TypeScript
- Vite
- CSS מודרני
- lucide-react לאייקונים

## הרצה מקומית

```bash
npm install
npm run dev
```

לאחר מכן לפתוח בדפדפן את הכתובת שמופיעה בטרמינל, בדרך כלל:

```text
http://127.0.0.1:5173
```

## בדיקת build

```bash
npm run build
```

## פריסה ב־Vercel

Vercel מזהה את Vite אוטומטית.

- Build Command: `npm run build`
- Output Directory: `dist`

## WhatsApp

מספר העסק מוגדר בקובץ:

```text
src/data/menu.ts
```

המספר הנוכחי לשליחת הזמנות:

```text
050-812-3562
```
