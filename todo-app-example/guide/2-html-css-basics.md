## 2. Basic and Advanced HTML Structure: יצירת מבנה בסיסי

1. עדכן את index.html:
   ```html
   <!DOCTYPE html>
   <html lang="he" dir="rtl">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta name="description" content="אפליקציית ניהול משימות מתקדמת" />
       <title>אפליקציית ניהול משימות</title>
       <link rel="stylesheet" href="styles.css" />
     </head>
     <body>
       <header>
         <h1>אפליקציית ניהול משימות</h1>
         <nav>
           <ul>
             <li><a href="#" id="all-tasks">כל המשימות</a></li>
             <li><a href="#" id="active-tasks">משימות פעילות</a></li>
             <li><a href="#" id="completed-tasks">משימות שהושלמו</a></li>
           </ul>
         </nav>
       </header>
       <main>
         <section id="task-form">
           <h2>הוספת משימה חדשה</h2>
           <form id="add-task-form">
             <label for="task-title">כותרת:</label>
             <input type="text" id="task-title" required />

             <label for="task-description">תיאור:</label>
             <textarea id="task-description"></textarea>

             <label for="task-date">תאריך יעד:</label>
             <input type="date" id="task-date" required />

             <button type="submit">הוסף משימה</button>
           </form>
         </section>
         <section id="task-list">
           <h2>רשימת משימות</h2>
           <ul id="tasks"></ul>
         </section>
       </main>
       <footer>
         <p>&copy; 2024 אפליקציית ניהול משימות</p>
       </footer>
       <script src="script.js"></script>
     </body>
   </html>
   ```
2. בצע commit ו-push לשינויים
