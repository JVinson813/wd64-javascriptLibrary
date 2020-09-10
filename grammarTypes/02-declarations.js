/*
* *******
! Variables
* *******
*/

console.log('hello');
// This is a debugging tool

let a = 2;

/*
- let : is our KEYWORD
- a : is our NAME of our variable
- = : is our ASSIGNMENT OPERATOR
- 2 : is our variable VALUE
*/

let b = 1;

console.log(a+b);

//! RESTRICTIONS
/*
    - a variable name must begin with a letter, underscore, or a dollar sign.
    - numbers may follow the above characters, BUT cannot come first.
    - javascript IS case sensitive - 'hello' and 'Hello', these would be diff variables
    - no spaces are allowed in variable names.
    - camelCase is the best practice for naming
    - ex:
        let myName = 'Eric';
        is easier to read than
        let myname= 'Eric';
*/

let startingWithLetter = "Works";
let _startWithUnderscore = "Works";
let $startWithDollarSign = "Works";
// let 4startsWithNumber = "Breaks";

console.log(startingWithLetter, _startWithUnderscore, $startWithDollarSign);

let PascalCase;
let camelCase;
let snake_case;

/*
*KEYWORDS

var, let, and const

    -var: 'old' keyword that stands for variable.  *We wont be using these as often but is still viable to use.
    -let: 'new' keyword for variable. (introduced with newest version of javascript)
    -const 'new' keyword that declares an UNCHANGABLE, or constant, variable.
*/

var variable = 'var variable';
let letVariable = 'let variable';
console.log(variable, letVariable);

// let function = 1; Cannot use reserved words within a variable name - *function is a reserved word.


/*
* *********
! Declarations & Initializations
* *********
*/
// Declarations are the LEFT SIDE fo the assignment operatior
//let x;

// Initializations are the RIGHT SIDE of the assignment operatior
//let x = 10

// 10 is our initialization

let y;
console.log('declaration:', y)

y = 10
console.log('initialization:', y)

// We've set our variable with our let keyword. With each iteration, we have redeclared what it is.

//? const

let today = 'Great!';
const efa = 'Wonderful!';
console.log(today , efa);

