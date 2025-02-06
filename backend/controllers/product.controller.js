import Product from '../models/product.model.js'
import mongoose from 'mongoose'

export const getProducts = async (req,res)=>{
    try{
        const allProducts = await Product.find()
        res.json(allProducts)
    }catch(err){
        console.log('Error Fetching Products')
        res.status(500).json({success:false,message:'Server Error'})
    }
}

export const createProduct = async (req,res)=>{
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
}

export const updateProduct = async (req,res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate({ _id:req.params.id},{
                                        name:req.body.name,
                                        price:req.body.price,
                                        image:req.body.image
        },{new:true})
        res.status(200).json({success:true,data:updatedProduct})
    }catch(err){
        console.log(`Error Updating Product: ${err.message}`)
        res.status(404).json({success:false,message:'Error Updating Product'})
    }
}

export const deleteProduct = async (req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:'Product Deleted'})
    }catch(err){
        console.log('Error Deleting Product: ',err.message)
        res.status(404).json({success:false,message:'Product Not Found'})
    }     
}