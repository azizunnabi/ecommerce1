const mongoose=require("mongoose");
const ProductSchema = mongoose.Schema({
    title : {
        require:true,
        type:String,
    },
    price : {
        require:true,
        type:Number,
    },
    image : {
        require:true,
        type:String,
    },
    category : {
        require:true,
        type:String,
    },
    description : {
        require:true,
        type:String,
    },
    sizes : {
        require:false,
        type:Map,
        enums:['sm', 'xs', 'md', 'lg', 'xl', '2xl', '3xl']
    },
    colors : {
        require:false,
        type:Map,
    },
    discount: {
        require:true,
        type:Number,
    },
    stock : {
        require:true,
        type:Number,
    }},
{timeStamps:true}
);

 const ProductModal = mongoose.model('ProductModal', ProductSchema);
 module.exports=ProductModal