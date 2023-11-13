const Product = require('../model/Product')
async function getProductById(id) {
  return await Product.findById(id)
}
async function updateProductById(params, body) {
  return await Product.findByIdAndUpdate(params, body, { new: true })
}
async function getAllProducts() {
  return await Product.find()
}


module.exports = {
  getProductById,
  updateProductById,
  getAllProducts
}