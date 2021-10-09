const User = require('../dataBase/User');

module.exports = {
    createUserMiddleware: async (req, res, next) => {
        try {
            const {email} = req.body;

            const userByEmail = await User.findOne({email});

            if (userByEmail) {
                throw new Error('Email already exist');
            }
            next();
        } catch (err) {
            res.json(err.message);
        }
    },
    checkUserIdMiddleware: async (req, res, next) => {
        try {
            const {user_id} = req.params;

            const userId = await User.findById(user_id);

            if (!userId) {
                throw new Error('user_id does not exist');
            }
            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
