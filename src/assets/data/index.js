import tagList from "./tags";
import projectList from "./projects";

// ###### MODIFY START ################################
import Sea_and_Bar_1751 from "./projects/1751_Sea_&_Bar";
import Sunset_2027 from "./projects/2027_Sunset";
import DUO_Cafe_2147 from "./projects/2147_DUO_Cafe_Photos";
import Albans_2426 from "./projects/2426_Albans";
import Dryden_2428 from "./projects/2428_Dryden";
import Rice_3310 from "./projects/3310_Rice";
import Harper_3723 from "./projects/3723_Harper";
import W_Alabama_4522 from "./projects/4522_W_Alabama";
import Forest_Glen_11705 from "./projects/11705_Forest_Glen";
import Kimberley_Ln_13319 from "./projects/13319_Kimberley_Ln";
import Oak_Bend_14615 from "./projects/14615_Oak_Bend";


// add new project list here
// EXAMPLE: copy the line below and change to match the project name
// import RENAME_project from "./projects/template";

const imageList = [
    ...Sea_and_Bar_1751,
    ...Sunset_2027,
    ...DUO_Cafe_2147,
    ...Albans_2426,
    ...Dryden_2428,
    ...Rice_3310,
    ...Harper_3723,
    ...W_Alabama_4522,
    ...Forest_Glen_11705,
    ...Kimberley_Ln_13319,
    ...Oak_Bend_14615,
    // ...RENAME_project
]

// const imageList = Rice_3310
// ####### MODIFY END ##################################

const itemLists = {
    projects: projectList,
    tags: tagList,
    images: imageList
}


export default itemLists