const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Role',
            message: 'what is your managers name?',
        },
        {
            type: 'input',
            name: 'ID',
            message: 'what is your managers id?',
        },
        {
            type: 'input',
            name:'managerEmail', 
            message: 'what is your managers email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'what is your managers office number?',
        },
    ])
}
const promptRole = () => {
    return inquirer.prompt([ 
        {
            type: 'list',
            name: 'role',
            message: 'Which type of team member would you like to add?',
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ])
    .then(answers => {
        if (answers.role == "Engineer"){
            promptEngineer();
        } else if (answers.role == "Intern") {
            promptIntern();
        } else {

        })
}

const promptEngineer = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'engineername',
        message: 'what is your Engineers name?',
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'what is your engineers ID?',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'what is your engineers email?',
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'what is your engineers githib?'
    },
])
.then(answers => {
    var Engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    employees.push(Engineer);
    promptRole();
    })  
} 

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'intername',
            message: 'what is your Interns name?',
        },
        {
            type: 'input',
            name: 'InternID',
            message: 'what is your interns ID?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'what is your interns email?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'what is your interns school?'
        }
    ])

.then(answers => {
    var Intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    employees.push(Intern);
    promptRole();
    })
}
promptManager()
.then(answers => {
            var manager = new Manager(answers.name, answers.id, answers.email, answers.phone)
            employees.push(manager);
            promptRole();
            
});    

    // After the user has input all employees desired, call the `render` function (required
    // above) and pass in an array containing all employee objects; the `render` function will
    // generate and return a block of HTML including templated divs for each employee!
    
    // After you have your html, you're now ready to create an HTML file using the HTML
    // returned from the `render` function. Now write it to a file named `team.html` in the
    // `output` folder. You can use the variable `outputPath` above target this location.
    // Hint: you may need to check if the `output` folder exists and create it if it
    // does not.
    
    // HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
