// Lesson 5: Error Handling

// 1. Try-catch blocks
// Try-catch blocks are fundamental for handling errors in JavaScript. 
// The 'try' block contains code that may throw an error, while the 'catch' block handles the error if one occurs.
// In this example, the divide function attempts to divide two numbers. 
// If the second number (b) is zero, it throws an error to prevent division by zero, which is mathematically undefined.
function divide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero"); // Throwing a new error with a descriptive message
        }
        return a / b; // If no error, return the result of the division
    } catch (error) {
        // The catch block captures the error and allows us to handle it gracefully.
        console.error("An error occurred:", error.message); // Log the error message to the console
        return null; // Return null to indicate that the operation failed
    }
}

console.log(divide(10, 2)); // Outputs: 5
console.log(divide(10, 0)); // Outputs: null (with error message)

// 2. Custom error types
// Custom error types allow us to create specific error classes that can provide more context about the error.
// Here, we define a ValidationError class that extends the built-in Error class.
// This allows us to throw and catch validation-specific errors in our application.
class ValidationError extends Error {
    constructor(message) {
        super(message); // Call the parent constructor with the error message
        this.name = "ValidationError"; // Set the name property to the custom error type
    }
}

// The validateUser function checks if a user object has a username and a valid password length.
// If validation fails, it throws a ValidationError with a specific message.
function validateUser(user) {
    if (!user.username) {
        throw new ValidationError("Username is required"); // Throwing a custom error if username is missing
    }
    if (user.password.length < 8) {
        throw new ValidationError("Password must be at least 8 characters"); // Throwing a custom error for password length
    }
}

// 3. Finally block
// The finally block is used to execute code after the try-catch, regardless of whether an error occurred or not.
// This is useful for cleanup actions, such as closing connections or releasing resources.
function runTest(testFunc) {
    console.log("Starting test...");
    try {
        testFunc(); // Execute the test function
        console.log("Test passed!"); // Log success if no error is thrown
    } catch (error) {
        console.error("Test failed:", error.message); // Log the error message if an error occurs
    } finally {
        console.log("Test completed. Cleaning up..."); // Always executed, regardless of success or failure
    }
}

// Real-world example: API testing with error handling
// The fetchUserData function demonstrates error handling in asynchronous operations.
// It attempts to fetch user data from an API and handles potential errors that may arise during the fetch process.
async function fetchUserData(userId) {
    try {
        const response = await fetch(`https://api.example.com/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Throw an error if the response is not OK
        }
        const data = await response.json(); // Parse the JSON data from the response
        return data; // Return the fetched data
    } catch (error) {
        // Differentiate between types of errors for more specific handling
        if (error instanceof TypeError) {
            console.error("Network error:", error.message); // Handle network errors
        } else {
            console.error("Fetch error:", error.message); // Handle other fetch-related errors
        }
        return null; // Return null to indicate failure
    }
}

// Usage
// The runTest function is used to execute a test case for the divide function.
// If the result is not as expected, it throws an error to indicate the test failure.
runTest(() => {
    const result = divide(10, 2);
    if (result !== 5) throw new Error("Division test failed"); // Throw an error if the test fails
});

// Exercise:
// 1. Create a function that simulates an API call with potential errors (network error, validation error, etc.)
// 2. Write a test function that uses this API call and handles different types of errors appropriately