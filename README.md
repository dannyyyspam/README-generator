# README Generator

## Navigate To:
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [User Story](#User-Story)
* [Acceptance Criteria](#Acceptance-Criteria)
* [Demonstration](#demonstration)
* [Credits](#credits)

## Description
My project is a README generator. The project will help a user generate a README without having to worry about applying proper mark down syntax.

One problem with most projects is that the README is overlooked. This could be because the developer is lazy and doesn't want to include it or they haven't mastered down the proper syntax to creating a README. Also they possibly don't have a good idea of what to include with the README.

This README generator will allow the user to answer a series of specific questions and create a professional complete README based on their responses. It will take a couple minutes and provide the developer with the ability to make their project complete and more professional, increasing the likely hood that someone will want to use their app over similar apps without a README.

## Installation

### Before attempting to use this project, make sure to have these programs installed on your computer:  
* VS Code  
* GitBash  
* Node.js  

### Steps to initialize the project:

1. **Copy Link:** Hit the "Code" button within this GitHub repo to copy link
1. **Clone:** Within GitBash, use the command "git clone *paste link here*"
1. **NPM:** Use the command "npm init -y" to install Node Package Manager
1. **Inquirer:** Use the command "npm install inquirer" to get npm's inquirer package

## Usage
Once software is downloaded and Node packages are initialized, it's time to get started!

Within the directory for this project, initialize prompts using the command "node index.js".

From there, simply enter the necessary information for your project, and voila! A new README file will be generated and placed into the 'dist' folder.

# User Story
```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

# Acceptance Criteria
```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Demonstration


## Credits
Daniel A.