//importing modues
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyparser = require('body-parser');
var cors = require('cors');
var app = express();
const route = require('./routes/route');

//Constants
const port = 3000;

//Adding middle ware-cors
app.use(cors());
//Adding middle ware
app.use(bodyparser.json());

//Static files
app.use(express.static(path.join(__dirname,'public')));

//routes
app.use('/api',route);

//Connect to Mongodb using mongoose and used this in contacts.js file to connect to model, simply we
//can write like var conn= , then conn.model('modelname',schema)
mongoose.connect('mongodb://mongo:27017/contactlist/contacts');

mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB database ");
})

mongoose.connection.on('error',(err)=>{
    console.log("Connection to MongoDB failed "+err);
})

//Routing
app.get('/',(req,res)=>{
        res.send('Hello world')
})

//Defining the port
app.listen(port,() =>{
    console.log('server started on port'+port);
});