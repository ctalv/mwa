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
            <div className="projects">
                <h2 className="text-center">GALLERY</h2>

                <div className="container">
                    <div className="gallery text-center row">
                        <div className="tags">
                            <h3>Show:</h3>
                            <div className="tags d-flex flex-wrap">
                                {itemLists.tags.map(item => (
                                    <div className="">
                                        <Link to={`/projects/${item.id}`} >

                                            <button className="myButton"
                                                style={{
                                                    backgroundColor: Number(tagId) === item.id ? '#0b4050' : '#2e2c1b',
                                                }}>
                                                {item.tag}
                                            </button>
                                        </Link>
                                    </div>
                                ))}
                                <div>
                                    <Link to="/projects" >
                                        <button className="myButton">
                                            Clear
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