import ProjectItem from "../components/projectItem/ProjectItem"
import ProjectDetails from "../helpers/ProjectDetails"
import "../pageStyles/Projects.css"
import { useNavigate } from "react-router-dom"

const Projects = () => {
    const navigate = useNavigate()

    const clickHandler = (id) => {
        navigate(`/projects/${id}`)
    }

    return (
        <>
            <div className="projects">
                <h1 className="projectTitle">My Personal Projects</h1>
                <div className="projectList">
                    {ProjectDetails.map((project) => (
                        <div
                            onClick={() => clickHandler(project.id)}
                            key={project.id}
                        >
                            <ProjectItem
                                image={project.image}
                                name={project.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects
