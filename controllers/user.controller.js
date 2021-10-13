const User = require('../dataBase/User');
const passwordService = require('../service/password.service');
const userUtil = require('../util/user.util');


module.exports = {
    getUsers: async (req, res, next) => {
        try {
            const users = await User.find()
                .lean();

            const normalizedUser = users.map(value => userUtil.userNormalizator(value));

            res.json(normalizedUser);
        } catch (err) {
            next(err);
        }
    },

    getUserById: (req, res, next) => {
        try {
            const user = req.user;

            const normalizedUser = userUtil.userNormalizator(user.toObject());

            res.json(normalizedUser);
        } catch (err) {
            next(err);
        }
    },

    createUser: async (req, res, next) => {
        try {
            const {password} = req.body;

            const hashedPassword = await passwordService.hash(password);

            const newUser = await User.create({...req.body, password: hashedPassword});

            const normalizedUser = userUtil.userNormalizator(newUser.toObject());

            res.json(normalizedUser);
        } catch (err) {
            next(err);
        }
    },

    deleteUser: async (req, res, next) => {
        try {
            const {user_id} = req.params;

            await User.findByIdAndDelete(user_id);

            res.json(`User with id: ${user_id} deleted`);
        } catch (err) {
            next(err);
        }
    },
    updateUser: async (req, res, next) => {
        try {
            const {user_id} = req.params;

            const {password} = req.body;

            const hashedPassword = await passwordService.hash(password);

            const newUser = await User.findByIdAndUpdate(user_id, {...req.body, password: hashedPassword}, {new: true})
                .lean();

            const normalizedUser = userUtil.userNormalizator(newUser);

            res.json(normalizedUser);
        } catch (err) {
            next(err);
        }
    },
};
