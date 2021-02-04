// DEPENDENCIES ===============================
// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// DATA =======================================

// USER INTERACTIONS ==========================
// Create an array of questions for user input
const questions = inquirer
                    .prompt([
                        {
                            type: "input",
                            name: "username",
                            message: "What is your username?",
                        },
                        {
                            type: "input",
                            name: "description",
                            message: "Describe your application with a short description.",
                        },
                        {
                            type: "confirm",
                            name: "tableContents",
                            message: "Would you like to include a Table of Contents?",
                        },
                        {
                            type: "input",
                            name: "installation",
                            message: "Please provide a step-by-step description of how to get your application running.",
                        },
                        {
                            type: "input",
                            name: "usage",
                            message: "Please provide instructions and examples for use.",
                        },
                        {
                            type: "input",
                            name: "credits",
                            message: "List any collaborators and their GitHub profile links",
                        },
                        {
                            type: "list",
                            name: "license",
                            choices: ["Apache 2.0", "BSD", "Attribution", "Eclipse", "GNU", "Mozilla 2.0", "IBM", "MIT", "Mozilla", "Zlib"],
                            message: "Please select a license",
                        },
                    ])
                    // callback function for user responses
                    .then(data => {
                        console.log(data.username);
                        console.log(data.description);
                        console.log(data.tableContents);
                        console.log(data.installation);
                        console.log(data.usage);
                        console.log(data.credits);
                        console.log(data.license);
                    })

// FUNCTIONS ==================================
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     // console.log(data)
// }

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
