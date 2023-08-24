export const htmlTopicData = [
  {
    topic: 'HTML5 semantic tags',
    brief:
      'HTML5 introduced a set of new semantic elements that convey the meaning of the content within them. Examples include <article>, <aside>, <details>, <figcaption>, <figure>, <footer>, <header>, <main>, <mark>, <nav>, <section>, <summary>, and <time>.',
  },
  {
    topic: 'HTML forms',
    brief:
      'HTML forms are used to collect user input. They can contain various types of input elements like text fields, checkboxes, radio-buttons, submit buttons, and more. The <form> tag is used to create an HTML form.',
  },
  {
    topic: 'HTML tables',
    brief:
      'HTML tables are used to display data in tabular form (row * column). They are created using the <table> element, with rows represented by <tr> tags, headers by <th> tags, and standard data cells by <td> tags.',
  },
  {
    topic: 'HTML images',
    brief:
      "HTML images are displayed using the <img> tag. The 'src' attribute specifies the path to the image to be displayed, and the 'alt' attribute provides an alternative text for the image, which is useful for accessibility.",
  },
  {
    topic: 'HTML links',
    brief:
      "HTML links, or hyperlinks, allow users to navigate from one web page to another. They are created using the <a> tag, with the 'href' attribute specifying the destination URL.",
  },
  {
    topic: 'HTML lists',
    brief:
      'HTML supports ordered (<ol>), unordered (<ul>), and description (<dl>) lists. Ordered lists use numbers, unordered lists use bullets, and description lists have a title and description.',
  },
  {
    topic: 'HTML headings and paragraphs',
    brief:
      'HTML headings are defined with the <h1> through <h6> tags, with <h1> being the highest level. Paragraphs are defined using the <p> tag.',
  },
  {
    topic: 'HTML attributes',
    brief:
      'HTML attributes provide additional information about an element. They are always specified in the opening tag and usually come in name/value pairs like name="value".',
  },
  {
    topic: 'HTML comments',
    brief:
      'HTML comments are not displayed in the browser but can be used to add explanatory notes to the code or to prevent the browser from executing specific parts of the code. Comments are wrapped in <!-- and -->.',
  },
  {
    topic: 'HTML entities',
    brief:
      "HTML entities are used to display reserved characters or characters that aren't present on the keyboard. Examples include &amp; for &, &lt; for <, &gt; for >, &quot; for \", and &apos; for '.",
  },
  {
    topic: 'HTML layout techniques (floats, positioning)',
    brief:
      "Floats allow elements to be pushed to the left or right, causing surrounding content to wrap around them. Positioning can be used to control the placement of elements using properties like 'static', 'relative', 'absolute', 'fixed', and 'sticky'.",
  },
  {
    topic: 'HTML responsive design',
    brief:
      "Responsive design ensures web pages look good on all devices by automatically adjusting the layout based on the device's screen size. Techniques include fluid grids, flexible images, and media queries.",
  },
  {
    topic: 'HTML accessibility (ARIA roles and attributes)',
    brief:
      'Accessibility ensures web content is usable by everyone, including people with disabilities. ARIA (Accessible Rich Internet Applications) roles and attributes provide ways to make web content and web apps more accessible to people with disabilities.',
  },
  {
    topic: 'HTML validation (W3C validation service)',
    brief:
      'Validation is the process of checking if the HTML code of a web page is correct. The W3C validation service is a free online tool provided by the World Wide Web Consortium (W3C) to validate web documents in formats like HTML and XHTML.',
  },
  {
    topic: 'HTML5 APIs (Canvas, Geolocation)',
    brief:
      "HTML5 introduced several new APIs for creating more interactive and feature-rich web applications. Canvas allows for dynamic rendering of graphics, and Geolocation allows a user's location to be shared with a web application.",
  },
];

export const cssTopicData = [
  {
    topic: 'CSS selectors (element, class, ID)',
    brief:
      'CSS selectors are patterns used to select and style HTML elements. They can be based on element names, class names prefixed with a dot (.), or IDs prefixed with a hash (#).',
  },
  {
    topic: 'CSS box model (margin, border, padding)',
    brief:
      'The CSS box model describes the layout of elements, with the content at the center surrounded by padding, border, and margin layers. Each layer affects the final size and position of the element on the page.',
  },
  {
    topic: 'CSS display property (block, inline, inline-block)',
    brief:
      "The display property determines how an element is displayed. 'block' elements take up the full width, 'inline' elements only take up as much width as necessary, and 'inline-block' elements are inline but respect box-sizing properties.",
  },
  {
    topic: 'CSS positioning (static, relative, absolute, fixed)',
    brief:
      "CSS positioning controls how and where elements are placed. 'static' is the default, 'relative' is positioned relative to its normal position, 'absolute' is positioned relative to the nearest non-static parent, and 'fixed' is positioned relative to the viewport.",
  },
  {
    topic: 'CSS floats and clears',
    brief:
      "Floats allow elements to be pushed left or right, making content flow around them. The 'clear' property can be used to control the flow of content after floating elements.",
  },
  {
    topic: 'CSS typography (font-family, font-size, font-weight)',
    brief:
      "CSS typography properties control the appearance of text. 'font-family' sets the font, 'font-size' sets the size, and 'font-weight' controls the thickness of characters.",
  },
  {
    topic: 'CSS color and background properties',
    brief:
      "CSS provides properties to set colors and backgrounds. 'color' sets the text color, while 'background-color' sets the background color. Images and gradients can also be set as backgrounds.",
  },
  {
    topic: 'CSS gradients',
    brief:
      'CSS gradients allow you to display a smooth transition between multiple colors. They can be linear or radial.',
  },
  {
    topic: 'CSS transitions and animations',
    brief:
      'CSS transitions allow smooth changes of property values. CSS animations can be used to create complex, multi-step animations using keyframes.',
  },
  {
    topic: 'CSS flexbox layout',
    brief:
      'Flexbox is a modern layout model that provides an efficient way to design complex layout structures with a cleaner tool and more predictable results.',
  },
  {
    topic: 'CSS grid layout',
    brief:
      'CSS Grid layout is a two-dimensional layout system for the web, offering a way to design complex responsive layouts with ease.',
  },
  {
    topic: 'Responsive design with media queries',
    brief:
      'Media queries allow styles to be applied based on the device characteristics, like its width, height, or orientation. This is foundational for creating responsive designs.',
  },
  {
    topic: 'CSS preprocessors (Sass, Less)',
    brief:
      'Preprocessors like Sass and Less enhance CSS with features like variables, nested rules, and functions. They need to be compiled to regular CSS to work in browsers.',
  },
  {
    topic: 'CSS frameworks (Bootstrap, Materialize)',
    brief:
      'CSS frameworks provide pre-written CSS rules to aid in the rapid development of websites. Bootstrap and Materialize are popular frameworks that include grid systems, components, and utilities.',
  },
  {
    topic: 'Web accessibility (WCAG 2.0 guidelines)',
    brief:
      'Web accessibility ensures websites and apps are usable by people with disabilities. WCAG 2.0 offers guidelines for making web content more accessible to all users.',
  },
];

export const jsTopicData = [
  {
    topic: 'JavaScript data types (string, number, boolean, object)',
    brief:
      'JavaScript has several data types including strings (text), numbers (integers or floats), booleans (true or false), and objects (key-value pairs).',
  },
  {
    topic: 'JavaScript variables (var, let, const)',
    brief:
      "JavaScript uses variables to store values. 'var' is the traditional declaration, 'let' allows block-scoped variable declaration, and 'const' declares block-scoped, read-only variables.",
  },
  {
    topic: 'JavaScript functions (declaration, expression)',
    brief:
      'Functions in JavaScript are blocks of reusable code. They can be declared or expressed. Function declarations are hoisted, whereas function expressions are not.',
  },
  {
    topic: 'JavaScript arrays',
    brief:
      'Arrays in JavaScript are ordered lists of values. They can store multiple values and can be accessed by their index.',
  },
  {
    topic: 'JavaScript objects',
    brief:
      'Objects in JavaScript are collections of key-value pairs. They can contain multiple data types and can be nested.',
  },
  {
    topic: 'JavaScript loops (for, while)',
    brief:
      "Loops are used to execute the same block of code multiple times. Common types of loops include 'for' and 'while'.",
  },
  {
    topic: 'JavaScript conditional statements (if/else, switch/case)',
    brief:
      "Conditional statements allow code to be executed based on whether a condition is true or false. 'if/else' and 'switch/case' are the primary conditional structures in JavaScript.",
  },
  {
    topic: 'JavaScript DOM manipulation',
    brief:
      'The Document Object Model (DOM) represents the structure of an HTML document. JavaScript can be used to manipulate the DOM, changing content, structure, or styles dynamically.',
  },
  {
    topic: 'Vue.js components',
    brief:
      'In Vue.js, components are reusable chunks of code that encapsulate a template, logic, and styles for a UI piece. Components can be nested and reused across projects.',
  },
  {
    topic: 'Vue.js directives',
    brief:
      'Vue.js directives are prefixed tokens in templates that provide special reactive behavior. For example, `v-if`, `v-for`, and `v-bind`.',
  },
  {
    topic: 'Vue.js computed properties',
    brief:
      'Computed properties are reactive properties in Vue.js that are based on other properties. They update automatically when their dependencies change.',
  },
  {
    topic: 'Vue.js lifecycle hooks',
    brief:
      'Lifecycle hooks in Vue.js are special methods that automatically get called as your component achieves certain milestones in its lifecycle, like creation, mounting, updating, and destruction.',
  },
  {
    topic: 'Vue.js event handling',
    brief:
      "Vue provides a `v-on` directive to listen to DOM events and execute JavaScript when they're triggered.",
  },
  {
    topic: 'Vue.js routing',
    brief:
      'Vue Router is the official router for Vue.js. It allows for the creation of Single Page Applications with navigation, nested routes, and more.',
  },
  {
    topic: 'Vue.js state management (Vuex)',
    brief:
      'Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all components in an application.',
  },
];
