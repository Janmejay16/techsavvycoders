/*
Collaborators
    - Project Id
    - Collab Id
    - User Id
    - Role
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Collaborator = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project"
    },
    role: {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model("Collaborator",Collaborator);