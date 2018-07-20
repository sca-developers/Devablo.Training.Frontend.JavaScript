export class Person {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get Name() {
      return `${this._firstName} ${this._lastName}`;
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

    GetFormattedName() {
        return this.Name.toUpperCase();
    }
}