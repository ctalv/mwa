import * as React from "react";
import { Link, useParams } from "react-router-dom";
import itemLists from "../../assets/data/index";
import "../../assets/styles/projects.css"


function Projects() {

    const { tagId } = useParams();

    let sortList = []
    if (tagId) {
        let id = Number(tagId)
        sortList = itemLists.images.filter(item => item.tag === id)
    } else {
        sortList = itemLists.projects
    }



    return (
        <main>
            <div className="projects color-projects">
                <h2 className="text-center header">GALLERY</h2>

                <div className="container">
                    <div className="gallery text-center row">
                        <div className="d-flex justify-content-center">
                            <div className="tags d-flex flex-wrap justify-content-center">
                                {itemLists.tags.map(item => (
                                    <div className="">
                                        <Link to={`/projects/${item.id}`} >

                                            <button className="myButton"
                                                style={{
                                                    textDecoration: Number(tagId) === item.id ? 'underline' : 'none',
                                                }}>
                                                {item.tag}
                                            </button>
                                        </Link>
                                    </div>
                                ))}
                                <div>
                                    <Link to="/projects" >
                                        <button className="myButton">
                                            CLEAR
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        </div>

                        {sortList.map(item => (
                            // <div className="project col">
                                <Link className="project col" to={`/project/${item.project}`}>
                                    <img className="project-photo col" src={item.image}
                                        alt={item.alt} />
                                    <h3 className="project-title">{item.project}</h3>
                                </Link>
                            // </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Projects;