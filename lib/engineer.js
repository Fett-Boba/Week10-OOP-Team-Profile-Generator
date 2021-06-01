const Employee = require('./employee');

class Engineer extends Employee {
     constructor(name, id, email, github) { 
          super(name, id, email);
          this.github = github;       
          this.role = "Engineer";
     }
     getGithub() {
          console.log(this.github);
          return this.github;          
     }
     getRole() {
          console.log(this.role);
          return this.role;
     }
}

module.exports = Engineer;