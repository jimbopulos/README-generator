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
    case "GPLv3":
      selectedBadge = "[![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)](http://perso.crans.org/besson/LICENSE.html)"
      break;
    case "Apache 2.0":
      selectedBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "Mozilla Public 2.0":
      selectedBadge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break;
    case "Creative Commons":
      selectedBadge = "[![CC-0 license](https://img.shields.io/badge/License-CC--0-blue.svg)](https://creativecommons.org/licenses/by-nd/4.0)"
      break;
    default: 
      selectedBadge = "";
      break;
  }
  let tableOfContents;
    data.tableContents ? tableOfContents = 
`## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)` 
: tableOfContents = "";
  return `# ${data.fileName}
${selectedBadge}
## License
This application is covered under the ${data.license} license.
## Description
${data.description}
${tableOfContents}
## Installation
${data.installation}
## Usage
${data.usage}
## Credits
${data.credits}
## Tests
To run tests, enter the following into your terminal:
\`\`\`md
${data.tests}
\`\`\`
## Questions
If you have any questions, please contact ${data.username} at ${data.email}`;
}

module.exports = generateMarkdown;
