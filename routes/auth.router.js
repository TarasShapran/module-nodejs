const router = require('express')
    .Router();

const {authController} = require('../controllers');
const {userMiddleware, authMiddleware} = require('../middlewares');

router.post(
    '/',
    authMiddleware.isUserAuthValid,
    userMiddleware.isUserPresent,
    authMiddleware.isPasswordMatched,
    authController.login
);

router.post(
    '/logout',
    authMiddleware.checkLogoutToken,
    authController.logout
);

router.post(
    '/logout-all',
    authMiddleware.checkLogoutAllToken,
    authController.logout
);

router.post(
    '/refresh',
    authMiddleware.checkRefreshToken,
    authController.login
);

module.exports = router;
