const User = require('../dataBase/User');
const userValidator = require('../validators/user.validator');

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
            console.log(`id : ${userId}`);
            next();
        } catch (err) {
            res.json(err.message);
        }
    },
    isUserBodyValid: (req, res, next) => {
        try {
            const {error, value} = userValidator.createUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            req.body = value;

            next();
        } catch (err) {
            res.json(err.message);
        }
    }
};
