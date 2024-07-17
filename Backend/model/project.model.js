import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
    name: String,
    git: String,
    category: String,
    image: String,
    title: String
})
const Project = mongoose.model("Project", projectSchema);

export default Project;