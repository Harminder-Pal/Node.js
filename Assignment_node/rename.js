var fs = require('fs');

//Rename the pre exixting file named users to data_users.txt:
fs.rename('users.txt', 'data_users.txt', function(err){
  if (err) throw err;
  console.log("Renamed Successfully!!!!!!");
  });