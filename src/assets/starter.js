import React, { useState, useEffect } from 'react';
import {
  Book,
  Code,
  CheckSquare,
  Menu,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.log('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
const courseContent = [
  {
    title: 'HTML Basics',
    description: 'Master the fundamentals of HTML structure and tags.',
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
        instructions:
          'Create an HTML structure with a heading and a paragraph.',
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
        solution:
          '<div class="container" id="main-content">This is a div</div>',
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
  },
  {
    title: 'CSS Fundamentals',
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
        question:
          'Which property is used to set the left margin of an element?',
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
        instructions:
          'Style a paragraph to have red text and a blue background.',
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
        instructions:
          'Style a paragraph to have red text and a blue background.',
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
  },
  {
    title: 'JavaScript Essentials',
    description: 'Master the fundamentals of JavaScript programming.',
    lessons: [
      {
        title: 'Introduction to JavaScript',
        content:
          "JavaScript is a programming language that allows you to implement complex features on web pages. It's a core technology of the World Wide Web and is supported by all modern web browsers. JavaScript can update and change both HTML and CSS, and can calculate, manipulate and validate data.",
      },
      {
        title: 'Variables and Data Types',
        content:
          "In JavaScript, you can declare variables using 'var', 'let', or 'const'. 'let' and 'const' are block-scoped and introduced in ES6. JavaScript has several data types: Number, String, Boolean, Undefined, Null, Object, and Symbol. You can use the 'typeof' operator to check the type of a variable.",
      },
      {
        title: 'Operators and Expressions',
        content:
          'JavaScript supports arithmetic operators (+, -, *, /, %), comparison operators (==, ===, !=, !==, >, <, >=, <=), logical operators (&&, ||, !), and assignment operators (=, +=, -=, *=, /=). Expressions are combinations of values, variables, and operators that resolve to a value.',
      },
      {
        title: 'Control Structures',
        content:
          'Control structures in JavaScript include if-else statements for conditional execution, switch statements for multiple branches, for loops for iterating a specific number of times, while and do-while loops for condition-based iteration, and for...in and for...of loops for iterating over object properties and array elements.',
      },
      {
        title: 'Functions',
        content:
          "Functions in JavaScript are blocks of reusable code. They can be declared using the 'function' keyword or as arrow functions (=>). Functions can accept parameters and return values. JavaScript also supports anonymous functions, immediately invoked function expressions (IIFE), and higher-order functions.",
      },
      {
        title: 'Arrays',
        content:
          'Arrays in JavaScript are ordered lists of values. They can contain mixed data types and are zero-indexed. Arrays have many built-in methods like push(), pop(), shift(), unshift(), splice(), slice(), map(), filter(), and reduce(). You can iterate over arrays using loops or array methods.',
      },
      {
        title: 'Objects',
        content:
          "Objects in JavaScript are collections of key-value pairs. You can create objects using object literals {} or the Object constructor. Objects can contain properties and methods. You can access object properties using dot notation (obj.prop) or bracket notation (obj['prop']). JavaScript also supports object destructuring and the spread operator.",
      },
      {
        title: 'DOM Manipulation',
        content:
          'The Document Object Model (DOM) is a programming interface for HTML and XML documents. JavaScript can be used to access and change all the elements of an HTML document. Common methods include getElementById(), querySelector(), createElement(), appendChild(), and removeChild(). You can also modify element attributes and styles using JavaScript.',
      },
      {
        title: 'Events',
        content:
          'JavaScript can react to HTML events like clicks, form submissions, key presses, and more. You can attach event listeners to elements using addEventListener() method. Event objects contain information about the event, such as the target element, event type, and any associated data.',
      },
      {
        title: 'Asynchronous JavaScript',
        content:
          'Asynchronous programming in JavaScript allows code to run in the background without blocking the execution of other code. This is crucial for operations like fetching data from a server. JavaScript supports callbacks, promises, and async/await syntax for handling asynchronous operations.',
      },
      {
        title: 'Error Handling',
        content:
          'JavaScript provides a try...catch statement for handling exceptions. You can also throw custom errors using the throw statement. The finally clause can be used to execute code after try and catch, regardless of the result. Error objects in JavaScript have properties like name and message.',
      },
      {
        title: 'ES6+ Features',
        content:
          'ECMAScript 2015 (ES6) and later versions introduced many new features to JavaScript. These include let and const for variable declaration, arrow functions, template literals, destructuring assignment, default parameters, rest and spread operators, classes, modules, and more. These features make JavaScript code more readable and expressive.',
      },
    ],
    quiz: [
      {
        question:
          'Which keyword is used to declare a constant variable in JavaScript?',
        options: ['var', 'let', 'const', 'fixed'],
        answer: 'const',
      },
      {
        question: 'What will be the output of: console.log(typeof []);',
        options: ['array', 'object', 'list', 'undefined'],
        answer: 'object',
      },
      {
        question:
          'Which method is used to add an element to the end of an array?',
        options: ['push()', 'append()', 'addToEnd()', 'insert()'],
        answer: 'push()',
      },
      {
        question: "What does the '===' operator do in JavaScript?",
        options: [
          'Checks for equality',
          'Checks for equality and type',
          'Assigns a value',
          'Checks if a variable is defined',
        ],
        answer: 'Checks for equality and type',
      },
      {
        question: 'How do you write a single-line comment in JavaScript?',
        options: [
          '<!-- comment -->',
          '// comment',
          '/* comment */',
          "' comment",
        ],
        answer: '// comment',
      },
      {
        question:
          'Which of these is not a valid way to declare a function in JavaScript?',
        options: [
          'function myFunc() {}',
          'const myFunc = function() {}',
          'const myFunc = () => {}',
          'function = myFunc() {}',
        ],
        answer: 'function = myFunc() {}',
      },
      {
        question:
          "What is the correct way to check if a variable 'x' is not undefined?",
        options: [
          'if (x !== undefined)',
          "if (typeof x !== 'undefined')",
          'if (x != undefined)',
          'if (!undefined(x))',
        ],
        answer: "if (typeof x !== 'undefined')",
      },
      {
        question:
          'Which method is used to remove the last element from an array?',
        options: ['pop()', 'push()', 'shift()', 'unshift()'],
        answer: 'pop()',
      },
      {
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: [
          'The current function',
          'The global object',
          'The object the method is called on',
          'The parent object',
        ],
        answer: 'The object the method is called on',
      },
      {
        question: 'Which of these is not a valid JavaScript data type?',
        options: ['Number', 'String', 'Boolean', 'Float'],
        answer: 'Float',
      },
      {
        question:
          "What is the purpose of the 'use strict' directive in JavaScript?",
        options: [
          'To enable strict mode',
          'To include external scripts',
          'To declare global variables',
          'To optimize code execution',
        ],
        answer: 'To enable strict mode',
      },
      {
        question:
          'Which method is used to select an element by its id in JavaScript?',
        options: [
          'querySelector()',
          'getElement()',
          'getElementById()',
          'selectElement()',
        ],
        answer: 'getElementById()',
      },
      {
        question: "What is the result of 3 + '3' in JavaScript?",
        options: ['6', '33', 'NaN', 'Error'],
        answer: '33',
      },
      {
        question:
          'Which loop in JavaScript is guaranteed to execute at least once?',
        options: ['for loop', 'while loop', 'do...while loop', 'for...in loop'],
        answer: 'do...while loop',
      },
      {
        question: "What is the purpose of the 'JSON.parse()' method?",
        options: [
          'To stringify a JavaScript object',
          'To parse a JSON string into a JavaScript object',
          'To create a new JSON object',
          'To validate JSON data',
        ],
        answer: 'To parse a JSON string into a JavaScript object',
      },
      {
        question:
          'Which method is used to add one or more elements to the beginning of an array?',
        options: ['unshift()', 'push()', 'prepend()', 'addStart()'],
        answer: 'unshift()',
      },
      {
        question: "What does the 'NaN' value represent in JavaScript?",
        options: [
          'Not a Number',
          'Null and None',
          'Negative Number',
          'New Assignment',
        ],
        answer: 'Not a Number',
      },
      {
        question: 'How can you convert a string to an integer in JavaScript?',
        options: [
          'Integer.parse()',
          'parseInt()',
          'toInteger()',
          'String.toInt()',
        ],
        answer: 'parseInt()',
      },
      {
        question: 'Which statement is used to exit a loop in JavaScript?',
        options: ['exit', 'break', 'return', 'stop'],
        answer: 'break',
      },
      {
        question:
          "What is the purpose of the 'setTimeout()' function in JavaScript?",
        options: [
          'To pause the execution of a script',
          'To set a timer for executing a function',
          'To measure the execution time of a function',
          'To schedule regular interval executions',
        ],
        answer: 'To set a timer for executing a function',
      },
    ],
    codingExercises: [
      {
        instructions: 'Write a function that returns the sum of two numbers.',
        startingCode: 'function sum(a, b) {\n  // Write your code here\n}',
        solution: 'function sum(a, b) {\n  return a + b;\n}',
      },
      {
        instructions:
          'Create a function that checks if a number is even or odd.',
        startingCode: 'function isEven(num) {\n  // Write your code here\n}',
        solution: 'function isEven(num) {\n  return num % 2 === 0;\n}',
      },
      {
        instructions: 'Write a function that reverses a string.',
        startingCode:
          'function reverseString(str) {\n  // Write your code here\n}',
        solution:
          "function reverseString(str) {\n  return str.split('').reverse().join('');\n}",
      },
      {
        instructions:
          'Create a function that finds the maximum number in an array.',
        startingCode: 'function findMax(arr) {\n  // Write your code here\n}',
        solution: 'function findMax(arr) {\n  return Math.max(...arr);\n}',
      },
      {
        instructions:
          'Write a function that counts the occurrence of a specific element in an array.',
        startingCode:
          'function countOccurrence(arr, element) {\n  // Write your code here\n}',
        solution:
          'function countOccurrence(arr, element) {\n  return arr.filter(item => item === element).length;\n}',
      },
      {
        instructions:
          'Create a function that removes duplicate elements from an array.',
        startingCode:
          'function removeDuplicates(arr) {\n  // Write your code here\n}',
        solution:
          'function removeDuplicates(arr) {\n  return [...new Set(arr)];\n}',
      },
      {
        instructions:
          'Write a function that checks if a string is a palindrome.',
        startingCode:
          'function isPalindrome(str) {\n  // Write your code here\n}',
        solution:
          "function isPalindrome(str) {\n  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');\n  return cleanStr === cleanStr.split('').reverse().join('');\n}",
      },
      {
        instructions:
          'Create a function that calculates the factorial of a number.',
        startingCode: 'function factorial(n) {\n  // Write your code here\n}',
        solution:
          'function factorial(n) {\n  if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}',
      },
      {
        instructions:
          'Write a function that finds the first non-repeated character in a string.',
        startingCode:
          'function firstNonRepeatedChar(str) {\n  // Write your code here\n}',
        solution:
          'function firstNonRepeatedChar(str) {\n  for (let i = 0; i < str.length; i++) {\n    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {\n      return str[i];\n    }\n  }\n  return null;\n}',
      },
      {
        instructions:
          'Create a function that generates a random password of a given length.',
        startingCode:
          'function generatePassword(length) {\n  // Write your code here\n}',
        solution:
          "function generatePassword(length) {\n  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';\n  return Array.from({ length }, () => charset[Math.floor(Math.random() * charset.length)]).join('');\n}",
      },
    ],
  },
  // ... (CSS and JavaScript modules remain the same)
];

const LessonContent = ({ lesson }) => (
  <div className='mb-4'>
    <h3 className='text-lg font-semibold'>{lesson.title}</h3>
    <p>{lesson.content}</p>
  </div>
);

const Quiz = ({ quiz }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(
    Array(quiz.length).fill('')
  );
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    console.log('Quiz rendered with currentQuestion:', currentQuestion);
  }, [currentQuestion]);

  const handleAnswer = (answer) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === quiz[index].answer ? score + 1 : score;
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className='mt-4'>
        <h3 className='text-xl font-semibold mb-2'>Quiz Results</h3>
        <p className='text-lg mb-2'>
          You scored {score} out of {quiz.length}!
        </p>
        <Progress value={(score / quiz.length) * 100} className='mt-2 mb-4' />
        {quiz.map((question, index) => (
          <Card key={index} className='mb-4'>
            <CardHeader>
              <CardTitle className='text-lg'>Question {index + 1}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className='font-semibold mb-2'>{question.question}</p>
              <p
                className={
                  selectedAnswers[index] === question.answer
                    ? 'text-green-600'
                    : 'text-red-600'
                }
              >
                Your answer: {selectedAnswers[index]}
              </p>
              <p className='text-green-600'>
                Correct answer: {question.answer}
              </p>
            </CardContent>
          </Card>
        ))}
        <Button
          onClick={() => {
            setCurrentQuestion(0);
            setSelectedAnswers(Array(quiz.length).fill(''));
            setShowResults(false);
          }}
          className='mt-4'
        >
          Retry Quiz
        </Button>
      </div>
    );
  }

  return (
    <div className='mt-4'>
      <h3 className='text-lg font-semibold mb-2'>
        Question {currentQuestion + 1} of {quiz.length}
      </h3>
      <p className='mb-4'>{quiz[currentQuestion].question}</p>
      <RadioGroup
        value={selectedAnswers[currentQuestion]}
        onValueChange={handleAnswer}
      >
        {quiz[currentQuestion].options.map((option, index) => (
          <div key={index} className='flex items-center space-x-2'>
            <RadioGroupItem value={option} id={`option${index}`} />
            <Label htmlFor={`option${index}`}>{option}</Label>
          </div>
        ))}
      </RadioGroup>
      <div className='flex justify-between mt-4'>
        <Button onClick={handlePrevious} disabled={currentQuestion === 0}>
          <ArrowLeft className='mr-2 h-4 w-4' /> Previous
        </Button>
        <Button onClick={handleNext}>
          {currentQuestion === quiz.length - 1 ? 'Finish' : 'Next'}{' '}
          <ArrowRight className='ml-2 h-4 w-4' />
        </Button>
      </div>
    </div>
  );
};

const CodingExercise = ({ exercises }) => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [code, setCode] = useState(exercises[currentExercise].startingCode);
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    console.log(
      'CodingExercise rendered with currentExercise:',
      currentExercise
    );
  }, [currentExercise]);

  const handleNext = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setCode(exercises[currentExercise + 1].startingCode);
      setShowSolution(false);
    }
  };

  const handlePrevious = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
      setCode(exercises[currentExercise - 1].startingCode);
      setShowSolution(false);
    }
  };

  return (
    <div className='mt-4'>
      <h3 className='text-lg font-semibold mb-2'>
        Coding Exercise {currentExercise + 1} of {exercises.length}
      </h3>
      <p>{exercises[currentExercise].instructions}</p>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className='w-full h-40 p-2 border rounded mt-2 font-mono'
      />
      <div className='flex justify-between mt-4'>
        <Button onClick={handlePrevious} disabled={currentExercise === 0}>
          <ArrowLeft className='mr-2 h-4 w-4' /> Previous
        </Button>
        <Button onClick={() => setShowSolution(!showSolution)}>
          {showSolution ? 'Hide Solution' : 'Show Solution'}
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentExercise === exercises.length - 1}
        >
          Next <ArrowRight className='ml-2 h-4 w-4' />
        </Button>
      </div>
      {showSolution && (
        <pre className='mt-4 p-2 bg-gray-100 rounded overflow-x-auto'>
          <code>{exercises[currentExercise].solution}</code>
        </pre>
      )}
    </div>
  );
};

const CourseContent = ({ content }) => {
  useEffect(() => {
    console.log('CourseContent rendered with:', content);
  }, [content]);

  return (
    <Tabs defaultValue='lessons' className='w-full'>
      <TabsList>
        <TabsTrigger value='lessons'>
          <Book className='mr-2' />
          Lessons
        </TabsTrigger>
        <TabsTrigger value='quiz'>
          <CheckSquare className='mr-2' />
          Quiz
        </TabsTrigger>
        <TabsTrigger value='coding'>
          <Code className='mr-2' />
          Coding
        </TabsTrigger>
      </TabsList>
      <TabsContent value='lessons'>
        {content.lessons.map((lesson, index) => (
          <LessonContent key={index} lesson={lesson} />
        ))}
      </TabsContent>
      <TabsContent value='quiz'>
        <ErrorBoundary>
          <Quiz quiz={content.quiz} />
        </ErrorBoundary>
      </TabsContent>
      <TabsContent value='coding'>
        <ErrorBoundary>
          <CodingExercise exercises={content.codingExercises} />
        </ErrorBoundary>
      </TabsContent>
    </Tabs>
  );
};

const FrontendBasicsCourse = () => {
  const [selectedModule, setSelectedModule] = useState(0);

  useEffect(() => {
    console.log(
      'FrontendBasicsCourse rendered with selectedModule:',
      selectedModule
    );
  }, [selectedModule]);

  return (
    <ErrorBoundary>
      <div className='max-w-4xl mx-auto p-4'>
        <header className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold'>Frontend Basics Course</h1>
          <Button variant='outline' size='icon'>
            <Menu className='h-4 w-4' />
          </Button>
        </header>
        <div className='grid md:grid-cols-3 gap-4'>
          {courseContent.map((module, index) => (
            <Card
              key={index}
              className={index === selectedModule ? 'border-blue-500' : ''}
            >
              <CardHeader>
                <CardTitle>{module.title}</CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={() => setSelectedModule(index)}>
                  {index === selectedModule
                    ? 'Currently Viewing'
                    : 'View Module'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Card className='mt-6'>
          <CardHeader>
            <CardTitle>{courseContent[selectedModule].title}</CardTitle>
            <CardDescription>
              {courseContent[selectedModule].description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CourseContent content={courseContent[selectedModule]} />
          </CardContent>
        </Card>
      </div>
    </ErrorBoundary>
  );
};

export default FrontendBasicsCourse;

const book = {
  chapters: [
    {
      title: "מבוא לג'אווהסקריפט",
      content: `ג'אווהסקריפט היא שפת תכנות פופולרית המשמשת לפיתוח אתרי אינטרנט ואפליקציות. היא נוצרה ב-1995 על ידי ברנדן אייך ומאז התפתחה למגוון רחב של שימושים. בפרק זה נלמד על היסודות של השפה, כולל משתנים, טיפוסי נתונים, ופעולות בסיסיות.
        נושאים עיקריים:
        1. היסטוריה קצרה של ג'אווהסקריפט
        2. סביבת העבודה
        3. תחביר בסיסי
        4. משתנים וקבועים
        5. טיפוסי נתונים בסיסיים
      
        בואו נתחיל ללמוד את היסודות של אחת השפות החשובות ביותר בעולם התכנות!`,
      quiz: [
        {
          question: "מתי נוצרה שפת ג'אווהסקריפט?",
          options: ['1990', '1995', '2000', '2005'],
          answer: 1,
        },
        {
          question: "מי יצר את ג'אווהסקריפט?",
          options: ['ביל גייטס', "סטיב ג'ובס", 'ברנדן אייך', 'מארק צוקרברג'],
          answer: 2,
        },
        {
          question: "איזה מהבאים אינו טיפוס נתונים בסיסי בג'אווהסקריפט?",
          options: ['מספר', 'מחרוזת', 'בוליאני', 'מערך'],
          answer: 3,
        },
      ],
      codeExercise: {
        instructions:
          "כתבו קוד ג'אווהסקריפט שמגדיר משתנה בשם 'שם' ומציב בו את השם שלכם. לאחר מכן, הדפיסו הודעת ברוכים הבאים עם השם שלכם באמצעות console.log.",
        startingCode:
          "// הגדירו את המשתנה 'שם' כאן\n\n// הדפיסו הודעת ברוכים הבאים",
        solution:
          "const שם = 'ישראל ישראלי';\nconsole.log('ברוכים הבאים, ' + שם + '!');",
      },
    },
    {
      title: 'משתנים',
      content:
        "משתנים הם רכיבים שיכולים להכיל בתוכם מידע, ואפשר לשנותם. משתנה בג'אווהסקריפט מוגדר באופן הבא: let variant = 'Hello World';",
      quiz: [
        {
          question: "איך מגדירים משתנה בג'אווהסקריפט?",
          options: ['var x = 5;', 'let x = 5;', 'const x = 5;', 'x = 5;'],
          answer: 1,
        },
      ],
      codeExercise: {
        instructions: "הגדר משתנה בשם 'myName' והצב בו את השם שלך.",
        startingCode: '// כתוב את הקוד שלך כאן',
        solution: "let myName = 'Your Name';",
      },
    },
    {
      title: 'טקסט',
      content:
        "טקסט (באנגלית text string) הוא סוג מידע חשוב מאוד ובסיסי מאוד במערכות מידע. משתמשים בטקסט בכל מקום ובכל מערכת. בג'אווהסקריפט, מחרוזות טקסט מוקפות בגרשיים בודדים או כפולים.",
      quiz: [
        {
          question: "איך מגדירים מחרוזת טקסט בג'אווהסקריפט?",
          options: ["'Hello'", 'Hello', '(Hello)', '[Hello]'],
          answer: 0,
        },
      ],
      codeExercise: {
        instructions:
          "צור מחרוזת טקסט המכילה את המשפט 'JavaScript is awesome!' והדפס אותה לקונסולה.",
        startingCode: '// כתוב את הקוד שלך כאן',
        solution:
          "let message = 'JavaScript is awesome!';\nconsole.log(message);",
      },
    },
    {
      title: 'מספרים',
      content:
        "בג'אווהסקריפט, מספרים הם סוג מידע נוסף. ניתן לבצע פעולות חשבוניות על מספרים, כגון חיבור, חיסור, כפל וחילוק.",
      quiz: [
        {
          question: "מה תהיה התוצאה של 5 + '5' בג'אווהסקריפט?",
          options: ['10', "'55'", 'Error', 'undefined'],
          answer: 1,
        },
      ],
      codeExercise: {
        instructions: 'כתוב פונקציה שמקבלת שני מספרים ומחזירה את סכומם.',
        startingCode: 'function sum(a, b) {\n  // כתוב את הקוד שלך כאן\n}',
        solution: 'function sum(a, b) {\n  return a + b;\n}',
      },
    },
    {
      title: 'סוגי מידע פרימיטיביים נוספים',
      content:
        "מלבד מחרוזות טקסט ומספרים, ג'אווהסקריפט כוללת סוגי מידע פרימיטיביים נוספים כמו boolean (אמת/שקר), undefined, null, ו-Symbol.",
      quiz: [
        {
          question: "איזה מהבאים אינו סוג מידע פרימיטיבי בג'אווהסקריפט?",
          options: ['boolean', 'undefined', 'null', 'array'],
          answer: 3,
        },
      ],
      codeExercise: {
        instructions:
          'צור משתנה מסוג boolean והדפס את הערך ההפוך שלו לקונסולה.',
        startingCode: '// כתוב את הקוד שלך כאן',
        solution: 'let isTrue = true;\nconsole.log(!isTrue);',
      },
    },
    {
      title: 'הערות',
      content:
        "הערות בקוד משמשות להסברים ולתיעוד. בג'אווהסקריפט, ניתן להשתמש ב-// להערות בשורה אחת, או /* */ להערות במספר שורות.",
      quiz: [
        {
          question: "איך כותבים הערה בשורה אחת בג'אווהסקריפט?",
          options: ['// הערה', '/* הערה */', '# הערה', '-- הערה'],
          answer: 0,
        },
      ],
      codeExercise: {
        instructions:
          "כתוב קוד שמדפיס 'Hello' לקונסולה, והוסף הערה המסבירה מה הקוד עושה.",
        startingCode: '// כתוב את הקוד שלך כאן',
        solution:
          "// This code prints 'Hello' to the console\nconsole.log('Hello');",
      },
    },
    {
      title: "פונקציות ובקרת זרימה בג'אווהסקריפט",
      content: `פונקציות ובקרת זרימה הן מרכיבים חיוניים בכל שפת תכנות, וג'אווהסקריפט אינה יוצאת דופן. בפרק זה נלמד כיצד להגדיר ולהשתמש בפונקציות, וכיצד לשלוט בזרימת התוכנית באמצעות משפטי תנאי ולולאות.
      
        נושאים עיקריים:
        1. הגדרת פונקציות
        2. פרמטרים וערכי החזרה
        3. משפטי תנאי (if, else if, else)
        4. מבני switch
        5. לולאות (for, while, do-while)
        6. פונקציות חץ
        7. סקופ ומשתנים
      
        פונקציות מאפשרות לנו לארגן את הקוד שלנו ביחידות לוגיות, בעוד שמבני בקרת זרימה מאפשרים לנו לקבל החלטות ולחזור על פעולות. הבנה טובה של נושאים אלו היא קריטית לכתיבת קוד יעיל ומאורגן.
        בואו נצלול לעומק הנושאים הללו ונראה כיצד הם משתלבים יחד ליצירת תוכניות מורכבות יותר!`,
      quiz: [
        {
          question: "איזו מילת מפתח משמשת להגדרת פונקציה בג'אווהסקריפט?",
          options: ['func', 'def', 'function', 'define'],
          answer: 2,
        },
        {
          question:
            "מה יודפס לקונסולה בקוד הבא?\n\nlet x = 5;\nif (x > 3) {\n  console.log('גדול');\n} else {\n  console.log('קטן');\n}",
          options: ['גדול', 'קטן', 'שום דבר', 'שגיאה'],
          answer: 0,
        },
        {
          question: 'איזו לולאה תמיד תרוץ לפחות פעם אחת?',
          options: ['for', 'while', 'do-while', 'forEach'],
          answer: 2,
        },
      ],
      codeExercise: {
        instructions:
          "כתבו פונקציה בשם 'הכפל' שמקבלת שני מספרים כפרמטרים ומחזירה את המכפלה שלהם. לאחר מכן, השתמשו בפונקציה כדי להכפיל 5 ו-3 והדפיסו את התוצאה.",
        startingCode:
          "// הגדירו את הפונקציה 'הכפל' כאן\n\n// קראו לפונקציה והדפיסו את התוצאה",
        solution:
          'function הכפל(א, ב) {\n  return א * ב;\n}\n\nconst תוצאה = הכפל(5, 3);\nconsole.log(תוצאה); // יודפס: 15',
      },
    },
    {
      title: 'בקרת זרימה – משפטי תנאי',
      content:
        'משפטי תנאי מאפשרים לנו לבצע פעולות שונות בהתאם לתנאים מסוימים. המבנה הבסיסי הוא if-else.',
      quiz: [
        {
          question:
            "איזה אופרטור משמש להשוואה קפדנית (שווה בערך ובסוג) בג'אווהסקריפט?",
          options: ['==', '===', '=', '!='],
          answer: 1,
        },
      ],
      codeExercise: {
        instructions:
          'כתוב משפט תנאי שבודק אם מספר הוא זוגי או אי-זוגי והדפס הודעה מתאימה.',
        startingCode: 'let num = 10;\n// כתוב את הקוד שלך כאן',
        solution:
          "let num = 10;\nif (num % 2 === 0) {\n  console.log('המספר זוגי');\n} else {\n  console.log('המספר אי-זוגי');\n}",
      },
    },
    {
      title: 'switch case',
      content:
        'משפט switch מאפשר לנו לבדוק ערך של ביטוי מול מספר מקרים אפשריים.',
      quiz: [
        {
          question: "מה תפקידו של 'break' במשפט switch?",
          options: [
            'להתחיל את הבדיקה',
            'לסיים את כל הבדיקות',
            'לעבור למקרה הבא',
            'לצאת מהמקרה הנוכחי',
          ],
          answer: 3,
        },
      ],
      codeExercise: {
        instructions:
          'כתוב משפט switch שמקבל מספר יום בשבוע (1-7) ומדפיס את שם היום המתאים.',
        startingCode: 'let day = 3;\n// כתוב את הקוד שלך כאן',
        solution:
          "let day = 3;\nswitch(day) {\n  case 1:\n    console.log('ראשון');\n    break;\n  case 2:\n    console.log('שני');\n    break;\n  case 3:\n    console.log('שלישי');\n    break;\n  // המשך עבור שאר הימים\n  default:\n    console.log('יום לא חוקי');\n}",
      },
    },
    {
      title: 'קבועים',
      content:
        "קבועים הם משתנים שלא ניתן לשנות את ערכם לאחר ההגדרה הראשונית. הם מוגדרים באמצעות המילה השמורה 'const'.",
      quiz: [
        {
          question: 'מה יקרה אם ננסה לשנות את ערכו של קבוע?',
          options: [
            'הערך ישתנה',
            'לא יקרה כלום',
            'תזרק שגיאה',
            'הקבוע יהפוך למשתנה רגיל',
          ],
          answer: 2,
        },
      ],
      codeExercise: {
        instructions:
          'הגדר קבוע בשם PI עם הערך 3.14 והשתמש בו לחישוב היקף מעגל עם רדיוס 5.',
        startingCode: '// כתוב את הקוד שלך כאן',
        solution:
          "const PI = 3.14;\nlet radius = 5;\nlet circumference = 2 * PI * radius;\nconsole.log('היקף המעגל:', circumference);",
      },
    },
  ],
};
