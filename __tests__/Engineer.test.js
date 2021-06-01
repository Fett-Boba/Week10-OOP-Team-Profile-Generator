const Engineer = require("../lib/Engineer");

describe("Engineer Class which is a subclass of Employee", () => {
     
     it("should create a new Engineer object", () => {
          const eng = new Engineer("Sparky", "9", "cats@email.com", "gitHubCats");
          expect(eng.name).toBe("Sparky");
          expect(eng.id).toBe("9");
          expect(eng.email).toBe("cats@email.com");
          expect(eng.github).toBe("gitHubCats");
     });

     it("should get the employee Name", () => {
          const eng = new Engineer("Sparky", "9", "cats@email.com", "gitHubCats");
          expect(eng.getName()).toBe("Sparky");
     });

     it("should get the employee ID", () => {
          const eng = new Engineer("Sparky", "9", "cats@email.com", "gitHubCats");
          expect(eng.getID()).toBe("9");
     });

     it("should get the employee email", () => {
          const eng = new Engineer("Sparky", "9", "cats@email.com", "gitHubCats");
          expect(eng.getEmail()).toBe("cats@email.com");
     });

     it("should get the employee github ID", () => {
          const eng = new Engineer("Sparky", "9", "cats@email.com", "gitHubCats");
          expect(eng.getGithub()).toBe("gitHubCats");
     });

     it("should get the employee role", () => {
          const eng = new Engineer("Sparky", "9", "cats@email.com", "gitHubCats");
          expect(eng.getRole()).toBe("Engineer");
     });
   
});