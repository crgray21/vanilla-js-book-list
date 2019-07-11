// es6 syntax for creating classes
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    greeting() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    }
}

const mary = new Person('Mary', 'Williams');
console.log(mary);
console.log(mary.greeting());




// Extend Person 
class Customer extends Person {
    constructor(firstName, lastName, phone, membership) {
        super(firstName, lastName);
        this.phone = phone;
        this.membership = membership;
    }
}

const john = new Customer('John', 'Smith', '555-567-8907', 'Silver');
console.log(john);
console.log(john.greeting());