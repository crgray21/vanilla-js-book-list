// Object literals inherit from Object.prototype
// A person object would inherit from Person.prototype

// Person constructor
function Person(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday =  new Date(birthday);
}

// Prototype function
Person.prototype.calcAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

const john = new Person('John', 'Gray', '9-10-2011');
const mary = new Person('Mary', 'Sue', '1-2-2003');

console.log(john);
console.log(mary);

console.log(john.calcAge());
console.log(john.getFullName());

// also have access to object prototype properties
// such as the hasOwnProperty function
console.log(john.hasOwnProperty('firstName'));
console.log(john.hasOwnProperty('getFullName'));




// Prototype inheritance

// Customer constructor
function Customer(firstName, lastName, birthday, phoneNumber, membershipType) {
    //inherit variables from Person using .call() function
    Person.call(this, firstName, lastName, birthday);
    this.phoneNumber = phoneNumber;
    this.membershipType = membershipType;
}

// Inherit the Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make Customer.prototype return type 'Customer'
Customer.prototype.constructor = Customer;

const customer1 = new Customer('Tom', 'Smith', '1-2-2003', '555-456-7890', 'Standard');

console.log(customer1);
console.log(customer1.calcAge());

