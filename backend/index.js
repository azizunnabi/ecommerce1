const express = require("express");
const connect = require("./config/DataBase")
//import mongoose from "mongoose";
//Middleware to parse JSON request bodies
require("dotenv").config();
const productRoutes = require("./routes/product_routes.js");
const { home } = require("./controllers/product");

const app=express();
app.use(express.json());
connect();

app.use('/api',productRoutes)
app.use('/api',home)

const port=5001;
app.listen(port, ()=> {
    console.log(`server is listening to to port: ${port}`)
})



