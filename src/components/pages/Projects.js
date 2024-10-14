import * as React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/projects.css";
// import photoRiceVillage from "../../assets/images/projects/RachelAlysePhotographyTheOwenGroupChristmas-2.jpg"
import "../../assets/data/projects"

function Projects(projectList) {
    console.log(projectList)

    return (
        <div class="projects">
            <h2 class="text-center">Projects</h2>
            <div class="container">
                <div class="gallery text-center row">
                    {projectList.map(item => (
                        <div class="project col">
                            <Link to={`/project/${item.title}`}>
                                <img class="project-photo col" src={item.mainImage}
                                    alt="Splash image placeholder" />
                                <h3>{item.title}</h3>
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;