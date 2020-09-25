for (let i=0; i <= 10; i++) {
    console.log(i);{
    }  
    if (i===0){
      console.log('the number is even');
    } 
    else if (i === i+=2) {
      console.log('the number is even');
    }
    
    else {
      console.log('the number is odd');
    }
    
  }
  let count = 0;
  for ( ;  count < 9; ++count ) {
    console.log(count);
  }

  
let catArray = ['tabby', 'british shorthair', 'burmese', 'main coon'];

for (let cat in catArray) {
   console.log(cat)
}



function foo () {
  return bar();
  function bar() {
    return "Poppin' bottles";
  }
}
console.log(foo());

function whatDoesItDo(color) {    
  if (color !== 'blue' || color !== 'green') {
     color = 'red';
  }
  return color;
}; 

console.log(whatDoesItDo());


let firstName = 'Josh';
let lastName = 'Vinson';

Function greeting(firstName, lastName)
greeting()
