const router = require('express')
    .Router();

const authController = require('../controllers/auth.controller');
const {userMiddleware, authMiddleware} = require('../middlewares');
const {ADMIN} = require('../configs/user-roles.enum');

router.post(
    '/',
    authMiddleware.isUserAuthValid,
    userMiddleware.isUserPresent,
    userMiddleware.checkUserRole([ADMIN]),
    authMiddleware.isPasswordMatched,
    authController.login
);

router.post(
    '/logout',
    authController.logout
);

module.exports = router;
