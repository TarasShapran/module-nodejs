const User = require('../dataBase/User');
const passwordService = require("../service/password.service");
const userValidator = require("../validators/user.validator");

module.exports = {
    userAuthMiddleware: async (req, res, next) => {
        try {
            const {email, password} = req.body;
            console.log(email, password);
            const userAuth = await User.findOne({email});

            await passwordService.compare(password, userAuth.password);

            next();
        } catch (err) {
            res.json(err.message);
        }
    },
    isUserAuthValid: (req, res, next) => {
        try {
            const {error, value} = userValidator.authUserValidator.validate(req.body);

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
