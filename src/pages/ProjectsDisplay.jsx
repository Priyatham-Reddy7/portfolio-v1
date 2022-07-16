import Github from "@mui/icons-material/Github"
import { useParams } from "react-router-dom"
import ProjectDetails from "../helpers/ProjectDetails"
import "../pageStyles/ProjectsDisplay.css"

const ProjectsDisplay = () => {
    const { id } = useParams()
    const selectedProject = ProjectDetails[id]

    return (
        <>
            <div className="project">
                <h1>{selectedProject.name}</h1>
                <img src={selectedProject.image} />
                <p>
                    <b>Skills: </b> {selectedProject.skills}
                </p>
                <Github />
            </div>
        </>
    )
}

export default ProjectsDisplay
