// Lesson 4: Objects and Arrays

// 1. Object literals
const user = {
    id: 1,
    username: "testuser",
    email: "test@example.com"
};

// 2. Accessing object properties
console.log(user.username); // dot notation
console.log(user['email']); // bracket notation

// 3. Object methods
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

console.log(calculator.add(5, 3)); // 8

// 4. Arrays
const fruits = ['apple', 'banana', 'orange'];

// 5. Array methods
fruits.push('grape'); // Add to end
fruits.unshift('mango'); // Add to beginning
const lastFruit = fruits.pop(); // Remove from end
const firstFruit = fruits.shift(); // Remove from beginning

// 6. Iterating over arrays
fruits.forEach(fruit => console.log(fruit));

// 7. Map, filter, reduce
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
const evens = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);

// Real-world example: Test data management
const testData = [
    { id: 1, name: "Test 1", status: "passed" },
    { id: 2, name: "Test 2", status: "failed" },
    { id: 3, name: "Test 3", status: "passed" }
];

console.log(testData);

function getTestSummary(tests) {
    const total = tests.length;
    const passed = tests.filter(test => test.status === "passed").length;
    const failed = total - passed;

    return {
        total,
        passed,
        failed,
        passRate: (passed / total * 100).toFixed(2) + "%"
    };
}

console.log(getTestSummary(testData));

// Exercise:
// 1. Create an array of test case objects (with properties like name, input, expectedOutput)
// 2. Write a function that runs these test cases and returns results as an array of objects