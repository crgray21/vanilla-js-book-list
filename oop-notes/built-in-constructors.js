// generate objects via built-in-constructors
// this is generally worse performance and less clean
// but it may be useful to be aware of

// String
const name1 = 'Jeff';
const name2 = new String('Jeff');


// Can cause issues with matching types
console.log(typeof name1);
console.log(typeof name2);


// An example of type match issues during boolean check
// Note the use of '===' as it is different from using '=='
// The '===' operator checks for equal values AND equal type
// The '==' operator will attempt to convert type and then compare the values
// name1
if (name1 === 'Jeff') {
    console.log('Yes');
} else {
    console.log('No');
}

// name2
if (name2 === 'Jeff') {
    console.log('Yes');
} else {
    console.log('No');
}

// name2 using '==' operator
if (name2 == 'Jeff') {
    console.log('Yes');
} else {
    console.log('No');
}


//JS Objects
const john1 = {name: 'John'};
const john2 = new Object({name: 'John'});

console.log(john1);
console.log(john2);



//Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);

console.log(arr1);
console.log(arr2);


//Regular Expressions
const regex1 = /\w+/;
const regex2 = new RegExp('\\w+');

console.log(regex1);
console.log(regex2);