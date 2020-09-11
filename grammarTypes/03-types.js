/*
* ********
! TYPES
* ********

? Data and Structure Types
* ********
    -Primitive Data Types:
        -Boolean
        -undefined
        -number
        -string
            -bigInt*
            -symbol*
    -null
    -object
    -Function
*/

//? BOOLEANS
//* ********

// A boolean has two possible values: true and false

let on = true;
let off = false;

console.log(on);

//? NULL
// A null value is an empty value. Think of it as an empty container that has space to fill.

let empty = null;
console.log(empty);

//? UNDEFINED
// No value has been assigned to a container

let undef = undefined;
console.log(undef);
let password;
console.log(password);

    /*
        -Null is like a container with nothing in it
            -Null you can trust as zero - Undefined not so much
        -Undefined is when a variable has never been set, or hasn't been created yet.
    */

//? NUMBERS

let degrees = 90;
console.log(degrees);

let precise = 9999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);
// JS gives us space for 15 9s before rounding up.

let notQuite = 0.2 + 0.1;
console.log(notQuite);
// JS rounds out at a certain number, so if math is needed, be aware.

let whatIf = (0.2 *10 + 0.1 * 10);
console.log(whatIf);
let numbersAreHard = (.2 * 10 + .1 * 10) / 10;
console.log(numbersAreHard);

//? STRINGS

// STRINGS REPRESENT TEXT AND ARE WRAPPED IN EITHER SINGLE OR DOUBLE QUOTES

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote, singleQuote);

let inception = "I've";
let singleQ = 'I\'ve';
console.log(inception, singleQ)

//? Number vs String
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050' + '100';
console.log(addTheseAlso);
// Analogy...writing 1050 on one sticky note and writing 100 on another sticky note and placing them next to each other.

console.log(typeof addThese);
console.log(typeof addTheseAlso);
// We can use an operatior called 'typeof' that returns a string that tells us exactly what our variable "type" is.

let stringToNumber = Number('1150')
console.log(stringToNumber);
console.log(typeof stringToNumber);

//const log = console.log; // We can reduce our typing by setting console log to a variable that doesn't change.
// log('test');

//? OBJECTS
/*
    - Objects are used to store many values instead of a singular value.
    - Consider these as a collection of various properties.
    - denoted by curly brackets: {}
*/

let frodo = {
    race: 'hobbit', // string
    rings: 1, //number
    sting: true //boolean
}

console.log(frodo);
console.log(typeof frodo);
//1: Key
//2: Value

let obj = {
    key: 'value'
};

console.log(obj);

//? ARRAYS
/*

    - Containers that hold a list of items.
    - denoted by square brackets: []
    - all items are within the square brackets.
    - regardless of datatype, each item is separated by a comma.

*/

let arrayList = ['pos 1', 'pos 2', 'pos 3'];
console.log(arrayList);
let anotherExample = [1, 2, 'three', true]
console.log(anotherExample);

console.log(typeof anotherExample);
// JS classified arrays as objects and not a datatype of their own.

//? ADDITIONS vs CONCATENATION
/*
    -JS sees the "+" symbol in two different ways.
        - Wehen combined with numbers, uses built-in math functionality.
        - When combined with strings, it ignores the math and concats the two strings.
*/

let strings = 'one' + ' ' + 'is a number';
let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff);

//! Challenge

let address = {
    name: "Josh Vinson",
    houseNumber: 3620,
    strt: "White Cliff Way",
    city: "Whitestown",
    state: "Indiana",
    zip: 46075
}
console.log(address);

//? string: Properties

/*
    -strings have properties, or the qualities associated with that string.
    - the length of a string is a property.
*/

let myName = "Josh"
console.log(myName.length);

//? String: Methods
/*
    -methods are tools that can help us manipulate our data
*/

let myNameIs = "Josh"
console.log(myNameIs.toUpperCase()); //this is method that changes a string to uppercase
console.log(myNameIs.toLowerCase()); //this is method that changes a string to lowercase