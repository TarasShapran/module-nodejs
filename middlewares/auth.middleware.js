const User = require('../dataBase/User');

module.exports = {
    userAuthMiddleware: async (req, res, next) => {
        try {
            const {email ,password } = req.body;

            const userAuth = await User.findOne(email,password);

            if (!userAuth) {
                throw new Error('Wrong email or password');
            }
            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
