/*
User
    - User Id
    - *Name
    - *Email
    - *Mobile
    - *Password
    - Profile Pic {blob}
    - Social Links {array}
        - Name
        - Url
    - Education {array}
        - name
        - graduation
        - qualification
        - major
    - Experience {array}
        - company
        - role
        - duration
        - work
    - *Skills {array - string}
    - Notifications via Email {boolean, default:false}
    - Verified {boolean, default: false}
*/
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let User = new Schema(
  {
    name: {
      type: String,
      default: "" 
    },
    email: {
      type: String,
      default: ""
    },
    mobile: {
      type: String,
      default: "" 
    },
    password: {
        type: String,
        default: "" 
    },
    image: {
        data: Buffer,
        contentType:String,
        default: "" 
    },
    socialLinks: [{
        app: String,
        url: String,
        default: "" 
    }],
    education: [{
        instituteName: String,
        major: String,
        qualification: String,
        graduationYear: Number,
        default: "" 
    }],
    experience: [{
        company: String,
        role: String,
        work: String,
        duration: Number,
        default: "" 
    }],
    skills: [{
        type:String,
        default: "" 
    }],
    emailNotifications : {
        type: Boolean,
        default: false
    },
    verifiedEmail: {
        type: Boolean,
        default: false
    }
  },
  { collection: "User" }
);
module.exports = mongoose.model("User",User);