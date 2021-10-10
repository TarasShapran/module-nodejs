const router = require('express').Router();

const userController = require('../controllers/user.controller');
const {userAuthMiddleware, isUserAuthValid} = require('../middlewares/auth.middleware');

router.post(
    '/',
    isUserAuthValid,
    userAuthMiddleware,
    userController.loginUser);

module.exports = router;
