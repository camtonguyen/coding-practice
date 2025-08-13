# JavaScript Coding Practice Project

This project showcases best practices for JavaScript development, testing, and project organization.

## Features

- ✅ **ES6 Modules** - Modern JavaScript with import/export syntax
- ✅ **Jest Testing** - Comprehensive test suite with high coverage
- ✅ **NPM Scripts** - Easy-to-use commands for development and testing

## Project Structure

```
coding-practice/
├── src/
│   ├── __tests__/              # Test files
│   ├── index.js                # Main entry point
├── package.json                # Project configuration and dependencies
├── babel.config.cjs            # Babel configuration for Jest
└── README.md                   # This file
```

## Installation

1. **Clone or navigate to the project directory:**

   ```bash
   cd coding-practice
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

### Running the Main Application

To run the main demonstration file:

```bash
npm start
```

This will execute `src/index.js`

### Development Mode

To run the application with auto-restart on file changes:

```bash
npm run dev
```

### Running Tests

To run all tests:

```bash
npm test
```

To run tests in watch mode (re-runs tests when files change):

```bash
npm run test:watch
```

To run tests with coverage report:

```bash
npm run test:coverage
```

## Running Individual Files

You can run the JavaScript files directly using Node.js:

```bash
# Run the main demo
node src/index.js

# Run individual files (if they have standalone functionality)
node src/fileName.js
```

## Testing

This project includes comprehensive Jest tests:

- **.test.js** - Tests import functions here

### Test Coverage

Run `npm run test:coverage` to see detailed coverage reports including:

- Line coverage
- Function coverage
- Branch coverage
- Statement coverage

### Writing New Tests

To add new tests:

1. Create a new `.test.js` file in the `src/__tests__/` directory
2. Import the module you want to test
3. Write test cases using Jest's `describe`, `test`, and `expect` functions

Example:

```javascript
import { YourModule } from '../yourModule.js';

describe('YourModule', () => {
  test('should do something', () => {
    expect(YourModule.someFunction()).toBe(expectedResult);
  });
});
```

## Configuration

### Jest Configuration

Jest is configured in `package.json` with:

- ES6 module support via Babel
- Test file patterns for automatic discovery
- Coverage collection from `src/` directory
- Node.js test environment

### Babel Configuration

Babel is configured in `babel.config.cjs` to:

- Transform ES6 modules for Jest compatibility
- Target current Node.js version

## NPM Scripts Reference

| Script          | Command                     | Description                    |
| --------------- | --------------------------- | ------------------------------ |
| `start`         | `node src/index.js`         | Run the main application       |
| `dev`           | `node --watch src/index.js` | Run with auto-restart          |
| `test`          | `jest`                      | Run all tests                  |
| `test:watch`    | `jest --watch`              | Run tests in watch mode        |
| `test:coverage` | `jest --coverage`           | Run tests with coverage report |

## Best Practices Demonstrated

1. **ES6 Modules** - Using modern import/export syntax
2. **Algorithm Implementation** - Practice with multiple approaches
3. **Testing** - High test coverage with edge cases
4. **Code Organization** - Logical file structure and separation of concerns
5. **Error Handling** - Proper handling of edge cases and invalid inputs

## Contributing

To add new algorithms or utilities:

1. Create a new `.js` file in the `src/` directory
2. Export your functions using ES6 syntax
3. Add comprehensive tests in `src/__tests__/`
4. Update the main `index.js` file to demonstrate usage
5. Update this README with documentation

## License

MIT License - feel free to use this project for learning and development!
