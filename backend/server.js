import express from 'express'
import {connectDB} from './config/db.js'
import Product from './models/product.model.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json()) // middleware that allows json data in req.body
// middleware = a function that runs between req/res
const PORT = process.env.PORT || 6161

app.post('/api/products', async (req,res)=>{
    const product = req.body
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({success:false, message:"Please provide all fields"})        
    }
    const newProduct = new Product(product)
    try{
        await newProduct.save()
        res.status(201).json({success:true, data: newProduct})
    }catch(err){
        console.error(`ERROR creating new product: ${err.message}`)
        res.status(500).json({success:false,message:"Server Error"})
    }
})

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server Listening on Port: ${PORT}`)
})