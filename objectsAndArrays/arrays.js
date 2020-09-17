/*
* **************
/! ARRAYS
* **************
*/

//? POPULATING & REFERRING

let list = ['orange', 'banana', 'oreos'];
console.log(list[1]);

//  JS counts starting at 0. So in this array, it would be 0-2
// When we call an array, we can append square brackets onto the end of our array with the index number we want to reference. This is SQUARE BRACKET NOTATION.


let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Amira']];

//console.log(typeof students);
console.log(students instanceof Array); // the "instanceof" operator is used to check the type of an object at run time. Remember that arrays are technically objects

console.log(students[2]);

/*
? QUICK CHALLENGE
************
    - dive into the array and pull out the name 'Marshall'
    - dive into the nested array and pull the value 'Will'
    - print out (console log) "Hello Marshall!"
    - print out (console log) "Hello Will!"
*/
// Index Position:      (0)     (1)         (2)   (3)  (4)  (5)            (((6)))
let students =      ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha', 'Will']];
//                                                                  (0)      (1)      (2)

console.log(students[1]);
console.log(students[6][2]);
console.log(`Hello ${students[1]}`)
console.log(`Hello ${students[6][2]}`);


//? ARRAY METHODS

// We have multiple methods to allow us to manipulate arrays as we may need.

let food = [`Pecan Pie`, `Shrimp`, `Quesadilla`, `Cheese Cake`, `Hotdog`];

for (foodItem of food) {
    console.log(foodItem);
}

//Add to our array
food.push('Pizza');  // Appends Pizza to the end of our array
console.log('push: ', food);

//Removing and insert
//         (1) (2)   (3)                                               (1)               (2)                  (3)
food.splice(1, 1, 'Banana');  // Removes Shrimp and add Banana => (position in array, how many to remove, what to add)
console.log('splice: ', food);

food.splice(2, 0, 'Sweet Potato Pie');
console.log('splice 2: ', food);

//Remove from end
food.pop();  // pop removes the last item in array
console.log('pop: ', food);

//Add to start
food.unshift('Popcorn', 'Steak');  // unshift adds one or more elements to the beginning of the array
console.log('unshift: ', food);

//Remove from start
food.shift(); // shift removes the first element in an array
console.log('shift: ', food);

//? LENGTH

// We can use a method called length() that can tell us how many values are within our array.

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let colors =['blue', 'green', 'red'];
console.log(colors.length);

console.log(colors);
console.log(colors.toString());

let bool = [true, true, false];
console.log(bool.toString());


//? ITERATING
/*
    forEach-
        - the forEach() method executes a provided function once for each element in an array - much like a for loop or a for of loop.
        - it runs 3 diff arguments
            1. value
            2. index
            3. array itself
*/

// arrayObject.forEach((value, index) => return)

let foodList = ['apple', 'pear', 'mushroom', 'cheese', 'peach'];

// for(let i = 0; i < foodList.length; i++) {
//     console.log(foodList[i]);
// }

// We invoke callback function for each element within our array.
foodList.forEach(foodItem => console.log(foodItem));
// A callback function is another function we invoke within our main function

// function print(callback) {
//     callback();
// }

foodList.forEach((foodItem, index) => {
    console.log(foodItem);
    console.log(index);
})
// - the second position of the parameter is always the index.

/*
! CHALLENGE
***********
    -(Go look at MDN docs to remind you)
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ['Avengers', 'John Wick', '6 Underground'];
movies.forEach(moviesItem => console.log(moviesItem));
movies.push('Avengers 2');  
console.log('push: ', movies);
 movies.splice(1,1, 'EndGame');
console.log('splice: ', movies);
