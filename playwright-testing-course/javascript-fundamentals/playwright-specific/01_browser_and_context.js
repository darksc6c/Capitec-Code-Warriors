// Lesson 1: Browser and Context Management

const { chromium } = require('playwright');

(async () => {
    // 1. Launching a browser
    const browser = await chromium.launch({
        headless: false // Set to true for headless mode
    });
    console.log('Browser launched');

    // 2. Creating a new context
    const context = await browser.newContext({
        viewport: { width: 1280, height: 720 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    });
    console.log('New context created');

    // 3. Creating a new page
    const page = await context.newPage();
    console.log('New page created');

    // 4. Navigating to a website
    await page.goto('https://playwright.dev');
    console.log('Navigated to Playwright website');

    // 5. Getting page title
    const title = await page.title();
    console.log('Page title:', title);

    // 6. Taking a screenshot
    await page.screenshot({ path: 'playwright_homepage.png' });
    console.log('Screenshot taken');

    // 7. Creating a new incognito context
    const incognitoContext = await browser.newContext();
    const incognitoPage = await incognitoContext.newPage();
    await incognitoPage.goto('https://example.com');
    console.log('Navigated to example.com in incognito context');

    // 8. Closing contexts and browser
    await incognitoContext.close();
    await context.close();
    await browser.close();
    console.log('Contexts and browser closed');
})();

// Real-world example: Testing with different viewport sizes
async function testResponsiveness(url, viewports) {
    const browser = await chromium.launch();

    for (const viewport of viewports) {
        const context = await browser.newContext({ viewport });
        const page = await context.newPage();

        await page.goto(url);
        console.log(`Testing viewport: ${viewport.width}x${viewport.height}`);

        // Perform your tests here, e.g., check element visibility, layout, etc.

        await page.screenshot({ path: `screenshot_${viewport.width}x${viewport.height}.png` });
        await context.close();
    }

    await browser.close();
}

// Usage
// testResponsiveness('https://example.com', [
//     { width: 1920, height: 1080 },
//     { width: 1366, height: 768 },
//     { width: 360, height: 640 }
// ]);

// Exercise:
// 1. Create a function that launches a browser, creates multiple contexts with different user agents, and visits a website
// 2. Compare and log any differences in the website's behavior across different user agents