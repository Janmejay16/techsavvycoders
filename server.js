const express = require("express");
const User = require("./models/User");
const Project = require("./models/Project");
const Collaborator = require("./models/Collaborator");
const Notification = require("./models/Notification");
const SecretCode = require("./models/SecretCode");
const db = require('./db')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require("path");
const bcrypt = require('bcrypt')
var crypto = require("crypto");
var nodemailer = require('nodemailer')

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

baseUrl = "http://localhost:5000"

var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'theprojecez@gmail.com',
        pass: 'lakhtarejelakhvuhoi'
    }
});
var mailOptions = {
    from: 'theprojecez@gmail.com',
    to: '',
    subject: '',
    text: ``
};
const mail = async (to, subject, text) => {
    mailOptions.to = to;
    mailOptions.subject = subject;
    mailOptions.text = text;
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) return false
        else return true
    })
}

app.use(express.static('build'))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
})

app.post('/register',async (req,res) => {
    User.findOne({ $or: [{'email': req.body.email}, {'mobile': req.body.mobile}]}, (err,user) => {
        if (user) {
            res.json({success:false,message:"Email/Mobile Already Exists"})
        }
        else {
            data = req.body
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                data['password'] = hash
                var newUser = User(data)
                newUser.save((err,result) => {
                    console.log(result)
                    if (err) res.json({success: false,message:"Something Went Wrong!"})
                    else {
                        var code = crypto.randomBytes(20).toString('hex');
                        secret = SecretCode({email: req.body.email, code: code})
                        secret.save( async (err,data) => {
                            if (!err) {
                                url= `${baseUrl}/api/auth/verification/verify-account/${result._id}/${code}`
                                try {
                                    sent = await mail(result.email, "Verify Your Email", url)
                                    if (sent) res.json({user:result,success: true,message:"User Registered successfully!", mail:"Verify your email !"})
                                }
                                catch(err1) {
                                    console.log(err1)
                                        res.json({"success":true,message: "Error with your email"})
                                }
                            }
                            else {
                                res.json({"success":true,message: "Something Went wrong!"})
                            }
                        })
                    }
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
                    if (data.verifiedEmail) {
                        res.json({
                            success: true,
                            message: "Logged In",
                            user: user
                        })
                    }
                    else {
                        res.json({success: true, message:"Verify your email first!"})
                    }
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

app.get('/api/auth/verification/verify-account/:userId/:secretCode', (req,res) => {
    const { userId, secretCode } = req.params;
    User.findOne({_id: userId}, (err,user) => {
        if (user){
            email = user.email
            console.log(email)
            console.log(userId)
            console.log(secretCode)
            SecretCode.findOne({email: email}, (err,code) => {
                if(code) {
                    console.log(code)
                    if (code.code == secretCode) {
                        User.findOneAndUpdate({email: code.email}, {emailVerified: true}, null, (err,data) => {
                            if(err) {
                                res.send("Error In Your Verification!")
                            }
                            else {
                                res.send("Email Verified Successfully!")
                            }
                        })
                    }
                    else {
                        res.send("Code not matched")
                    }
                }
                else {
                    res.send("No code found")
                }
            })
        }
        else {
            res.send("Invalid Token!")
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