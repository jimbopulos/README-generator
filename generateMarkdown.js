// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let selectedBadge;
  switch (data.license) {
    case "MIT":
      selectedBadge = "[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)"
      break;
    case "Apache 2.0":
      selectedBadge = "![AUR license](https://img.shields.io/aur/license/Apache%202.0?style=plastic)"
      break;
    default: 
      selectedBadge = "";
      break;
  }
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
