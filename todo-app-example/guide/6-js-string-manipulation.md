## 6. Advanced String Manipulation: שיפור הצגת הטקסט

1. עדכן את index.html להוספת שדה חיפוש:

   ```html
   <section id="task-controls">
     <input type="text" id="search-input" placeholder="חפש משימות..." />
     <button id="search-button">חפש</button>
   </section>
   ```

2. הוסף את הפונקציות הבאות ל-script.js:

   ```javascript
   // פונקציה לקיצור תיאור המשימה
   function truncateDescription(description, maxLength = 100) {
     if (description.length <= maxLength) return description;
     return description.substr(0, maxLength) + '...';
   }

   // פונקציה להמרת תאריך לפורמט קריא
   function formatDate(date) {
     const options = { year: 'numeric', month: 'long', day: 'numeric' };
     return date.toLocaleDateString('he-IL', options);
   }

   // פונקציה לחיפוש במשימות
   function searchTasks(query) {
     const regex = new RegExp(query, 'i');
     return tasks.filter(
       (task) => regex.test(task.title) || regex.test(task.description)
     );
   }

   // פונקציה להדגשת מילות חיפוש
   function highlightText(text, query) {
     if (!query) return text;
     const regex = new RegExp(`(${query})`, 'gi');
     return text.replace(regex, '<mark>$1</mark>');
   }

   // עדכון פונקציית displayTasks
   function displayTasks(tasksToDisplay = tasks) {
     const taskList = document.getElementById('tasks');
     taskList.innerHTML = '';
     const searchQuery = document.getElementById('search-input').value;

     tasksToDisplay.forEach((task) => {
       const li = document.createElement('li');
       li.innerHTML = `
               <h3>${highlightText(task.title, searchQuery)}</h3>
               <p>${highlightText(
                 truncateDescription(task.description),
                 searchQuery
               )}</p>
               <p>תאריך יעד: ${formatDate(task.dueDate)}</p>
               <p>סטטוס: ${task.status}</p>
               <button onclick="toggleTaskStatus('${task.id}')">
                   ${task.status === 'completed' ? 'סמן כפעיל' : 'סמן כהושלם'}
               </button>
               <button onclick="editTask('${task.id}')">ערוך</button>
           `;
       taskList.appendChild(li);
     });
   }

   // הוספת אירוע חיפוש
   document
     .getElementById('search-button')
     .addEventListener('click', function () {
       const query = document.getElementById('search-input').value;
       const filteredTasks = searchTasks(query);
       displayTasks(filteredTasks);
     });
   ```

3. הוסף פונקציונליות עריכה:

   ```javascript
   function editTask(taskId) {
     const task = tasks.find((t) => t.id === taskId);
     if (task) {
       document.getElementById('task-title').value = task.title;
       document.getElementById('task-description').value = task.description;
       document.getElementById('task-date').value = task.dueDate
         .toISOString()
         .split('T')[0];

       // שינוי כפתור ההוספה לכפתור עדכון
       const submitButton = document.querySelector(
         '#add-task-form button[type="submit"]'
       );
       submitButton.textContent = 'עדכן משימה';
       submitButton.onclick = function (e) {
         e.preventDefault();
         task.title = document.getElementById('task-title').value;
         task.description = document.getElementById('task-description').value;
         task.dueDate = new Date(document.getElementById('task-date').value);
         saveTasks();
         displayTasks();

         // איפוס הטופס
         document.getElementById('add-task-form').reset();
         submitButton.textContent = 'הוסף משימה';
         submitButton.onclick = null;
       };
     }
   }
   ```

4. בצע commit ו-push לשינויים
