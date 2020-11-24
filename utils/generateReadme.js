// function to generate markdown for README
function generateReadme(answers) {
  return `
  <h1 align="center">${answers.ProjectTitle} 👋</h1>

  ![badge](https://img.sheilds.io/badge/license-${answers.license}-brightgreen)<br />

  ## Description
  🔎 ${answers.description}

  ## Table of Content
  -[Description](#description)
  -[Installation](#installation)
  -[Usage](#usage)
  -[License](#license)
  -[Contributing](#contributing)
  -[Questions](#questions)

  

`;
}

module.exports = generateMarkdown;
