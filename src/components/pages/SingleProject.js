import React from "react";
import { useParams } from 'react-router-dom'
import "../../assets/styles/projects.css";
// import photoRiceVillage from "../../assets/images/projects/RachelAlysePhotographyTheOwenGroupChristmas-2.jpg"
// import projectList from "../../assets/data/projects";
import itemLists from "../../assets/data/index";

function SingleProject() {

    const { title } = useParams();
    const project = itemLists.projects.find(item => item.project === title)
    const images = itemLists.images.filter(item => item.project === title)

    return (
        <main>
        <div className="projects">
            <h2 className="text-center">{project.project}</h2>
            <p className="text-center">{project.description}</p>
            <div className="container">
                <div className="gallery text-center row">
                    {images.map(item => (
                    <div className="project col space">
                        <img src={item.image} alt={item.alt}/>
                    </div>
                ))}
                </div>
            </div>
        </div>
        </main>
    );
}

export default SingleProject;