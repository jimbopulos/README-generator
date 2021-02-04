// DEPENDENCIES ===============================
// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("generateMarkdown");

// DATA =======================================

// USER INTERACTIONS ==========================
// Create an array of questions for user input
const questions = [
                        {
                            type: "input",
                            name: "fileName",
                            message: "What is the name of this application?",
                        },
                        {
                            type: "input",
                            name: "username",
                            message: "What is your username?",
                        },
                        {
                            type: "input",
                            name: "description",
                            message: "Describe your application with a short description:",
                        },
                        {
                            // will require an if statement
                            type: "confirm",
                            name: "tableContents",
                            message: "Would you like to include a Table of Contents?",
                        },
                        {
                            type: "input",
                            name: "installation",
                            message: "Please provide a step-by-step description of how to get your application running:",
                        },
                        {
                            type: "input",
                            name: "usage",
                            message: "Please provide instructions and examples for use:",
                        },
                        {
                            type: "input",
                            name: "credits",
                            message: "List any collaborators and their GitHub profile links:",
                        },
                        {
                            type: "list",
                            name: "license",
                            choices: ["MIT", "GPLv3", "Creative Commons"],
                            message: "Please select a license",
                        },
                        {
                            type: "input",
                            name: "contribution",
                            message: "How may other developers contribute to this app?",
                        },
                        {
                            type: "input",
                            name: "tests",
                            message: "How would a user run tests for this application? Please provide a command(s)?",
                        },
                    ]

// FUNCTIONS ==================================
// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        error ? console.error(error) : console.log("Your README.md has been generated!");
    });
}

// Create a function to initialize app
function init() {
    // callback function for user responses
    inquirer.prompt(questions).then((response) => {
        // console.log(data.username);
        // console.log(data.description);
        // console.log(data.tableContents);
        // console.log(data.installation);
        // console.log(data.usage);
        // console.log(data.credits);
        // console.log(data.license);
        // console.log(data.tests);
        writeToFile("readME.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();
