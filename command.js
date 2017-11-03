/*
const { spawn } = require('child_process');
const child = spawn('wc');

process.stdin.pipe(child.stdin);

child.stdout.on('data', function(data){
  console.log('child stdout: ${data}');
});
child.stdout.on('data', (data) => {
  console.log('stdout: ${data}');
});

child.stderr.on('data', (data) => {
  console.log('stderr: ${data}');
});
*/
const { spawn } = require('child_process');
const ls = spawn('node', ['input.js']);

ls.stdout.on('data', (data) => {
  console.log('stdout: ${data}',data.toString());
});

ls.stderr.on('data', (data) => {
  console.log('stderr: ${data}');
});


ls.on('close', (code) => {
  console.log('child process exited with code ${code}');
});


/*
var http = require('http');
var fs = require('fs');

const {spawn} = require('child_process');
var code1 ="";

http.createServer(function (req, res) {
		req.on('data',function(data){
  			 	code1 = code1 + data.toString();
  			 	console.log(code1);
  			 	writeIT();
  			 	code1=exeCute();
		});

	function writeIT(){
   		fs.writeFile('testing _it.js', code1 , function(err) {

			});
  		};
  	function exeCute(){

  		var l1 = spawn('node', ['testingit.js']);

  		l1.stdout.on('data', (data) => {
  				code1= data.toString();
  				console.log(stdout: ${data});
  				return code1;
				});
  		l1.stderr.on('data', (data) => {
  				console.log(stderr: ${data});
				});
		l1.on('close', (code) => {
				console.log('');

				});
  	};

res.end(code1);
    			}).listen(4098);
    			*/
