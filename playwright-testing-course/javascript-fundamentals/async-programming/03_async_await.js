// Lesson 3: Async/Await

// Async/await is a syntax for handling Promises more cleanly. It allows asynchronous code 
// to be structured like synchronous code, improving readability and maintainability.

// 1. Basic async/await usage
async function fetchUserData(userId) {
    // This function returns a Promise. The 'async' keyword allows the use of 'await' inside the function.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: "Test User" });
            } else {
                reject(new Error("Invalid user ID"));
            }
        }, 1000);
    });
}

async function getUserData() {
    try {
        // 'await' pauses execution until the Promise resolves, then returns its result
        const user = await fetchUserData(1);
        console.log("User data:", user);
    } catch (error) {
        // Errors in async functions are caught in try/catch blocks
        console.error("Error:", error.message);
    }
}

getUserData();

// 2. Multiple async operations
async function fetchUserPosts(userId) {
    // Another async function returning a Promise
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "First post" },
                { id: 2, title: "Second post" }
            ]);
        }, 1000);
    });
}

async function getUserDataAndPosts() {
    try {
        // Multiple await statements can be used sequentially
        const user = await fetchUserData(1);
        console.log("User:", user);
        const posts = await fetchUserPosts(user.id);
        console.log("User posts:", posts);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

getUserDataAndPosts();

// 3. Parallel execution with Promise.all
async function fetchMultipleUsers() {
    const userIds = [1, 2, 3];
    // Create an array of Promises
    const userPromises = userIds.map(id => fetchUserData(id));

    try {
        // Promise.all allows multiple Promises to be awaited simultaneously
        const users = await Promise.all(userPromises);
        console.log("All users:", users);
    } catch (error) {
        console.error("Error fetching users:", error.message);
    }
}

fetchMultipleUsers();

// 4. Async iteration
async function* asyncGenerator() {
    // Async generators can yield Promises
    yield await fetchUserData(1);
    yield await fetchUserData(2);
    yield await fetchUserData(3);
}

async function iterateAsyncGenerator() {
    // 'for await...of' allows iteration over async generators
    for await (const user of asyncGenerator()) {
        console.log("Generated user:", user);
    }
}

iterateAsyncGenerator();

// Real-world example: API testing with async/await
async function apiRequest(endpoint, method, data) {
    // Simulates an API request returning a Promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (method === "GET") {
                resolve({ status: 200, data: { id: 1, name: "Test User" } });
            } else if (method === "POST") {
                resolve({ status: 201, data: { id: 2, ...data } });
            } else {
                reject(new Error("Unsupported method"));
            }
        }, 1000);
    });
}

async function runApiTest(testName, endpoint, method, data, expectedStatus) {
    // This function encapsulates a single API test case using async/await
    console.log(`Running test: ${testName}`);
    try {
        const response = await apiRequest(endpoint, method, data);
        if (response.status !== expectedStatus) {
            throw new Error(`Expected status ${expectedStatus}, got ${response.status}`);
        }
        console.log(`Test passed: ${testName}`);
        return response;
    } catch (error) {
        console.error(`Test failed: ${testName}`);
        console.error("Error:", error.message);
        throw error;
    }
}

async function runTestSuite() {
    // This function demonstrates running multiple tests sequentially
    try {
        const getUserResponse = await runApiTest("Get User", "/users/1", "GET", null, 200);
        console.log("Get User Response:", getUserResponse);

        const createUserResponse = await runApiTest("Create User", "/users", "POST", { name: "New User" }, 201);
        console.log("Create User Response:", createUserResponse);

        console.log("All tests passed successfully");
    } catch (error) {
        console.error("Test suite failed:", error.message);
    }
}

runTestSuite();

// Exercise:
// 1. Implement a function that simulates a complex API workflow using async/await (e.g., create user, update user, delete user)
// 2. Create an async function that runs multiple API tests in parallel using Promise.all and reports the results
// These exercises will help reinforce understanding of async/await in more complex testing scenarios