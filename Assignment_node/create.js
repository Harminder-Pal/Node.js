var fs = require('fs');

//create an empty file named users.txt:
fs.open('users.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Created!');
});