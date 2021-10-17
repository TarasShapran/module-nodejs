const {userNormalizator} = require('../util/user.util');
const {jwtService} = require('../service');
const {O_Auth} = require('../dataBase');

module.exports = {
    login: async (req, res, next) => {
        try {
            const {user} = req;

            const tokenPair = jwtService.generateTokenPair();

            const userNormalized = userNormalizator(user);

            await O_Auth.create({
                ...tokenPair,
                user_id: userNormalized._id
            });

            res.json({
                user: userNormalized,
                ...tokenPair
            });
        } catch (e) {
            next(e);
        }
    },

    logout: (req, res) => {
        res.json('userAuth');
    }
};
