
// logic
const Skill = require('../models/skill');

module.exports = {
	index, 
	show,
	new: newSkill,
	create,
	delete: deleteSkill,
	edit
	// shorthand for 
	// index: index
}


function edit(req, res){
  
	res.render('skills/edit', {
		skill: Skill.getOne(req.params.id)
	})
}

function deleteSkill(req, res){
	console.log(req.params.id, ' < - this id the id of the todo we are deleting');
	Skill.deleteOne(req.params.id)
	// Where do we want the client to go after they delete something?
	res.redirect('/skills')
}

function create(req, res){
	console.log(req.body, ' <- req.body, contents of the form')
	// respond with a redirect

	// Logic adding to the database using the model
	skill.create(req.body)

	res.redirect('/skills'); // takes an url endpoint <- referring to a route
}

function index(req, res){
//render knows to look in view
    console.log('running index function')
	res.render('skills/index', {
		skills: Skill.getAll()
	})
}

function show(req, res){
	//console.log(req.params,  " < - req.params in show function")
	res.render('skills/show', {
		skillNum: req.params.id,
		skill: Skill.getOne(req.params.id)
	})
}



function newSkill(req, res){
	res.render('skills/new')
} 