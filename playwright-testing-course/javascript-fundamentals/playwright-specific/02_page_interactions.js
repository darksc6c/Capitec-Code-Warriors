const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    try {
        // 1. Navigating to a page
        await page.goto('https://www.wikipedia.org');
        console.log('Navigated to Wikipedia');

        // 2. Filling form fields
        await page.fill('input#searchInput', 'Playwright');
        console.log('Filled search input');

        // 3. Clicking elements
        await page.click('button[type="submit"]');
        console.log('Clicked on the search button');

        // 4. Waiting for search results
        await page.waitForSelector('h1#firstHeading', { state: 'visible', timeout: 10000 });
        console.log('Search results loaded');

        // 5. Getting text content
        const firstHeading = await page.textContent('h1#firstHeading');
        console.log('First heading:', firstHeading);

        // 6. Checking if an element exists
        const hasInfobox = await page.isVisible('.infobox');
        console.log('Page has infobox:', hasInfobox);

        // 7. Evaluating JavaScript in the page context
        const pageTitle = await page.evaluate(() => document.title);
        console.log('Page title:', pageTitle);

        // 8. Taking a screenshot
        await page.screenshot({ path: 'wikipedia_playwright.png' });
        console.log('Screenshot taken');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await browser.close();
        console.log('Browser closed');
    }
})();