const Employee = require('./employee');

class Intern extends Employee {
     constructor(name, id, email, school) { 
          super(name, id, email);
          this.school = school;   
          this.role = "Intern";
     }
     getSchool() {
          console.log(this.school);
          return this.school;
     }
     getRole() {
          console.log(this.role);
          return this.role;
     }
}

module.exports = Intern;