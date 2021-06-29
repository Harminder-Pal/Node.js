const user = {
   uname: "Harminder",
   uage: 24
};

var fs = require('fs');

//Append the content into the file  named users.txt:
fs.appendFile('users.txt', JSON.stringify(user), function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});