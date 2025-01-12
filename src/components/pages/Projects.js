import * as React from "react";
import { Link, useParams } from "react-router-dom";
import projectList from "../../assets/data/projects";
import itemLists from "../../assets/data/index";
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

    const { tagId } = useParams();

    let sortList = []
    if (tagId) {
        let id = Number(tagId)
        sortList = itemLists.images.filter(item => item.tag === id)
    } else {
        sortList = itemLists.projects
    }

    console.log(sortList)


    return (
        <main>
        <div className="projects">
            <h2 className="text-center">GALLERY</h2>
            
            <div className="container">
                <div className="gallery text-center row">
                    <div>
                        <h3>Show:</h3>
                        {itemLists.tags.map(item => (
                            <div className="">
                            <Link to={`/projects/${item.id}`} >
                            <div>
                                {item.tag}
                            </div>
                            </Link>
                        </div>
                        ))}
                        <Link to="/projects" >
                        Clear
                        </Link>
                    </div>
                    {sortList.map(item => (
                        <div className="project col">
                            <Link to={`/project/${item.project}`}>
                                <img className="project-photo col" src={item.image}
                                    alt={item.alt} />
                                <h3>{item.project}</h3>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </main>
    );
}

export default Projects;