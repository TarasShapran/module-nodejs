const jwt = require('jsonwebtoken');

const ErrorHandler = require('../errors/ErrorHandler');
const {config, tokenTypeEnum} = require('../configs');
const {JWT_ACCESS_SECRET, JWT_REFRESH_SECRET} = require('../configs/config');

module.exports = {
    generateTokenPair: () => {
        const access_token = jwt.sign({}, JWT_ACCESS_SECRET, {expiresIn: '15m'});
        const refresh_token = jwt.sign({}, JWT_REFRESH_SECRET, {expiresIn: '30d'});
        return {
            access_token,
            refresh_token
        };
    },
    verifyToken: (token, tokenType = tokenTypeEnum.ACCESS) => {
        try {
            const secret = tokenType === tokenTypeEnum.ACCESS ? config.JWT_ACCESS_SECRET : config.JWT_REFRESH_SECRET;

            jwt.verify(token, secret);
        } catch (e) {
            throw new ErrorHandler('Invalid token', 401);
        }
    }
};
