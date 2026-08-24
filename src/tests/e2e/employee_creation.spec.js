const { test, expect } = require('@playwright/test');

test('OrangeHRM Employee Creation', async ({ page }) => {
    // Open OrangeHRM
    await page.goto('/');

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

    // Verify employee was created
    await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();

    console.log('Employee creation test passed successfully');
});