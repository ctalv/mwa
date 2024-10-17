import * as React from "react";
import { Link } from "react-router-dom";
import projectList from "../../assets/data/projects";
import "../../assets/styles/projects.css"
// import photoRiceVillage from "../../assets/images/projects/RachelAlysePhotographyTheOwenGroupChristmas-2.jpg"
// import "../../assets/data/projects"
// import riceBlvdMain from "../../assets/images/projects/Rice_Blvd/RachelAlysePhotographyTheOwenGroupChristmas-2.jpg"
// import riceBlvd1 from "../../assets/images/projects/Rice_Blvd/RachelAlysePhotographyTheOwenGroupChristmas-22.jpg"
// import riceBlvd2 from "../../assets/images/projects/Rice_Blvd/RachelAlysePhotographyTheOwenGroupChristmas-33.jpg"
// import riceBlvd3 from "../../assets/images/projects/Rice_Blvd/RachelAlysePhotographyTheOwenGroupChristmas-35.jpg"

// const NAMEImages = importAll(require.context('../images/projects/DIRECTORY', false, '/\.jpg/'));
// const riceBlvdImages = importAll(require.context('../images/projects/Rice_Blvd', false, '/\.jpg$/'));


// const projectList = [
//     {
//         title: "Rice Blvd",
//         mainImage: riceBlvdMain,
//         mainAlt: "Rice Boulevard main image.",
//         galleryImages: [riceBlvd1, riceBlvd2, riceBlvd3],
//         description : "This is where you will do a description of your project. Rice Blvd"
//     },
//     {
//         title: "Rice Blvd 2",
//         mainImage: riceBlvdMain,
//         mainAlt: "Rice Boulevard main image.",
//         galleryImages: [riceBlvd1, riceBlvd2, riceBlvd3],
//         description : "This is where you will do a description of your project. Rice Blvd"
//     },
// ]

function Projects() {

    return (
        <div class="projects">
            <h2 class="text-center">Projects</h2>
            <div class="container">
                <div class="gallery text-center row">
                    {projectList.map(item => (
                        <div class="project col">
                            <Link to={`/project/${item.title}`}>
                                <img class="project-photo col" src={item.mainImage}
                                    alt={item.mainAlt} />
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