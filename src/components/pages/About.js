import React from "react";
import "../../assets/styles/about.css";
import itemLists from "../../assets/data";


function About() {


    function is_leader(person) {
        let name = person.name
        if (name == "Matthew Mitchell" || name == "Austin Wilson") {
            return (
                <div className="leader col-12 col-sm-6 profile">
                    <img className="headshot" src={person.headshot} alt="headshot" />
                    <div className="titles bg-color-about color-about">
                        <h3 className="person-name">{person.name}</h3>
                        <h3 className="person-title">{person.title}</h3>
                    </div>
                    <div className="description bg-color-about">{person.description}</div>
                </div>
            )
        } else {
            return (
                    <div className="associate col-12 col-sm-6 col-lg-3 profile">
                        <img className="headshot" src={person.headshot} alt="headshot" />
                        <div className="titles bg-color-about color-about">
                            <h3 className="person-name">{person.name}</h3>
                            <h3 className="person-title">{person.title}</h3>
                        </div>
                        <div className="description bg-color-about">{person.description}</div>
                    </div>
            )
        }
    }


    const people = itemLists.about
    return (
        <>
        <style>
            {`.hamburger:has(input:checked) {
                --foreground: var(--cognac15);
                --background: var(--cognac);
            }

            .hamburger:has(input:focus-visible)::before,
            .hamburger:has(input:focus-visible)::after,
            .hamburger input:focus-visible {
                border: 1px solid var(--cognac);
                box-shadow: 0 0 0 1px var(--cognac15);
            }

            .hamburger::before,
            .hamburger::after,
            .hamburger input {
                background-color: var(--cognac);
            }
            `}
        </style>
        <main>
            <div className="about contain color-about">
                <h2 className="header">ABOUT US</h2>
                <div className="general">
                    <p>
                        Need some values, the kind of work you do, maybe a few pictures. Note to self: we can also do like a gallery
                        transition thing on the homepages and maybe here too? Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className="people row">
                    {people.map(person => (is_leader(person)))}

                </div>
            </div>
        </main>
        </>
    );
}

export default About;
