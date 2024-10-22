## 7. Arrays in JavaScript: ניהול רשימת המשימות

1. הוסף פונקציות מיון וסינון ל-script.js:

   ```javascript
   // פונקציה למיון משימות
   function sortTasks(sortBy = 'dueDate') {
     tasks.sort((a, b) => {
       if (sortBy === 'dueDate') {
         return a.dueDate - b.dueDate;
       } else if (sortBy === 'status') {
         return a.status.localeCompare(b.status);
       }
       // ניתן להוסיף אפשרויות מיון נוספות כאן
     });
     displayTasks();
   }

   // פונקציה לסינון משימות
   function filterTasks(status = 'all') {
     let filteredTasks;
     if (status === 'all') {
       filteredTasks = tasks;
     } else {
       filteredTasks = tasks.filter((task) => task.status === status);
     }
     displayTasks(filteredTasks);
   }
   ```

2. עדכן את index.html להוספת אפשרויות מיון וסינון:

   ```html
   <section id="task-controls">
     <select id="sort-select">
       <option value="dueDate">מיין לפי תאריך</option>
       <option value="status">מיין לפי סטטוס</option>
     </select>
     <select id="filter-select">
       <option value="all">הכל</option>
       <option value="active">פעילות</option>
       <option value="completed">הושלמו</option>
     </select>
   </section>
   ```

3. הוסף אירועים למיון וסינון:

   ```javascript
   document
     .getElementById('sort-select')
     .addEventListener('change', function () {
       sortTasks(this.value);
     });

   document
     .getElementById('filter-select')
     .addEventListener('change', function () {
       filterTasks(this.value);
     });
   ```

4. הוסף תמיכה בתגיות:

   ```javascript
   // עדכון פונקציית addTask
   function addTask(title, description, dueDate, tags = []) {
     const task = {
       id: generateUniqueId(),
       title: title,
       description: description,
       dueDate: new Date(dueDate),
       status: 'active',
       tags: tags,
     };
     tasks.push(task);
     saveTasks();
     displayTasks();
   }

   // הוספת שדה תגיות לטופס ב-HTML
   // <input type="text" id="task-tags" placeholder="תגיות (מופרדות בפסיקים)">

   // עדכון אירוע הוספת משימה
   document
     .getElementById('add-task-form')
     .addEventListener('submit', function (e) {
       e.preventDefault();
       const title = document.getElementById('task-title').value.trim();
       const description = document
         .getElementById('task-description')
         .value.trim();
       const dueDate = document.getElementById('task-date').value;
       const tags = document
         .getElementById('task-tags')
         .value.split(',')
         .map((tag) => tag.trim());

       // ... (הוסף בדיקות תקינות כפי שהיו קודם)

       addTask(title, description, dueDate, tags);
       this.reset();
     });

   // עדכון פונקציית displayTasks להצגת תגיות
   function displayTasks(tasksToDisplay = tasks) {
     // ... (קוד קודם)
     tasksToDisplay.forEach((task) => {
       // ... (קוד קודם)
       const tagsHtml = task.tags
         .map((tag) => `<span class="tag">${tag}</span>`)
         .join('');
       li.innerHTML += `<div class="tags">${tagsHtml}</div>`;
       // ... (קוד קודם)
     });
   }
   ```

5. הוסף פונקציונליות ייצוא ויבוא:

   ```javascript
   function exportTasks() {
     const dataStr = JSON.stringify(tasks);
     const dataUri =
       'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
     const exportFileDefaultName = 'tasks.json';

     const linkElement = document.createElement('a');
     linkElement.setAttribute('href', dataUri);
     linkElement.setAttribute('download', exportFileDefaultName);
     linkElement.click();
   }

   function importTasks(event) {
     const file = event.target.files[0];
     const reader = new FileReader();
     reader.onload = function (e) {
       const importedTasks = JSON.parse(e.target.result);
       tasks = importedTasks.map((task) => ({
         ...task,
         dueDate: new Date(task.dueDate),
       }));
       saveTasks();
       displayTasks();
     };
     reader.readAsText(file);
   }

   // הוסף כפתורי ייצוא ויבוא ל-HTML
   // <button id="export-button">ייצא משימות</button>
   // <input type="file" id="import-input" accept=".json">

   document
     .getElementById('export-button')
     .addEventListener('click', exportTasks);
   document
     .getElementById('import-input')
     .addEventListener('change', importTasks);
   ```

6. בצע commit ו-push לשינויים

## 8. Array Methods: שיפור פונקציונליות המשימות

1. עדכן את פונקציית displayTasks לשימוש ב-map:

   ```javascript
   function displayTasks(tasksToDisplay = tasks) {
     const taskList = document.getElementById('tasks');
     const searchQuery = document.getElementById('search-input').value;

     const taskElements = tasksToDisplay.map((task) => {
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
               <div class="tags">${task.tags
                 .map((tag) => `<span class="tag">${tag}</span>`)
                 .join('')}</div>
           `;
       return li;
     });

     taskList.innerHTML = '';
     taskElements.forEach((element) => taskList.appendChild(element));
   }
   ```

2. שפר את פונקציית הסינון:

   ```javascript
   function filterTasks(status = 'all') {
     const filteredTasks =
       status === 'all'
         ? tasks
         : tasks.filter((task) => task.status === status);
     displayTasks(filteredTasks);
   }
   ```

3. הוסף פונקציה לחישוב סטטיסטיקות:

   ```javascript
   function calculateStats() {
     const totalTasks = tasks.length;
     const completedTasks = tasks.filter(
       (task) => task.status === 'completed'
     ).length;
     const activeTasks = totalTasks - completedTasks;
     const completionRate =
       totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;

     return {
       total: totalTasks,
       completed: completedTasks,
       active: activeTasks,
       completionRate: completionRate.toFixed(2),
     };
   }

   function displayStats() {
     const stats = calculateStats();
     const statsElement = document.getElementById('task-stats');
     statsElement.innerHTML = `
           <p>סה"כ משימות: ${stats.total}</p>
           <p>הושלמו: ${stats.completed}</p>
           <p>פעילות: ${stats.active}</p>
           <p>אחוז השלמה: ${stats.completionRate}%</p>
       `;
   }

   // הוסף אלמנט ל-HTML עבור הצגת הסטטיסטיקות
   // <div id="task-stats"></div>

   // עדכן את displayTasks לקרוא ל-displayStats
   function displayTasks(tasksToDisplay = tasks) {
     // ... (קוד קיים)
     displayStats();
   }
   ```

4. הוסף פונקציית חיפוש מתקדמת:

   ```javascript
   function advancedSearch(query, filters = {}) {
       return tasks.filter(task => {
           const matchesQuery = task.title.includes(query) || task.description.includes(query);
           const matchesStatus = !filters.status || task.status === filters.status;
           const matchesTag = !filters.tag || task.tags.includes(filters.tag);
           const matchesDate = !filters.date || task.dueDate.toDateString() === new Date(filters.date).toDateString();

           return matchesQuery && matchesStatus && matchesTag && matchesDate;
       });
   }

   // הוסף טופס חיפוש מתקדם ל-HTML
   // <form id="advanced-search-form">
   //     <input type="text" id="advanced-search-query" placeholder="חיפוש...">
   //     <select id="advanced-search-status">
   //         <option value="">כל הסטטוסים</option>
   //         <option value="active">פעיל</option>
   //         <option value="completed">הושלם</option>
   //     </select>
   //     <input type="text" id="advanced-search-tag" placeholder="תגית">
   //     <input type="date" id="advanced-search-date">
   //     <button type="submit">חפש</button>
   // </form>

   document.getElementById('advanced-search-form').addEventListener('submit', function(e) {
       e.preventDefault();
       const query = document.getElementById('advanced-search-query').value;
       const status = document.getElementById('advanced-search-status').value;
       const tag = document.getElementById('advanced-search-tag').value;
       const date = document.getElementById('advanced-search-date').value;

       const filteredTasks = advanc
   ```
