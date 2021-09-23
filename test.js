const usernameGenerator = require('./src/index.js');

const username = usernameGenerator.createUsername(5000);

console.log(username);