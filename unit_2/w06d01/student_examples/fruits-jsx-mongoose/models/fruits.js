// const mongoose = require('mongoose');
// const Schema = mongoose.Schema; 
// const {Schema} = mongoose

const {Schema, model} = require('mongoose');

const fruitSchema = new Schema({
    name: {type: String, required: true},
    color: {type: String, required: true},
    readyToEat: Boolean
}, {timestamps: true})
// This is what each of our documents will look like

module.exports = model('Fruit', fruitSchema) // This creates our collection in MongoDB after we actually connect to the DB

/* {
_id: aspoahdfg;alkwero,
name: 'apple',
color: 'blue',
readyToEat: 'true,
createdAt: sometimestamp
} */