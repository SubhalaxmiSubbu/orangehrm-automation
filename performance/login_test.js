const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    // Open OrangeHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // Enter login details
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');

    // Click Login
    await page.getByRole('button', { name: 'Login' }).click();

    // Verify successful login
    await page.waitForURL('**/dashboard/index');
    console.log('Login test completed successfully.');

    await browser.close();
})();