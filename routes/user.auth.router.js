const router = require('express').Router();

const userController = require('../controllers/user.controller');
const {userAuthMiddleware} = require('../middlewares/auth.middleware');

router.get('/', userAuthMiddleware, userController.loginUser);

module.exports = router;
