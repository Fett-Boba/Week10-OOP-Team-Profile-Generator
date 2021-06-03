// Required APIs
const inquirer = require('inquirer');
const fs = require('fs');

// Objects
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

// Inquirer prompts
const questions = require('./src/questions.js');
const empBasics = questions.empBasics;
const mgrOffice = questions.mgrOffice;
const engGitId = questions.engGitId;
const intSchool = questions.intSchool;
const askAgain = questions.askAgain;

// HTML
const html = require('./src/html.js');
const strHTML = html.head;
const strTrl = html.trl;

// Prompt user for members of the team
function ask() {
     inquirer.prompt(empBasics).then((answers) => {
          if (answers.role === 'Manager') {
               addManager(answers);
          } else if (answers.role === 'Engineer') {
               addEngineer(answers);
          } else {
               addIntern(answers);
          }
     });
}

// Add a manager, check if they want to add another person
function addManager(empInfo) {
     inquirer.prompt(mgrOffice).then((answers) => {
          const manager = new Manager(empInfo.name, empInfo.id, empInfo.email, answers.officeNum);
          promptForMore(manager);
     });
}

// Add an engineer, check if they want to add another person
function addEngineer(empInfo) {
     inquirer.prompt(engGitId).then((answers) => {
          const engineer = new Engineer(empInfo.name, empInfo.id, empInfo.email, answers.gitID);
          promptForMore(engineer);
     });
}

// Add an intern, check if they want to add another person
function addIntern(empInfo) {
     inquirer.prompt(intSchool).then((answers) => {
          const intern = new Intern(empInfo.name, empInfo.id, empInfo.email, answers.school);
          promptForMore(intern);
     });
}

// Check if they need another person on the team
function promptForMore(empObj) {
     var strCard = updateCard(empObj);
     appendToFile(strCard);
     inquirer.prompt(askAgain).then((answers) => {
          if (answers.goAgain === 'Yes') {
               ask();
          } else {
               console.log("Your team is complete");
               appendToFile(strTrl);
          }
     });
}

// Build cards depending on role
function updateCard(empObj) {
     var strCard = html(empObj);
     return strCard;
}

// Append HTML to index.html
function appendToFile(data) {
     fs.appendFile('./dist/index.html', data, (err) => {
          if (err) {
               throw err;
          }
     });
}

// Create empty index.html at start and populate with header html
function init() {
     fs.writeFile('./dist/index.html', strHTML, (err) => {
          if (err) {
               throw err;
          }
     });
}

// MAIN
init();
ask();
