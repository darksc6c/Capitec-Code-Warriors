const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    try {
        await page.goto('https://example.com');

        // 1. Basic assertions
        const pageTitle = await page.title();
        console.assert(pageTitle === 'Example Domain', 'Title assertion failed');
        console.log('Title assertion passed');

        // 2. Element presence
        const h1Visible = await page.isVisible('h1');
        console.assert(h1Visible, 'H1 visibility assertion failed');
        console.log('H1 visibility assertion passed');

        // 3. Element text content
        const h1Text = await page.textContent('h1');
        console.assert(h1Text === 'Example Domain', 'H1 text content assertion failed');
        console.log('H1 text content assertion passed');

        // 4. Attribute assertions
        const linkHref = await page.getAttribute('a', 'href');
        console.assert(linkHref === 'https://www.iana.org/domains/example', 'Link href assertion failed');
        console.log('Link href assertion passed');

        // 5. Count assertions
        const paragraphCount = await page.locator('p').count();
        console.assert(paragraphCount === 2, 'Paragraph count assertion failed');
        console.log('Paragraph count assertion passed');

        // 6. URL assertions
        const currentUrl = page.url();
        console.assert(currentUrl === 'https://example.com/', 'URL assertion failed');
        console.log('URL assertion passed');

        // 7. Element state assertions
        const linkEnabled = await page.isEnabled('a');
        console.assert(linkEnabled, 'Link enabled assertion failed');
        console.log('Link enabled assertion passed');

        // 8. Negative assertions
        const buttonVisible = await page.isVisible('button');
        console.assert(!buttonVisible, 'Button not visible assertion failed');
        console.log('Button not visible assertion passed');

        console.log('All assertions completed');

    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        await browser.close();
        console.log('Browser closed');
    }
})();