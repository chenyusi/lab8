var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var grid = new Boolean();
	grid = false;
  	res.render('index', { 'projects':
  		projects.projects,
  		'grid':grid }
  	);

};

exports.viewGrid = function(req, res){
	var grid = new Boolean();
	grid = true;
  	res.render('index', { 'projects':
  		projects.projects,
  		'grid':grid}
  	);
}