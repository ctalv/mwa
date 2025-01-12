import React from "react";
import { useParams } from 'react-router-dom'
import "../../assets/styles/projects.css";
// import photoRiceVillage from "../../assets/images/projects/RachelAlysePhotographyTheOwenGroupChristmas-2.jpg"
import projectList from "../../assets/data/projects";

function SingleProject() {

    const { title } = useParams();
    const project = projectList.find(item => item.title === title)

    return (
        <main>
        <div className="projects">
            <h2 className="text-center">PROJECTS</h2>
            <div className="container">
                <div className="gallery text-center row">
                    <div className="project col">
                        <a href="">
                            <img className="project-photo col" src={project.mainImage}
                                alt={project.mainAlt} />
                            <h3>{project.title}</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </main>
    );
}

export default SingleProject;