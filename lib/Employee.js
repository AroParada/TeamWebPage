// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name,role,id,email) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }
    getRole(){
        return "Employee";
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.Email;
    }
}
  module.exports = Employee;