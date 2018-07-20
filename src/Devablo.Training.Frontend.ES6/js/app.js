import {Person} from "../es6/Person.js"
import {Employee, EmployeeLog} from "../es6/Employee.js"

(function(target){
    
    class Greeter {
        constructor(message) {
            this.message = message;
        }
    
        greet() {
            var element = document.querySelector('#message');
            element.innerHTML = "Developer: " + this.message;
        }
    };
    
    let employee = new Employee("Aaron", "Morey");
    var greeter = new Greeter(employee.Name);
    greeter.greet();
    
    EmployeeLog(employee);

}(window));