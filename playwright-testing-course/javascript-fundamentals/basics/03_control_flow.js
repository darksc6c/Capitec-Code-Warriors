// Lesson 3: Control Flow

// 1. If statements
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    } else if (age >= 13) {
        return "Teenager";
    } else {
        return "Child";
    }
}

console.log(checkAge(15));

// 2. Switch statements
function getErrorMessage(statusCode) {
    switch (statusCode) {
        case 400:
            return "Bad Request";
        case 401:
            return "Unauthorized";
        case 404:
            return "Not Found";
        default:
            return "Unknown Error";
    }
}

// 3. For loops
function repeatTest(testFunc, times) {
    for (let i = 0; i < times; i++) {
        console.log(`Running test iteration ${i + 1}`);
        testFunc();
    }
}

// 4. While loops
function retryUntilSuccess(testFunc, maxAttempts) {
    let attempts = 0;
    while (attempts < maxAttempts) {
        if (testFunc()) {
            console.log("Test passed!");
            return true;
        }
        attempts++;
        console.log(`Attempt ${attempts} failed. Retrying...`);
    }
    console.log("Max attempts reached. Test failed.");
    return false;
}

// 5. Try-catch for error handling
function divideNumbers(a, b) {
    try {
        if (b === 0) throw new Error("Division by zero");
        return a / b;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

// Real-world example: Test suite runner
function runTestSuite(tests) {
    let passed = 0;
    let failed = 0;

    for (let test of tests) {
        try {
            test();
            passed++;
            console.log(`✅ ${test.name} passed`);
        } catch (error) {
            failed++;
            console.error(`❌ ${test.name} failed: ${error.message}`);
        }
    }

    console.log(`Test Results: ${passed} passed, ${failed} failed`);
}

// Usage
const testSuite = [
    function testAddition() {
        if (5 + 5 !== 10) throw new Error("Addition failed");
    },
    function testSubtraction() {
        if (10 - 5 !== 5) throw new Error("Subtraction failed");
    }
];

runTestSuite(testSuite);

// Exercise:
// 1. Create a function that simulates an API test with random success/failure
// 2. Use a loop to run this test multiple times and track success rate