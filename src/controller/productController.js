const Product = require('../model/Product')
const productService = require('../service/productSerivce')

async function getAllProducts(req, res) {
  try {
    const products = await productService.getAllProducts()
    res.json({
      status: 'success',
      message: 'Get all products successfully',
      data: {
        products
      }
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
async function getProductById(req, res) {
  try {
    const { id } = req.params.id
    const product = await productService.getProductById(id)
    if (!product) {
      return res.status(404).json({ message: 'Cannot find product' })
    }
    return res.send(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
async function updateProductById(params, body) {
  const { id } = params
  const { name, description, price } = body
  const product = await Product.findByIdAndUpdate(id, { name, description, price }, { new: true })
  if (!product) {
    throw new Error('Product not found')
  }
  return product
}
module.exports = {
  getAllProducts,
  getProductById,
  updateProductById
}
