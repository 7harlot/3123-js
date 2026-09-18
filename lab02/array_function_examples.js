//Arrow Function Example

//Function Declaration
function add(a, b) {
    return a + b
}

//Function Expression
add = function(a, b) {
    return a + b;
}

//Arrow Function
add = (a, b) => {
    return a + b;
}

add = (a, b) => a + b; //Concise body syntax

var greet = (name) => {
    return `Hello, ${name}!`;
}

greet = name => {
    return `Hello, ${name}!`;
}

greet = name => `Hello, ${name}!`;

function checkArrow() {
    console.log("This is a regular function");
    console.log(this); // 'this' refers to the caller's context
    console.log(arguments); // 'arguments' is available in regular functions
}

checkArrow();