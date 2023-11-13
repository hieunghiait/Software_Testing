const express = require('express')
const mongoose = require('mongoose')
const productRouter = require('./src/router/productRouter')
const app = express()
app.use(express.json())
const port = 3000

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
mongoose.connect('mongodb+srv://hieunghia:Nghia2002@cluster0.apeqpsp.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err))

app.use('/api/v1', productRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})