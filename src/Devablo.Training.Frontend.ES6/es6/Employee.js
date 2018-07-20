import {Person} from "./Person.js";

export class Employee extends Person{
    constructor(firstName, lastName) {
        super(firstName, lastName)
    }
}

export let EmployeeLog = function(employee){
    console.log(employee.Name);
}