// TODO: Include packages needed for this application
import fs from 'fs'
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Welcome to the README generator! To start, please provide your full name:',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name! You must credit yourself for your work');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('It is essential to link to your GitHub repo so users know where to find more of your work');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('If anyone has questions about your project, you must provide a way for them to contact you');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Every project must have a title. Please try again.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter your project description here:",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('It is essential to provide a description of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please provide instructions for installation to ensure users have the proper software to run your program!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions for usage:',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Providing instructions for usage will help users properly navigate your project. Please try again.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'image',
        message: "Link to a screenshot of the project:",
        validate: imageInput => {
            if (imageInput) {
                return true;
            } else {
                console.log('Please enter a link to your image so that users can preview your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Please provide instructions on how others can contribute to your project.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Did you write any tests for your application?',
        default: false
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe the tests written for your application and how to use them:',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Please provide instructions on how others can contribute to your project.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLicenses',
        message: 'Would you like to include a license?',
        default: false
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to include?',
        choices: ['MIT', 'GPL', 'CC--0'],
        when: ({ confirmLicenses }) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }
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
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(err => {
    console.log(err);
})
