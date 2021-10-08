const router = require('express').Router();

const userController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');

router.get('/', userController.getUsers);
router.post('/', userMiddleware.createUserMiddleware, userController.createUser);

router.delete('/:user_id', userController.deleteUser);
router.get('/:user_id', userController.getUserById);

module.exports = router;
