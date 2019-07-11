const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    setLastName: function(lastName) {
        this.lastName = lastName;
    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Gary';
mary.age = 30;

console.log(mary);
console.log(mary.greeting());
mary.setLastName('Williams');
console.log(mary);