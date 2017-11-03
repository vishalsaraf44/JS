var fs=require('fs');

fs.writeFile('new.txt','This is the text inside newfile',function(err) {
	if(err) throw err;
	else 
		console.log("Written Successful");
});