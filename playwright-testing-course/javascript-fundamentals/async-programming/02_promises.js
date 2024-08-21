// Lesson 2: Promises

// 1. Creating a Promise
function fetchUserData(userId) {
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

// 2. Using Promises
fetchUserData(1)
    .then(user => {
        console.log("User data:", user);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

// 3. Chaining Promises
function fetchUserPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: "First post" },
                { id: 2, title: "Second post" }
            ]);
        }, 1000);
    });
}

fetchUserData(1)
    .then(user => {
        console.log("User:", user);
        return fetchUserPosts(user.id);
    })
    .then(posts => {
        console.log("User posts:", posts);
    })
    .catch(error => {
        console.error("Error:", error.message);
    });

// 4. Promise.all
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve) => setTimeout(() => resolve("foo"), 100));
const promise3 = fetchUserData(1);

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log("Results:", values);
    })
    .catch(error => {
        console.error("Error in Promise.all:", error.message);
    });

// 5. Promise.race
const slowPromise = new Promise(resolve => setTimeout(() => resolve("Slow"), 5000));
const fastPromise = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));

Promise.race([slowPromise, fastPromise])
    .then(result => {
        console.log("Race winner:", result);
    });

// Real-world example: API testing with Promises
function apiRequest(endpoint, method, data) {
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

function runApiTest(testName, endpoint, method, data, expectedStatus) {
    console.log(`Running test: ${testName}`);
    return apiRequest(endpoint, method, data)
        .then(response => {
            if (response.status !== expectedStatus) {
                throw new Error(`Expected status ${expectedStatus}, got ${response.status}`);
            }
            console.log(`Test passed: ${testName}`);
            return response;
        })
        .catch(error => {
            console.error(`Test failed: ${testName}`);
            console.error("Error:", error.message);
            throw error;
        });
}

// Usage
runApiTest("Get User", "/users/1", "GET", null, 200)
    .then(response => {
        console.log("Get User Response:", response);
        return runApiTest("Create User", "/users", "POST", { name: "New User" }, 201);
    })
    .then(response => {
        console.log("Create User Response:", response);
    })
    .catch(error => {
        console.error("Test suite failed:", error.message);
    });

// Exercise:
// 1. Implement a function that simulates a series of API calls using Promise chaining
// 2. Use Promise.all to run multiple API tests in parallel and report the results