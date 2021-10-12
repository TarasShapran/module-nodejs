const userValidator = require('../validators/user.validator');
const passwordService = require('../service/password.service');

module.exports = {

    isUserAuthValid: (req, res, next) => {
        try {
            const {error, value} = userValidator.authUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            req.body = value;

            next();
        } catch (err) {
            next(err);
        }
    },

    isPasswordMatched: async (req, res, next) => {
        try {
            const {password} = req.body;
            const {password:hashPassword} = req.user;

            await passwordService.compare(password,hashPassword);

            next();
        } catch (err) {
            next(err);
        }
    }
};
