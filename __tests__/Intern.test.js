// Intern object JEST tests
const Intern = require("../lib/Intern");

describe("Intern Class which is a subclass of Employee", () => {
     
     it("should create a new Intern object", () => {
          const int = new Intern("Sparky", "9", "cats@email.com", "UW");
          expect(int.name).toBe("Sparky");
          expect(int.id).toBe("9");
          expect(int.email).toBe("cats@email.com");
          expect(int.school).toBe("UW");
     });

     it("should get the employee Name", () => {
          const int = new Intern("Sparky", "9", "cats@email.com", "UW");
          expect(int.getName()).toBe("Sparky");
     });

     it("should get the employee ID", () => {
          const int = new Intern("Sparky", "9", "cats@email.com", "UW");
          expect(int.getID()).toBe("9");
     });

     it("should get the employee email", () => {
          const int = new Intern("Sparky", "9", "cats@email.com", "UW");
          expect(int.getEmail()).toBe("cats@email.com");
     });

     it("should get the employee school", () => {
          const int = new Intern("Sparky", "9", "cats@email.com", "UW");
          expect(int.getSchool()).toBe("UW");
     });

     it("should get the employee role", () => {
          const int = new Intern("Sparky", "9", "cats@email.com", "UW");
          expect(int.getRole()).toBe("Intern");
     });
   
});