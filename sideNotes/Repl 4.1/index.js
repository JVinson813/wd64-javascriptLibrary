const shoppingList = [['eggs', 'milk', 'butter'], ['cleaner', 'trash bags', 'detergent'], ['thank you card', 'pens', 'gift wrapping'], ['shoes', 't-shirt', 'slacks']];

const [dairy, cleaning, crafts, clothes] = shoppingList;
//console.log(dairy);
//console.log(cleaning);
//console.log(crafts);
//console.log(clothes);

shoppingList2 = dairy.concat(cleaning, crafts, clothes);
console.log(shoppingList2);

