//const sum = require('./sum');

test('can create class with prototype', () => {

    var User = function(firstName, lastName) {
      this._firstName = firstName;
      this._lastName = lastName;
      
      this.GetName = function(){
        return `${this._firstName} ${this._lastName}`;
      }
    }

    // Extend with Prototype
    User.prototype = {
      HelloWorld: function(){
          return "Hello World";
      }
    };

    let user = new User("Aaron", "Morey");
    let name = user.GetName();
    let result = user.HelloWorld();

    expect(name).toBe("Aaron Morey");
    expect(result).toBe("Hello World");

    expect(User.prototype.HelloWorld.call(user)).toBe("Hello World");
});

test('can create class with constructor and getter/setters', () => {
  
  class User {

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get Name() {
      return `${this.FirstName} ${this.LastName}`;
    }
    
    get FirstName() {
        return this._firstName;
    }
    set FirstName(value) {
        this._firstName = value;
    }

    get LastName() {
        return this._lastName;
    }
    set LastName(value) {
      this._lastName = value;
    }
    GetNameToUpper(){
        return this.Name.toUpperCase();
    }
  }

  let user = new User("Test", "Test");
  user.FirstName = "Aaron";
  user.LastName = "Morey";
  let name = user.Name
  let nameUpper = user.GetNameToUpper();

  expect(name).toBe("Aaron Morey");
  expect(nameUpper).toBe("AARON MOREY");
});

test('can create class with constructor and getter/setters', () => {
  
  class Person {

    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get Name() {
      return `${this.FirstName} ${this.LastName}`;
    }
    
    get FirstName() {
        return this._firstName;
    }
    get LastName() {
        return this._lastName;
    }
    toString()
    {
      return this.Name;
    }
  }

  class Employee extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }

    get Name() {
      return super.Name.toUpperCase();
    }
  }

  let p = new Person("Aaron", "Morey");
  let pname = p.Name
  expect(pname).toBe("Aaron Morey");

  let e = new Employee("Aaron", "Morey");
  let ename = e.Name

  var isInstance = e instanceof Employee;

  expect(ename).toBe("AARON MOREY");
  expect(e).toBeInstanceOf(Employee);
});
