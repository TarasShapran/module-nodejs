const router = require('express').Router();

const userController = require('../controllers/user.controller');

router.get('/', userController.getUsers);
router.post('/', userController.createUser);

router.delete('/:user_id', userController.deleteUser);
router.get('/:user_id', userController.getUserById);

module.exports = router;
