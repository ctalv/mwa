import React, { useState } from "react";
// import { Button, Alert } from "react-native";
import "../../assets/styles/homepage.css";
import itemLists from "../../assets/data/index";
import homeImage from "../../assets/images/pixasquare-4ojhpgKpS68-unsplash.jpg";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


function Home() {
    const [selectedTag, setSelectedTag] = useState(0);
    console.log(selectedTag)
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
            <img className="full_page_img" src={homeImage} alt="Splash image placeholder" />
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
                            className={`btn ${selectedTag === item.id ? 'selected' : ''}`}
                            onClick={() => handleTagClick(item.id)}
                            style={{
                                margin: '5px',
                                padding: '10px',
                                backgroundColor: selectedTag === item ? '#007BFF' : '#ccc',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                            }}
                        >{item.tag}</button>
                    </div>
                ))}
                </div>
                <Carousel className="tag" responsive={responsive}>
                    {filteredImages.map((item, index) => (
                        <div key={index}>
                            <img className="home-photo" src={item.image} alt={item.alt} />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Home;
