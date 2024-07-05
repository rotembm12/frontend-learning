export interface CourseSection {
  title: string;
  description: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
  codingExercises: CodingExercise[];
  language?: 'html' | 'javascript' | 'css';
}

export interface Lesson {
  title: string;
  content: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}

export interface CodingExercise {
  instructions: string;
  startingCode: string;
  solution: string;
}

const javascriptIntroCourseSection: CourseSection = {
  title: 'Introduction to JavaScript',
  description:
    'A comprehensive introduction to JavaScript, covering its history, basic syntax, and fundamental concepts.',
  lessons: [
    {
      title: 'What is JavaScript?',
      content:
        "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It was originally designed as a scripting language for websites but has evolved into a fully-fledged programming language used for both client-side and server-side development. JavaScript enables interactive web pages and is an essential part of web applications. It's multi-paradigm, supporting event-driven, functional, and imperative programming styles. Despite its name, JavaScript is not related to Java.",
    },
    {
      title: 'Brief History of JavaScript',
      content:
        'JavaScript was created by Brendan Eich in 1995 while he was working at Netscape Communications. It was initially called Mocha, then changed to LiveScript, and finally to JavaScript. The language was standardized in 1997 as ECMAScript. Since then, it has undergone numerous updates and improvements. Major milestones include the release of ECMAScript 3 in 1999, ECMAScript 5 in 2009, and ECMAScript 2015 (ES6) in 2015, which introduced significant new features. Subsequent yearly releases have continued to enhance the language.',
    },
    {
      title: 'JavaScript in Web Development',
      content:
        "JavaScript plays a crucial role in modern web development. It's one of the core technologies of the World Wide Web, alongside HTML and CSS. While HTML structures the content and CSS styles it, JavaScript adds interactivity and dynamic behavior to web pages. It can update content in real-time, control multimedia, animate images, and much more. With the advent of Node.js, JavaScript has also become popular for server-side programming, allowing developers to use a single language across the full stack.",
    },
    {
      title: 'Setting Up JavaScript Environment',
      content:
        "One of the advantages of JavaScript is its low barrier to entry. To start coding in JavaScript, all you need is a web browser and a text editor. Modern web browsers have built-in JavaScript engines and developer tools that allow you to run and debug JavaScript code. For more advanced development, you might use integrated development environments (IDEs) like Visual Studio Code, WebStorm, or Atom. For server-side JavaScript, you'll need to install Node.js on your computer. Version control systems like Git are also commonly used in JavaScript development.",
    },
    {
      title: 'JavaScript Syntax Basics',
      content:
        "JavaScript syntax is the set of rules that define how JavaScript programs are constructed. It's designed to be easy to read and write. JavaScript is case-sensitive and uses the Unicode character set. Statements in JavaScript are separated by semicolons (though they're often optional due to automatic semicolon insertion). Whitespace is generally ignored. Comments can be single-line (//) or multi-line (/* */). JavaScript supports both object-oriented programming with prototypal inheritance and functional programming styles.",
    },
    {
      title: 'Variables and Data Types',
      content:
        "Variables in JavaScript are declared using let, const, or var keywords. let and const were introduced in ES6 and are block-scoped, while var is function-scoped. const is used for variables whose values won't be reassigned. JavaScript is a dynamically typed language, meaning variables can hold values of any type. The primary data types in JavaScript are: Number (for both integers and floating-point), String, Boolean, Undefined, Null, Symbol (added in ES6), and BigInt (added in ES2020). JavaScript also has a complex data type: Object, which includes arrays, functions, and dates.",
    },
    {
      title: 'Operators in JavaScript',
      content:
        'JavaScript supports various types of operators. Arithmetic operators (+, -, *, /, %, **) perform mathematical operations. Comparison operators (==, ===, !=, !==, >, <, >=, <=) compare values and return a boolean. Logical operators (&&, ||, !) perform logical operations. Assignment operators (=, +=, -=, *=, /=, %=) assign values to variables. The ternary operator (?:) provides a shorthand way of writing an if-else statement. There are also bitwise operators (&, |, ^, ~, <<, >>, >>>) for performing bitwise operations on binary representations of numbers.',
    },
    {
      title: 'Control Flow: Conditional Statements',
      content:
        "Conditional statements in JavaScript allow you to execute different blocks of code based on different conditions. The if statement executes a block of code if a specified condition is true. It can be followed by an optional else clause to execute a block of code when the condition is false. Multiple conditions can be checked using else if. The switch statement can be used when you have multiple conditions to check against a single value. It's often more readable than multiple if-else statements when dealing with many conditions.",
    },
    {
      title: 'Control Flow: Loops',
      content:
        "Loops in JavaScript are used to execute a block of code multiple times. The for loop repeats until a specified condition evaluates to false. It's often used when you know in advance how many times the loop should run. The while loop repeats as long as a specified condition evaluates to true. It's useful when you don't know in advance how many times the loop should run. The do...while loop is similar to the while loop, except that it always executes the code block at least once before checking the condition. The for...of loop (introduced in ES6) is used to iterate over iterable objects like arrays, strings, etc.",
    },
    {
      title: 'Functions in JavaScript',
      content:
        'Functions are one of the fundamental building blocks in JavaScript. A function is a reusable block of code designed to perform a particular task. Functions are defined using the function keyword, followed by a name, a list of parameters in parentheses, and the function body enclosed in curly braces. Functions can take parameters (arguments) and can return a value using the return statement. JavaScript also supports function expressions and arrow functions (introduced in ES6). Functions in JavaScript are first-class objects, meaning they can be assigned to variables, passed as arguments, and returned from other functions.',
    },
    {
      title: 'Scope and Closures',
      content:
        'Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript. The two main types of scope are global and local. Variables declared outside of any function have global scope, while those declared inside a function have local scope. Block-scoped variables (let and const) are restricted to the block they are declared in. Closures are a powerful feature in JavaScript. A closure is the combination of a function and the lexical environment within which that function was declared. It allows a function to access variables from an outer function even after the outer function has returned.',
    },
    {
      title: 'Arrays and Array Methods',
      content:
        'Arrays in JavaScript are high-level, list-like objects used to store multiple values in a single variable. They can contain elements of different types, including other arrays (creating multi-dimensional arrays). Arrays are zero-indexed, meaning the first element is at index 0. JavaScript provides numerous built-in methods to manipulate arrays. Some common methods include push() and pop() for adding/removing elements from the end, shift() and unshift() for the beginning, slice() for extracting a portion of an array, splice() for adding/removing elements at a specific position, and forEach(), map(), filter(), and reduce() for iterating and transforming arrays.',
    },
    {
      title: 'Objects and Object-Oriented Programming',
      content:
        "Objects in JavaScript are complex data types that allow you to store collections of data and functionality together. They consist of properties (key-value pairs) and methods (functions associated with the object). Objects can be created using object literals, constructor functions, or the class syntax introduced in ES6. JavaScript uses prototypal inheritance, where objects can inherit properties and methods from other objects. The class syntax in ES6 provides a more familiar way to create objects and implement inheritance for developers coming from class-based languages, although it's essentially syntactic sugar over JavaScript's prototype-based inheritance.",
    },
    {
      title: 'Error Handling in JavaScript',
      content:
        'Error handling in JavaScript is crucial for creating robust applications. The try...catch statement is used to handle exceptions (runtime errors). Code that might throw an error is placed in the try block, and the code to handle the error is placed in the catch block. An optional finally block can be added to execute code regardless of whether an error occurred. JavaScript has several built-in error types like SyntaxError, TypeError, ReferenceError, etc. You can also create custom error types by extending the Error object. The throw statement is used to generate custom errors. Proper error handling helps in debugging and creating user-friendly error messages.',
    },
    {
      title: 'Asynchronous JavaScript',
      content:
        "Asynchronous programming is a crucial concept in JavaScript, especially for operations that may take some time to complete (like API calls or file operations). Traditionally, callbacks were used to handle asynchronous operations, but they could lead to complex, hard-to-read code (often called 'callback hell'). Promises, introduced in ES6, provide a cleaner way to handle asynchronous operations. A Promise represents a value that may not be available yet but will be resolved at some point in the future. The async/await syntax, introduced in ES2017, builds on top of Promises and allows you to write asynchronous code that looks and behaves like synchronous code, making it even easier to reason about.",
    },
  ],
  quiz: [
    {
      question: 'Who created JavaScript?',
      options: [
        'Brendan Eich',
        'Tim Berners-Lee',
        'Guido van Rossum',
        'James Gosling',
      ],
      answer: 'Brendan Eich',
    },
    {
      question: 'Which of the following is not a data type in JavaScript?',
      options: ['Number', 'String', 'Boolean', 'Integer'],
      answer: 'Integer',
    },
    {
      question: "What does the '===' operator do in JavaScript?",
      options: [
        'Assigns a value',
        'Compares value and type',
        'Compares only value',
        'Logical AND',
      ],
      answer: 'Compares value and type',
    },
    {
      question:
        'Which keyword is used to declare a constant variable in JavaScript?',
      options: ['var', 'let', 'const', 'static'],
      answer: 'const',
    },
    {
      question: 'What will be the output of console.log(typeof [])?',
      options: ['array', 'object', 'undefined', 'null'],
      answer: 'object',
    },
    {
      question: 'Which method is used to add elements to the end of an array?',
      options: ['push()', 'pop()', 'shift()', 'unshift()'],
      answer: 'push()',
    },
    {
      question: 'What is the correct way to write a function in JavaScript?',
      options: [
        'function = myFunction()',
        'function:myFunction()',
        'function myFunction()',
        'myFunction: function()',
      ],
      answer: 'function myFunction()',
    },
    {
      question: 'Which statement is used to exit a loop in JavaScript?',
      options: ['exit', 'break', 'return', 'continue'],
      answer: 'break',
    },
    {
      question: 'What does JSON stand for?',
      options: [
        'JavaScript Object Notation',
        'JavaScript Oriented Notation',
        'JavaScript Output Name',
        'Java Standard Object Notation',
      ],
      answer: 'JavaScript Object Notation',
    },
    {
      question:
        'Which method is used to remove the last element from an array?',
      options: ['pop()', 'push()', 'shift()', 'unshift()'],
      answer: 'pop()',
    },
    {
      question:
        "What is the purpose of the 'use strict' directive in JavaScript?",
      options: [
        'To enforce stricter parsing and error handling',
        'To allow more relaxed syntax',
        'To enable new ES6 features',
        'To disable certain JavaScript features',
      ],
      answer: 'To enforce stricter parsing and error handling',
    },
    {
      question: 'What is the output of typeof null in JavaScript?',
      options: ['null', 'undefined', 'object', 'number'],
      answer: 'object',
    },
    {
      question:
        'Which of the following is not a valid way to declare a function in JavaScript?',
      options: [
        'function foo() {}',
        'const foo = function() {}',
        'const foo = () => {}',
        'function = foo() {}',
      ],
      answer: 'function = foo() {}',
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: [
        'To refer to the current function',
        'To refer to the current object',
        'To create a new object',
        'To refer to the parent object',
      ],
      answer: 'To refer to the current object',
    },
    {
      question:
        'Which method is used to convert a JSON string to a JavaScript object?',
      options: [
        'JSON.parse()',
        'JSON.stringify()',
        'Object.fromJSON()',
        'JSON.toObject()',
      ],
      answer: 'JSON.parse()',
    },
  ],
  codingExercises: [
    {
      instructions:
        'Write a function that takes two numbers as parameters and returns their sum.',
      startingCode: 'function sum(a, b) {\n  // Your code here\n}',
      solution: 'function sum(a, b) {\n  return a + b;\n}',
    },
    {
      instructions:
        'Create a function that takes an array of numbers and returns the average of those numbers.',
      startingCode: 'function average(numbers) {\n  // Your code here\n}',
      solution:
        'function average(numbers) {\n  if (numbers.length === 0) return 0;\n  const sum = numbers.reduce((acc, num) => acc + num, 0);\n  return sum / numbers.length;\n}',
    },
    {
      instructions:
        'Write a function that checks if a given string is a palindrome (reads the same backwards as forwards).',
      startingCode: 'function isPalindrome(str) {\n  // Your code here\n}',
      solution:
        "function isPalindrome(str) {\n  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleanStr === cleanStr.split('').reverse().join('');\n}",
    },
    {
      instructions:
        'Create a function that takes an array of numbers and returns a new array with only the even numbers.',
      startingCode:
        'function filterEvenNumbers(numbers) {\n  // Your code here\n}',
      solution:
        'function filterEvenNumbers(numbers) {\n  return numbers.filter(num => num % 2 === 0);\n}',
    },
    {
      instructions:
        'Write a function that takes a string and returns an object with each unique character as a key and its count as the value.',
      startingCode: 'function charCount(str) {\n  // Your code here\n}',
      solution:
        "function charCount(str) {\n  return str.split('').reduce((acc, char) => {\n    acc[char] = (acc[char] || 0) + 1;\n    return acc;\n  }, {});\n}",
    },
    {
      instructions:
        'Create a function that generates a random password of a given length, including lowercase, uppercase, numbers, and special characters.',
      startingCode:
        'function generatePassword(length) {\n  // Your code here\n}',
      solution:
        "function generatePassword(length) {\n  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';\n  return Array.from({length}, () => chars[Math.floor(Math.random() * chars.length)]).join('');\n}",
    },
    {
      instructions:
        "Write a function that takes an array of objects with 'name' and 'age' properties, and returns the average age.",
      startingCode: 'function averageAge(people) {\n  // Your code here\n}',
      solution:
        'function averageAge(people) {\n  if (people.length === 0) return 0;\n  const totalAge = people.reduce((sum, person) => sum + person.age, 0);\n  return totalAge / people.length;\n}',
    },
    {
      instructions:
        "Create a function that takes a number as input and returns true if it's a prime number, false otherwise.",
      startingCode: 'function isPrime(num) {\n  // Your code here\n}',
      solution:
        'function isPrime(num) {\n  if (num <= 1) return false;\n  for (let i = 2; i <= Math.sqrt(num); i++) {\n    if (num % i === 0) return false;\n  }\n  return true;\n}',
    },
  ],
  language: 'javascript',
};

const numbersCourseSection: CourseSection = {
  title: 'Numbers in JavaScript',
  description:
    'A comprehensive exploration of numbers, their properties, and operations in JavaScript.',
  lessons: [
    {
      title: 'Introduction to Numbers in JavaScript',
      content:
        "In JavaScript, numbers are a fundamental data type used to represent numeric values. Unlike some programming languages, JavaScript doesn't differentiate between integers and floating-point numbers; all numbers are represented as 64-bit floating-point values (double precision). This lesson introduces the concept of numbers in JavaScript and their importance in programming.",
    },
    {
      title: 'Number Literals',
      content:
        'Number literals in JavaScript are the direct representation of numbers in your code. They can be written in several ways: decimal (base 10), hexadecimal (base 16), octal (base 8), and binary (base 2). For example: 42 (decimal), 0xFF (hexadecimal), 0o52 (octal), and 0b101010 (binary) all represent the same number. This lesson covers the various ways to write number literals and their use cases.',
    },
    {
      title: 'The Number Type',
      content:
        'The Number type in JavaScript represents both integer and floating-point numbers. It has a range from -(2^53 - 1) to (2^53 - 1). Numbers outside this range may lose precision. Special numeric values include Infinity, -Infinity, and NaN (Not a Number). This lesson delves into the characteristics and limitations of the Number type.',
    },
    {
      title: 'Basic Arithmetic Operations',
      content:
        "JavaScript provides standard arithmetic operators for numbers: addition (+), subtraction (-), multiplication (*), division (/), and modulus (%). These operators work as expected for most cases, but it's important to understand their behavior with special values like Infinity and NaN. This lesson covers the basic arithmetic operations and their nuances in JavaScript.",
    },
    {
      title: 'Increment and Decrement Operators',
      content:
        'The increment (++) and decrement (--) operators provide a shorthand way to increase or decrease a number by 1. These operators can be used in prefix (++x) or postfix (x++) form, each with slightly different behavior. This lesson explains how these operators work and the differences between their prefix and postfix usage.',
    },
    {
      title: 'Math Object: Basic Functions',
      content:
        'The Math object in JavaScript provides a collection of properties and methods for mathematical operations. Some of the basic functions include Math.abs() for absolute value, Math.round() for rounding, Math.floor() for rounding down, and Math.ceil() for rounding up. This lesson introduces the Math object and its commonly used basic functions.',
    },
    {
      title: 'Math Object: Advanced Functions',
      content:
        'Beyond basic operations, the Math object offers advanced mathematical functions. These include trigonometric functions (Math.sin(), Math.cos(), Math.tan()), exponential functions (Math.exp(), Math.log()), and power functions (Math.pow(), Math.sqrt()). This lesson explores these advanced functions and their applications.',
    },
    {
      title: 'Random Number Generation',
      content:
        'Generating random numbers is crucial for many applications, from games to simulations. JavaScript provides Math.random() which returns a pseudo-random number between 0 (inclusive) and 1 (exclusive). This lesson covers how to use Math.random() and techniques for generating random numbers within specific ranges.',
    },
    {
      title: 'Number Precision and Rounding Errors',
      content:
        "Due to the way floating-point numbers are represented in binary, JavaScript (like many programming languages) can sometimes produce unexpected results in decimal arithmetic. For example, 0.1 + 0.2 doesn't exactly equal 0.3. This lesson discusses the causes of these precision issues and methods to mitigate them.",
    },
    {
      title: 'The Number Object and Its Methods',
      content:
        'The Number object is a wrapper object that allows you to work with numerical values. It provides several useful methods like Number.isInteger(), Number.isNaN(), and Number.parseFloat(). This lesson explores the Number object and its methods, demonstrating how they can be used to perform various operations and checks on numbers.',
    },
    {
      title: 'Converting Strings to Numbers',
      content:
        'Often in programming, you need to convert string input to numbers. JavaScript provides several ways to do this, including the parseInt() and parseFloat() functions, the unary plus operator (+), and the Number() function. This lesson compares these methods and discusses their pros and cons.',
    },
    {
      title: 'Converting Numbers to Strings',
      content:
        'Just as important as converting strings to numbers is the reverse process. JavaScript offers methods like toString() and toFixed() for converting numbers to strings. This lesson covers these methods and discusses scenarios where you might need to convert numbers to strings.',
    },
    {
      title: 'Working with Exponents',
      content:
        'JavaScript provides several ways to work with exponents. The ** operator performs exponentiation, while methods like Math.pow() and Math.exp() offer additional functionality. This lesson explores these different methods and their use cases, including how to calculate roots and natural logarithms.',
    },
    {
      title: 'Bitwise Operations',
      content:
        'Although less commonly used, JavaScript supports bitwise operations on 32-bit integers. These include AND (&), OR (|), XOR (^), NOT (~), left shift (<<), right shift (>>), and zero-fill right shift (>>>). This lesson introduces bitwise operations and discusses scenarios where they might be useful.',
    },
    {
      title: 'BigInt: Working with Large Integers',
      content:
        "Introduced in ES2020, BigInt is a new numeric primitive in JavaScript that can represent integers with arbitrary precision. BigInts are created by appending 'n' to an integer literal or by calling the BigInt() function. This lesson introduces BigInt, its operations, and use cases for working with very large integers.",
    },
  ],
  quiz: [
    {
      question: 'What is the result of 0.1 + 0.2 in JavaScript?',
      options: ['0.3', '0.30000000000000004', '0.4', 'Error'],
      answer: '0.30000000000000004',
    },
    {
      question:
        'Which of the following is NOT a valid way to write a number literal in JavaScript?',
      options: ['42', '0xFF', '0o52', '0d42'],
      answer: '0d42',
    },
    {
      question: 'What does Math.floor(3.7) return?',
      options: ['3', '4', '3.7', '3.0'],
      answer: '3',
    },
    {
      question: 'What is the result of 5 ** 2?',
      options: ['10', '25', '7', '52'],
      answer: '25',
    },
    {
      question: 'Which method is used to check if a value is NaN?',
      options: ['isNaN()', 'Number.isNaN()', 'Both A and B', 'Neither A nor B'],
      answer: 'Both A and B',
    },
    {
      question: 'What is the result of Math.random()?',
      options: [
        'An integer between 0 and 1',
        'A float between 0 and 1',
        'An integer between 0 and 100',
        'A float between 0 and 100',
      ],
      answer: 'A float between 0 and 1',
    },
    {
      question: 'Which of the following correctly creates a BigInt?',
      options: ['BigInt(123)', '123n', 'Both A and B', 'Neither A nor B'],
      answer: 'Both A and B',
    },
    {
      question: "What does parseInt('101', 2) return?",
      options: ['101', '5', '2', 'NaN'],
      answer: '5',
    },
    {
      question: 'What is the result of 1 / 0 in JavaScript?',
      options: ['0', '1', 'Infinity', 'Error'],
      answer: 'Infinity',
    },
    {
      question:
        'Which of the following is true about the Number type in JavaScript?',
      options: [
        'It can represent integers only',
        'It can represent floating-point numbers only',
        'It represents both integers and floating-point numbers',
        'It can represent numbers up to 2^64',
      ],
      answer: 'It represents both integers and floating-point numbers',
    },
    {
      question: 'What does Math.ceil(4.3) return?',
      options: ['4', '5', '4.3', '4.5'],
      answer: '5',
    },
    {
      question: 'Which bitwise operator performs a logical XOR?',
      options: ['&', '|', '^', '~'],
      answer: '^',
    },
    {
      question: "What is the result of 5 + '5' in JavaScript?",
      options: ['10', "'55'", 'Error', 'undefined'],
      answer: "'55'",
    },
    {
      question:
        'Which method would you use to format a number with a specific number of decimal places?',
      options: ['toFixed()', 'toPrecision()', 'toExponential()', 'format()'],
      answer: 'toFixed()',
    },
    {
      question: 'What is the maximum safe integer in JavaScript?',
      options: ['2^32 - 1', '2^53 - 1', '2^64 - 1', 'Infinity'],
      answer: '2^53 - 1',
    },
  ],
  codingExercises: [
    {
      instructions:
        'Write a function that takes two numbers as arguments and returns their sum.',
      startingCode: 'function sum(a, b) {\n  // Your code here\n}',
      solution: 'function sum(a, b) {\n  return a + b;\n}',
    },
    {
      instructions:
        'Create a function that generates a random integer between a minimum and maximum value (inclusive).',
      startingCode: 'function randomInt(min, max) {\n  // Your code here\n}',
      solution:
        'function randomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}',
    },
    {
      instructions: 'Write a function that checks if a given number is prime.',
      startingCode: 'function isPrime(num) {\n  // Your code here\n}',
      solution:
        'function isPrime(num) {\n  if (num <= 1) return false;\n  for (let i = 2; i <= Math.sqrt(num); i++) {\n    if (num % i === 0) return false;\n  }\n  return true;\n}',
    },
    {
      instructions:
        'Implement a function that converts a decimal number to binary.',
      startingCode:
        'function decimalToBinary(decimal) {\n  // Your code here\n}',
      solution:
        'function decimalToBinary(decimal) {\n  return decimal.toString(2);\n}',
    },
    {
      instructions:
        'Create a function that calculates the factorial of a number.',
      startingCode: 'function factorial(n) {\n  // Your code here\n}',
      solution:
        'function factorial(n) {\n  if (n === 0 || n === 1) return 1;\n  return n * factorial(n - 1);\n}',
    },
    {
      instructions:
        'Write a function that finds the greatest common divisor (GCD) of two numbers.',
      startingCode: 'function gcd(a, b) {\n  // Your code here\n}',
      solution:
        'function gcd(a, b) {\n  if (b === 0) return a;\n  return gcd(b, a % b);\n}',
    },
    {
      instructions:
        'Implement a function that checks if a number is a power of two.',
      startingCode: 'function isPowerOfTwo(n) {\n  // Your code here\n}',
      solution:
        'function isPowerOfTwo(n) {\n  return n > 0 && (n & (n - 1)) === 0;\n}',
    },
    {
      instructions:
        'Create a function that calculates the sum of all digits in a number.',
      startingCode: 'function sumOfDigits(num) {\n  // Your code here\n}',
      solution:
        "function sumOfDigits(num) {\n  return Math.abs(num).toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);\n}",
    },
    {
      instructions: 'Write a function that finds the nth Fibonacci number.',
      startingCode: 'function fibonacci(n) {\n  // Your code here\n}',
      solution:
        'function fibonacci(n) {\n  if (n <= 1) return n;\n  let a = 0, b = 1;\n  for (let i = 2; i <= n; i++) {\n    [a, b] = [b, a + b];\n  }\n  return b;\n}',
    },
    {
      instructions:
        'Implement a function that rounds a number to a specified number of decimal places.',
      startingCode: 'function roundTo(num, places) {\n  // Your code here\n}',
      solution:
        "function roundTo(num, places) {\n  return Number(Math.round(num + 'e' + places) + 'e-' + places);\n}",
    },
  ],
  language: 'javascript',
};

const htmlCourseSection: CourseSection = {
  title: 'HTML Basics',
  description: 'Master the fundamentals of HTML structure and tags.',
  language: 'html',
  lessons: [
    {
      title: 'Introduction to HTML',
      content:
        "HTML stands for HyperText Markup Language. It's the standard markup language for creating web pages and web applications. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.",
    },
    {
      title: 'HTML Document Structure',
      content:
        'An HTML document starts with a <!DOCTYPE html> declaration, followed by the <html> root element. Inside <html>, we have <head> for metadata and <body> for the visible content.',
    },
    // Existing lessons remain, new ones added below
    {
      title: 'HTML Elements and Tags',
      content:
        'HTML uses tags to define elements. Most elements have an opening tag, content, and a closing tag. For example: <p>This is a paragraph.</p>',
    },
    {
      title: 'HTML Attributes',
      content:
        "Attributes provide additional information about HTML elements. They are always specified in the start tag. For example: <a href='https://www.example.com'>This is a link</a>",
    },
    {
      title: 'Headings and Paragraphs',
      content:
        'HTML offers six levels of headings, <h1> to <h6>. Paragraphs are defined with the <p> tag.',
    },
    {
      title: 'Links and Anchors',
      content:
        'Links are created using the <a> tag with the href attribute. They can link to other pages, files, or specific parts of a page.',
    },
    {
      title: 'Images in HTML',
      content:
        'Images are added using the <img> tag. The src attribute specifies the path to the image, and the alt attribute provides alternative text.',
    },
    {
      title: 'Lists - Ordered and Unordered',
      content:
        'Unordered lists use <ul> and ordered lists use <ol>. List items are defined with <li>.',
    },
    {
      title: 'Tables',
      content:
        'Tables are created using <table>. Table rows are defined with <tr>, header cells with <th>, and data cells with <td>.',
    },
    {
      title: 'Forms and Input Elements',
      content:
        'Forms are created with the <form> tag. Various input types include text, password, radio, checkbox, and submit buttons.',
    },
    {
      title: 'Semantic HTML',
      content:
        'Semantic elements like <header>, <nav>, <main>, <article>, <section>, and <footer> give meaning to the structure of web content.',
    },
    {
      title: 'HTML5 New Elements',
      content:
        'HTML5 introduced elements like <video>, <audio>, <canvas>, and <svg> for multimedia and graphics.',
    },
    {
      title: 'Metadata and SEO',
      content:
        'The <meta> tags in the <head> section provide metadata about the HTML document, important for SEO and browser rendering.',
    },
    {
      title: 'Character Entities',
      content:
        'Special characters can be displayed using character entities. For example, &lt; represents <, and &gt; represents >.',
    },
    {
      title: 'HTML Comments',
      content:
        'Comments in HTML are written like this: <!-- This is a comment -->. They are not displayed in the browser.',
    },
  ],
  quiz: [
    {
      question: 'What does HTML stand for?',
      options: [
        'Hyper Text Markup Language',
        'High Tech Modern Language',
        'Hyperlink and Text Markup Language',
        'Home Tool Markup Language',
      ],
      answer: 'Hyper Text Markup Language',
    },
    {
      question: 'Which tag is used for the largest heading in HTML?',
      options: ['<head>', '<h6>', '<heading>', '<h1>'],
      answer: '<h1>',
    },
    {
      question: 'Which HTML element is used to define an unordered list?',
      options: ['<ul>', '<ol>', '<list>', '<unordered>'],
      answer: '<ul>',
    },
    // New quiz questions added below
    {
      question: 'What is the correct HTML for creating a hyperlink?',
      options: [
        "<a url='http://www.example.com'>Example</a>",
        "<a href='http://www.example.com'>Example</a>",
        '<a>http://www.example.com</a>',
        '<hyperlink>http://www.example.com</hyperlink>',
      ],
      answer: "<a href='http://www.example.com'>Example</a>",
    },
    {
      question: 'Which HTML attribute is used to define inline styles?',
      options: ['class', 'style', 'font', 'styles'],
      answer: 'style',
    },
    {
      question: 'What is the correct HTML for inserting an image?',
      options: [
        "<img href='image.gif' alt='MyImage'>",
        "<img src='image.gif' alt='MyImage'>",
        "<image src='image.gif' alt='MyImage'>",
        '<img>image.gif</img>',
      ],
      answer: "<img src='image.gif' alt='MyImage'>",
    },
    {
      question:
        'Which HTML element is used to specify a footer for a document or section?',
      options: ['<bottom>', '<footer>', '<section>', '<bottom-section>'],
      answer: '<footer>',
    },
    {
      question: 'What is the correct HTML for making a checkbox?',
      options: [
        '<check>',
        '<checkbox>',
        "<input type='check'>",
        "<input type='checkbox'>",
      ],
      answer: "<input type='checkbox'>",
    },
    {
      question: 'Which HTML element is used to define important text?',
      options: ['<strong>', '<b>', '<important>', '<i>'],
      answer: '<strong>',
    },
    {
      question: 'What is the correct HTML for creating a text area?',
      options: [
        "<input type='textarea'>",
        '<textarea>',
        "<input type='textbox'>",
        '<text-area>',
      ],
      answer: '<textarea>',
    },
  ],
  codingExercises: [
    {
      instructions: 'Create an HTML structure with a heading and a paragraph.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution:
        '<h1>Welcome to my webpage</h1>\n<p>This is a paragraph of text.</p>',
    },
    {
      instructions: 'Create an unordered list with three items.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution:
        '<ul>\n  <li>Item 1</li>\n  <li>Item 2</li>\n  <li>Item 3</li>\n</ul>',
    },
    {
      instructions: "Create a link to Google's homepage.",
      startingCode: '<!-- Write your HTML here -->\n',
      solution: '<a href="https://www.google.com">Go to Google</a>',
    },
    // New coding exercises added below
    {
      instructions: 'Create an HTML table with 2 rows and 2 columns.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution:
        '<table>\n  <tr>\n    <td>Row 1, Col 1</td>\n    <td>Row 1, Col 2</td>\n  </tr>\n  <tr>\n    <td>Row 2, Col 1</td>\n    <td>Row 2, Col 2</td>\n  </tr>\n</table>',
    },
    {
      instructions: 'Create a form with text input and a submit button.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution:
        '<form>\n  <input type="text" name="username">\n  <input type="submit" value="Submit">\n</form>',
    },
    {
      instructions: 'Add an image to an HTML page with alternative text.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution: '<img src="image.jpg" alt="A beautiful landscape">',
    },
    {
      instructions: 'Create an ordered list with three items.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution:
        '<ol>\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ol>',
    },
    {
      instructions: 'Create a div with a class and an id.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution: '<div class="container" id="main-content">This is a div</div>',
    },
    {
      instructions: 'Create a paragraph with bold and italic text.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution:
        '<p>This is <strong>bold</strong> and this is <em>italic</em> text.</p>',
    },
    {
      instructions: 'Create a button with an onclick event.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution: '<button onclick="alert(\'Hello!\')">Click me</button>',
    },
    {
      instructions:
        'Create a definition list with three terms and definitions.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution:
        '<dl>\n  <dt>HTML</dt>\n  <dd>HyperText Markup Language</dd>\n  <dt>CSS</dt>\n  <dd>Cascading Style Sheets</dd>\n  <dt>JS</dt>\n  <dd>JavaScript</dd>\n</dl>',
    },
    {
      instructions: 'Create a fieldset with a legend and two radio buttons.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution:
        '<fieldset>\n  <legend>Choose your favorite color:</legend>\n  <input type="radio" id="red" name="color" value="red">\n  <label for="red">Red</label><br>\n  <input type="radio" id="blue" name="color" value="blue">\n  <label for="blue">Blue</label>\n</fieldset>',
    },
    {
      instructions:
        'Create a semantic structure with header, nav, main, and footer.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution:
        '<header>\n  <h1>My Website</h1>\n</header>\n<nav>\n  <ul>\n    <li><a href="#">Home</a></li>\n    <li><a href="#">About</a></li>\n  </ul>\n</nav>\n<main>\n  <p>Main content here</p>\n</main>\n<footer>\n  <p>&copy; 2023 My Website</p>\n</footer>',
    },
    {
      instructions:
        'Create a video element with controls and a fallback message.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution:
        '<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n  Your browser does not support the video tag.\n</video>',
    },
    {
      instructions: 'Create a details element with a summary.',
      startingCode: '<!-- Write your HTML here -->\n',
      solution:
        '<details>\n  <summary>Click to show/hide details</summary>\n  <p>This is the hidden content that can be shown or hidden.</p>\n</details>',
    },
  ],
};

const cssCourseSection: CourseSection = {
  title: 'CSS Fundamentals',
  language: 'html',
  description:
    'Master CSS styling techniques from basics to advanced concepts.',
  lessons: [
    {
      title: 'Introduction to CSS',
      content:
        "CSS stands for Cascading Style Sheets. It's a language used to describe the look and formatting of a document written in HTML. CSS allows you to apply styles to web pages. You can change the color, font, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features.",
    },
    {
      title: 'CSS Syntax and Structure',
      content:
        'CSS has a simple syntax. Each rule consists of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon. For example: h1 { color: blue; font-size: 12px; }',
    },
    {
      title: 'Selectors in CSS',
      content:
        "CSS selectors are used to 'find' or select HTML elements based on their element name, id, class, attribute, and more. The most basic selectors are: Element Selector (e.g., p), ID Selector (e.g., #myId), Class Selector (e.g., .myClass), Universal Selector (*), and Grouping Selector (e.g., h1, h2, p).",
    },
    {
      title: 'CSS Colors',
      content:
        'CSS supports a wide variety of color formats. You can specify colors using predefined color names, RGB values, HEX codes, HSL, or RGBA (which includes an alpha channel for transparency). For example: color: red; or color: #FF0000; or color: rgb(255, 0, 0);',
    },
    {
      title: 'CSS Box Model',
      content:
        'The CSS box model is essentially a box that wraps around every HTML element. It consists of margins, borders, padding, and the actual content. From outside to inside: Margin (space outside the border), Border, Padding (space inside the border), and Content.',
    },
    {
      title: 'CSS Layout - Display',
      content:
        'The display property is the most important CSS property for controlling layout. Every element has a default display value depending on what type of element it is. The main values are: block, inline, inline-block, none, flex, and grid.',
    },
    {
      title: 'CSS Layout - Position',
      content:
        'The position property specifies the type of positioning method used for an element. There are five different position values: static (default), relative, fixed, absolute, and sticky. Each of these creates a different layout behavior.',
    },
    {
      title: 'CSS Flexbox',
      content:
        "Flexbox is a one-dimensional layout method for laying out items in rows or columns. It's useful for designing flexible responsive layout structures without using float or positioning. The main idea behind the flex layout is to give the container the ability to alter its items' width/height to best fill the available space.",
    },
    {
      title: 'CSS Grid',
      content:
        'CSS Grid Layout is a two-dimensional layout system for the web. It lets you lay content out in rows and columns. A grid is an intersecting set of horizontal and vertical lines – one set defining columns and the other rows. Elements can be placed onto the grid within these column and row lines.',
    },
    {
      title: 'CSS Typography',
      content:
        'CSS provides various properties to control text styling. This includes font-family (type of font), font-size, font-weight (boldness), font-style (italic), text-decoration (underline, overline, line-through), text-transform (uppercase, lowercase, capitalize), and many more.',
    },
    {
      title: 'CSS Backgrounds',
      content:
        "CSS allows you to control the background of elements. You can set a color, image, repeat behavior, attachment, and position. Properties include background-color, background-image, background-repeat, background-attachment, and background-position. You can also use the shorthand 'background' property.",
    },
    {
      title: 'CSS Transitions',
      content:
        'CSS transitions allow you to change property values smoothly, over a given duration. To create a transition effect, you must specify two things: the CSS property you want to add an effect to, and the duration of the effect. For example: transition: width 2s;',
    },
    {
      title: 'CSS Animations',
      content:
        'CSS animations allow you to create keyframes, set duration, delay, and iteration. You define the animation with the @keyframes rule, then assign it to an element with properties like animation-name, animation-duration, animation-timing-function, and more.',
    },
    {
      title: 'CSS Transforms',
      content:
        'CSS transforms let you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed. Transforms can be 2D or 3D. Common functions include translate(), rotate(), scale(), and skew().',
    },
    {
      title: 'Responsive Design with CSS',
      content:
        "Responsive design makes your web page look good on all devices. It uses CSS media queries to adjust styles based on the target device's general type, characteristics, or parameters. A common approach is to create a fluid grid, flexible images, and use media queries for different viewport sizes.",
    },
  ],
  quiz: [
    {
      question: 'What does CSS stand for?',
      options: [
        'Counter Style Sheets',
        'Computer Style Sheets',
        'Colorful Style Sheets',
        'Cascading Style Sheets',
      ],
      answer: 'Cascading Style Sheets',
    },
    {
      question: 'Which property is used to change the background color?',
      options: ['color', 'bgcolor', 'background-color', 'background'],
      answer: 'background-color',
    },
    {
      question: "How do you select an element with id 'demo'?",
      options: ['.demo', '*demo', '#demo', 'demo'],
      answer: '#demo',
    },
    {
      question: 'Which CSS property controls the text size?',
      options: ['text-size', 'font-size', 'text-style', 'font-style'],
      answer: 'font-size',
    },
    {
      question:
        'How do you make each word in a text start with a capital letter?',
      options: [
        'text-transform: capitalize',
        'text-style: capitalize',
        'transform: capitalize',
        'font-transform: capitalize',
      ],
      answer: 'text-transform: capitalize',
    },
    {
      question:
        'Which property is used to set the spacing between lines in a text?',
      options: ['line-spacing', 'spacing', 'line-height', 'letter-spacing'],
      answer: 'line-height',
    },
    {
      question: 'How do you display hyperlinks without an underline?',
      options: [
        'a {text-decoration:no-underline}',
        'a {underline:none}',
        'a {text-decoration:none}',
        'a {text-style:no-underline}',
      ],
      answer: 'a {text-decoration:none}',
    },
    {
      question: 'How do you make a list that lists its items with squares?',
      options: [
        'list-style-type: square',
        'list-type: square',
        'ul {list-style-type: square}',
        'ul {list-type: square}',
      ],
      answer: 'ul {list-style-type: square}',
    },
    {
      question: 'How do you select all p elements inside a div element?',
      options: ['div.p', 'div p', 'div + p', '.div p'],
      answer: 'div p',
    },
    {
      question:
        'Which property is used to set the background image of an element?',
      options: [
        'background-img',
        'background-image',
        'bg-image',
        'background-picture',
      ],
      answer: 'background-image',
    },
    {
      question:
        'What is the correct CSS syntax for making all the <p> elements bold?',
      options: [
        'p {font-weight:bold}',
        'p {text-size:bold}',
        "<p style='font-size:bold'>",
        'p {font-size:bold}',
      ],
      answer: 'p {font-weight:bold}',
    },
    {
      question: 'How do you group selectors?',
      options: [
        'Separate each selector with a space',
        'Separate each selector with a plus sign',
        'Separate each selector with a comma',
        "You can't group selectors",
      ],
      answer: 'Separate each selector with a comma',
    },
    {
      question: 'What is the default value of the position property?',
      options: ['relative', 'fixed', 'absolute', 'static'],
      answer: 'static',
    },
    {
      question: 'How do you make a text bold?',
      options: [
        'font-weight: bold',
        'style: bold',
        'font: bold',
        'text-style: bold',
      ],
      answer: 'font-weight: bold',
    },
    {
      question: 'Which property is used to set the left margin of an element?',
      options: ['padding-left', 'margin-left', 'indent', 'left-margin'],
      answer: 'margin-left',
    },
    {
      question:
        'Which CSS property is used to specify the layout of child elements?',
      options: ['grid', 'flex', 'display', 'position'],
      answer: 'display',
    },
    {
      question:
        'What is the correct CSS syntax to change the font of an element?',
      options: [
        'font-family: Arial',
        'font: Arial',
        'fontface: Arial',
        'font-name: Arial',
      ],
      answer: 'font-family: Arial',
    },
    {
      question: 'How do you add a shadow to an element in CSS?',
      options: [
        'shadow-right: 5px',
        'box-shadow: 5px 5px 5px grey',
        'shadow: 5px 5px 5px',
        'element-shadow: 5px 5px grey',
      ],
      answer: 'box-shadow: 5px 5px 5px grey',
    },
    {
      question:
        'Which CSS property is used to change the transparency of an element?',
      options: ['visibility', 'transparency', 'opacity', 'filter'],
      answer: 'opacity',
    },
    {
      question: 'How do you rotate an element 45 degrees clockwise in CSS?',
      options: [
        'rotate: 45deg',
        'transform: rotate(45deg)',
        'rotation: 45deg',
        'turn: 45deg',
      ],
      answer: 'transform: rotate(45deg)',
    },
    {
      question:
        'Which CSS property is used to specify the order of flex items?',
      options: ['flex-order', 'order', 'flex-flow', 'flex-direction'],
      answer: 'order',
    },
    {
      question: 'How do you make an image responsive in CSS?',
      options: [
        'image-responsive: true',
        'responsive-image: true',
        'img {max-width: 100%; height: auto;}',
        'img {width: 100%; height: 100%;}',
      ],
      answer: 'img {max-width: 100%; height: auto;}',
    },
    {
      question:
        'Which CSS property is used to specify the gap between columns in a multi-column layout?',
      options: ['column-span', 'column-width', 'column-gap', 'column-space'],
      answer: 'column-gap',
    },
    {
      question:
        'How do you create a transition effect when hovering over an element?',
      options: [
        ':hover {transition: all 0.3s ease;}',
        'transition: hover 0.3s;',
        'transition: 0.3s on-hover;',
        'hover-effect: transition 0.3s;',
      ],
      answer: ':hover {transition: all 0.3s ease;}',
    },
    {
      question:
        'Which CSS property is used to specify the size of a background image?',
      options: [
        'background-proportion',
        'background-size',
        'background-dimensions',
        'background-scale',
      ],
      answer: 'background-size',
    },
    {
      question: 'How do you center align text in CSS?',
      options: [
        'text-align: center',
        'align: center',
        'text-center: true',
        'font-align: center',
      ],
      answer: 'text-align: center',
    },
    {
      question: 'Which CSS property is used to create rounded corners?',
      options: [
        'corner-radius',
        'border-curve',
        'border-radius',
        'rounded-corners',
      ],
      answer: 'border-radius',
    },
    {
      question: 'How do you change the mouse cursor in CSS?',
      options: ['cursor-style', 'mouse-style', 'cursor', 'mouse-pointer'],
      answer: 'cursor',
    },
    {
      question:
        'Which CSS property is used to set the maximum width of an element?',
      options: ['width-max', 'max-width', 'width-limit', 'width-ceiling'],
      answer: 'max-width',
    },
    {
      question:
        'How do you set a background color that extends to the entire page?',
      options: [
        'page {background-color: #FFFFFF;}',
        'body {background-color: #FFFFFF;}',
        'html {background-color: #FFFFFF;}',
        '.page {background-color: #FFFFFF;}',
      ],
      answer: 'body {background-color: #FFFFFF;}',
    },
  ],
  codingExercises: [
    {
      instructions: 'Style a paragraph to have red text and a blue background.',
      startingCode:
        '<p>This is a paragraph.</p>\n\n<style>\n  /* Write your CSS here */\n</style>',
      solution:
        '<p>This is a paragraph.</p>\n\n<style>\n  p {\n    color: red;\n    background-color: blue;\n  }\n</style>',
    },
    {
      instructions:
        "Create a class named 'highlight' that gives elements a yellow background and bold text.",
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<p class="highlight">This text should be highlighted.</p>',
      solution:
        '<style>\n  .highlight {\n    background-color: yellow;\n    font-weight: bold;\n  }\n</style>\n\n<p class="highlight">This text should be highlighted.</p>',
    },
    {
      instructions:
        'Style a div to be a centered box with a width of 200px, height of 100px, and a border.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<div>This is a box</div>',
      solution:
        '<style>\n  div {\n    width: 200px;\n    height: 100px;\n    border: 1px solid black;\n    margin: 0 auto;\n    text-align: center;\n    line-height: 100px;\n  }\n</style>\n\n<div>This is a box</div>',
    },
    {
      instructions:
        'Create a navigation menu with inline list items and hover effects.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<ul>\n  <li><a href="#">Home</a></li>\n  <li><a href="#">About</a></li>\n  <li><a href="#">Contact</a></li>\n</ul>',
      solution:
        '<style>\n  ul {\n    list-style-type: none;\n    padding: 0;\n  }\n  li {\n    display: inline;\n    margin-right: 10px;\n  }\n  a {\n    text-decoration: none;\n    color: black;\n  }\n  a:hover {\n    color: blue;\n  }\n</style>\n\n<ul>\n  <li><a href="#">Home</a></li>\n  <li><a href="#">About</a></li>\n  <li><a href="#">Contact</a></li>\n</ul>',
    },
    {
      instructions: 'Style a paragraph to have red text and a blue background.',
      startingCode:
        '<p>This is a paragraph.</p>\n\n<style>\n  /* Write your CSS here */\n</style>',
      solution:
        '<p>This is a paragraph.</p>\n\n<style>\n  p {\n    color: red;\n    background-color: blue;\n  }\n</style>',
    },
    {
      instructions:
        "Create a class named 'highlight' that gives elements a yellow background and bold text.",
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<p class="highlight">This text should be highlighted.</p>',
      solution:
        '<style>\n  .highlight {\n    background-color: yellow;\n    font-weight: bold;\n  }\n</style>\n\n<p class="highlight">This text should be highlighted.</p>',
    },
    {
      instructions:
        'Style a div to be a centered box with a width of 200px, height of 100px, and a border.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<div>This is a box</div>',
      solution:
        '<style>\n  div {\n    width: 200px;\n    height: 100px;\n    border: 1px solid black;\n    margin: 0 auto;\n    text-align: center;\n    line-height: 100px;\n  }\n</style>\n\n<div>This is a box</div>',
    },
    {
      instructions:
        'Create a navigation menu with inline list items and hover effects.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<ul>\n  <li><a href="#">Home</a></li>\n  <li><a href="#">About</a></li>\n  <li><a href="#">Contact</a></li>\n</ul>',
      solution:
        '<style>\n  ul {\n    list-style-type: none;\n    padding: 0;\n  }\n  li {\n    display: inline;\n    margin-right: 10px;\n  }\n  a {\n    text-decoration: none;\n    color: black;\n  }\n  a:hover {\n    color: blue;\n  }\n</style>\n\n<ul>\n  <li><a href="#">Home</a></li>\n  <li><a href="#">About</a></li>\n  <li><a href="#">Contact</a></li>\n</ul>',
    },
    {
      instructions: 'Create a simple grid layout with 2 columns and 2 rows.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<div class="grid">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n</div>',
      solution:
        '<style>\n  .grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 10px;\n  }\n  .grid div {\n    background-color: #ddd;\n    padding: 20px;\n    text-align: center;\n  }\n</style>\n\n<div class="grid">\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n  <div>4</div>\n</div>',
    },
    {
      instructions:
        'Style a button with rounded corners, a gradient background, and a hover effect.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<button>Click me</button>',
      solution:
        '<style>\n  button {\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    background: linear-gradient(to right, #ff8a00, #da1b60);\n    color: white;\n    cursor: pointer;\n  }\n  button:hover {\n    opacity: 0.8;\n  }\n</style>\n\n<button>Click me</button>',
    },
    {
      instructions:
        'Create a card with a header, content, and footer using flexbox.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<div class="card">\n  <header>Header</header>\n  <main>Content</main>\n  <footer>Footer</footer>\n</div>',
      solution:
        '<style>\n  .card {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    overflow: hidden;\n  }\n  header, footer {\n    background-color: #f1f1f1;\n    padding: 10px;\n    text-align: center;\n  }\n  main {\n    padding: 20px;\n    flex-grow: 1;\n  }\n</style>\n\n<div class="card">\n  <header>Header</header>\n  <main>Content</main>\n  <footer>Footer</footer>\n</div>',
    },
    {
      instructions: 'Style a form with labels and inputs aligned properly.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<form>\n  <div>\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name">\n  </div>\n  <div>\n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email">\n  </div>\n</form>',
      solution:
        '<style>\n  form {\n    width: 300px;\n  }\n  form div {\n    margin-bottom: 10px;\n  }\n  label {\n    display: inline-block;\n    width: 60px;\n  }\n  input {\n    width: calc(100% - 70px);\n    padding: 5px;\n  }\n</style>\n\n<form>\n  <div>\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name">\n  </div>\n  <div>\n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email">\n  </div>\n</form>',
    },
    {
      instructions:
        'Create a responsive layout that changes from 3 columns to 1 column on smaller screens.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<div class="container">\n  <div class="column">Column 1</div>\n  <div class="column">Column 2</div>\n  <div class="column">Column 3</div>\n</div>',
      solution:
        '<style>\n  .container {\n    display: flex;\n    flex-wrap: wrap;\n  }\n  .column {\n    flex: 1;\n    padding: 10px;\n    background-color: #f1f1f1;\n    margin: 5px;\n  }\n  @media (max-width: 600px) {\n    .column {\n      flex-basis: 100%;\n    }\n  }\n</style>\n\n<div class="container">\n  <div class="column">Column 1</div>\n  <div class="column">Column 2</div>\n  <div class="column">Column 3</div>\n</div>',
    },
    {
      instructions:
        'Style a table with alternating row colors and highlighted header.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<table>\n  <tr><th>Header 1</th><th>Header 2</th></tr>\n  <tr><td>Row 1, Cell 1</td><td>Row 1, Cell 2</td></tr>\n  <tr><td>Row 2, Cell 1</td><td>Row 2, Cell 2</td></tr>\n  <tr><td>Row 3, Cell 1</td><td>Row 3, Cell 2</td></tr>\n</table>',
      solution:
        '<style>\n  table {\n    border-collapse: collapse;\n    width: 100%;\n  }\n  th, td {\n    padding: 8px;\n    text-align: left;\n  }\n  th {\n    background-color: #4CAF50;\n    color: white;\n  }\n  tr:nth-child(even) {\n    background-color: #f2f2f2;\n  }\n</style>\n\n<table>\n  <tr><th>Header 1</th><th>Header 2</th></tr>\n  <tr><td>Row 1, Cell 1</td><td>Row 1, Cell 2</td></tr>\n  <tr><td>Row 2, Cell 1</td><td>Row 2, Cell 2</td></tr>\n  <tr><td>Row 3, Cell 1</td><td>Row 3, Cell 2</td></tr>\n</table>',
    },
    {
      instructions: 'Create a loading spinner using CSS animations.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<div class="spinner"></div>',
      solution:
        '<style>\n  .spinner {\n    width: 50px;\n    height: 50px;\n    border: 5px solid #f3f3f3;\n    border-top: 5px solid #3498db;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n  }\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n</style>\n\n<div class="spinner"></div>',
    },
    {
      instructions:
        'Style a quote with a large quotation mark and italic text.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<blockquote>This is a famous quote.</blockquote>',
      solution:
        "<style>\n  blockquote {\n    font-style: italic;\n    padding: 20px;\n    position: relative;\n  }\n  blockquote::before {\n    content: '\\201C';\n    font-size: 60px;\n    position: absolute;\n    left: 0;\n    top: -10px;\n    color: #ccc;\n  }\n</style>\n\n<blockquote>This is a famous quote.</blockquote>",
    },
    {
      instructions: 'Create a simple accordion using CSS.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<div class="accordion">\n  <div class="accordion-item">\n    <h2>Section 1</h2>\n    <div class="content">Content for section 1</div>\n  </div>\n  <div class="accordion-item">\n    <h2>Section 2</h2>\n    <div class="content">Content for section 2</div>\n  </div>\n</div>',
      solution:
        '<style>\n  .accordion-item h2 {\n    background-color: #f1f1f1;\n    padding: 10px;\n    margin: 0;\n    cursor: pointer;\n  }\n  .content {\n    display: none;\n    padding: 10px;\n  }\n  .accordion-item:hover .content {\n    display: block;\n  }\n</style>\n\n<div class="accordion">\n  <div class="accordion-item">\n    <h2>Section 1</h2>\n    <div class="content">Content for section 1</div>\n  </div>\n  <div class="accordion-item">\n    <h2>Section 2</h2>\n    <div class="content">Content for section 2</div>\n  </div>\n</div>',
    },
    {
      instructions:
        "Style a pricing table with a highlighted 'popular' option.",
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<div class="pricing-table">\n  <div class="plan">Basic</div>\n  <div class="plan popular">Pro</div>\n  <div class="plan">Premium</div>\n</div>',
      solution:
        '<style>\n  .pricing-table {\n    display: flex;\n    justify-content: space-around;\n  }\n  .plan {\n    padding: 20px;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    text-align: center;\n  }\n  .popular {\n    background-color: #f8f8f8;\n    transform: scale(1.1);\n    box-shadow: 0 0 10px rgba(0,0,0,0.1);\n  }\n</style>\n\n<div class="pricing-table">\n  <div class="plan">Basic</div>\n  <div class="plan popular">Pro</div>\n  <div class="plan">Premium</div>\n</div>',
    },
    {
      instructions: 'Create a CSS-only dropdown menu.',
      startingCode:
        '<style>\n  /* Write your CSS here */\n</style>\n\n<nav>\n  <ul>\n    <li><a href="#">Home</a></li>\n    <li class="dropdown">\n      <a href="#">Services</a>\n      <ul class="dropdown-content">\n        <li><a href="#">Service 1</a></li>\n        <li><a href="#">Service 2</a></li>\n      </ul>\n    </li>\n  </ul>\n</nav>',
      solution:
        '<style>\n  nav ul {\n    list-style-type: none;\n    padding: 0;\n  }\n  nav ul li {\n    display: inline-block;\n    position: relative;\n  }\n  .dropdown-content {\n    display: none;\n    position: absolute;\n    background-color: #f9f9f9;\n    min-width: 160px;\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  }\n  .dropdown:hover .dropdown-content {\n    display: block;\n  }\n</style>\n\n<nav>\n  <ul>\n    <li><a href="#">Home</a></li>\n    <li class="dropdown">\n      <a href="#">Services</a>\n      <ul class="dropdown-content">\n        <li><a href="#">Service 1</a></li>\n        <li><a href="#">Service 2</a></li>\n      </ul>\n    </li>\n  </ul>\n</nav>',
    },
  ],
};

const stringsInJavaScriptCourseSection: CourseSection = {
  title: 'Strings in JavaScript',
  language: 'javascript',
  description:
    'A deep dive into strings in JavaScript, covering their properties, methods, and common operations.',
  lessons: [
    {
      title: 'What is a String in JavaScript?',
      content: `In JavaScript, a string is a sequence of characters used to represent text. Strings are primitive data types and immutable, meaning once a string is created, its contents cannot be changed. Strings can be created using single quotes (''), double quotes (""), or backticks (\`\`). The backticks allow for template literals, which can embed expressions.`,
    },
    {
      title: 'Creating Strings',
      content:
        "There are multiple ways to create strings in JavaScript. You can use string literals with single or double quotes: let str1 = 'Hello'; let str2 = \"World\"; Or use the String constructor function: let str3 = String('JavaScript'); Template literals (backticks) allow for multi-line strings and expression interpolation: let name = 'Alice'; let greeting = `Hello, ${name}!`;",
    },
    {
      title: 'String Length',
      content:
        "The length property of a string returns the number of characters in the string. For example: let str = 'Hello'; console.log(str.length); // Outputs: 5. Note that length is a property, not a method, so it's accessed without parentheses.",
    },
    {
      title: 'Accessing Characters in a String',
      content:
        "Individual characters in a string can be accessed using bracket notation with the index of the character (zero-based). For example: let str = 'Hello'; console.log(str[0]); // Outputs: 'H'. You can also use the charAt() method: console.log(str.charAt(1)); // Outputs: 'e'.",
    },
    {
      title: 'String Immutability',
      content:
        "Strings in JavaScript are immutable, which means you cannot change individual characters of a string. Operations that appear to modify a string actually create a new string. For example: let str = 'Hello'; str[0] = 'J'; // This doesn't work console.log(str); // Still outputs: 'Hello'",
    },
    {
      title: 'String Concatenation',
      content:
        "Strings can be concatenated using the + operator or the concat() method. For example: let str1 = 'Hello'; let str2 = 'World'; let result = str1 + ' ' + str2; // 'Hello World' let result2 = str1.concat(' ', str2); // 'Hello World'. The += operator can also be used for concatenation: str1 += ' World';",
    },
    {
      title: 'String Methods: indexOf() and lastIndexOf()',
      content:
        "indexOf() returns the index of the first occurrence of a specified value in a string. lastIndexOf() returns the index of the last occurrence. Both return -1 if the value is not found. For example: let str = 'Hello World'; console.log(str.indexOf('o')); // Outputs: 4 console.log(str.lastIndexOf('o')); // Outputs: 7",
    },
    {
      title: 'String Methods: slice(), substring(), and substr()',
      content:
        "These methods extract a portion of a string. slice(start, end) extracts from start to end (exclusive). substring(start, end) is similar but swaps arguments if start > end. substr(start, length) extracts length characters from start. For example: let str = 'JavaScript'; console.log(str.slice(0, 4)); // 'Java' console.log(str.substring(4)); // 'Script' console.log(str.substr(0, 4)); // 'Java'",
    },
    {
      title: 'String Methods: toUpperCase() and toLowerCase()',
      content:
        "These methods return a new string with all characters converted to uppercase or lowercase respectively. For example: let str = 'Hello World'; console.log(str.toUpperCase()); // 'HELLO WORLD' console.log(str.toLowerCase()); // 'hello world'",
    },
    {
      title: 'String Method: trim()',
      content:
        "The trim() method removes whitespace from both ends of a string. There are also trimStart() and trimEnd() for removing whitespace from the start or end only. For example: let str = '  Hello World  '; console.log(str.trim()); // 'Hello World'",
    },
    {
      title: 'String Method: replace()',
      content:
        "The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. It only replaces the first occurrence unless used with a regular expression with the global flag. For example: let str = 'Hello World'; console.log(str.replace('World', 'JavaScript')); // 'Hello JavaScript'",
    },
    {
      title: 'String Method: split()',
      content:
        "The split() method divides a string into an ordered list of substrings and returns them as an array. For example: let str = 'apple,banana,orange'; console.log(str.split(',')); // ['apple', 'banana', 'orange'] console.log('Hello'.split('')); // ['H', 'e', 'l', 'l', 'o']",
    },
    {
      title: 'String Method: includes()',
      content:
        "The includes() method determines whether a string contains another string, returning true or false. It's case-sensitive. For example: let str = 'Hello World'; console.log(str.includes('World')); // true console.log(str.includes('world')); // false",
    },
    {
      title: 'String Method: startsWith() and endsWith()',
      content:
        "These methods determine whether a string begins or ends with the characters of a specified string, returning true or false. For example: let str = 'Hello World'; console.log(str.startsWith('Hello')); // true console.log(str.endsWith('World')); // true",
    },
    {
      title: 'Template Literals and String Interpolation',
      content:
        "Template literals, denoted by backticks (`), allow embedded expressions and multi-line strings. String interpolation is done using ${expression}. For example: let name = 'Alice'; let age = 30; let greeting = `Hello, my name is ${name} and I am ${age} years old.`; console.log(greeting);",
    },
  ],
  quiz: [
    {
      question:
        'Which of the following is NOT a valid way to create a string in JavaScript?',
      options: [
        "let str = 'Hello';",
        'let str = "Hello";',
        'let str = `Hello`;',
        'let str = (Hello);',
      ],
      answer: 'let str = (Hello);',
    },
    {
      question: 'What does the length property of a string return?',
      options: [
        'The number of characters in the string',
        'The memory size of the string',
        'The index of the last character',
        'The number of words in the string',
      ],
      answer: 'The number of characters in the string',
    },
    {
      question: 'Which method is used to convert a string to uppercase?',
      options: [
        'toUpperCase()',
        'upperCase()',
        "changeCase('upper')",
        'capitalize()',
      ],
      answer: 'toUpperCase()',
    },
    {
      question: "What is the output of 'Hello'.charAt(1)?",
      options: ['H', 'e', 'l', 'o'],
      answer: 'e',
    },
    {
      question:
        'Which method is used to remove whitespace from both ends of a string?',
      options: ['trim()', 'strip()', 'removeWhitespace()', 'clean()'],
      answer: 'trim()',
    },
    {
      question:
        'What does the indexOf() method return if the substring is not found?',
      options: ['0', '-1', 'undefined', 'null'],
      answer: '-1',
    },
    {
      question:
        'Which method is used to split a string into an array of substrings?',
      options: ['split()', 'slice()', 'divide()', 'separate()'],
      answer: 'split()',
    },
    {
      question: "What is the result of 'Hello' + ' ' + 'World'?",
      options: ['HelloWorld', 'Hello World', 'Hello+World', 'Error'],
      answer: 'Hello World',
    },
    {
      question:
        'Which method checks if a string starts with a specified substring?',
      options: ['startsWith()', 'beginsWith()', 'includes()', 'contains()'],
      answer: 'startsWith()',
    },
    {
      question: "What is the output of 'JavaScript'.slice(0, 4)?",
      options: ['Java', 'JavaS', 'Scri', 'avaS'],
      answer: 'Java',
    },
    {
      question: 'Which of the following is true about strings in JavaScript?',
      options: [
        'Strings are mutable',
        'Strings are immutable',
        'Strings can be redefined',
        'Strings are not primitive types',
      ],
      answer: 'Strings are immutable',
    },
    {
      question: 'What does the replace() method do by default?',
      options: [
        'Replaces all occurrences of a substring',
        'Replaces only the first occurrence of a substring',
        'Replaces the last occurrence of a substring',
        'Replaces nothing',
      ],
      answer: 'Replaces only the first occurrence of a substring',
    },
    {
      question:
        'Which method is used to check if a string contains another string?',
      options: ['contains()', 'includes()', 'has()', 'indexOf() !== -1'],
      answer: 'includes()',
    },
    {
      question: 'What is the purpose of template literals in JavaScript?',
      options: [
        'To create multi-line strings',
        'To perform string interpolation',
        'Both A and B',
        'To create immutable strings',
      ],
      answer: 'Both A and B',
    },
    {
      question: "What is the output of 'Hello'.repeat(3)?",
      options: [
        'HelloHelloHello',
        'Hello Hello Hello',
        '"Hello""Hello""Hello"',
        'Error',
      ],
      answer: 'HelloHelloHello',
    },
  ],
  codingExercises: [
    {
      instructions:
        'Write a function that takes a string and returns the string with all vowels removed.',
      startingCode: 'function removeVowels(str) {\n  // Your code here\n}',
      solution:
        "function removeVowels(str) {\n  return str.replace(/[aeiou]/gi, '');\n}",
    },
    {
      instructions:
        "Create a function that takes a string and returns true if it's a palindrome, false otherwise. Ignore case and non-alphanumeric characters.",
      startingCode: 'function isPalindrome(str) {\n  // Your code here\n}',
      solution:
        "function isPalindrome(str) {\n  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleanStr === cleanStr.split('').reverse().join('');\n}",
    },
    {
      instructions:
        'Write a function that takes a string and returns the most frequent character in the string.',
      startingCode: 'function mostFrequentChar(str) {\n  // Your code here\n}',
      solution:
        'function mostFrequentChar(str) {\n  const charCount = {};\n  for (let char of str) {\n    charCount[char] = (charCount[char] || 0) + 1;\n  }\n  return Object.entries(charCount).reduce((a, b) => a[1] > b[1] ? a : b)[0];\n}',
    },
    {
      instructions:
        'Create a function that takes a string and returns a new string with the first letter of each word capitalized.',
      startingCode: 'function capitalizeWords(str) {\n  // Your code here\n}',
      solution:
        "function capitalizeWords(str) {\n  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');\n}",
    },
    {
      instructions:
        'Write a function that takes two strings and returns true if they are anagrams of each other, false otherwise.',
      startingCode:
        'function areAnagrams(str1, str2) {\n  // Your code here\n}',
      solution:
        "function areAnagrams(str1, str2) {\n  const normalize = str => str.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('');\n  return normalize(str1) === normalize(str2);\n}",
    },
    {
      instructions:
        'Create a function that takes a string and returns the string with words in reverse order.',
      startingCode: 'function reverseWords(str) {\n  // Your code here\n}',
      solution:
        "function reverseWords(str) {\n  return str.split(' ').reverse().join(' ');\n}",
    },
    {
      instructions:
        'Write a function that takes a string and returns true if all characters in the string are unique, false otherwise.',
      startingCode: 'function hasUniqueChars(str) {\n  // Your code here\n}',
      solution:
        'function hasUniqueChars(str) {\n  return new Set(str).size === str.length;\n}',
    },
    {
      instructions:
        'Create a function that takes a string and returns the longest word in the string.',
      startingCode: 'function longestWord(str) {\n  // Your code here\n}',
      solution:
        "function longestWord(str) {\n  return str.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest);\n}",
    },
    {
      instructions:
        "Write a function that takes a string and returns the string with every word's first and last letter swapped.",
      startingCode: 'function swapFirstLast(str) {\n  // Your code here\n}',
      solution:
        "function swapFirstLast(str) {\n  return str.split(' ').map(word => {\n    if (word.length <= 1) return word;\n    return word[word.length - 1] + word.slice(1, -1) + word[0];\n  }).join(' ');\n}",
    },
    {
      instructions:
        'Create a function that takes a string and returns the number of vowels in the string.',
      startingCode: 'function countVowels(str) {\n  // Your code here\n}',
      solution:
        'function countVowels(str) {\n  return (str.match(/[aeiou]/gi) || []).length;\n}',
    },
  ],
};

export const courseContent: CourseSection[] = [
  htmlCourseSection,
  cssCourseSection,
  javascriptIntroCourseSection,
  numbersCourseSection,
  stringsInJavaScriptCourseSection,
];
