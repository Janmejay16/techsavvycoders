/*
Notifications [Apply as collab, req for collab, Accept/Decline]
    - User Id
    - Project Id
    - Desc {abstract}
    - seen {boolean, default: false}
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let SecretCode = new Schema({
    email: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        required: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now(),
        expires: 6000,
    }
});

module.exports = mongoose.model("SecretCode", SecretCode);