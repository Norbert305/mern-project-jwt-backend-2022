const express = require('express');//back-end web-framework
const app = express() 
const colors =require('colors')
const dotenv = require('dotenv').config()//allows to use dotenv
const port = process.env.PORT || 5000 
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());



app.listen(port,()=>{
    console.log(`Our server port ${port} is running!!!!`)})