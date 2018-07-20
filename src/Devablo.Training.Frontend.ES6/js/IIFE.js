// Immediately Invoked Function Expression  (IIFE)
(function(target){
    
    var privateMethod = function(name){
    return name + ' is working';
    };

   var Employee = function(name) {
    this.name = name;
    };

    Employee.prototype = {
    doWork: function(){
        return privateMethod(this.name);
    }
    }

    target.Employee = Employee;

}(window));