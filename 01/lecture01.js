// Introduction to MERN stack development
//      This lecture covers the basics of building a web application using MongoDB, Express.js, React, and Node.js (MERN stack).

// Full stack development refers to an entire computer system or application from front-end (customer or user-facing) to the back-end (server-side). A full stack developer is someone who can work on both the front-end and back-end of an application connecting the two.

// What is the MERN stack? 
// The MERN stack is a collection of technologies that allows developers to build full-stack web applications using JavaScript. It consists of four main components:
//      1. MongoDB: A NoSQL database that stores data in flexible, JSON-like documents.
//      2. Express.js: A web application framework for Node.js that simplifies the process of building server-side applications.
//      3. React: A JavaScript library for building user interfaces, particularly single-page applications (SPAs).
//      4. Node.js: A JavaScript runtime that allows developers to run JavaScript on the server side.

// How does the MERN stack work?
// The MERN stack works by using JavaScript for both the front-end and back-end of a web application. The flow of data typically follows this pattern:
//      1. The user interacts with the React front-end, which sends requests to the Express.js server.
//      2. The Express.js server processes the requests and interacts with the MongoDB database to retrieve or store data.
//      3. The server sends the response back to the React front-end, which updates the user interface accordingly.

// Benefits of MERN stack:
//      1. Full-stack JavaScript: Developers can use a single programming language (JavaScript) for both the front-end and back-end, which simplifies development and reduces context switching.
//      2. Open-source: All components of the MERN stack are open-source, which means they are free to use and have a large community of developers contributing to their improvement.
//      3. Scalability: The MERN stack is highly scalable, making it suitable for building applications of various sizes and complexities.
//      4. Performance: Node.js provides high performance for server-side applications due to its non-blocking, event-driven architecture.

// --- 

// Introduction to JavaScript and ES6

// Definitions: 
//      JavaScript: A high-level, interpreted programming language that is widely used for web development. It allows developers to create dynamic and interactive web pages.
//      ECMA International: An organization that standardizes programming languages and other technologies. JavaScript is standardized under the ECMAScript specification.
//      ES6 (ECMAScript 2015): The sixth edition of the ECMAScript standard, which introduced new features and syntax improvements to JavaScript, making it more powerful and easier to work with.
//      ES (ECMAScript): A standardized specification for scripting languages, including JavaScript. It defines the syntax, semantics, and behavior of the language.

// Timeline: 
//      1995: Netscape creates Mocha, which later becomes JavaScript.
//      Mocha -> LiveScript -> JavaScript
//      1996: ECMA adopts JavaScript as a standard, known as ECMAScript.
//      1997: ECMAScript 1 (ES1) is released.
//      1998: ECMAScript 2 (ES2) is released.
//      1999: ECMAScript 3 (ES3) is released.
//      2008: ECMAScript 4 (ES4) is proposed but never officially released due to disagreements within the community. (disbanded)
//      2009: ECMAScript 5 (ES5) is released, introducing strict mode and other features. Node.js is also released, allowing JavaScript to be used on the server side.
//      2015: ECMAScript 6 (ES6) is released, introducing classes, modules, arrow functions, and more. (node.js, CommonJS, AMD, Browserify, Webpack, Babel, TypeScript, etc.)
//      2016-2020: Subsequent versions of ECMAScript are released annually, adding new features and improvements to the language.

// Pros and Cons of JavaScript:
// Pros:
//      Easy Syntax
//      Functions as objects
//      The only native web browser language
//      Independently driven

// Cons:
//      Not many clean code practices
//      each framework = new practices, enforcing bad practices overall
//      very rapid development often makes tools and frameworks obsolete quickly

// Why should we learn vanilla JavaScript before frameworks? 
//      Learning vanilla JavaScript is important because it provides a solid foundation for understanding the core concepts of the language. Frameworks and libraries build upon these concepts, so having a strong grasp of vanilla JavaScript allows developers to better understand how frameworks work, troubleshoot issues, and write more efficient code. Additionally, learning vanilla JavaScript helps developers avoid becoming overly reliant on frameworks, which can lead to difficulties when switching between different technologies or when frameworks become outdated.

// What are the goals of ES6?
//      Fix (some) of the ES5 problems
//      Backwards compatability (Babel is a compiler to translate ES6 to make valid ES5 code)
//      modern syntax
//      better suited for bigger complex applications (i.e., React, Angular, Vue, etc.)
//      new features in the standard library (i.e. native class support, arrow functions, modules)

// What is a block?
//     A block is a section of code that is grouped together, typically enclosed within curly braces {}. Blocks are used to define the scope of variables and control structures, such as loops and conditionals. In JavaScript, blocks can be found in functions, if statements, loops, and other constructs. The scope of variables declared with `let` and `const` is limited to the block in which they are defined, while variables declared with `var` have function scope or global scope.

// Variables declared with `const` and `let` can only be read or "called" inside a specific block {} where they are written. Once the computer exits that block, those variables are no longer accessible. This is known as block scope. In contrast, variables declared with `var` are function-scoped or globally-scoped, meaning they can be accessed outside of the block in which they were defined, leading to potential issues with variable hoisting and unintended side effects.

// The LET statement:
// The `let` statement is used to declare a block scope local variable, optionally initializing it to a value. 
//      Unlike the `var` statement, which declares a variable globally or locally to an entire function regardless of block scope, `let` allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used. This helps prevent issues related to variable hoisting and improves code readability and maintainability.

// Example of let statement:
let x = 1;

if (x === 1) {
    let x = 2; // This x is only accessible within this block
    console.log(x); // Output: 2
}

console.log(x); // Output: 1 (the outer x is still 1)

// The CONST statement:
// Constants are block-shaped, much like variables defined using the `let` statement. The value of a constant cannot change through reassignment, and it can't be redeclared. (Note that objects and arrays declared as constants can still have their properties or elements modified, but the reference to the object or array cannot be changed.)

// Example of const statement:

'use strict'

const foo = function() {
    console.log('original');
}

foo = function() {
    console.log('reassigned');
} // Output: This will throw an error because foo is a constant and cannot be reassigned.

// Const is used to declare variables that should not be reassigned, providing a way to create immutable references in your code. This can help prevent accidental changes to important values and improve code reliability.

// for in... statement
// Use for...in to iterate over the properties of an object (the object keys)
// Also use for...in to iterate over the index values of an iterable like an array or a string. The for...in statement iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by Symbols), including inherited enumerable properties.

// Example of for...in statement:

// Iterating over an object
let oldCar = {
    make: 'Toyota',
    model: 'Camry',
    year: 2005
};

for (let key in oldCar) {
    console.log(`${key} --> ${oldCar[key]}`);
}
// Output:
// make --> Toyota
// model --> Camry
// year --> 2005

// Iterating over a string
let str = 'Turn the page';

for (let index in str) {
    console.log(`Index of ${str[index]}: ${index}`);
}
// Output:
// Index of T: 0
// Index of u: 1
// Index of r: 2
// Index of n: 3

// for of... statement
// Use for...of to iterate over the values of an iterable object (like an array, string, maps, sets, generators, DOM node collections and the arguments object available inside a function). The for...of statement creates a loop that iterates over iterable objects, allowing you to access the values directly without needing to use an index or key.

// Example of for...of statement:

let str = 'abcde';

for (let char of str) {
    console.log(char.toUpperCase().repeat(3));
}
// Output:
// AAA
// BBB
// CCC
// DDD
// EEE

// Template literals
// Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features within them. Template literals are enclosed by backticks (`) instead of single or double quotes. They can contain placeholders, which are indicated by the dollar sign and curly braces (${expression}). The expressions inside the placeholders and the text between them get passed to a function.

// ES6: Template literals

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
// Output: Fifteen is 15 and not 20.

// ES5: Embedded Expressions with normal strings

var a = 5;
var b = 10;
console.log('Fifteen is ' + (a + b) + ' and not ' + (2 * a + b) + '.');
// Output: Fifteen is 15 and not 20.

// Arrow functions
// An arrow function expression has shorter syntax than a function expression and does not have its own `this`, `arguments`, `super`, or `new.target`. Arrow functions are best suited for non-method functions, and they cannot be used as constructors. They are often used for callbacks or in situations where you want to preserve the context of `this` from the surrounding code.

// Example of arrow function:

var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

elements.map(function(element) {
    return element.length;
});
// Output: [8, 6, 7, 9]

elements.map(element => {
    return element.length;
});
// Output: [8, 6, 7, 9]

elements.map(element => element.length);
// Output: [8, 6, 7, 9]
elements.map(({length}) => length);
// Output: [8, 6, 7, 9]

// Destructuring
// Destructuring syntax allows you to extract data from arrays and objects with more ease and less syntactic clutter. 
// We can extract properties from the object and assign them to new `const` variables. This is particularly useful when working with complex data structures, as it allows you to access the values you need without having to reference the entire object or array repeatedly.

// Object Destructuring
const names = {cat: 'Bob', dog: 'Fred', alligator: 'Steve'};
const {cat, dog, alligator} = names;
// output: cat = 'Bob', dog = 'Fred', alligator = 'Steve'

//Array destructuring (use comma to skip values)
const names = ['Bob', 'Fred', 'Steve'];
const [cat, , alligator] = names;
// output: cat = 'Bob', alligator = 'Steve'

Object & Arrays

// Spread (...) operator
// It lets you use the spread(...) operator to copy enumerable properties from one object to another.

// When we don't use spread operator: 
var mid = [3, 4];
var arr = [1, 2, mid, 5, 6];
console.log(arr);
// Output: [1, 2, [3, 4], 5, 6]

// When we use spread operator:
var mid = [3, 4];
var arr = [1, 2, ...mid, 5, 6];
console.log(arr);
// Output: [1, 2, 3, 4, 5, 6]

// The math operator wants to find maximum value of multiple numbers, you can't use an array as input. Instead of using apply, we can use the spread syntax to expand our array elements and inputs each element into the Math.max() method

// When we use apply method:
var arr = [2, 4, 6, 8, 0];

function max(arr) {
    return Math.max.apply(null, arr);
}

console.log(max(arr)); // Output: 8

// When we use spread operator:
var arr = [2, 4, 6, 8, 0];
var max = Math.max(...arr);
console.log(max); // Output: 8

// `map` method
// The array.proto.map() method creates a new array with the results of calling a provided function on every element in the calling array. It is often used to transform data or extract specific values from an array of objects.

// Array.map()
var array1 = [1, 4, 9, 16];
// pass a function to map
var map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// Array.map() vs for loop
let arr = [1, 2, 3]

let duplicatedArr = arr.map(function(el) {
    return el * 2;
}); // Output: [2, 4, 6]

let duplicatedArr = []
for (let i = 0; i < arr.length; i++) {
    duplicatedArr.push(arr[i] * 2);
}
// Output: [2, 4, 6]

// Object property declaration shorthand
// Shorthand key names can now be used to define an object, when key's have same name as variables passed in as properties.

//ES6 syntax
let cat = 'Miaow';
let dog = 'Woof';
let bird = 'Peet Peet';

let someObject = {
    cat,
    dog,
    bird
}

//ES5 syntax
var cat = 'Miaow';
var dog = 'Woof';
var bird = 'Peet Peet';

var someObject = {
    cat: cat,
    dog: dog,
    bird: bird
}

// Classes
// JavaScript classes, introduced in ECMAScript 2015 (ES6) are primarily sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript. Function declaration are hoisted, class declaration are not. Classes are in strict mode by default. Classes can be defined using class declarations or class expressions. Class declarations are not hoisted, so they must be defined before they are used. Class expressions can be named or unnamed, and they can be used as values in other expressions.

// Class declaration
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

// Class expression
let Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
};

// Super class calls with `super`
// The super keyword is used to call corresponding methods of super class. This is one advantage over prototype-based inheritance, where you would have to call the super class method using the prototype chain. The super keyword can be used in two ways: to call the constructor of the super class and to call methods of the super class.

// sub class
class Lion extends Cat {
    speak() {
        super.speak(); // calls the speak method of the super class (Cat)
        console.log(`${this.name} roars.`); // additional behavior specific to the Lion class
    }
}

// super class
class Cat {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} roars.`);
    }
}

let lion = new Lion('Simba');
lion.speak(); // Output: Simba roars. 

// setters and getters
// The `get` syntax binds an object property to a function that will be called when that property is looked up. 
// The `set` syntax binds an object property to a function to be called when there is an attempt to set that property. Getters and setters allow you to define how properties of an object are accessed and modified, providing a way to encapsulate and control the behavior of those properties.

// getter
var obj = {
    log: ['a', 'b', 'c'],
    get latest() {
        if (this.log.length === 0) {
            return undefined;
        }
        return this.log[this.log.length - 1];
    }
}

console.log(obj.latest); // Output: 'c'

// setter
var language = {
    set current(name) {
        this.log.push(name);
    },
    log: []
}

language.current = 'EN';
language.current = 'FA';

console.log(language.log); // Output: ['EN', 'FA']

// Static methods
// The static keyword defines a static method for a class.
// Static methods aren't called on instances of the calss. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches, fixed-configuration, or any other data you don't need to be replicated across instances.

// static method
class ClassWithStaticMethod {
    static staticMethod() {
        return 'Static method has been called.';
    }
}

console.log(ClassWithStaticMethod.staticMethod()); // Output: 'Static method has been called.'