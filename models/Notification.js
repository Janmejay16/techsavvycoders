/*
Notifications [Apply as collab, req for collab, Accept/Decline]
    - User Id
    - Project Id
    - Desc {abstract}
    - seen {boolean, default: false}
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Notification = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project"
    },
    desc: {
        type: String,
        required: true
    },
    seen: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Notification", Notification);
