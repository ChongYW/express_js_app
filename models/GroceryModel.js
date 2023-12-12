// Create a grocery model.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GrocerySchema = new mongoose.Schema({
    id: { type: Number, required: true },
    item: { type: String, required: true },
    price: { type: Number, required: true },
    qty: { type: Number, required: true }
});

const Grocery = mongoose.model('Grocery', GrocerySchema);

module.exports = Grocery;