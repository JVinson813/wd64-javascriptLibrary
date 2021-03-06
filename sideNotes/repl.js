// Write an object literal that stores information about your favorite movie. 
// nameOfMovie, runTime, characters, and genre should be keys directly inside the object. 
// characters will be an array that should store no more than two (2) character objects, each of which stores name, age, and items. 
// items itself will also be an array that should store no more than two (2) item objects. 

// These items objects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow'}). 

// Use console.log statements to show that you can print out the nameOfMovie, runTime, the characters, the name of a character, and one of the items a character has. Your console should look similar to the screenshot below.



let movie = {
    nameOfMovie: 'Avengers',
    runTime: 288,
    characters: [
        {
            name: 'IronMan',
            age: 40,
            items: [
                {itemOne: 'Blaster'},
                {itemTwo: 'Sunglasses'},
            ],
        },
        {
            name: 'Thor',
            age: 5000,
            items: [
                {itemOne: 'Mjolnir'},
                {itemTwo: 'Hairbrush'},
            ],
        },
    ],
}

console.log(movie.nameOfMovie);
console.log(movie.runTime);
console.log(movie.characters);
console.log(movie.characters[1].name);
console.log(movie.characters[1].items[0].itemOne);