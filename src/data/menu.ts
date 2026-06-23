export type MenuItem = {
  id: string
  number: number
  category: string
  name: string
  description: string
  price: number | null
  badges?: string[]
  image?: string
}

export const business = {
  name: 'סושי טָעִימוּשִי',
  phoneDisplay: '050-812-3562',
  whatsappPhone: '972508123562',
  pickup: 'קיבוץ גבולות',
  orderHours: 'ימים ב׳–ו׳ · הזמנות עד 12:00',
  note: 'ההזמנה נשלחת ב-WhatsApp ומאושרת רק לאחר תשובה מהעסק.',
}

export const categories = [
  "צ'יז-רולים עם דגים טריים וקרים",
  'רולים עם דגים טריים וירקות',
  "צ'יז וירקות-רולים עם קרים",
  'רולים עם ירקות',
  'מגש מסיבה',
  'מנות ילדים',
  'שתייה',
] as const

const menuImagePath = (number: number) => `/images/menu/${number}.webp`

export const menuItems: MenuItem[] = [
  { id: 'roll-1', number: 1, category: categories[0], name: 'פילדלפיה', description: 'סלמון, קרים-צ׳יז, מלפפון. אפשרות לסלמון בתנור.', price: 48, badges: ['דג טרי'], image: menuImagePath(1) },
  { id: 'roll-2', number: 2, category: categories[0], name: 'פילדלפיה Light', description: 'סלמון, קרים-צ׳יז, אבוקדו, סרטן ים. אפשרות לסלמון בתנור.', price: 48, image: menuImagePath(2) },
  { id: 'roll-3', number: 3, category: categories[0], name: 'קליפורניה', description: 'טוביקו, סרטן ים, קרים-צ׳יז, בצל ירוק.', price: 45, image: menuImagePath(3) },
  { id: 'roll-4', number: 4, category: categories[0], name: 'ואסאבי רול', description: 'שומשום בטעם וואסאבי, סלמון, קרים-צ׳יז, אבוקדו. אפשרות לסלמון בתנור.', price: 38, image: menuImagePath(4) },
  { id: 'roll-5', number: 5, category: categories[0], name: 'סויה רול', description: 'שומשום בטעם רוטב סויה, טונה, קרים-צ׳יז, בצל ירוק.', price: 38, image: menuImagePath(5) },
  { id: 'roll-6', number: 6, category: categories[0], name: 'סושי-פוטומאקי שרימפס', description: 'שרימפס, קרים-צ׳יז, בצל ירוק.', price: 36, image: menuImagePath(6) },
  { id: 'roll-7', number: 7, category: categories[0], name: 'סושי-פוטומאקי סלמון', description: 'סלמון, קרים-צ׳יז, מלפפון. אפשרות לסלמון בתנור.', price: 36, image: menuImagePath(7) },
  { id: 'roll-8', number: 8, category: categories[0], name: 'סושי-פוטומאקי טונה', description: 'טונה, קרים-צ׳יז, אבוקדו.', price: 36, image: menuImagePath(8) },
  { id: 'roll-9', number: 9, category: categories[0], name: 'רול מטוגן עם שרימפס', description: 'שרימפס, קרים-צ׳יז, גמבה, רוטב ספייסי.', price: 48, badges: ['מטוגן'], image: menuImagePath(9) },
  { id: 'roll-10', number: 10, category: categories[0], name: 'רול מטוגן עם טונה', description: 'גמבה, קרים-צ׳יז, טונה, אומלט.', price: 48, badges: ['מטוגן'], image: menuImagePath(10) },
  { id: 'roll-11', number: 11, category: categories[0], name: 'רול מטוגן עם סלמון', description: 'סלמון, קרים-צ׳יז, אבוקדו. אפשרות לסלמון בתנור.', price: 48, badges: ['מטוגן'], image: menuImagePath(11) },

  { id: 'roll-12', number: 12, category: categories[1], name: 'פילדלפיה Mix', description: 'סלמון, אומלט, אבוקדו, שיטאקי, בצל ירוק. אפשרות לסלמון בתנור.', price: 45, image: menuImagePath(12) },
  { id: 'roll-13', number: 13, category: categories[1], name: 'פילדלפיה ירקות', description: 'סלמון, גזר, מלפפון, בטטה בתנור. אפשרות לסלמון בתנור.', price: 45, image: menuImagePath(13) },
  { id: 'roll-14', number: 14, category: categories[1], name: 'סושי-פוטומאקי סלמון וירקות', description: 'סלמון, בטטה בתנור, מלפפון, בצל ירוק.', price: 36, image: menuImagePath(14) },
  { id: 'roll-15', number: 15, category: categories[1], name: 'סושי-פוטומאקי טונה וירקות', description: 'טונה, גזר, חסה, שיטאקי.', price: 36, image: menuImagePath(15) },
  { id: 'roll-16', number: 16, category: categories[1], name: 'ואסאבי רול סלמון', description: 'שומשום בטעם וואסאבי, סלמון, אומלט, אבוקדו.', price: 38, image: menuImagePath(16) },
  { id: 'roll-17', number: 17, category: categories[1], name: 'סויה רול טונה', description: 'שומשום בטעם רוטב סויה, טונה, בטטה בתנור, שיטאקי, בצל ירוק.', price: 38, image: menuImagePath(17) },
  { id: 'roll-18', number: 18, category: categories[1], name: 'רול מטוגן עם סלמון וירקות', description: 'גמבה, מלפפון, סלמון, גזר. אפשרות לסלמון בתנור.', price: 48, badges: ['מטוגן'], image: menuImagePath(18) },
  { id: 'roll-19', number: 19, category: categories[1], name: 'רול מטוגן עם טונה וירקות', description: 'אומלט, בטטה בתנור, טונה, בצל ירוק.', price: 48, badges: ['מטוגן'], image: menuImagePath(19) },
  { id: 'roll-20', number: 20, category: categories[1], name: 'סושי-מאקי סלמון', description: 'מאקי סלמון. אפשרות לסלמון בתנור.', price: 23, image: menuImagePath(20) },
  { id: 'roll-21', number: 21, category: categories[1], name: 'סושי-מאקי טונה', description: 'מאקי טונה.', price: 23, image: menuImagePath(21) },
  { id: 'roll-22', number: 22, category: categories[1], name: 'סושי-מאקי סרטן ים', description: 'מאקי סרטן ים.', price: 23, image: menuImagePath(22) },

  { id: 'roll-23', number: 23, category: categories[2], name: 'ואסאבי רול ירקות וצ׳יז', description: 'שומשום בטעם וואסאבי, שיטאקי, גזר, בצל ירוק, קרים-צ׳יז.', price: 33, image: menuImagePath(23) },
  { id: 'roll-24', number: 24, category: categories[2], name: 'סויה רול ירקות וצ׳יז', description: 'שומשום בטעם רוטב סויה, בטטה בתנור, גמבה, קרים-צ׳יז, אומלט.', price: 33, image: menuImagePath(24) },
  { id: 'roll-25', number: 25, category: categories[2], name: 'קליפורניה בלאק', description: 'שומשום שחור, מלפפון, גמבה, קרים-צ׳יז, אבוקדו.', price: 33, image: menuImagePath(25) },
  { id: 'roll-26', number: 26, category: categories[2], name: 'סושי-פוטומאקי בטטה וצ׳יז', description: 'חסה, קרים-צ׳יז, מלפפון, בטטה בתנור.', price: 30, image: menuImagePath(26) },
  { id: 'roll-27', number: 27, category: categories[2], name: 'סושי-פוטומאקי שיטאקי וצ׳יז', description: 'שיטאקי, קרים-צ׳יז, גזר, אומלט.', price: 30, image: menuImagePath(27) },
  { id: 'roll-28', number: 28, category: categories[2], name: 'סושי-פוטומאקי אבוקדו וצ׳יז', description: 'גמבה, בצל ירוק, אבוקדו, קרים-צ׳יז.', price: 30, image: menuImagePath(28) },
  { id: 'roll-29', number: 29, category: categories[2], name: 'רול מטוגן עם שיטאקי', description: 'שיטאקי, קרים-צ׳יז, גמבה, אומלט.', price: 45, badges: ['מטוגן'], image: menuImagePath(29) },
  { id: 'roll-30', number: 30, category: categories[2], name: 'רול מטוגן עם בטטה', description: 'בטטה בתנור, קרים-צ׳יז, גזר, מלפפון.', price: 45, badges: ['מטוגן'], image: menuImagePath(30) },
  { id: 'roll-31', number: 31, category: categories[2], name: 'רול מטוגן עם אבוקדו', description: 'אבוקדו, קרים-צ׳יז, גמבה, בצל ירוק.', price: 45, badges: ['מטוגן'], image: menuImagePath(31) },

  { id: 'roll-32', number: 32, category: categories[3], name: 'ואסאבי רול ירקות', description: 'שומשום בטעם וואסאבי, גזר, גמבה, אבוקדו, מלפפון.', price: 33, badges: ['צמחוני'], image: menuImagePath(32) },
  { id: 'roll-33', number: 33, category: categories[3], name: 'סויה רול ירקות', description: 'שומשום בטעם רוטב סויה, בטטה בתנור, גמבה, חסה, גזר.', price: 38, badges: ['צמחוני'], image: menuImagePath(33) },
  { id: 'roll-34', number: 34, category: categories[3], name: 'קליפורניה בלאק ירקות', description: 'שומשום שחור, מלפפון, בצל ירוק, שיטאקי, גזר.', price: 33, badges: ['צמחוני'], image: menuImagePath(34) },
  { id: 'roll-35', number: 35, category: categories[3], name: 'סושי-פוטומאקי בטטה', description: 'בטטה בתנור, גזר, מלפפון, בצל ירוק.', price: 30, badges: ['צמחוני'], image: menuImagePath(35) },
  { id: 'roll-36', number: 36, category: categories[3], name: 'סושי-פוטומאקי אבוקדו', description: 'אבוקדו, גמבה, שיטאקי, חסה.', price: 30, badges: ['צמחוני'], image: menuImagePath(36) },
  { id: 'roll-37', number: 37, category: categories[3], name: 'סושי-מאקי מלפפון', description: 'מאקי מלפפון.', price: 20, badges: ['צמחוני'], image: menuImagePath(37) },
  { id: 'roll-38', number: 38, category: categories[3], name: 'סושי-מאקי גמבה', description: 'מאקי גמבה.', price: 20, badges: ['צמחוני'], image: menuImagePath(38) },
  { id: 'roll-39', number: 39, category: categories[3], name: 'סושי-מאקי אבוקדו', description: 'מאקי אבוקדו.', price: 20, badges: ['צמחוני'], image: menuImagePath(39) },

  { id: 'roll-40', number: 40, category: categories[4], name: 'מגש מסיבה', description: 'מידה L: שבעה רולים · מידה XL: תשעה רולים. קומבינציית הרולים לפי בחירת הלקוח.', price: null, badges: ['בהתאמה אישית'] },
  { id: 'roll-41', number: 41, category: categories[5], name: 'מנת ילדים פרגית בטמפורה', description: 'פרגית בטמפורה עם צ׳יפס או אורז לבחירה.', price: 35 },
  { id: 'roll-42', number: 42, category: categories[5], name: 'מנת ילדים שניצל עוף', description: 'שניצל עוף עם צ׳יפס או אורז לבחירה.', price: 35 },
  { id: 'drink-43', number: 43, category: categories[6], name: 'מים מינרליים', description: 'שתייה קרה להשלמת ההזמנה. מחיר סופי יאושר ב-WhatsApp.', price: null, badges: ['שתייה'] },
  { id: 'drink-44', number: 44, category: categories[6], name: 'קולה', description: 'בקבוק / פחית לפי זמינות העסק. מחיר סופי יאושר ב-WhatsApp.', price: null, badges: ['שתייה'] },
  { id: 'drink-45', number: 45, category: categories[6], name: 'קולה זירו', description: 'בקבוק / פחית לפי זמינות העסק. מחיר סופי יאושר ב-WhatsApp.', price: null, badges: ['שתייה'] },
  { id: 'drink-46', number: 46, category: categories[6], name: 'ספרייט', description: 'בקבוק / פחית לפי זמינות העסק. מחיר סופי יאושר ב-WhatsApp.', price: null, badges: ['שתייה'] },
]
