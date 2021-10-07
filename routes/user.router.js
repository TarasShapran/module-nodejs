const router = require('express').Router();

const userController = require('../controllers/user.controller')

router.get('/',userController.getUsers);
router.post('/',userController.createUser);
router.delete('/',userController.deleteUser);

module.exports = router;