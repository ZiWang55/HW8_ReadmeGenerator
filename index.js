// Declaring the variables
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

// Prompt the user questions to populate the Readme file
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Whats the name for the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Brief description of your project: ",
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process: ",
        }
        {
            type: "input",
            name: "usage",
            message: "What is this project used for? ",
        },
        {
            type: "list",
            name: "license",
            message: "Choose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
    ])
}