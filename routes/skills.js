var express = require('express');
var router = express.Router();
const skillController = require('../controllers/skills')

router.get('/', skillController.index);
router.get('/new', skillController.new);
router.get('/:id', skillController.show);

//.index is the function we exported from the controllers/todos
router.post('/', skillController.create);

router.delete('/:id', skillController.delete);
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


module.exports = router;










