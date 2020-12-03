

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const render = require('./src/page-template');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter your employee ID (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your office number (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your office number!');
                    return false;
                }
            }
        }
    ]);
};

const promptEmployee = employeeData => {
    if (!employeeData.employees) {
        employeeData.employees = [];
    }
    console.log(`
    ================
    Add New Employee
    ================`);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is the employees name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the employees name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: "Enter your employee's ID (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter an ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter thier email address (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter thier email address!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'Which type of employee would you like to add?',
            choices: [
                'Engineer',
                'Intern',
                'Finished Building Team'
            ]
        }
    ])
    .then(userChoice => {
        switch (userChoice.employeeType) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
        }
    });
};

const addEngineer = employeeData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'githubUserName',
            message: 'Please enter thier GitHub username (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the username!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(engineerData => {
        employeeData.employees.push(engineerData);
        if (engineerData.confirmAddEmployee) {
            return promptEmployee(employeeData);
        } else {
            return employeeData;
        }
    });
};

const addIntern = employeeData => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internSchool',
            message: 'Please enter school name. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the school name');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(internData => {
        employeeData.employees.push(internData);
        if (internData.confirmAddEmployee) {
            return promptEmployee(employeeData);
        } else {
            return employeeData;
        }
    });
};

promptManager()
    .then(promptEmployee)


