const Manager = require("../lib/Manager");

describe("Manager Class which is a subclass of Employee", () => {
     
     it("should create a new Manager object", () => {
          const mgr = new Manager("Sparky", "9", "cats@email.com", "9-001");
          expect(mgr.name).toBe("Sparky");
          expect(mgr.id).toBe("9");
          expect(mgr.email).toBe("cats@email.com");
          expect(mgr.officeNumber).toBe("9-001");
     });

     it("should get the employee Name", () => {
          const mgr = new Manager("Sparky", "9", "cats@email.com", "9-001");
          expect(mgr.getName()).toBe("Sparky");
     });

     it("should get the employee ID", () => {
          const mgr = new Manager("Sparky", "9", "cats@email.com", "9-001");
          expect(mgr.getID()).toBe("9");
     });

     it("should get the employee email", () => {
          const mgr = new Manager("Sparky", "9", "cats@email.com", "9-001");
          expect(mgr.getEmail()).toBe("cats@email.com");
     });

     it("should get the employee office number", () => {
          const mgr = new Manager("Sparky", "9", "cats@email.com", "9-001");
          expect(mgr.getOfficeNumber()).toBe("9-001");
     });

     it("should get the employee role", () => {
          const mgr = new Manager("Sparky", "9", "cats@email.com", "9-001");
          expect(mgr.getRole()).toBe("Manager");
     });
   
});