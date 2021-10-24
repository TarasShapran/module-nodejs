const {Schema, model} = require('mongoose');

const {modelNamesEnum} = require('../configs');

const carSchema = new Schema({
    brand: {
        type: String,
        required: true,
        trim: true
    },
    model: {
        type: String,
        required: true,
        trim: true
    },
    year: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {timestamps: true});

module.exports = model(modelNamesEnum.CARS, carSchema);
