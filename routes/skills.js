var express = require('express');
var router = express.Router();
const skillsCtrl = require('../controllers/skills')

/* GET users listing. */
router.get('/', skillsCtrl.index)

router.get('/new', skillsCtrl.new)

router.get('/:skillName', skillsCtrl.show)

router.post('/', skillsCtrl.create)

router.delete('/:skillName', skillsCtrl.delete)

module.exports = router;
