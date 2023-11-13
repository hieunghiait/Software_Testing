const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')
const Product = require('../model/Product')

router.get('/products', async (req, res) => {
  try {
    const products = await Product.find()
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
})
router.get('/product/:id', async (req, res) => {
  try {
    const product = await productController.getAllProducts()
    if (!product) {
      return res.status(404).json({ message: 'Cannot find product' })
    }
    return res.send(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
router.post('/products', async (req, res) => {
  try {
    const { name, price, description } = req.body
    const product = await Product.create({ name, price, description })
    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.put('/product/:id', async (req, res) => {
  try {
    const product = await productController.updateProductById(req.params, req.body)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
router.delete('/product/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})
module.exports = router