
const express = require('express');
const { createProduct, home, getProducts, deleteProduct, updateProduct } = require('../controllers/product');
const {productvalidation}=require('../validations/productValidation')
const router = express.Router();



router.post('/product/create_product',productvalidation,createProduct)

router.get('/product/get_products',getProducts);

router.delete('/product/delete_product/:id',deleteProduct);

router.put('/product/update_product/:id',updateProduct);


router.get('/',home)
module.exports=router

