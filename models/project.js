const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: String,
    topic: String,
    description: String,
    github: String,
    image: String,
})

// Creating model

const Project = mongoose.model('Project', projectSchema, "projects");

module.exports = Project;

