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
                    <div>
                        <h3>CONTRIBUTIONS:</h3>
                        <h3>Architect</h3>
                        <h4>{project.contributors.architects}</h4>
                        <h3>Interior Design</h3>
                        <h4>{project.contributors.interior}</h4>
                        <h3>Photography</h3>
                        <h4>{project.contributors.photography}</h4>
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