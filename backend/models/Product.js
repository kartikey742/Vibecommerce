const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  picture: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
