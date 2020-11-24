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
        {}
    ])
}