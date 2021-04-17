const express = require("express");
const User = require("./models/User");
const Project = require("./models/Project");
const Collaborator = require("./models/Collaborator");
const Notification = require("./models/Notification");
const db = require('./db')
const cors = require('cors')
const bodyParser = require('body-parser')
// const path = require("path");
const bcrypt = require('bcrypt')

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/',(req,res) => {
    res.send("Hey")
})

app.post('/register',(req,res) => {

    User.findOne({ $or: [{'email': req.body.email}, {'mobile': req.body.mobile}]}, (err,user) => {
        if (user) {
            message = {}
            if (user['email']==req.body.email) message['email']="Email Already Registered"
            if (user['mobile']==req.body.mobile) message['mobile']="Mobile Already Registered"
            res.json({success:false,message:message})
        }
        else {
            data = req.body
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                data['password'] = hash
                var newUser = User(data)
                newUser.save((err,result) => {
                    console.log(result)
                    if (err) res.json({success: false,message:"Something Went Wrong!"})
                    else res.json({user:result,success: true,message:"User Registered successfully!"})
                })
            });
        }
    })
})

app.post('/login', (req,res) => {
    User.findOne({'email': req.body.email}, (err,user) => {
        if (user) {
            bcrypt.compare(req.body.password, user.password, (err,data) => {
                if (data) {
                    res.json({
                        success: true,
                        message: "Logged In",
                        user: user
                    })
                }
                else {
                    res.json({
                        success: false,
                        message: "Incorrect Password!"
                    })
                }
            })
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

app.get('/projects', (req, res) => {
    Project.find({}, (err, data) => {
        if (err) res.send("Something went Wrong : ", err.message)
        else res.send(data)
    })
})

app.get('/projects/:id', (req, res) => {
    Project.findOne({'_id': req.params.id}, (err, data) => {
        if (err) res.send("Something went Wrong : ", err.message)
        else res.send(data)
    })
})

app.post('/projects', (req, res) => {
    console.log(req.body)
    var newProject = Project(req.body)
    newProject.save((err, data) => {
        if (err) res.send(err)
        else res.send("Project added")
    })
})

app.delete('/projects/:id', (req, res) => {
    try{
        console.log(Project.findOneAndRemove({'_id':req.params.id}))
        res.send('Deleted')
    }catch(err){
        res.send('Error')
    }
})

app.get('/collaborator', (req, res) => {
    Collaborator.find({}, (err, data) => {
        if (err) res.send("Something went Wrong : ", err.message)
        else res.send(data)
    })
})

app.get('/notification', (res, req) => {
    Notification.find({}, (err, data) => {
        if (err) res.send("Something went Wrong : ", err.message)
        else res.send(data)
    })
})

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
  });