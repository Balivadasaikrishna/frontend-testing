// Polyfill for Node.js version compatibility
if (!process.versions.node || parseInt(process.versions.node.split('.')[0]) < 18) {
  const os = require('os');
  if (!os.availableParallelism) {
    os.availableParallelism = () => os.cpus().length;
  }
}

// Import testing library setup
require('@testing-library/jest-dom');
