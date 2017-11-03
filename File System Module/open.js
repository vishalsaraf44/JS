var fs=require('fs');

fs.open('mynewfilefile.txt','r',function(err) {
	if(err) throw err;
	else 
		console.log("opened");
});