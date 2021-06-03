// Employee object JEST tests
const Employee = require("../lib/Employee");

describe("Employee Class", () => {
     
     it("should create a new employee object", () => {
          const emp = new Employee("Sparky", "9", "cats@email.com");
          expect(emp.name).toBe("Sparky");
          expect(emp.id).toBe("9");
          expect(emp.email).toBe("cats@email.com");
     });

     it("should get the employee Name", () => {
          const emp = new Employee("Sparky", "9", "cats@email.com");
          expect(emp.getName()).toBe("Sparky");
     });

     it("should get the employee ID", () => {
          const emp = new Employee("Sparky", "9", "cats@email.com");
          expect(emp.getID()).toBe("9");
     });

     it("should get the employee email", () => {
          const emp = new Employee("Sparky", "9", "cats@email.com");
          expect(emp.getEmail()).toBe("cats@email.com");
     });

     it("should get the employee role", () => {
          const emp = new Employee("Sparky", "9", "cats@email.com");
          expect(emp.getRole()).toBe("Employee");
     });
   
});