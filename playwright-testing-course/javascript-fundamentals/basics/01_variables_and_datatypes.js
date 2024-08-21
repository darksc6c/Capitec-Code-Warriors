// Lesson 1: Variables and Data Types

// 1. Variable declaration
// Use 'let' when the variable's value may change later in the code. 
// For example, 'testName' can be reassigned if needed.
let testName = "Login Test";

// Use 'const' when the variable's value should remain constant throughout the code.
// 'MAX_ATTEMPTS' is a constant value that should not change.
const MAX_ATTEMPTS = 3;

// Avoid using 'var' as it has function scope and can lead to unexpected behavior.
// 'var' allows variable hoisting, which can cause issues in larger codebases.
// It's better to use 'let' or 'const' for block-scoped variables.
var oldStyleVariable = "Avoid using var";

// 2. Data Types
// 'stringExample' is a string variable.
let stringExample = "This is a string";

// 'numberExample' is a number variable.
let numberExample = 42;

// 'booleanExample' is a boolean variable.
let booleanExample = true;

// 'nullExample' is a null variable.
// 'null' is a special value that represents an empty or unknown value.
let nullExample = null;

// 'undefinedExample' is an undefined variable.
// 'undefined' is a special value that represents a variable that has not been assigned a value.
let undefinedExample;

// 'objectExample' is an object variable.
// Objects are collections of key-value pairs.
let objectExample = { key: "value" };

// 'arrayExample' is an array variable.
// Arrays are ordered lists of values.
let arrayExample = [1, 2, 3];

// 3. Type coercion and conversion
// 'autoConvert' demonstrates type coercion.
// The string "5" is concatenated with the number 2, resulting in "52".
let autoConvert = "5" + 2; // "52"

// 'explicitConvert' demonstrates type conversion.
// The string "5" is converted to a number and added to 2, resulting in 7.
let explicitConvert = Number("5") + 2; // 7

// 4. Template literals
// 'username' is a variable that stores the string "John".
let username = "John";

// Template literals are enclosed by backticks (``) instead of single or double quotes.
// They allow for easier string interpolation, which means you can embed expressions inside a string.
// This is done using the `${expression}` syntax. 
// For example, you can create a greeting message that includes the username variable:
let greetingMessage = `Welcome, ${username}!`;

// Template literals also support multi-line strings, allowing you to create strings that span multiple lines without the need for concatenation or escape characters.
let multiLineMessage = `Hello, ${username}!
Welcome to the testing course.
Enjoy your learning journey!`;
console.log(greetingMessage);
console.log(multiLineMessage);

// The template literal is used to insert the value of 'username' into a string.
// The backticks (`) allow for string interpolation and multi-line strings.
console.log(`Welcome, ${username}!`);

// Real-world example: Storing test configuration
const testConfig = {
    url: "https://example.com/api",
    timeout: 5000,
    retries: 2
};

// Use template literals to log test configuration
console.log(`Running test: ${testName}`);
console.log(`API URL: ${testConfig.url}`);
console.log(`Timeout: ${testConfig.timeout}ms`);

// Exercise:
// 1. Create variables to store information about a test case (e.g., name, expected result, actual result)
// 2. Use template literals to log a test report