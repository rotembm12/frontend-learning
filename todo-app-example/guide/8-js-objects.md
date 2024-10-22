## 9. Objects in JavaScript: הרחבת פונקציונליות המשימות

1. עדכן את מבנה המשימה להכיל מתודות:

   ```javascript
   function createTask(title, description, dueDate, tags = []) {
     return {
       id: generateUniqueId(),
       title,
       description,
       dueDate: new Date(dueDate),
       status: 'active',
       tags,
       toggleStatus() {
         this.status = this.status === 'active' ? 'completed' : 'active';
       },
       updateDetails(newTitle, newDescription, newDueDate, newTags) {
         this.title = newTitle;
         this.description = newDescription;
         this.dueDate = new Date(newDueDate);
         this.tags = newTags;
       },
     };
   }

   // עדכן את פונקציית addTask
   function addTask(title, description, dueDate, tags = []) {
     const task = createTask(title, description, dueDate, tags);
     tasks.push(task);
     saveTasks();
     displayTasks();
   }
   ```

2. צור אובייקט "פרויקט" שיכיל מספר רשימות משימות:

   ```javascript
   const Project = {
     lists: {},
     createList(name) {
       this.lists[name] = [];
     },
     addTaskToList(listName, task) {
       if (!this.lists[listName]) {
         this.createList(listName);
       }
       this.lists[listName].push(task);
     },
     getTasksFromList(listName) {
       return this.lists[listName] || [];
     },
   };

   // עדכן את ה-HTML כדי לכלול בחירת רשימה
   // <select id="list-select">
   //     <option value="default">רשימה ברירת מחדל</option>
   // </select>

   // עדכן את פונקציית addTask
   function addTask(title, description, dueDate, tags = []) {
     const task = createTask(title, description, dueDate, tags);
     const selectedList = document.getElementById('list-select').value;
     Project.addTaskToList(selectedList, task);
     saveTasks();
     displayTasks();
   }

   // עדכן את פונקציית displayTasks
   function displayTasks() {
     const selectedList = document.getElementById('list-select').value;
     const tasksToDisplay = Project.getTasksFromList(selectedList);
     // ... המשך הקוד כפי שהיה
   }
   ```

3. הוסף אפשרות ליצירת תתי-משימות:

   ```javascript
   function createTask(title, description, dueDate, tags = []) {
     return {
       // ... שאר המאפיינים
       subTasks: [],
       addSubTask(subTaskTitle) {
         this.subTasks.push({ title: subTaskTitle, completed: false });
       },
       toggleSubTaskStatus(index) {
         if (this.subTasks[index]) {
           this.subTasks[index].completed = !this.subTasks[index].completed;
         }
       },
     };
   }

   // עדכן את פונקציית displayTasks כדי להציג תתי-משימות
   function displayTasks() {
     // ... קוד קיים
     tasksToDisplay.forEach((task) => {
       // ... קוד קיים
       const subTasksHtml = task.subTasks
         .map(
           (subTask, index) => `
               <li>
                   <input type="checkbox" ${subTask.completed ? 'checked' : ''}
                          onchange="toggleSubTaskStatus('${
                            task.id
                          }', ${index})">
                   ${subTask.title}
               </li>
           `
         )
         .join('');
       li.innerHTML += `<ul class="sub-tasks">${subTasksHtml}</ul>`;
       // ... קוד קיים
     });
   }

   function toggleSubTaskStatus(taskId, subTaskIndex) {
     const task = tasks.find((t) => t.id === taskId);
     if (task) {
       task.toggleSubTaskStatus(subTaskIndex);
       saveTasks();
       displayTasks();
     }
   }
   ```

4. יישם מערכת תזכורות:

   ```javascript
   function createTask(title, description, dueDate, tags = []) {
     return {
       // ... שאר המאפיינים
       reminder: null,
       setReminder(date) {
         this.reminder = new Date(date);
         this.scheduleReminder();
       },
       scheduleReminder() {
         if (this.reminder && this.reminder > new Date()) {
           const timeUntilReminder =
             this.reminder.getTime() - new Date().getTime();
           setTimeout(() => {
             alert(`תזכורת: ${this.title} צריך להיות מושלם!`);
           }, timeUntilReminder);
         }
       },
     };
   }

   // הוסף שדה תזכורת לטופס המשימה
   // <input type="datetime-local" id="task-reminder">

   // עדכן את פונקציית addTask
   function addTask(title, description, dueDate, tags = [], reminder = null) {
     const task = createTask(title, description, dueDate, tags);
     if (reminder) {
       task.setReminder(reminder);
     }
     // ... שאר הקוד
   }
   ```

5. צור ממשק לניהול הגדרות המשתמש:

   ```javascript
   const UserSettings = {
     theme: 'light',
     defaultView: 'list',
     setTheme(theme) {
       this.theme = theme;
       document.body.className = `theme-${theme}`;
       localStorage.setItem('userSettings', JSON.stringify(this));
     },
     setDefaultView(view) {
       this.defaultView = view;
       localStorage.setItem('userSettings', JSON.stringify(this));
     },
     load() {
       const savedSettings = localStorage.getItem('userSettings');
       if (savedSettings) {
         const parsedSettings = JSON.parse(savedSettings);
         Object.assign(this, parsedSettings);
         this.applySettings();
       }
     },
     applySettings() {
       document.body.className = `theme-${this.theme}`;
       // יישם הגדרות נוספות כאן
     },
   };

   // הוסף טופס הגדרות ל-HTML
   // <form id="settings-form">
   //     <select id="theme-select">
   //         <option value="light">בהיר</option>
   //         <option value="dark">כהה</option>
   //     </select>
   //     <select id="view-select">
   //         <option value="list">רשימה</option>
   //         <option value="grid">רשת</option>
   //     </select>
   //     <button type="submit">שמור הגדרות</button>
   // </form>

   document
     .getElementById('settings-form')
     .addEventListener('submit', function (e) {
       e.preventDefault();
       const theme = document.getElementById('theme-select').value;
       const view = document.getElementById('view-select').value;
       UserSettings.setTheme(theme);
       UserSettings.setDefaultView(view);
       alert('ההגדרות נשמרו בהצלחה!');
     });

   // טען את ההגדרות בטעינת הדף
   UserSettings.load();
   ```

6. בצע commit ו-push לשינויים
