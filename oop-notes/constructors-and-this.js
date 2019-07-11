// examples of objects

//basic JSON object
const brad = {
    name: 'Brad',
    age: 30
}

console.log(brad);
console.log(brad.age);


//constructor
function Person(name, birthday) {
    this.name = name;
    this.birthday = new Date(birthday);
    this.calcAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const brad = new Person('Brad', '9-10-1981');
const john = new Person('John', '4-25-1992');
console.log(brad);
console.log(john);
console.log(brad.calcAge());
console.log(john.calcAge());



