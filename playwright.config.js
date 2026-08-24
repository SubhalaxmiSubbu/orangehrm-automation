const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './src',

    reporter: [
        ['html', { outputFolder: 'reports/html', open: 'never' }]
    ],

    use: {
        baseURL: 'https://opensource-demo.orangehrmlive.com',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    }
});