import express from 'express'
import {getProducts,createProduct,updateProduct,deleteProduct} from '../controllers/product.controller.js'
const router = express.Router()

router.post('/', createProduct)

router.delete('/:id', deleteProduct)

router.put('/:id', updateProduct)

router.get('/', getProducts)

export default router