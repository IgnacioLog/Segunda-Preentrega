const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  availability: Boolean
});

module.exports = mongoose.model('Product', productSchema);
