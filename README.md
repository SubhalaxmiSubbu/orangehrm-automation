\# OrangeHRM Automation Framework



\## Overview



This project is an automation testing framework for the OrangeHRM application using Playwright and JavaScript.



\## Technologies Used



\- Playwright

\- JavaScript

\- Node.js

\- Git \& GitHub

\- GitHub Actions



\## Automated Test Scenarios



\### 1. Login Test

\- Open OrangeHRM

\- Enter valid username and password

\- Verify successful login



\### 2. Employee Creation Test

\- Login to OrangeHRM

\- Navigate to PIM

\- Open Add Employee

\- Enter employee details

\- Save employee

\- Verify Personal Details page



\## Project Structure



```text

orangehrm-automation/

├── ci/

├── performance/

├── reports/

├── src/

│   ├── config/

│   ├── pages/

│   ├── tests/

│   │   ├── api/

│   │   └── e2e/

│   └── utils/

├── .gitignore

├── package.json

├── playwright.config.js

└── README.md

