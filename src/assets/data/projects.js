import importAll from "../scripts/utils.js";
import require from "webpack";

// const NAMEImages = importAll(require.context('../images/projects/DIRECTORY', false, '/\.jpg/'));
const riceBlvdImages = importAll(require.context('../images/projects/Rice_Blvd', false, '/\.jpg$/'));

const projectList = [
    {
        title: "Rice Blvd",
        mainImage: riceBlvdImages["RachelAlysePhotographyTheOwenGroupChristmas-22.jpg"],
        mainAlt: "Rice Boulevard main image.",
        galleryImages: riceBlvdImages,
        description : "This is where you will do a description of your project. Rice Blvd"
    },
    {
        title: "Rice Blvd 2",
        mainImage: riceBlvdImages["RachelAlysePhotographyTheOwenGroupChristmas-22.jpg"],
        mainAlt: "Rice Boulevard main image.",
        galleryImages: riceBlvdImages,
        description : "This is where you will do a description of your project. Rice Blvd"
    },
]

export default projectList