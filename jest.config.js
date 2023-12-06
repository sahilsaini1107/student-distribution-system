module.exports = {
    // Specify test environment
    testEnvironment: 'node', // Use 'jsdom' for browser-like environment
    
    // Optionally, specify test match patterns
    testMatch: ['**/*.test.js'], // Looks for test files with .test.js extension
    
    // Optionally, configure code coverage
    collectCoverage: true,
    coverageDirectory: 'coverage',
  };
  