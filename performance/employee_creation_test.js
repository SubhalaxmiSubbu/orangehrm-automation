const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    // Open OrangeHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/');

    // Login
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();

    // Go to PIM
    await page.getByRole('link', { name: 'PIM' }).click();

    // Click Add Employee
    await page.getByRole('link', { name: 'Add Employee' }).click();

    // Enter employee details
    await page.getByPlaceholder('First Name').fill('Test');
    await page.getByPlaceholder('Last Name').fill('Employee');

    // Save employee
    await page.getByRole('button', { name: 'Save' }).click();

    // Wait for page to update
    await page.waitForTimeout(3000);

    console.log('Employee creation test completed successfully.');

    await browser.close();
})();