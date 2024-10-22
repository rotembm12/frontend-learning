## 4. JavaScript Basics: הוספת אינטראקטיביות בסיסית

1. עדכן את script.js:

   ```javascript
   // מערך לאחסון המשימות
   let tasks = [];

   // פונקציה להוספת משימה חדשה
   function addTask(title, description, dueDate) {
     const task = {
       id: Date.now(),
       title: title,
       description: description,
       dueDate: dueDate,
       completed: false,
     };
     tasks.push(task);
     displayTasks();
   }

   // פונקציה להצגת המשימות
   function displayTasks() {
     const taskList = document.getElementById('tasks');
     taskList.innerHTML = '';
     tasks.forEach((task) => {
       const li = document.createElement('li');
       li.innerHTML = `
               <h3>${task.title}</h3>
               <p>${task.description}</p>
               <p>תאריך יעד: ${task.dueDate}</p>
               <button onclick="toggleTaskStatus(${task.id})">${
         task.completed ? 'בטל סימון' : 'סמן כהושלם'
       }</button>
           `;
       taskList.appendChild(li);
     });
   }

   // פונקציה לשינוי סטטוס המשימה
   function toggleTaskStatus(taskId) {
     const task = tasks.find((t) => t.id === taskId);
     if (task) {
       task.completed = !task.completed;
       displayTasks();
     }
   }

   // הוספת אירוע submit לטופס
   document
     .getElementById('add-task-form')
     .addEventListener('submit', function (e) {
       e.preventDefault();
       const title = document.getElementById('task-title').value;
       const description = document.getElementById('task-description').value;
       const dueDate = document.getElementById('task-date').value;
       addTask(title, description, dueDate);
       this.reset();
     });

   // הצגת המשימות בטעינת הדף
   displayTasks();
   ```

2. בצע commit ו-push לשינויים
