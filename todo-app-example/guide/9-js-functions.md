## 10. Functions in JavaScript: שיפור הלוגיקה של האפליקציה

1. שכתב את הקוד לשימוש בפונקציות חץ:

   ```javascript
   const addTask = (
     title,
     description,
     dueDate,
     tags = [],
     reminder = null
   ) => {
     const task = createTask(title, description, dueDate, tags);
     if (reminder) {
       task.setReminder(reminder);
     }
     Project.addTaskToList(document.getElementById('list-select').value, task);
     saveTasks();
     displayTasks();
   };

   const displayTasks = () => {
     const selectedList = document.getElementById('list-select').value;
     const tasksToDisplay = Project.getTasksFromList(selectedList);
     // ... שאר הקוד
   };

   // עדכן פונקציות נוספות באופן דומה
   ```

2. צור פונקציית higher-order לטיפול בפעולות על משימות:

   ```javascript
   const taskAction = (actionType) => (taskId) => {
     const task = tasks.find((t) => t.id === taskId);
     if (task) {
       switch (actionType) {
         case 'toggle':
           task.toggleStatus();
           break;
         case 'edit':
           editTask(task);
           break;
         case 'delete':
           deleteTask(task);
           break;
         // ניתן להוסיף פעולות נוספות כאן
       }
       saveTasks();
       displayTasks();
     }
   };

   const toggleTaskStatus = taskAction('toggle');
   const editTask = taskAction('edit');
   const deleteTask = taskAction('delete');

   // עדכן את ה-event listeners בהתאם
   ```

3. יישם מערכת undo/redo:

   ```javascript
   const TaskHistory = {
     past: [],
     future: [],
     saveState() {
       this.past.push(JSON.stringify(tasks));
       this.future = [];
     },
     undo() {
       if (this.past.length > 0) {
         const currentState = JSON.stringify(tasks);
         this.future.push(currentState);
         const previousState = this.past.pop();
         tasks = JSON.parse(previousState);
         displayTasks();
       }
     },
     redo() {
       if (this.future.length > 0) {
         const currentState = JSON.stringify(tasks);
         this.past.push(currentState);
         const nextState = this.future.pop();
         tasks = JSON.parse(nextState);
         displayTasks();
       }
     },
   };

   // הוסף כפתורי Undo ו-Redo ל-HTML
   // <button id="undo-button">בטל</button>
   // <button id="redo-button">בצע שוב</button>

   document
     .getElementById('undo-button')
     .addEventListener('click', () => TaskHistory.undo());
   document
     .getElementById('redo-button')
     .addEventListener('click', () => TaskHistory.redo());

   // עדכן את הפונקציות שמשנות את המשימות כדי לשמור מצב
   const saveTasksAndHistory = () => {
     TaskHistory.saveState();
     saveTasks();
   };
   ```

4. הוסף אפשרות לתזמון פעולות אוטומטיות:

   ```javascript
   const scheduleAutomaticAction = (action, delay) => {
     setTimeout(action, delay);
   };

   const deleteOldTasks = () => {
     const oneMonthAgo = new Date();
     oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
     tasks = tasks.filter(
       (task) => task.dueDate > oneMonthAgo || task.status !== 'completed'
     );
     saveTasksAndHistory();
     displayTasks();
   };

   // תזמן מחיקת משימות ישנות כל 24 שעות
   scheduleAutomaticAction(deleteOldTasks, 24 * 60 * 60 * 1000);
   ```

5. צור מחולל (generator) עבור ID-ים של משימות:

   ```javascript
   function* idGenerator() {
     let id = 1;
     while (true) {
       yield `task_${id}`;
       id++;
     }
   }

   const generateTaskId = idGenerator();

   // עדכן את פונקציית createTask
   const createTask = (title, description, dueDate, tags = []) => {
     return {
       id: generateTaskId.next().value,
       // ... שאר המאפיינים והמתודות
     };
   };
   ```

6. בצע commit ו-push לשינויים
