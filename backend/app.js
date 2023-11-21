const express = require('express');
const app=express();
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config({path:"./config/config.env"});
const router = require("./routes/paymentRoute.js");
require("./db/conn.js")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',router)
app.get('/api/getKey',(req,res)=>{
    res.status(200).json({key:process.env.RAZORPAY_API_KEY})
})

module.exports = app;