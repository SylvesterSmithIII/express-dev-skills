const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
}

function index(req, res) {
    res.render('skills/index', { 
        skills: Skill.getAll(),
        title: "Here Are The Skills For User"
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.skillName),
        title: Skill.getOne(req.params.skillName).name
    })
}

function newSkill(req, res) {
    res.render('skills/new', { title: "Add New Skill" })
}

function create(req, res) {
    Skill.create(req.body)
    res.redirect('/skills')
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.skillName)
    res.redirect('/skills')
}