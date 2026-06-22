# סושי טָעִימוּשִי

אתר הזמנות בעברית עבור עסק משפחתי למשלוחי סושי.

## מה יש באתר

- תפריט בעברית וב־RTL
- מחירים בשקלים
- סל קניות עם כמויות וסה״כ
- הערות לכל פריט בנפרד
- שדות שם, כתובת והערות כלליות
- שליחת סיכום הזמנה ל־WhatsApp
- עיצוב מודרני בהשראת תפריט ה־PDF המקורי
- תמיכה מלאה במובייל
- חיפוש בתפריט
- קטגוריות: הכל, רולים, מנות, ילדים, שתייה
- הסבר "איך מזמינים" ב-3 שלבים

## טכנולוגיות

- React 19
- TypeScript
- Vite 8
- CSS מודרני (כ-1,100 שורות)
- lucide-react לאייקונים
- RTL (ימין-לשמאל) עבור עברית

## פרטי העסק

- שם: **סושי טָעִימוּשִי**
- WhatsApp: **050-812-3562** (בינלאומי: `972508123562`)
- מיקום: קיבוץ גבולות
- ימי הזמנות: ב׳–ו׳, עד 12:00
- איסוף עצמי מקיבוץ גבולות
- יש משלוחים

## מבנה הפרויקט

```
sushi-taimushi/
├── src/
│   ├── App.tsx          # הקומפוננטה הראשית
│   ├── App.css          # עיצוב האתר
│   └── data/
│       └── menu.ts      # נתוני העסק והתפריט
├── index.html           # עם lang="he" dir="rtl"
├── package.json
└── README.md
```

## קבצים מרכזיים

### src/App.tsx
- מכיל את כל הלוגיקה של האתר
- קומפוננטה ראשית אחת (~340 שורות)
- ניהול Cart עם כמויות + הערות לפריט
- חיפוש וסינון לפי קטגוריה
- יצירת לינק WhatsApp
- ללא ספריות state חיצוניות

### src/App.css
- עיצוב עצמאי (~1,100 שורות)
- תמיכה מלאה במובייל (media queries)
- עיצוב hero, cards, cart, buttons
- אין Tailwind, כתוב ב- CSS טהור

### src/data/menu.ts
- ערך business עם פרטי העסק
- מערך categories
- מערך menuItems עם 42 פריטים
- כל פריט: id, number, category, name, description, price, badges

## הרצה מקומית

```bash
cd C:\Users\dovsh\sushi-taimushi
npm install
npm run dev
```

דפדפן נפתח ב:

```text
http://127.0.0.1:5173
```

## בדיקת build

```bash
npm run build
```

תיקיית ה-build נוצרת ב:

```text
dist/
```

## בדיקות

```bash
npm run lint
npm run build
```

בדיקות חובה לפני commit.

## GitHub

Repo:

```text
https://github.com/Dovshmi/Sushiteimushi
```

Branch:

```text
main
```

מצב הפרויקט:

```bash
git status
git log --oneline -5
```

## כללי Git

- **חשוב**: אל תעשה commit ו-push אלא אם כן המשתמש ביקש במפורש
- אחרי שינויים, תמיד תן למשתמש לסקור
- לפני commit: תמיד הרץ `npm run lint && npm run build`

## תהליך Git לאחר שינויים

```bash
cd C:\Users\dovsh\sushi-taimushi
git status
git add src/App.tsx src/App.css src/data/menu.ts
git commit -m "..."
git push origin main
```

**ללא קבצי preview** (`preview-*.png`) אלא אם המשתמש ביקש.

## Vercel

הפרויקט מחובר ל-Vercel דרך GitHub.

### הגדרות Vercel

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
Root Directory: ./
```

כל push ל-branch `main` מפעיל redeploy אוטומטי.

## מה נעשה עד עכשיו

### גרסה 1
- הקמת פרויקט Vite + React + TypeScript
- הגדרת RTL ב-index.html
- יצירת src/App.tsx עם cart
- יצירת src/App.css עם עיצוב כהה
- יצירת src/data/menu.ts עם תפריט מה-PDF
- Git init, GitHub remote, push ראשון

### גרסה 2
- הוספת search bar
- הוספת "איך מזמינים" ב-3 שלבים
- הוספת קטגוריות: הכל + שתייה
- הוספת חלל לתמונות בכרטיסי תפריט
- שינוי background ל-fixed layer (באג של רקע שמשתנה)

### גרסה 3
- שדרוג Cart: כמות לפריט + הערות לפריט
- שדרוג WhatsApp message לכלול הערות לפריט
- הקטנת כפתורי +/- ב-cart

### גרסה 4
- Mobile fixes מקיפים:
  - הסרת overflow
  - הקטנת hero title במובייל
  - שינוי info chips ל-vertical
  - הקטנת floating cart
  - הקטנת hero image במובייל
  - הוספת overflow-wrap לכותרות
  - הקטנת כפתורים במובייל
  - שינוי cart drawer למובייל
  - חלוקת כותרות לשורות (hero-title-line, menu-title-line)

## מה לא נעשה (להמשך)

- תמונות אמיתיות לפריטים (כרגע יש placeholders)
- מחירים לשתייה (עדיין "מחיר בתיאום")
- בדיקת accessibility מעמיקה
- מיקוד ועיצוב עדינים נוספים
- אופטימיזציה לטלפונים קטנים מאוד (<320px)

## כיצד להמשיך

### כאשר המשתמש מבקש שינויים

1. בצע שינויים ב-`src/App.tsx` או `src/App.css` או `src/data/menu.ts`
2. תמיד תחיל עם `git status`
3. הרץ `npm run lint && npm run build`
4. אם יש שגיאות, תקן
5. הרץ dev server: `npm run dev`
6. בדוק ויזואלית עם המשתמש
7. רק אם המשתמש ביקש - תעשה commit ו-push

### כאשר צריך להוסיף פריטים לתפריט

ערוך את `src/data/menu.ts`:

```typescript
export const menuItems: MenuItem[] = [
  // ... existing items ...
  {
    id: '43',
    number: 43,
    category: 'רולים',
    name: 'שם הרול',
    description: 'תיאור קצר',
    price: 85,
    badges: ['חדש', 'פופולרי']
  }
]
```

### כאשר צריך לשנות מספר WhatsApp

ערוך את `src/data/menu.ts`:

```typescript
export const business = {
  name: 'סושי טָעִימוּשִי',
  whatsapp: '050-123-4567',
  // ...
}
```

### כאשר צריך להוסיף תמונות

הוסף תמונות לתיקייה `public/` והשתמש בהם:

```tsx
<img src="/salmon-roll.jpg" alt="סלמון" />
```

## WhatsApp Message Format

ההודעה שנשלחת:

```
הזמנה חדשה

שם: [שם הלקוח]
כתובת: [כתובת]
הערות: [הערות כלליות]

---

סיכום הזמנה (4 פריטים, סה"כ ₪384)

2x #2 פילדלפיה Light — ₪96
תיאור: סלמון, קרים-צ׳יז, אבוקדו, סרטן ים. אפשרות לסלמון בתנור.
הערות לפריט: [הערות]

1x #5 קליפורניה — ₪55
...

---

סה"כ: ₪384
```

## קטגוריות

```typescript
export const categories = [
  { id: 'all', label: 'הכל' },
  { id: 'rolls', label: 'רולים' },
  { id: 'nigiri', label: 'ניגירי' },
  { id: 'sides', label: 'מנות צד' },
  { id: 'kids', label: 'ילדים' },
  { id: 'platters', label: 'מגשים' },
  { id: 'drinks', label: 'שתייה' }
]
```

## סגנון עיצוב

- צבע ראשי: `#e95851` (אדום חם)
- רקע כהה: `#090706`
- טקסט בהיר: `#fff7ef`
- רקע gradients בכהה
- רקע fixed layer למניעת overflow
- RTL מלא
- פונט: Assistant

## נקודות כניסה לקוד להמשך

### אם צריך לשנות את הכותרת

`src/App.tsx`, סביב שורה 129:

```tsx
<h1>סושי מודרני בטעם ביתי, נשלח אליכם ב-WhatsApp.</h1>
```

### אם צריך לשנות את ה-info pills

`src/App.tsx`, סביב שורה 147-149:

```tsx
<span>ימים ב׳–ו׳ · הזמנות עד 12:00</span>
<span>איסוף עצמי מקיבוץ גבולות</span>
<span>יש משלוחים</span>
```

### אם צריך לשנות את WhatsApp link

`src/App.tsx`, סביב שורה 260-262:

```tsx
const whatsappUrl = `https://wa.me/${internationalNumber}?text=${encodedMessage}`
```

### אם צריך לשנואר את cart UI

`src/App.tsx`, סביב שורה 280-340 (ה-cart drawer)

## סטטוס

- ✅ פונקציונלי מלא
- ✅ מובייל-ראדי
- ✅ Desktop-ראדי
- ✅ Git על GitHub
- ✅ מחובר ל-Vercel (awaiting deployment)
- ⏳ תמונות אמיתיות (פלייסהולדרים בלבד)

## קבצים שלא לגעת בהם אלא אם יש צורך

- `index.html` - רק אם צריך לשנות lang/dir
- `package.json` - רק אם צריך להוסיף תלויות
- `tsconfig.json` / `vite.config.ts` - נדיר

## הערות ל-Hermes Agents

- **לעולם אל תעשה commit/push ללא הוראה מפורשת**
- תמיד תן למשתמש לסקור שינויים לפני commit
- בדוק lint+build לפני כל commit
- כל שינוי משמעותי צריך בדיקה מובייל + desktop
- העתק את הסטטוס למשתמש אחרי שינויים

## כתובת הקוד

כל הקוד כתוב ב-Hebrew + English כמתאים.
RTL מוגדר ב-`index.html` עם `dir="rtl"`.

## סוף

זהו אתר הזמנות פונקציונלי, RTL, מובייל-ראדי שמחובר ל-WHATSAPP.
רוץ במקומי, נבדק ב-build, מוכן ל-Vercel deployment.