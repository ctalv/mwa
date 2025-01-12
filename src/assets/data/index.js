import riceBlvd2 from "../images/projects/Rice_Blvd/RachelAlysePhotographyTheOwenGroupChristmas-2.jpg"
import riceBlvd22 from "../images/projects/Rice_Blvd/RachelAlysePhotographyTheOwenGroupChristmas-22.jpg"
import riceBlvd33 from "../images/projects/Rice_Blvd/RachelAlysePhotographyTheOwenGroupChristmas-33.jpg"
import riceBlvd35 from "../images/projects/Rice_Blvd/RachelAlysePhotographyTheOwenGroupChristmas-35.jpg"

const projectList = [
    {
        title: "Rice Village",
        mainImage: riceBlvd2,
        mainAlt: "Rice Boulevard main image.",
        description: "This is where you will do a description of your project. Rice Blvd"
    }
]

const tagList = [
    {
        id: 0,
        tag: "Kitchen"
    },
    {
        id: 1,
        tag: "Bathroom"
    },
    {
        id: 2,
        tag: "Living"
    },
    {
        id: 3,
        tag: "Dining"
    },
    {
        id: 4,
        tag: "Details"
    }
]

const imageList = [
    {
        project: "Rice Village",
        alt: "Stylish kitchen island",
        tag: 0,
        image: riceBlvd2
    },
    {
        project: "Rice Village",
        alt: "Lamp on a wall",
        tag: 4,
        image: riceBlvd22
    },
    {
        project: "Rice Village",
        alt: "Chair with fireplace",
        tag: 2,
        image: riceBlvd33
    },
    {
        project: "Rice Village",
        alt: "Wicker chair dining area",
        tag: 3,
        image: riceBlvd35
    }
]

const itemLists = {
    projects: projectList,
    tags: tagList,
    images: imageList
}


export default itemLists