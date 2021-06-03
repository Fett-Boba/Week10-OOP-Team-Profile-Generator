// Inquirer prompts
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

module.exports.empBasics = empBasics;
module.exports.mgrOffice = mgrOffice;
module.exports.engGitId = engGitId;
module.exports.intSchool = intSchool;
module.exports.askAgain = askAgain;