// Exercise 1
// Write a JavaScript program to capitalize the first letter of each word of a given string

function capitalizeWords(str) {
    return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const message = "the quick brown fox";
console.log(capitalizeWords(message));

console.log("Hello, World!");

var a = 100

console.log(a);