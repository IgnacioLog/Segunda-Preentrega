const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartProductSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product' },
  quantity: Number
});

const cartSchema = new Schema({
  products: [cartProductSchema]
});

module.exports = mongoose.model('Cart', cartSchema);
