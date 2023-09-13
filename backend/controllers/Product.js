const { validationResult } = require("express-validator");
const ProductModal = require("../models/Product.js");
const { Params } = require("react-router-dom");


// insert products in database
module.exports.createProduct = async (request, response) => {
  const errors = validationResult(request);
  const {title,price,image,category,description,sizes,colors,discount,stock}=request.body
  if (errors.isEmpty()) {
    console.log(request.body)
    try{
      const newProductModal ={
        title:title,
        price:price,
        image:image,
        category:category,
        description:description,
        sizes:sizes,
        colors:colors,
        discount:discount,
        stock:stock
        
        // title:title,
        // price:request.body.price,
        // image:request.body.image,
        // category:request.body.category,
        // description:request.body.description,
        // sizes:request.body.sizes,
        // colors:request.body.colors,
        // discount:request.body.discount,
        // stock:request.body.stock,
      }
      const product=await ProductModal.create(newProductModal)
      if(product){
        console.log("data inserted successfully")
      }else{
        console.log("data not inserted successfully")
      }
      return response.status(201).send(product)
  }catch (error) {
    console.log(error.message)
    response.status(500).send({message:error.message})
  }
  }else {
    return response.status(400).json({error: errors.array()})
   
   }
  
 
 
  };
  


  //get all products
  module.exports.getProducts=async(request,response)=>{

    try {
      const getAllProducts=await ProductModal.find({})
      return response.status(200).json(getAllProducts)
    } catch (error) {
      return response.status(400).json({error:error.message})
    }
    return response.status(200).json({msg: "get products"})
  }


  //Delete products
  //get all products
  module.exports.deleteProduct=async(request,response)=>{
    const { id } = request.params;
    if(!id || id ===""){
      return response.status(400).json({msg: "id is required"})
    }

    try {
      
      const deleteProduct=await ProductModal.findByIdAndDelete({ _id:id})
      if(deleteProduct){
        
      return response.status(200).json({msg: "Product deleted successfullys"})
      }
    } catch (error) {
      return response.status(400).json({error:error.message})
    }
    
    
   
    
  }



//update product
module.exports.updateProduct=async(request,response)=>{
  
  const errors= validationResult(request);
  if(errors.isEmpty()){
    try {
      const { id } = request.params;
  const {title,price,image,category,description,sizes,colors,discount,stock}=request.body
      await ProductModal.findOneAndUpdate(
        { $and:[{_id:id}]},
        {
          $set:{
            title,price,image,category,description,sizes,colors,discount,stock
          },
        }
        )
        
        response.status(200).json({ msg: "product has been updated" });
    } catch (error) {
      return response.status(400).json({error:error.message})
    }
  }else{
    
    return res.status(200).json({ error: errors.array() });
  }
  }
  
  
 
  

  module.exports.home=async (request, response)=>{
    return response.status(200).send({msg: "yes things are working"})
    }




   // module.exports={home}
  // Export the controller function
 // module.exports = { createProduct };
  