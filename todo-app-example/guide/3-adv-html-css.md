## 3. Basic and Advanced CSS Styling: עיצוב האפליקציה

1. עדכן את styles.css:

   ```css
   :root {
     --primary-color: #3498db;
     --secondary-color: #2ecc71;
     --background-color: #ecf0f1;
     --text-color: #2c3e50;
     --header-height: 60px;
   }

   body {
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
     background-color: var(--background-color);
     color: var(--text-color);
   }

   header {
     background-color: var(--primary-color);
     color: white;
     padding: 1rem;
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     height: var(--header-height);
     display: flex;
     justify-content: space-between;
     align-items: center;
   }

   nav ul {
     display: flex;
     list-style-type: none;
     padding: 0;
   }

   nav ul li {
     margin-left: 1rem;
   }

   nav ul li a {
     color: white;
     text-decoration: none;
   }

   main {
     display: grid;
     grid-template-columns: 1fr 2fr;
     gap: 2rem;
     margin-top: calc(var(--header-height) + 2rem);
     padding: 0 2rem;
   }

   #task-form,
   #task-list {
     background-color: white;
     border-radius: 8px;
     padding: 1rem;
     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   }

   form {
     display: grid;
     gap: 1rem;
   }

   button {
     background-color: var(--secondary-color);
     color: white;
     border: none;
     padding: 0.5rem 1rem;
     border-radius: 4px;
     cursor: pointer;
     transition: background-color 0.3s ease;
   }

   button:hover {
     background-color: #27ae60;
   }

   @media (max-width: 768px) {
     main {
       grid-template-columns: 1fr;
     }
   }
   ```

2. בצע commit ו-push לשינויים
