var http  = require("http")
var qs  = require("./querystring.js")

var server =  http.createServer(function (req,res) {
	//console.log(Object.keys(req))
	var values={
		"name":"vishal",
		"password":"saraf"
	}
	var queryStringInJson = qs.decode(req.url)
	console.log("\n\n");
	if(queryStringInJson=="invalid ip")
	{
		res.end("Invalid IP entered")
	}else
	{
		if(queryStringInJson.param1K==values.name && queryStringInJson.param2K==values.password)
		{
			res.end("Matched");
		}
		else
		{
			res.end("Not Authenticated");
		}
	}
})

server.listen(3000)