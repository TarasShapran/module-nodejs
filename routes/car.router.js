const router = require('express').Router();

const carController = require('../controllers/car.controller');
const carMiddleware = require('../middlewares/car.middleware');

router.post(
    '/',
    carMiddleware.isCarBodyValid,
    carController.createCar);

router.get(
    '/:car_id',
    carMiddleware.checkCarIdMiddleware,
    carController.getCarById);
router.get(
    '/',
    carController.getCars);
router.put(
    '/:car_id',
    carMiddleware.checkIsCarBodyUpdateValid,
    carController.updateCar);
router.delete(
    '/:car_id',
    carMiddleware.checkCarIdMiddleware,
    carController.deleteCar);


module.exports = router;
