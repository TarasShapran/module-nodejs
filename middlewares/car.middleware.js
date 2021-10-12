const Car = require('../dataBase/Car');
const ErrorHandler = require('../errors/ErrorHandler');
const carValidator = require('../validators/car.validator');


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
            console.log(carId);
            if (!carId) {
                throw new ErrorHandler('CarId does not exist', 400);
            }

            req.car = carId;

            next();
        } catch (err) {
            next(err);
        }
    },

    isCarPresent: (req, res, next) => {
        try {


            next();
        } catch (err) {
            next(err);
        }
    }

};
