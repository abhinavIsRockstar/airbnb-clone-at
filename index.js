const express = require('express');
const app = express();
// const mysql = require('mysql');
// const joi = require('joi');
// // const router = express.router();
const path = require('path');
app.use('/public',express.static(path.join(__dirname,'static')))
console.log(__dirname,'dirname')
// const fs = require('fs');

// const bodyParser = require('body-parser');



app.get('/', (req,res) =>{
    console.log('You are inside');
    // res.sendFile('index.html');
    res.sendFile(path.join(__dirname,'static','index.html'));
    // res.send('hello world');
})

app.listen('3000',() => {
    console.log('server started on port 3000');
})