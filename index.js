// Declaring the variables and dependancies
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateReadme")
const writeFileAsync = util.promisify(fs.writeFile);

//the user questions for the README.md file
function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "Input project title:",
        },
        {
            type: "input",
            name: "description",
            message: "Input description:"
        },
        {
            type: "input",
            name: "installation",
            message: "Input installation process:",
        },
        {
            type: "input",
            name: "usage",
            message: "Use of project:"
        },
        {
            type: "list",
            name: "license",
            message: "Choose liscence of project:",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "List the contributors:"
        },
        {
            type: "input",
            name: "tests",
            message: "Is test included?"
        },
        {
            type: "input",
            name: "questions",
            message: "If issue occurs, what is the next step?"
        },
        {
            type: "input",
            name: "username",
            message: "Input GitHub username:"
        },
        {
            type: "input",
            name: "email",
            message: "Input email:"
        }
    ]);
} 

//util.promisify async f.
  async function init() {
    try {
        //Asks and generates user responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist. directory
        await writeFileAsync('./dist/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();
