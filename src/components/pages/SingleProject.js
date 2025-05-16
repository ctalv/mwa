import React from "react";
import { Link, useParams } from 'react-router-dom'
import "../../assets/styles/projects.css";
// import photoRiceVillage from "../../assets/images/projects/RachelAlysePhotographyTheOwenGroupChristmas-2.jpg"
// import projectList from "../../assets/data/projects";
import itemLists from "../../assets/data/index";


function SingleProject() {
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

    const { title } = useParams();
    const index = itemLists.projects.findIndex(item => item.project === title)
    const project = itemLists.projects[index]
    const images = itemLists.images.filter(item => item.project === title)
    return (
        <main>
            <div className="projects">
                <h2 className="text-center">{project.project}</h2>
                <p className="text-center">{project.description}</p>
                <div className="container">
                    <div className="gallery text-center">
                        {images.map(item => (
                            <div className="project row space">
                                <img className="project-image" src={item.image} alt={item.alt} />
                            </div>
                        ))}
                    </div>
                    <div className="d-flex justify-content-between">
                        <Link onClick={topFunction()} to={`/project/${itemLists.projects[index-1].project}`}>
                            Previous
                        </Link>
                        <Link onClick={topFunction()} to={`/project/${itemLists.projects[index+1].project}`}>
                            Next
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SingleProject;