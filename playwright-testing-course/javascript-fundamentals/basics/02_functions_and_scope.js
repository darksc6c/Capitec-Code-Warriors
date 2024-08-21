// Lesson 2: Functions and Scope

// 1. Function declaration
// A function declaration is a way to define a function using the 'function' keyword.
// This function takes a name as an argument and returns a greeting message.
function greet(name) {
    return `Hello, ${name}!`;
}

// 2. Function expression
// A function expression defines a function and assigns it to a variable.
// Here, we create a function that multiplies two numbers.
const multiply = function (a, b) {
    return a * b;
};

// 3. Arrow functions
// Arrow functions provide a more concise syntax for writing functions.
// This function divides two numbers and returns the result.
const divide = (a, b) => a / b;

// 4. Default parameters
// Default parameters allow you to set default values for function parameters.
// If no value is provided for 'exponent', it defaults to 2.
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

// 5. Rest parameters
// Rest parameters allow you to pass an indefinite number of arguments to a function.
// This function sums all the numbers passed to it.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// 6. Scope
// Scope refers to the visibility of variables in different parts of your code.
// Here, 'globalVar' is accessible anywhere, while 'localVar' is only accessible within its function.
let globalVar = "I'm global";

function scopeExample() {
    let localVar = "I'm local";
    console.log(globalVar); // Accessible
    console.log(localVar); // Accessible
}

// console.log(localVar); // Error: localVar is not defined

// 7. Additional function examples
// This function checks if a number is even or odd.
function isEven(num) {
    return num % 2 === 0;
}

// This function returns the maximum of two numbers.
function max(a, b) {
    return a > b ? a : b;
}

// This function takes a string and returns it in uppercase.
function shout(message) {
    return message.toUpperCase();
}

// Real-world example: Test utility functions
// This function checks if two values are equal and logs the result.
function assertEquality(actual, expected, message) {
    if (actual === expected) {
        console.log(`✅ Test Passed: ${message}`);
    } else {
        console.error(`❌ Test Failed: ${message}`);
        console.error(`  Expected: ${expected}`);

        // The dollar sign ($) in the template literal indicates the start of an expression to be evaluated and inserted into the string.
        console.error(`  Actual: ${actual}`);
    }
}

// Usage
let testResult = 5 + 5;
assertEquality(testResult, 10, "Addition test");

// Exercise:
// 1. Create a function that simulates an API call (use setTimeout to mimic async behavior)
// 2. Write a function that uses this simulated API call and logs the result