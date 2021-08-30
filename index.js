// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "name",
        message: "What will you call this project?",
        name: "title",  
    },
    {
        type: "input",
        message: "Please enter a description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Please enter instructions for installing your project.",
        name: "installation",   
    },
    {
        type: "input",
        message: "Please enter usage examples for your project.",
        name: "usage",
    },
    {
        type: "input",
        message: "Please enter your name",
        name: "username",
    },
    {
        type: "input",
        message: "Please enter the name and github links of anyone you worked with on this project.",
        name: "collaborators",
    },
    {
        type: "list",
        message: "Please select a license type for this project",
        name: "license",
        choices: ["Apache", "GNU", "MIT", "BSD", "Eclipse", "Mozilla", "Unlicensed"],
    },
    {
        type: "input",
        message: "Please enter your GitHub username",
        name: "gitname",
    },
    {
        type: "input",
        message: "Please enter an email address for people to contact you",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

}

// inquirer
// .prompt(questions)
// .then((answers) => {
//   // Use user feedback for... whatever!!
// })
// .catch((error) => {
//   if (error.isTtyError) {
//     // Prompt couldn't be rendered in the current environment
//   } else {
//     // Something else went wrong
//   }
// }

// Function call to initialize app
init();
