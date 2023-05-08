const express = require('express');
//app is simply function that represents express module 
const app = express();
//'/'-represents the home root and call back function for what to do wwhen that function happens
app.get('/',function(req,  res){
    res.send('hello');
});
app.get('/contact',function(req,res){
    res.send('contacvt me at : fhwjajoi.com')
});
app.get('/about', function(req,res){
    res.send('im a web developer');
});

app.get('/hobbies',function(req,res){
    res.send('valorant');
});
//using nodemon to auto update the responsen on the server
//intilization of nodemon is nodemon file_name
//creating the server with host code 
app.listen(3000 , function(){
    console.log('server start server');
});
