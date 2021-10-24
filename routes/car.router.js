const router = require('express')
    .Router();

const {carController} = require('../controllers');
const {carMiddleware, userMiddleware} = require('../middlewares');

router.get(
    '/:user_id',
    userMiddleware.checkUserIdMiddleware,
    carController.getCars);

router.post(
    '/:user_id',
    carMiddleware.isCarBodyValid,
    userMiddleware.checkUserIdMiddleware,
    carController.createCar);

router.delete(
    '/:car_id',
    carMiddleware.checkCarIdMiddleware,
    carController.deleteCar);

router.get(
    '/:car_id',
    carMiddleware.checkCarIdMiddleware,
    carController.getCarById);

router.put(
    '/:car_id',
    carMiddleware.checkIsCarBodyUpdateValid,
    carMiddleware.checkCarIdMiddleware,
    carController.updateCar);

module.exports = router;
