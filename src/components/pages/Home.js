import React, { useState } from "react";
import "../../assets/styles/homepage.css";
import { Link } from "react-router-dom";

import itemLists from "../../assets/data/index";
import homeImage from "../../assets/images/Splash-Page-Images/KitchenUPDATE-1-2.jpg";
import 'react-multi-carousel/lib/styles.css';
import script from "../../assets/scripts/base"
import Carousel from 'react-bootstrap/Carousel';



function Home() {
    // const [selectedTag, setSelectedTag] = useState(0);
    // console.log(selectedTag)
    // const htmlTag = itemLists.tags.find((item) => item.id === selectedTag)
    // const filteredImages = itemLists.images.filter(item => item.tag === selectedTag);


    // const handleTagClick = (tag) => {
    //     setSelectedTag(tag);
    // };

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

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="homepage color-home">
            <Carousel className="carousel-react slide carousel-fit" fade controls={false} indicators={false}>
                {itemLists.homeImages.map((item, index) => (
                    <Carousel.Item className="carousel-item">
                        <img className="carousel-image d-block  w-100 " src={item.image} alt={item.alt} />
                    </Carousel.Item>
                ))}
            </Carousel>
            {/* <div className="description container my-5">
                <p>
                    This is where you can write everything about how cool you are.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div> */}
            {/* <div className="container my-5">
                <div className="tags  d-flex flex-wrap">
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

                

                <Carousel className="carousel-react">
                    {filteredImages.slice(0, 5).map((item, index) => (
                        <Carousel.Item className="carousel-item">
                            <img className="carousel-image d-block h-100 mw-100" src={item.image} alt={item.alt} />
                        </Carousel.Item>
                    ))}
                    <Carousel.Item className="carousel-item">
                        <button className="myButton carousel-button">
                            <Link to={`/projects/${selectedTag}`}>
                                Go to more {htmlTag.tag}
                            </Link>
                            </button>
                            </Carousel.Item>
                </Carousel>


            </div> */}
            <script src={script} />

        </div>

    )
}

export default Home;
