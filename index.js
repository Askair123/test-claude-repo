/**
 * A simple JavaScript file created by Claude
 */

// Main function
function greet(name) {
  return `Hello, ${name}! Welcome to the test repository.`;
}

// Object with repository information
const repoInfo = {
  name: 'test-claude-repo',
  creator: 'Claude',
  purpose: 'Demonstration',
  createdDate: new Date().toISOString()
};

// Log a greeting
console.log(greet('User'));

// Export functions and objects
module.exports = {
  greet,
  repoInfo
};
