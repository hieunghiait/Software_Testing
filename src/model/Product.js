const { model, Schema } = require("mongoose")

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  available: Boolean,
}, { timestamps: true }, {
  versionKey: false
})
const Product = model('products', productSchema)
module.exports = Product