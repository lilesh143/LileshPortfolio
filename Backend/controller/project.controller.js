import Project from "../model/project.model.js";

export const getProject = async(req, res) => {
    try {
        const project = await Project.find();
        res.status(200).json(project);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
}