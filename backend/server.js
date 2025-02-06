import express from 'express'
import {connectDB} from './config/db.js'
import productRoutes from './routes/product.route.js'
import dotenv from 'dotenv'
dotenv.config()


const app = express()
app.use(express.json()) // middleware that allows json data in req.body
// middleware = a function that runs between req/res
const PORT = process.env.PORT || 6161
app.use('/api/products', productRoutes)


app.listen(PORT,()=>{
    connectDB()
    console.log(`Server Listening on Port: ${PORT}`)
})