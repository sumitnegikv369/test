export default {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest"
  },
  testEnvironment: 'jsdom'
  };
  