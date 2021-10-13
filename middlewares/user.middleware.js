const User = require('../dataBase/User');
const userValidator = require('../validators/user.validator');
const ErrorHandler = require('../errors/ErrorHandler');

module.exports = {
    createUserMiddleware: async (req, res, next) => {
        try {
            const {email} = req.body;

            const userByEmail = await User.findOne({email});

            if (userByEmail) {
                throw new ErrorHandler('Email already exist',400);
            }

            next();
        } catch (err) {
            next(err);
        }
    },
    updateUserMiddleware: (req, res, next) => {
        try {
            const { email } = req.body;

            if ( email ) {
                throw new ErrorHandler('You can not change the email',400);
            }
            const {error, value} = userValidator.updateUserValidator.validate(req.body);

            if (error) {
                throw new Error(error.details[0].message);
            }

            req.body = value;

            next();
        } catch (err) {
            next(err);
        }
    },

    checkUserIdMiddleware: async (req, res, next) => {
        try {
            const {user_id} = req.params;

            const userId = await User.findById(user_id);

            if (!userId) {
                throw new ErrorHandler('User_id does not exist',400);
            }

            req.user = userId;

            next();
        } catch (err) {
            next(err);
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
            next(err);
        }
    },

    isUserPresent: async (req, res, next) => {
        try {
            const {email} = req.body;

            const userByEmail = await User
                .findOne({email})
                .lean();

            if (!userByEmail){
                throw new ErrorHandler('Wrong email or password',400);
            }

            req.user=userByEmail;

            next();
        } catch (err) {
            next(err);
        }
    },

    checkUserRole:(roleArr=[])=>(req, res, next)=>{
        try {
            const {role} = req.user;
            if (!roleArr.includes(role)){
                throw new ErrorHandler('Access denied ',400);
            }

            next();
        }catch (err) {
            next(err);
        }
    }
};
