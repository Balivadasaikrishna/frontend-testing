module.exports = {
  // Using ts-jest for TypeScript support
  preset: 'ts-jest',
  
  // Testing in browser-like environment
  testEnvironment: 'jsdom',
  
  // Transform TypeScript files
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  
  // File extensions to look for
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  
  // Setup files for testing library
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  
  // Skip e2e tests in unit test runs
  testPathIgnorePatterns: ['/tests/e2e/'],
}; 