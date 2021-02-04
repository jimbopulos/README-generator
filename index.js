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
                    ])
                    // callback function for user responses
                    .then(response => {
                        console.log(response.username);
                        console.log(response.description);
                        console.log(response.tableContents);
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
