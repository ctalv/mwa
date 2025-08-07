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
        <>
        <style>
            {`
            .hamburger:has(input:checked) {
                --foreground: var(--night15);
                --background: var(--night);
            }

            .hamburger:has(input:focus-visible)::before,
            .hamburger:has(input:focus-visible)::after,
            .hamburger input:focus-visible {
                border: 1px solid var(--night);
                box-shadow: 0 0 0 1px var(--night15);
            }

            .hamburger::before,
            .hamburger::after,
            .hamburger input {
                background-color: var(--night);
            }
            `}
        </style>
        <main>
            <div className="projects color-projects">
                <h2 className="text-center header">GALLERY</h2>

                <div className="contain">
                    <div className="gallery text-center">
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
                        <div className="row">
                        {sortList.map(item => (
                            <Link className="project col-4" to={`/project/${item.project}`}>
                                <img className="project-photo" src={item.image} alt={item.alt} />
                                <div className="project-title">
                                    <h3 className="">{item.project}</h3>
                                </div>
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}

export default Projects;