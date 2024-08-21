// Callbacks are functions passed as arguments to other functions, to be executed later.
// They're commonly used in asynchronous operations, allowing code to continue running
// while waiting for a long-running task to complete. In testing, callbacks are essential
// for handling async operations like API calls, ensuring tests wait for results before
// making assertions.

// Callbacks are crucial in testing asynchronous operations, such as API calls or database queries.
// They allow us to handle operations that take time to complete, ensuring our tests wait for results before making assertions.

// Scenario: Simulating an API call that fetches user data
function fetchData(callback) {
    // setTimeout is used here to simulate network delay. In real tests, this would be an actual API call.
    setTimeout(() => {
        const data = { id: 1, name: "Test User" };
        callback(data);
    }, 1000);
}

// This function represents a step in our test where we process and potentially assert on the fetched data
function processData(data) {
    console.log("Processed data:", data);
    // In a real test, you might add assertions here to verify the data structure or content
}

console.log("Fetching data...");
fetchData(processData);
console.log("Fetch request sent.");

// The above demonstrates the asynchronous nature of the operation. 
// "Fetch request sent" will log before the data is processed, mimicking real-world API behavior.

// Scenario: Testing error handling in asynchronous operations
function readFile(path, callback) {
    // This simulates reading a file, which could be part of a test setup or the system under test
    setTimeout(() => {
        if (path === "not_found.txt") {
            callback(new Error("File not found"));
        } else {
            callback(null, "File contents");
        }
    }, 1000);
}

// This callback demonstrates how to handle both success and error cases in tests
readFile("example.txt", (error, contents) => {
    if (error) {
        console.error("Error reading file:", error.message);
        // In a real test, you might use an assertion library to check for expected errors
    } else {
        console.log("File contents:", contents);
        // Here you would typically add assertions to verify the file contents
    }
});

// The following demonstrates the "callback hell" problem. 
// This pattern can make tests hard to read and maintain, which is why modern testing often uses Promises or async/await.

function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 complete");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 complete");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 complete");
        callback();
    }, 1000);
}

// This nested structure can represent a complex test scenario with multiple async steps
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps complete");
            // Final assertions would typically go here in a real test
        });
    });
});

// Scenario: Simulating API tests with callbacks
function apiRequest(endpoint, method, data, callback) {
    // This function mocks different API responses based on the request method
    setTimeout(() => {
        if (method === "GET") {
            callback(null, { status: 200, data: { id: 1, name: "Test User" } });
        } else if (method === "POST") {
            callback(null, { status: 201, data: { id: 2, ...data } });
        } else {
            callback(new Error("Unsupported method"));
        }
    }, 1000);
}

// This function encapsulates a single API test case
function runApiTest(testName, endpoint, method, data, expectedStatus) {
    console.log(`Running test: ${testName}`);
    apiRequest(endpoint, method, data, (error, response) => {
        if (error) {
            console.error(`Test failed: ${error.message}`);
        } else if (response.status !== expectedStatus) {
            console.error(`Test failed: Expected status ${expectedStatus}, got ${response.status}`);
        } else {
            console.log(`Test passed: ${testName}`);
            console.log("Response:", response);
        }
        // In a real test framework, you'd use actual assertions here instead of console.log
    });
}

// Example usage of our API test function
runApiTest("Get User", "/users/1", "GET", null, 200);
runApiTest("Create User", "/users", "POST", { name: "New User" }, 201);

// QA Exercise:
// 1. Implement a function that simulates multiple API calls in sequence using callbacks
// 2. Write a test that checks if the data from the first API call is correctly passed to the second call
// This exercise will help you understand how to chain asynchronous operations in tests,
// which is common when testing workflows that involve multiple API calls.