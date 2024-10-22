## 11. Scope and Closure: ארגון מחדש של הקוד

1. ארגן את הקוד במודולים עם שימוש ב-IIFE:

   ```javascript
   const TodoApp = (function () {
     // פרטי (private) משתנים ופונקציות
     let tasks = [];

     const createTask = (title, description, dueDate, tags = []) => {
       // ... קוד יצירת משימה
     };

     const displayTasks = () => {
       // ... קוד הצגת משימות
     };

     // ציבורי (public) API
     return {
       addTask: (title, description, dueDate, tags = []) => {
         const task = createTask(title, description, dueDate, tags);
         tasks.push(task);
         displayTasks();
       },
       deleteTask: (taskId) => {
         tasks = tasks.filter((task) => task.id !== taskId);
         displayTasks();
       },
       // ... פונקציות ציבוריות נוספות
     };
   })();

   // שימוש:
   TodoApp.addTask('משימה חדשה', 'תיאור המשימה', '2023-12-31');
   ```

2. צור פונקציית factory ליצירת משימות:

   ```javascript
   const TaskFactory = {
     createSimpleTask: (title, dueDate) => {
       return createTask(title, '', dueDate);
     },
     createDetailedTask: (title, description, dueDate, tags = []) => {
       return createTask(title, description, dueDate, tags);
     },
     createRecurringTask: (title, description, recurringPattern) => {
       const task = createTask(title, description, new Date());
       task.recurring = true;
       task.recurringPattern = recurringPattern;
       return task;
     },
   };

   // שימוש:
   const simpleTask = TaskFactory.createSimpleTask('קניות', '2023-12-31');
   const detailedTask = TaskFactory.createDetailedTask(
     'פרויקט',
     'לסיים את הפרויקט',
     '2023-12-31',
     ['עבודה']
   );
   const recurringTask = TaskFactory.createRecurringTask(
     'פגישת צוות',
     'פגישה שבועית',
     'weekly'
   );
   ```

3. יישם מערכת של מצבים (states)
