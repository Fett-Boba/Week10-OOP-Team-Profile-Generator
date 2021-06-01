const Employee = require('./employee');

class Manager extends Employee{
     constructor(name, id, email, officeNumber) {
          super(name, id, email);
          this.officeNumber = officeNumber;
          this.role = "Manager";
     }
     getRole() {
          console.log(this.role);
          return this.role;
     }
     getOfficeNumber() {
          console.log(this.officeNumber);
          return this.officeNumber;
     }
}

module.exports = Manager;