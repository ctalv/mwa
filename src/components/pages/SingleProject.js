import React from "react";
import { useParams } from 'react-router-dom'
import "../../assets/styles/projects.css";
// import photoRiceVillage from "../../assets/images/projects/RachelAlysePhotographyTheOwenGroupChristmas-2.jpg"
import projectList from "../../assets/data/projects";

function SingleProject() {

    // const { title } = useParams();

    return (
        <div class="projects">
            <h2 class="text-center">Projects</h2>
            <div class="container">
                <div class="gallery text-center row">
                    <div class="project col">
                        <a href="">
                            <img class="project-photo col" src={projectList[0].mainImage}
                                alt={projectList[0].mainAlt} />
                            <h3>{projectList[0].title}</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProject;