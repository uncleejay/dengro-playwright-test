# Dengro Playwright Test Suite 🏆

This project includes automated end-to-end tests for verifying key functionalities of the web application - Dengro using Playwright. The tests are written in TypeScript with the Playwright testing framework and follow the Page Object Model (POM) pattern for better maintainability.

## Project Structure

The project is structured as follows:


### File Descriptions

- **`home.spec.ts`**: Contains tests for the home page.
- **`home-page.ts`**: Page Object for interacting with elements on the home page.
- **`pricing.spec.ts`**: Contains tests for the pricing page.
- **`pricing-page.ts`**: Page Object for interacting with elements on the pricing page.

## Setup and Installation

Follow these steps to set up and run the project:

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-repository-url.git
cd your-repository-folder
```

### 2. Install Dependencies

```
npm install
```

#### or if you're using yarn
```
yarn install
```

### 3. TypeScript Configuration
```
npm install -g typescript
```
#### Alternatively, use the local version (in the node_modules folder)

### 4. Install Playwright
```
npm install @playwright/test --save-dev
```

### 5. Running Tests
```
npx playwright test
```



