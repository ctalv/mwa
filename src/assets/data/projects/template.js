// 1. make a copy of this file
// 2. rename the file to the project name
// 3. change the text "RENAME_project" to the project title, 
//    both on line 10 and the last line
// ** NOTE: the name next to 'const' and 'export default' 
//      CANNOT start with a number
//      MUST be identical
// **

const RENAME_project = [
    {
        project: "RENAME project",
        alt: "This is for screen readers and accessibility, should briefly describe image.",
        tag: null,
        image: require("../../images/projects/the_rest_of_the_path")

    },
    // 4. copy and past the item below as many times as you need to 
    // (however many images you wish to include)
    // 5. tags are referenced in the tags.js file. null is allowed
    {
        project: "RENAME project",
        alt: "This is for screen readers and accessibility.",
        tag: 0,
        image: require("../../images/projects/the_rest_of_the_path")

    },
]

export default RENAME_project;