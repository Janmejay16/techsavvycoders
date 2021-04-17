/*
Projects
    - Project Id
    - User Id
    - Owner name(abstract)
    - *Prjct name
    - *Desc
    - Url
    - *tags {array - string}
    - collaborators {array - names(string)}
    - images {array - blob}
    - completed {boolean: false}
    - requirementsSatisfied {boolean, default: false}
*/

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Project = new Schema({
    owner: {
        type: String
    },
    name: {
        type: String,
        default: ""
    },
    desc: {
        type: String,
        default: ""
    },
    url: {
        type: String,
        default: ""
    },
    tags: [{
        type: String,
        default: ""
    }],
    collabs: [{
        type: String
    }],
    images: [{
        data: Buffer,
        contentType: String,
        default: ""
    }],
    completed: {
        type: Boolean,
        default: false
    },
    requirementsSatisfied: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model("Project",Project);