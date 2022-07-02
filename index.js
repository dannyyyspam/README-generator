// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const { userInfo } = require('os');
const { resolve } = require('path');
const { connected } = require('process');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter your title!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter your description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Would you like to include instructions for installation?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Would you like to include instructions for usage?'
    },
    {
        type: 'input',
        name: 'licenses',
        message: 'Would you like to include licenses?'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'tests'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'questions'
    },
];

// TODO: Create a function to write README file
const writeToFile = data => {
    return new Promise((resolve, reject) => {
        // Make a README file and add to dist folder
        fs.writeFile('./dist/README.md', data, err => {
            // if there's an error, reject the Promise and send the error to .catch() method
            if (err) {
                reject (err);
                // return out of the function here to make sure the Promise doesn't continue to execute the resolve() function
                return;
            }
            // if everything went well, resolve the Promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: 'Navigate to "dist" folder to see your README file!'
            });
        })
    })
}
// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})
