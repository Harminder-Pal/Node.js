const user = {
  uname: "Deeksha",
  uage: 24
};
var fs = require('fs');

//replace the dcontent of file named myfirstfile.txt with text given:
fs.writeFile('users.txt', JSON.stringify(user), function (err, file) {
  if (err) throw err;
  console.log('Replaced!');
});