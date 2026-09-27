const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express()

app.use(express.json())

const MONGO_URI = process.env.MONGO_URI

app.get("/",(req,res)=>{
    res.json({message:`Server is running`})
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
})

mongoose.connect(MONGO_URI).then(()=>{
    console.log("MongoDB Connected");
})