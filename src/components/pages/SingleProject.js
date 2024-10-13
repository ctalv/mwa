import React from "react";
import "../../assets/styles/projects.css";
import photoRiceVillage from "../../assets/images/projects/RachelAlysePhotographyTheOwenGroupChristmas-2.jpg"


function SingleProject() {


    return (
        <div class="projects">
            <h2 class="text-center">Projects</h2>
            <div class="container">
                <div class="gallery text-center row">
                    {projects.map(item => (
                        <div class="project col">
                            <a href="">
                                <img class="project-photo col" src={item.mainImage}
                                    alt="Splash image placeholder" />
                                <h3>{item.name}</h3>
                            </a>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default SingleProject;