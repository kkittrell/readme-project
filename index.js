const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = ({ Title, Description, Installation, Usage, License, Contributing, Questions }) =>
  `# Title ${Title}
  
## Description ${Description}

## Installation ${Installation}

## Usage ${Usage}

## License ${License}

## Contributing ${Contributing}

## Questions ${Questions}

  `

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Title',
      message: 'What is the Title?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What is the Description?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'How is this Installed?',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How should this be Used?',
    },
    {
      type: 'input',
      name: 'License',
      message: 'What is the License if applicable?',
    },
    {
      type: 'input',
      name: 'Contributing',
      message: 'How, if anyone Contributed?',
    },
    {type: 'input',
    name: 'Questions',
    message: 'Are there any Questions?'

    },
  ])
  .then((answers) => {
    const readMe = generateMarkdown(answers);

    fs.writeFile('readme.md', markDownContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });



// TODO: Create an array of questions for user input
const questions = ["Why did you make this?", "How can I use it?"];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();