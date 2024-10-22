## 5. Data Types in JavaScript: שיפור מבנה הנתונים

1. עדכן את script.js:

   ```javascript
   // פונקציה ליצירת ID ייחודי
   function generateUniqueId() {
     return Date.now().toString(36) + Math.random().toString(36).substr(2);
   }

   // פונקציה להוספת משימה חדשה
   function addTask(title, description, dueDate) {
     const task = {
       id: generateUniqueId(),
       title: title,
       description: description,
       dueDate: new Date(dueDate),
       status: 'active',
     };
     tasks.push(task);
     saveTasks();
     displayTasks();
   }

   // פונקציה לשמירת המשימות ב-localStorage
   function saveTasks() {
     localStorage.setItem('tasks', JSON.stringify(tasks));
   }

   // פונקציה לטעינת המשימות מ-localStorage
   function loadTasks() {
     const storedTasks = localStorage.getItem('tasks');
     if (storedTasks) {
       tasks = JSON.parse(storedTasks);
       tasks.forEach((task) => {
         task.dueDate = new Date(task.dueDate);
       });
     }
   }

   // עדכון פונקציית displayTasks
   function displayTasks() {
     const taskList = document.getElementById('tasks');
     taskList.innerHTML = '';
     tasks.forEach((task) => {
       const li = document.createElement('li');
       li.innerHTML = `
               <h3>${task.title}</h3>
               <p>${task.description}</p>
               <p>תאריך יעד: ${task.dueDate.toLocaleDateString()}</p>
               <p>סטטוס: ${task.status}</p>
               <button onclick="toggleTaskStatus('${task.id}')">
                   ${task.status === 'completed' ? 'סמן כפעיל' : 'סמן כהושלם'}
               </button>
           `;
       taskList.appendChild(li);
     });
   }

   // עדכון פונקציית toggleTaskStatus
   function toggleTaskStatus(taskId) {
     const task = tasks.find((t) => t.id === taskId);
     if (task) {
       task.status = task.status === 'completed' ? 'active' : 'completed';
       saveTasks();
       displayTasks();
     }
   }

   // הוספת ולידציה לטופס
   document
     .getElementById('add-task-form')
     .addEventListener('submit', function (e) {
       e.preventDefault();
       const title = document.getElementById('task-title').value.trim();
       const description = document
         .getElementById('task-description')
         .value.trim();
       const dueDate = document.getElementById('task-date').value;

       if (!title || !dueDate) {
         alert('נא למלא את כל השדות החובה');
         return;
       }

       const today = new Date();
       today.setHours(0, 0, 0, 0);
       if (new Date(dueDate) < today) {
         alert('תאריך היעד חייב להיות עתידי');
         return;
       }

       addTask(title, description, dueDate);
       this.reset();
     });

   // טעינת המשימות בטעינת הדף
   loadTasks();
   displayTasks();
   ```

2. בצע commit ו-push לשינויים
