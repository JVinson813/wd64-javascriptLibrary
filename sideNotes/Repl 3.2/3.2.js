let x = Math.floor(Math.random() * 10) + 1;
let turns = 3;
let hint = 'Guess my number, 1-10!';

while (turns > 0) {
  let guess = prompt(hint +
      ' You have ' + turns + ' guesses left.');
  if (!guess) break;
  guess = Number(guess);
  if (guess == x) {
    alert('You Win!');
    turns = 0;
  } else {
    hint = 'Nope.';
    if (guess < x) hint += ' Too small!';
    if (guess > x) hint += ' Too big!';
    turns--;
  }
}
alert('The secret number was ' + x + '.');



