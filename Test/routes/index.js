
/*
 * GET home page.
 */

module.exports = function(app)
{
	app.get('/indeaa',function(req,res){
		var Client = require('node-rest-client').Client;
		var client = new Client();
		
		client.get("http://localhost:8080/server/json", function(data,response){
			
			console.log(data);
			res.render('index.html',data);
		});
		
		
	});
	
	app.get('/about',function(req,res){
		res.render('about.html');
	});
};

/*exports.index = function(req, res){
	res.render('index', { title: 'Express' });
  
};
exports.hello = function(req, res){
	res.render('hello', { title: 'Hello Node'});
};*/