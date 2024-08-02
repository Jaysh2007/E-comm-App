import express from 'express';
import bodyParser from "body-parser"
import productRouter from './src/features/product/product.routes.js';

const app = express();

app.use(bodyParser.json());

app.use('/api/products', productRouter);

app.get('/',(req,res)=>{
    res.send('Welcome to Ecommerce APIs')
})

app.post('/',(req,res)=>{
    console.log('This is a post request');
})

app.listen(3200,()=>{
    console.log('Server is running on PORT-3200');
});

