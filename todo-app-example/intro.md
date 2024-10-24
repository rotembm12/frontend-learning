# בניית אפליקציית ניהול משימות - פרויקט קורס Frontend

לאורך הקורס, נבנה אפליקציית ניהול משימות (Todo App) מתקדמת. כל שיעור יתמקד בהוספת תכונות חדשות או בשיפור התכונות הקיימות.

## 1. GitHub Basics: הקמת הפרויקט

1. צור מאגר GitHub חדש בשם "advanced-todo-app"
2. אתחל את הפרויקט עם קובץ README.md המתאר את מטרת האפליקציה
3. צור ענף חדש בשם "development"
4. הוסף קבצים בסיסיים: index.html, styles.css, ו-script.js
5. בצע commit ו-push לענף ה-development
6. צור pull request למיזוג ה-development לתוך ה-main

## 2. Basic and Advanced HTML Structure: יצירת מבנה בסיסי

1. ב-index.html, צור מבנה HTML5 בסיסי עם header, main, ו-footer
2. הוסף טופס להוספת משימה חדשה עם שדות עבור כותרת, תיאור, ותאריך יעד
3. צור רשימה (ul) שבה יוצגו המשימות
4. הוסף תגיות סמנטיות מתאימות (nav, article, section וכו')
5. הוסף תגיות meta עבור SEO ותיאור האפליקציה

## 3. Basic and Advanced CSS Styling: עיצוב האפליקציה

1. עצב את ה-header עם לוגו ותפריט ניווט באמצעות flexbox
2. צור גריד ב-main section להצגת המשימות
3. עצב את טופס הוספת המשימה עם CSS Grid
4. הגדר משתני CSS לצבעים, גופנים, ומרווחים
5. צור אנימציית hover לכפתורים ולפריטי המשימה
6. הפוך את העיצוב לרספונסיבי עם לפחות 2 נקודות שבירה

## 4. JavaScript Basics: הוספת אינטראקטיביות בסיסית

1. צור מערך לאחסון המשימות
2. כתוב פונקציה להוספת משימה חדשה למערך
3. כתוב פונקציה להצגת כל המשימות ב-DOM
4. הוסף אירוע submit לטופס שיפעיל את פונקציית הוספת המשימה
5. הוסף יכולת לסמן משימה כהושלמה (שינוי סטטוס)

## 5. Data Types in JavaScript: שיפור מבנה הנתונים

1. שנה את מבנה המשימה לאובייקט עם מאפיינים (id, title, description, dueDate, status)
2. כתוב פונקציה ליצירת ID ייחודי לכל משימה
3. המר את תאריך היעד ל-Date object בעת יצירת המשימה
4. הוסף ולידציה לשדות הקלט (לדוגמה, וודא שהתאריך עתידי)
5. שמור את המשימות ב-localStorage וטען אותן בעת טעינת הדף

## 6. Advanced String Manipulation: שיפור הצגת הטקסט

1. הוסף פונקציה לקיצור תיאור המשימה אם הוא ארוך מדי
2. צור פונקציה להמרת תאריך ל-string בפורמט נוח לקריאה
3. הוסף חיפוש טקסטואלי במשימות (כולל שימוש ב-RegEx)
4. הוסף אפשרות לעריכת כותרת ותיאור המשימה עם שימוש ב-contenteditable
5. יישם הדגשת מילות מפתח בתיאור המשימה

## 7. Arrays in JavaScript: ניהול רשימת המשימות

1. מיין את המשימות לפי תאריך יעד
2. הוסף אפשרות לסינון משימות (הכל, הושלמו, לא הושלמו)
3. אפשר גרירה ושחרור (drag and drop) לשינוי סדר המשימות
4. הוסף תכונה של תגיות למשימות וסינון לפי תגיות
5. יישם אפשרות לייצוא ויבוא של רשימת המשימות כ-JSON

## 8. Array Methods: שיפור פונקציונליות המשימות

1. השתמש ב-map() להצגת המשימות ב-DOM
2. השתמש ב-filter() ליישום הסינון שהוספנו קודם
3. השתמש ב-reduce() לחישוב סטטיסטיקות (למשל, אחוז המשימות שהושלמו)
4. יישם חיפוש מתקדם במשימות עם שימוש ב-find() או filter()
5. השתמש ב-sort() למיון משימות לפי קריטריונים שונים (תאריך, סטטוס וכו')

## 9. Objects in JavaScript: הרחבת פונקציונליות המשימות

1. הוסף מתודות לאובייקט המשימה (כמו toggleStatus(), updateDetails())
2. צור אובייקט "פרויקט" שיכיל מספר רשימות משימות
3. הוסף אפשרות ליצירת תתי-משימות לכל משימה
4. יישם מערכת תזכורות עם שימוש ב-Date object
5. צור ממשק לניהול הגדרות המשתמש (למשל, תצוגת ברירת מחדל, צבע נושא)

## 10. Functions in JavaScript: שיפור הלוגיקה של האפליקציה

1. שכתב את הקוד לשימוש בפונקציות חץ היכן שמתאים
2. צור פונקציית higher-order לטיפול בפעולות על משימות (עריכה, מחיקה, שינוי סטטוס)
3. יישם מערכת undo/redo עם שימוש בפונקציות וסגירות
4. הוסף אפשרות לתזמון פעולות אוטומטיות (למשל, מחיקת משימות ישנות) עם setTimeout
5. צור מחולל (generator) עבור ID-ים של משימות

## 11. Scope and Closure: ארגון מחדש של הקוד

1. ארגן את הקוד במודולים עם שימוש ב-IIFE או ES6 modules
2. צור פונקציית factory ליצירת משימות
3. יישם מערכת של מצבים (states) לאפליקציה עם שימוש בסגירות
4. הוסף מערכת לוגים פנימית עם שימוש בסגירות
5. צור ממשק לפלאגינים שמאפשר הרחבת פונקציונליות האפליקציה

## 12. Advanced DOM Manipulation: שיפור ממשק המשתמש

1. החלף את הרשימה הסטטית ב-DOM וירטואלי פשוט
2. הוסף אנימציות כשמשימות נוספות, מושלמות או נמחקות
3. יישם "אינסוף גלילה" (infinite scroll) או דפדוף (pagination) למשימות
4. צור תצוגת לוח (board view) למשימות בסגנון קנבן
5. הוסף אפשרות לתצוגת התראות (toast notifications) עבור פעולות שונות

## 13. Advanced Responsive Design: שיפור חווית המשתמש במובייל

1. הפוך את האפליקציה ל-Progressive Web App (PWA)
2. יישם תצוגה שונה למובייל, כולל תפריט המבורגר ומסך מותאם לנגיעה
3. הוסף תמיכה במחוות מגע (swipe) לפעולות על משימות
4. אופטימיזציה לביצועים במכשירים חלשים יותר
5. הוסף אפשרות לשיתוף משימות באמצעות Web Share API

## 14. Accessibility and ARIA: הפיכת האפליקציה לנגישה

1. הוסף תכונות ARIA מתאימות לכל הרכיבים האינטראקטיביים
2. וודא שכל הפונקציונליות זמינה באמצעות המקלדת
3. הוסף קיצורי מקלדת לפעולות נפוצות
4. בדוק ושפר את ניגודיות הצבעים עבור ראות טובה יותר
5. הוסף מצב "גבוה ניגודיות" ואפשרות להגדלת גופן

## 15. Performance and Optimization: ייעול האפליקציה

1. יישם טעינה מעוכבת (lazy loading) של משימות ישנות
2. אופטימיזציה של הרינדור עם שימוש ב-requestAnimationFrame
3. הוסף service worker לטעינה מהירה יותר ועבודה במצב לא מקוון
4. יישם מטמון (caching) חכם עבור נתוני משימות
5. בצע ניתוח ביצועים ואופטימיזציה נוספת בהתאם לתוצאות
