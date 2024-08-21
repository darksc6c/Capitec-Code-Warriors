const { chromium } = require('playwright');

// Helper function to run a test
async function runTest(name, testFn) {
    console.log(`Running test: ${name}`);
    try {
        await testFn();
        console.log(`Test passed: ${name}`);
    } catch (error) {
        console.error(`Test failed: ${name}`);
        console.error(error);
    }
}

// Setup function to create a new page
async function setupPage(context, url) {
    const page = await context.newPage();
    await page.goto(url);
    return page;
}

// Test suite
(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();

    try {
        // Test 1: Home page
        await runTest('Home page test', async () => {
            const page = await setupPage(context, 'https://example.com');
            const title = await page.title();
            console.assert(title === 'Example Domain', 'Title assertion failed');
            await page.close();
        });

        // Test 2: Search functionality
        await runTest('Search functionality test', async () => {
            const page = await setupPage(context, 'https://www.wikipedia.org');
            await page.fill('input#searchInput', 'Playwright');
            await page.click('button[type="submit"]');
            await page.waitForSelector('h1#firstHeading', { state: 'visible' });
            const heading = await page.textContent('h1#firstHeading');
            console.assert(heading === 'Playwright', 'Search result assertion failed');
            await page.close();
        });

        // Test 3: Navigation
        await runTest('Navigation test', async () => {
            const page = await setupPage(context, 'https://playwright.dev');
            await page.click('a:text("Docs")');
            await page.waitForURL('**/docs/intro');
            const url = page.url();
            console.assert(url.includes('/docs/intro'), 'Navigation assertion failed');
            await page.close();
        });

        // Test 4: Form submission
        await runTest('Form submission test', async () => {
            const page = await setupPage(context, 'https://httpbin.org/forms/post');
            console.log('Page loaded');

            await page.fill('input[name="custname"]', 'Test User');
            await page.fill('input[name="custtel"]', '123-456-7890');
            await page.fill('input[name="custemail"]', 'testuser@example.com');
            await page.check('input[name="size"][value="medium"]');
            await page.check('input[name="topping"][value="bacon"]');
            await page.fill('input[name="delivery"]', '14:00');
            await page.fill('textarea[name="comments"]', 'Test delivery instructions');
            console.log('Form filled');

            console.log('Clicking submit button');
            await page.click('button:has-text("Submit order")');
            console.log('Submit button clicked');

            await page.waitForURL('**/post');
            const content = await page.content();
            console.assert(content.includes('Test User'), 'Form submission assertion failed');
            await page.close();
        });

        // Test 5: API request
        await runTest('API request test', async () => {
            const page = await setupPage(context, 'https://httpbin.org/');
            const response = await page.request.get('https://httpbin.org/json');
            const json = await response.json();
            console.assert(json.slideshow.author === 'Yours Truly', 'API response assertion failed');
            await page.close();
        });

    } catch (error) {
        console.error('An error occurred during test execution:', error);
    } finally {
        await context.close();
        await browser.close();
        console.log('All tests completed, browser closed');
    }
})();

// Exercise:
// 1. Add a new test that checks for the presence of specific elements on a webpage of your choice
// 2. Implement a test that simulates user interactions like drag and drop or hover effects
// 3. Create a test that verifies the functionality of a simple calculator or todo list application