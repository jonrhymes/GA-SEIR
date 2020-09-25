const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {type: String, required: true},
    description: String,
    img: String,
    price: {type: Number, minimum: 0},
    qty: {type: Number, minimum: 0}
}, {timestamps: true})

module.exports = model('Product', productSchema)