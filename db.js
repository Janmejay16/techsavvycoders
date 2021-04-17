var mongoose = require('mongoose');

var mongoUrl = "mongodb+srv://hacknuthon:hacknuthon@cluster0.a8vwx.mongodb.net/hacknuthon?retryWrites=true&w=majority"
mongoose.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

db.once("open", function() {
    console.log("MongoDB database connection established successfully");
  });

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;