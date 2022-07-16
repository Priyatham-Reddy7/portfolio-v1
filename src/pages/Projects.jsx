import ProjectItem from "../components/projectItem/ProjectItem"
import ProjectDetails from "../helpers/ProjectDetails"
import "../pageStyles/Projects.css"

const Projects = () => {
    return (
        <>
            <div className="projects">
                <h1>My Personal Projects</h1>
                <div className="projectList">
                    {ProjectDetails.map((project) => (
                        <ProjectItem
                            key={project.id}
                            image={project.image}
                            name={project.name}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Projects
