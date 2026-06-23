// Delivery locations for Sushi Teimushi
// Put this file in: src/data/deliveryLocations.ts
// Important: this is a text whitelist/helper list. For accurate delivery validation,
// use Google Places coordinates + distance check.

export type DeliveryLocationCategory = 'city' | 'local_council' | 'settlement'

export type DeliveryLocation = {
  name: string
  category: DeliveryLocationCategory
  region: string
}

export const DELIVERY_BASE = {
  name: 'קיבוץ גבולות',
  lat: 31.21,
  lng: 34.46,
  radiusKm: 100,
} as const

export const DELIVERY_LOCATIONS: DeliveryLocation[] = [
  {
    "name": "אופקים",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "אשדוד",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "אשקלון",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "באר שבע",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "בית שמש",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "בת ים",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "דימונה",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "חולון",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "יבנה",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "ירוחם",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "ירושלים",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "לוד",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "מודיעין־מכבים־רעות",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "מזכרת בתיה",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "מצפה רמון",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "נס ציונה",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "נתיבות",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "ערד",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "קריית גת",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "קריית מלאכי",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "ראשון לציון",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "רחובות",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "רמלה",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "שדרות",
    "category": "city",
    "region": "ערים בערך עד 100 ק״מ מגבולות"
  },
  {
    "name": "אבו גוש",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "אזור",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "באר יעקב",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "בני עי״ש",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "גדרה",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "גן יבנה",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "חורה",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "כסייפה",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "להבים",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "לקיה",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "מבשרת ציון",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "מיתר",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "עומר",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "קריית עקרון",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "שגב שלום",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "תל שבע",
    "category": "local_council",
    "region": "מועצות מקומיות / יישובים גדולים"
  },
  {
    "name": "אבשלום",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "אוהד",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "אורים",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "איבים",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "אור הנר",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "אלומים",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "בארי",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "בית הגדי",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "בני נצרים",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "ברור חיל",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "גבולות",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "גבים",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "גבעולים",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "דורות",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "דקל",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "חולית",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "יכיני",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "יושיביה",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "יבול",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "ישע",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "יתד",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "כיסופים",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "כפר עזה",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "כפר מימון",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "כרם שלום",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "מבטחים",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "מגן",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "מפלסים",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "מלילות",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "מעגלים",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "נחל עוז",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "ניר עם",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "ניר יצחק",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "נירים",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "נתיב העשרה",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "סופה",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "סעד",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "עין הבשור",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "עין השלושה",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "פרי גן",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "צאלים",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "רעים",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "רוחמה",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "שובה",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "שוקדה",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "שדה אברהם",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "שדה ניצן",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "שרשרת",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "תושיה",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "תקומה",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "תלמי אליהו",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "תלמי יוסף",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "זמרת",
    "category": "settlement",
    "region": "עוטף / אשכול / שער הנגב / שדות נגב"
  },
  {
    "name": "אשל הנשיא",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "אשבול",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "בטחה",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "בית קמה",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "ברוש",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "גבעות בר",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "גילת",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "דביר",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "חצרים",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "כרמים",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "להב",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "מבועים",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "משמר הנגב",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "מסלול",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "נבטים",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "ניר משה",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "פדויים",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "פעמי תש״ז",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "פטיש",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "קלחים",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "רנן",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "שדה צבי",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "שובל",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "שיבולים",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "תאשור",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "תדהר",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "תפרח",
    "category": "settlement",
    "region": "אזור אופקים / מרחבים / בני שמעון / באר שבע"
  },
  {
    "name": "אשלים",
    "category": "settlement",
    "region": "אזור רמת נגב"
  },
  {
    "name": "באר מילכה",
    "category": "settlement",
    "region": "אזור רמת נגב"
  },
  {
    "name": "טללים",
    "category": "settlement",
    "region": "אזור רמת נגב"
  },
  {
    "name": "כמהין",
    "category": "settlement",
    "region": "אזור רמת נגב"
  },
  {
    "name": "מדרשת בן־גוריון",
    "category": "settlement",
    "region": "אזור רמת נגב"
  },
  {
    "name": "מרחב עם",
    "category": "settlement",
    "region": "אזור רמת נגב"
  },
  {
    "name": "משאבי שדה",
    "category": "settlement",
    "region": "אזור רמת נגב"
  },
  {
    "name": "ניצנה",
    "category": "settlement",
    "region": "אזור רמת נגב"
  },
  {
    "name": "עזוז",
    "category": "settlement",
    "region": "אזור רמת נגב"
  },
  {
    "name": "קדש ברנע",
    "category": "settlement",
    "region": "אזור רמת נגב"
  },
  {
    "name": "רביבים",
    "category": "settlement",
    "region": "אזור רמת נגב"
  },
  {
    "name": "רתמים",
    "category": "settlement",
    "region": "אזור רמת נגב"
  },
  {
    "name": "שדה בוקר",
    "category": "settlement",
    "region": "אזור רמת נגב"
  },
  {
    "name": "אבן שמואל",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "אחוזם",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "אלומה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "אמציה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "באר טוביה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "בית גוברין",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "בית ניר",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "בית עזרא",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "בית שקמה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "ברכיה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "בת הדר",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "גיאה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "גלאון",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "גת",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "הודיה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "ורדון",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "זיקים",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "זוהר",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "יד מרדכי",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "כוכב מיכאל",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "כפר מנחם",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "כפר סילבר",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "כרמיה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "לכיש",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "מבקיעים",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "מנוחה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "משען",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "נגבה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "נהורה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "ניר ח״ן",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "ניר ישראל",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "ניצנים",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "נטע",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "עוצם",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "קדמה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "קוממיות",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "רווחה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "רבדים",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "שדה דוד",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "שדה יואב",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "שדה משה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "שפיר",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "שקף",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "תלמים",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "תלמי יפה",
    "category": "settlement",
    "region": "אזור אשקלון / לכיש / יואב / שפיר"
  },
  {
    "name": "אורות",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "אמונים",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "ארוגות",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "אביגדור",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "ביצרון",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "בית אלעזרי",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "בית חנן",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "בית עובד",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "בן זכאי",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "בני דרום",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "גבעת ברנר",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "גן הדרום",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "גן שורק",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "גני יוחנן",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "גני טל",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "חפץ חיים",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "חצב",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "יד בנימין",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "יסודות",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "כפר אביב",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "כפר ביל״ו",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "כפר הנגיד",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "כפר ורבורג",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "כפר מרדכי",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "כפר אחים",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "קבוצת יבנה",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "קדרון",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "משגב דב",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "ניר גלים",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "נטעים",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "עשרת",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "פלמחים",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "שדמה",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "שדה עוזיהו",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "שתולים",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "תלמי יחיאל",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "תימורים",
    "category": "settlement",
    "region": "אזור אשדוד / גדרה / יבנה / רחובות"
  },
  {
    "name": "אביעזר",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "אשתאול",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "בקוע",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "בית ג׳מאל",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "בית זית",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "בית מאיר",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "בית נקופה",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "גבעת ישעיהו",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "גיזו",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "זכריה",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "טל שחר",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "יד השמונה",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "כסלון",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "לוזית",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "מבוא ביתר",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "מחסיה",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "מסילת ציון",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "מטע",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "נווה אילן",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "נס הרים",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "עגור",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "עמינדב",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "צובה",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "צרעה",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "רמת רזיאל",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "שורש",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "שואבה",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "שדות מיכה",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "תעוז",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "תרום",
    "category": "settlement",
    "region": "אזור בית שמש / מטה יהודה / מודיעין"
  },
  {
    "name": "אבו תלול",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "אום בטין",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "אל סייד",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "ביר הדאג׳",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "דריג׳את",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "כוחלה",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "מכחול",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "מולדה",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "עין בוקק",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "עין גדי",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "עין תמר",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "נאות הכיכר",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "נווה זוהר",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "ערערה בנגב",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  },
  {
    "name": "קסר א־סר",
    "category": "settlement",
    "region": "אזור ים המלח / ערד / דימונה"
  }
] as DeliveryLocation[]

export function normalizeHebrewLocation(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[״"]/g, '')
    .replace(/[׳']/g, '')
    .replace(/־/g, '-')
    .replace(/\s+/g, ' ')
}

export function getMatchingDeliveryLocations(query: string, limit = 20) {
  const normalizedQuery = normalizeHebrewLocation(query)

  if (!normalizedQuery) return DELIVERY_LOCATIONS.slice(0, limit)

  return DELIVERY_LOCATIONS
    .filter((location) =>
      normalizeHebrewLocation(location.name).includes(normalizedQuery)
    )
    .slice(0, limit)
}

export function isDeliveryLocationAllowed(input: string) {
  const normalizedInput = normalizeHebrewLocation(input)

  return DELIVERY_LOCATIONS.some((location) =>
    normalizedInput.includes(normalizeHebrewLocation(location.name))
  )
}

function levenshteinDistance(a: string, b: string) {
  if (a === b) return 0
  if (!a) return b.length
  if (!b) return a.length

  const previous = Array.from({ length: b.length + 1 }, (_, index) => index)
  for (let i = 0; i < a.length; i += 1) {
    let diagonal = previous[0]
    previous[0] = i + 1

    for (let j = 0; j < b.length; j += 1) {
      const temp = previous[j + 1]
      const insertion = previous[j + 1] + 1
      const deletion = previous[j] + 1
      const substitution = diagonal + (a[i] === b[j] ? 0 : 1)
      previous[j + 1] = Math.min(insertion, deletion, substitution)
      diagonal = temp
    }
  }

  return previous[b.length]
}

export function getBestDeliveryLocationMatch(query: string) {
  const normalizedQuery = normalizeHebrewLocation(query)
  if (!normalizedQuery) return null

  let bestLocation: DeliveryLocation | null = null
  let bestScore = 0

  for (const location of DELIVERY_LOCATIONS) {
    const normalizedName = normalizeHebrewLocation(location.name)
    let score = 0

    if (normalizedName === normalizedQuery) {
      score = 1
    } else if (
      normalizedName.startsWith(normalizedQuery) ||
      normalizedQuery.startsWith(normalizedName)
    ) {
      score = 0.95
    } else if (
      normalizedName.includes(normalizedQuery) ||
      normalizedQuery.includes(normalizedName)
    ) {
      score = 0.9
    } else {
      const distance = levenshteinDistance(normalizedQuery, normalizedName)
      const maxLength = Math.max(normalizedQuery.length, normalizedName.length)
      score = 1 - distance / maxLength
    }

    if (score > bestScore) {
      bestScore = score
      bestLocation = location
    }
  }

  return bestScore >= 0.72 ? bestLocation : null
}

export function getSuggestedDeliveryLocations(query: string, limit = 10) {
  const normalizedQuery = normalizeHebrewLocation(query)

  if (!normalizedQuery) return DELIVERY_LOCATIONS.slice(0, limit)

  return DELIVERY_LOCATIONS
    .map((location) => ({
      location,
      score: (() => {
        const normalizedName = normalizeHebrewLocation(location.name)
        if (normalizedName === normalizedQuery) return 1
        if (
          normalizedName.startsWith(normalizedQuery) ||
          normalizedQuery.startsWith(normalizedName)
        ) {
          return 0.95
        }
        if (
          normalizedName.includes(normalizedQuery) ||
          normalizedQuery.includes(normalizedName)
        ) {
          return 0.9
        }

        const distance = levenshteinDistance(normalizedQuery, normalizedName)
        const maxLength = Math.max(normalizedQuery.length, normalizedName.length)
        return 1 - distance / maxLength
      })(),
    }))
    .sort((a, b) => b.score - a.score)
    .filter(({ score }) => score >= 0.4)
    .slice(0, limit)
    .map(({ location }) => location)
}

export function autoCorrectDeliveryAddress(input: string) {
  const value = input.trim()
  if (!value) return input

  const match = value.match(/^([^,\/\-\n]+)(.*)$/)
  if (!match) return input

  const [_, leadingPart, rest] = match
  const bestLocation = getBestDeliveryLocationMatch(leadingPart)
  if (!bestLocation) return input

  const leadingNormalized = normalizeHebrewLocation(leadingPart)
  const bestNormalized = normalizeHebrewLocation(bestLocation.name)
  if (leadingNormalized === bestNormalized) return input

  return `${bestLocation.name}${rest}`.trim()
}

export function distanceKm(
  a: { lat: number; lng: number },
  b: { lat: number; lng: number },
) {
  const R = 6371
  const dLat = ((b.lat - a.lat) * Math.PI) / 180
  const dLng = ((b.lng - a.lng) * Math.PI) / 180
  const lat1 = (a.lat * Math.PI) / 180
  const lat2 = (b.lat * Math.PI) / 180

  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2

  return 2 * R * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x))
}

export function isInsideDeliveryRadius(location: { lat: number; lng: number }) {
  return distanceKm(DELIVERY_BASE, location) <= DELIVERY_BASE.radiusKm
}
