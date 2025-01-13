import React, { useState } from "react";
import "../../assets/styles/homepage.css";
import { Link } from "react-router-dom";

import itemLists from "../../assets/data/index";
import homeImage from "../../assets/images/pixasquare-4ojhpgKpS68-unsplash.jpg";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import script from "../../assets/scripts/base"


function Home() {
    const [selectedTag, setSelectedTag] = useState(0);
    console.log(selectedTag)
    const htmlTag = itemLists.tags.find((item) => item.id === selectedTag)
    const filteredImages = itemLists.images.filter(item => item.tag === selectedTag);

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    };

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="homepage">
            <img className="full_page_img" src={homeImage} alt="Splash placeholder" />
            <div className="description container my-5">
                <p>
                    This is where you can write everything about how cool you are.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="container my-5 carousels">
                <div>
                    {itemLists.tags.map(item => (
                    <div>
                        <button
                            value={item.id}
                            className={`myButton ${selectedTag === item.id ? 'selected' : ''}`}
                            onClick={() => handleTagClick(item.id)}
                            style={{
                                backgroundColor: selectedTag === item.id ? '#0b4050' : '#2e2c1b',
                            }}
                        >{item.tag}</button>
                    </div>
                ))}
                </div>

                {filteredImages.map((item, index) => (
                        <div  key={index}>
                            <Link to={`/project/${item.project}`}>
                                <img className="home-photo" src={item.image} alt="" />
                            </Link>
                        </div>
                    ))}
                        <button className="myButton">
                            <Link to={`/projects/${selectedTag}`}>
                                Go to more {htmlTag.tag}
                            </Link>
                        </button>

                <Carousel className="tag" responsive={responsive}>
                    {filteredImages.map((item, index) => (
                        <div key={index}>{item.project}
                            <img className="home-photo" src={item.image} alt="" />
                        </div>
                    ))}
                    <div>
                        Here
                    </div>
                </Carousel>
            </div>
        <script src={script}/>

        </div>

    )
}

export default Home;
