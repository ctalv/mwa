import React from "react";
// import { Button, Alert } from "react-native";
import "../../assets/styles/homepage.css";
import homeImage from "../../assets/images/pixasquare-4ojhpgKpS68-unsplash.jpg";
import testImage from "../../assets/images/projects/Rice_Blvd/RachelAlysePhotographyTheOwenGroupChristmas-22.jpg"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import images from "../../assets/data/images.json"


function Home() {

    let itemList = images


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
            <img className="full_page_img" src={testImage} alt="Splash image placeholder" />
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
                {/* <Button
                    title="Press me"
                    onPress={() => Alert.alert('Simple Button pressed')}
                /> */}

                <Carousel className="tag" responsive={responsive}>
                    {itemList.map(item => (
                        <div>{item.project}
                            <img src={item.image} style={{backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '400px' }}   alt="" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    )
}

export default Home;
