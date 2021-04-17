// const mongoose = require("mongoose");
const express = require("express");
const User = require("./models/User");
const db = require('./db')
const bodyParser = require('body-parser')
// const path = require("path");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send("Hey")
})

app.post('/register',(req,res) => {

    User.findOne({ $or: [{'email': req.body.email}, {'mobile': req.body.mobile}]}, (err,user) => {
        if (user) {
            message = {}
            if (user['email']==req.body.email) message['email']="Email Already Registered"
            if (user['mobile']==req.body.mobile) message['mobile']="Mobile Already Registered"
            res.send(message)
        }
        else {
            var newUser = User(req.body)
            newUser.save((err,data) => {
                if (err) res.send("Something Went Wrong!")
                else res.send("User added")
            })
        }
    })
})

app.post('/login', (req,res) => {
    User.findOne({'email': req.body.email}, (err,user) => {
        if (user) {
            if(user.password == req.body.password) {
                res.json({
                    success: true,
                    message: "Logged In"
                })
            }
            else {
                res.json({
                    success: false,
                    message: "Incorrect Password!"
                })
            }
        }
        else {
            res.send("User Not Found!")
        }
    })
})

app.get('/users', (req,res) => {
    users = {}
    User.find({}, (err,users) => {
        if(err) res.send("Something went Wrong : ",err.message)
        else res.send(users)
    })  
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
  });