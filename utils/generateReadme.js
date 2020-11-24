// function to generate markdown for README
function generateReadme(answers) {
  return `
  <h1 align="center">${answers.projectTitle} 👋</h1>

  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />

  ## Description
  🔎 ${answers.description}

  ## Table of Content
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)

  ## Installation
  💾 ${answers.installation}

  ## Usage
  🖥 ${answers.usage}

  ## License
  ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
  <br />
  This aplication is covered by the ${answers.license} license.

  ## Contributing
  👨‍👧‍👦 ${answers.contributing}

  ## Questions
  ❓ ${answers.questions}<br / >
  <br />
  Find me on Github: [${answers.username}](https://github.com/${answers.username})
 <br />
 📧 Email me with if you have questions: ${answers.email}<br /><br />

_This Readme was generated by [README-Generator](https://github.com/ZiWang55/HW8_ReadmeGenerator)_
`;
}

module.exports = generateReadme;
