var fs = require('fs');

//Delete data_users.txt file:
fs.unlink('data_users.txt', function(err){
	if (err) throw err;
	console.log("File deleted successfully!!!!!!!");
	});