# בניית אפליקציית ניהול משימות מתקדמת - הנחיות מפורטות

## 1. GitHub Basics: הקמת הפרויקט

1. צור מאגר GitHub חדש:
   - שם: "advanced-todo-app"
   - הוסף README.md, .gitignore (בחר Node), ורישיון MIT
2. clone את המאגר למחשב המקומי:
   ```
   git clone https://github.com/[username]/advanced-todo-app.git
   cd advanced-todo-app
   ```
3. צור ענף חדש:
   ```
   git checkout -b development
   ```
4. צור את הקבצים הבאים:
   - index.html:
     ```html
     <!DOCTYPE html>
     <html lang="he" dir="rtl">
       <head>
         <meta charset="UTF-8" />
         <meta
           name="viewport"
           content="width=device-width, initial-scale=1.0"
         />
         <title>אפליקציית ניהול משימות</title>
         <link rel="stylesheet" href="styles.css" />
       </head>
       <body>
         <h1>אפליקציית ניהול משימות</h1>
         <script src="script.js"></script>
       </body>
     </html>
     ```
   - styles.css (השאר ריק בשלב זה)
   - script.js (השאר ריק בשלב זה)
5. העלה את השינויים:
   ```
   git add .
   git commit -m "Initial project setup"
   git push -u origin development
   ```
6. ב-GitHub, צור pull request מ-development ל-main
