import React from "react";
import "../../assets/styles/homepage.css"
import homeimage from "../../assets/images/pixasquare-4ojhpgKpS68-unsplash.jpg"


function Home() {
    return (
        <div className="homepage">
            <img class="full_page_img" src={homeimage} alt="Splash image placeholder" />
            <div class="description container my-5">
                <p>
                    This is where you can write everything about how cool you are.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    )
}

export default Home;
