// Lesson 1: Variables and Data Types

// 1. Variable declaration\
let testName = "Login Test";
const MAX_ATTEMPTS = 3;


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

let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
};

const timer = 10;
function timerFunction() {
    console.log(timer);
}

console.log(car.make);
console.log(car.model);
console.log(car.year);


// 'arrayExample' is an array variable.
// Arrays are ordered lists of values.

let arrayGreetings = ["Hello", "World", "How", "Are", "You"];
let arrayPerson = ["John", "Doe", 12, "Male"];
let Music = ["Rock", "Pop", "Hip-Hop", "Jazz"];



// 3. Type coercion and conversion
// 'autoConvert' demonstrates type coercion.
// The string "5" is concatenated with the number 2, resulting in "52".
//let tanya = "5" + 2; // "52"

// 'explicitConvert' demonstrates type conversion.
// The string "5" is converted to a number and added to 2, resulting in 7.
let explicitConvert = Number("5") + 2; // 7

console.log(explicitConvert);



// 4. Template literals
// 'username' is a variable that stores the string "John".
let CapitecTeam = "Red Team";

// Template literals are enclosed by backticks (``) instead of single or double quotes.
// Embed expressions inside a string.
// This is done using the `${expression}` syntax. 
// For example, you can create a greeting message that includes the username variable:
let greetingMessage = `Welcome, ${CapitecTeam}!`;

// Template literals also support multi-line strings, allowing you to create strings that span multiple lines without the need for concatenation or escape characters.
let tanya = `Hello, ${CapitecTeam}!
Welcome to the testing course.
Mulitple lines
Of code
Enjoy your learning journey!`;


console.log(tanya);




// The template literal is used to insert the value of 'username' into a string.
// The backticks (`) allow for string interpolation and multi-line strings.
console.log(`Welcome, ${CapitecTeam}!`);

// Real-world example: Storing test configuration
const testConfig = {
    url: "https://example.com/api",
    timeout: 5000,
    retries: 2,
    status: "Passed",
    statusCode: 200
};



console.log(testConfig.url);
console.log(testConfig.timeout);
console.log(testConfig.status);
console.log(testConfig.statusCode);

// Exercise:
// 1. Create variables to store information about a test case (e.g., name, expected result, actual result)
// 2. Use template literals to log a test report