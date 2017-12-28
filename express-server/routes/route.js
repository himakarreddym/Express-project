const express = require('express');
const Contact = require('../model/contacts')
const router = express.Router();

router.get('/contacts',(req,res,next)=>{
    Contact.find((err,contacts)=>{
        res.json(contacts);
    })
}) 

router.post('/contact',(req,res,next)=>{
    var newContact = new Contact({
           first_name:req.body.first_name, 
           last_name:req.body.last_name,
           phone:req.body.phone
    })
    newContact.save((err,contact) => {
        if(err){
            res.json({msg:'Unable to add new contact'});
        }
        else{
            res.json({msg:'Contact added sucessfully'}); 
        }
    })
}) 

module.exports = router;