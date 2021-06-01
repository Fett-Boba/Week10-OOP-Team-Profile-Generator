const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const html = require('./src/html.js');
const strHTML = html.head;
const strTrl = html.trl;

const empBasics = [
     {
          name: 'role',
          type: 'list',
          message: 'Employee role: ',
          choices: ['Manager', 'Engineer', 'Intern'],
     },
     {
          name: 'name',
          type: 'input',
          message: 'Employee Name: ',
     },
     {
          name: 'id',
          type: 'input',
          message: 'Employee ID: ',
     },
     {
          name: 'email',
          type: 'input',
          message: 'Employee email: ',
     }
];

const mgrOffice = {
     name: 'officeNum',
     type: 'input',
     message: 'Office Number: ',  
}

const engGitId = {
     name: 'gitID',
     type: 'input',
     message: 'Github ID: ',
}

const intSchool = {
     name: 'school',
     type: 'input',
     message: 'School: ',
}

const askAgain = {
     name: 'goAgain',
     type: 'list',
     message: 'Enter another Employee? ',
     choices: ['Yes', 'No'],
}

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

function addManager(empInfo) {
     inquirer.prompt(mgrOffice).then((answers) => { 
          const manager = new Manager(empInfo.name, empInfo.id, empInfo.email, answers.officeNum);
          promptForMore(manager);
     });    
}

function addEngineer(empInfo) {
     inquirer.prompt(engGitId).then((answers) => { 
          const engineer = new Engineer(empInfo.name, empInfo.id, empInfo.email, answers.gitID);
          promptForMore(engineer); 
     });
}

function addIntern(empInfo) {
     inquirer.prompt(intSchool).then((answers) => { 
          const intern = new Intern(empInfo.name, empInfo.id, empInfo.email, answers.school);
          promptForMore(intern);
     });
}

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

function updateCard(empObj) {
     var strRole = "";
     var strVar = "";
     if (empObj.role === 'Manager') {
          strRole = `<h3><i class="fas fa-mug-hot"></i>${empObj.role}</h3>`;
          strVar = `<li class="list-group-item">Office Number: ${empObj.officeNumber}</li>`;
     } else if (empObj.role === 'Engineer') {
          strRole = `<h3><i class="fas fa-glasses"></i>${empObj.role}</h3>`;
          strVar = `<li class="list-group-item">Github: ${empObj.github}</li>`;
     } else {
          strRole = `<h3><i class="fas fa-user-graduate"></i>${empObj.role}</h3>`;
          strVar = `<li class="list-group-item">School: ${empObj.school}</li>`;
     }

     var strCrd = `     
     <div class="card bg-dark text-white mx-3 mt-3">
     <div class="card-header">
       <h2>${empObj.name}</h2>${strRole}
     </div>
     <div class="card-body bg-light mb-2">
       <ul class="list-group">
         <li class="list-group-item">ID: ${empObj.id}</li>
         <li class="list-group-item">Email: ${empObj.email}</li>${strVar}
       </ul>
     </div>
   </div>
   `;
     return strCrd;
}

function appendToFile(data) {
     fs.appendFile('./dist/index.html', data, (err) => {
          if (err) {
              throw err;
          }
     });
}

function init() {
     fs.writeFile('./dist/index.html', strHTML, (err) => {
          if (err) {
               throw err;
          }
     });
}

init();
ask();
