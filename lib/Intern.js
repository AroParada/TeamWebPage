// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(role,id,email,school) {
      super(role,id,email)
      this.school = school;
    }
    gerSchool(){
      return this.school;
    }
    getRole(){
      return "Intern";
    }
}

module.exports = Intern;