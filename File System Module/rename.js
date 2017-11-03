var fs=require('fs');

fs.rename('mynewfile1.txt','new.txt',function(err) {
	if(err) throw err;
	else 
		console.log("Renamed");
});