const Car = require('../dataBase/Car');
const ErrorHandler = require('../errors/ErrorHandler');
const {carValidator} = require('../validators');
const {constants: NOT_FOUND} = require('../configs');

module.exports = {
    isCarBodyValid: (req, res, next) => {
        try {
            const {error, value} = carValidator.createCarValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, 400);
            }

            req.body = value;

            next();
        } catch (err) {
            next(err);
        }
    },

    checkIsCarBodyUpdateValid: (req, res, next) => {
        try {
            const {error, value} = carValidator.updateCarValidator.validate(req.body);

            if (error) {
                throw new ErrorHandler(error.details[0].message, 400);
            }

            req.body = value;

            next();
        } catch (err) {
            next(err);
        }
    },

    checkCarIdMiddleware: async (req, res, next) => {
        try {
            const {car_id} = req.params;

            const carId = await Car.findById(car_id);

            if (!carId) {
                throw new ErrorHandler('CarId does not exist', NOT_FOUND);
            }

            req.car = carId;

            next();
        } catch (err) {
            next(err);
        }
    }
};
