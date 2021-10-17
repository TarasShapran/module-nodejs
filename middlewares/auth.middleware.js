const {userValidator} = require('../validators');
const passwordService = require('../service/password.service');
const ErrorHandler = require('../errors/ErrorHandler');
const {constants} = require('../configs');

module.exports = {
    isUserAuthValid: (req, res, next) => {
        try {
            const {error, value} = userValidator.authUserValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message,constants.BAD_REQUEST);
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
            const {password: hashPassword} = req.user;

            await passwordService.compare(password, hashPassword);

            next();
        } catch (err) {
            next(err);
        }
    }
};
