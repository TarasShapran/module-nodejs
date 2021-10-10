const router = require('express')
    .Router();

const userController = require('../controllers/user.controller');
const userMiddleware = require('../middlewares/user.middleware');

router.get(
    '/',
    userController.getUsers);

router.post(
    '/',
    userMiddleware.isUserBodyValid,
    userMiddleware.createUserMiddleware,
    userController.createUser);

router.delete(
    '/:user_id',
    userMiddleware.checkUserIdMiddleware,
    userController.deleteUser);

router.get(
    '/:user_id',
    userMiddleware.checkUserIdMiddleware,
    userController.getUserById);

router.put(
    '/:user_id',
    userMiddleware.checkUserIdMiddleware,
    userMiddleware.isUserBodyValid,
    userMiddleware.createUserMiddleware,
    userController.createUser);

module.exports = router;
