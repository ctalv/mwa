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
    function backward(index) {
        if (index > 0) {
            return <Link onClick={topFunction()} to={`/project/${itemLists.projects[index-1].project}`}>Previous</Link>;
        }
        return <div></div>;
    }
    function forward(index) {
        if (index < itemLists.projects.length) {
            return <Link onClick={topFunction()} to={`/project/${itemLists.projects[index+1].project}`}>Forward</Link>;
        }
        return <div></div>;
    }

    return (
        <main>
            <div className="projects contain">
                <h2 className="text-center">{project.project}</h2>
                <p className="text-center">{project.description}</p>
                <div className="">
                    <div className="gallery text-center">
                        {images.map(item => (
                            <div className="project">
                                <img className="project-image" src={item.image} alt={item.alt} />
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3>PROJECT TEAM:</h3>
                        <h3>Architect</h3>
                        <h4>{project.contributors.architects}</h4>
                        <h3>Interior Design</h3>
                        <h4>{project.contributors.interior}</h4>
                        <h3>Photography</h3>
                        <h4>{project.contributors.photography}</h4>
                    </div>
                    <div className="d-flex justify-content-between">
                        {backward(index)}
                        {forward(index)}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SingleProject;