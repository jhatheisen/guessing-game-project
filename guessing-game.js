const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = 10;

function checkGuess(num) {
  num = Number(num);

  if (isNaN(num)) {
    console.log("Not a number");
  } else if (num > secretNumber) {
    console.log("Too High.");
    return false;
  } else if (num < secretNumber) {
    console.log("Too Low.");
    return false;
  } else if (num === secretNumber) {
    console.log("Correct!");
    return true;
  }
}
// checkGuess(1);
// checkGuess(100);
// checkGuess(10);

function askGuess() {
  rl.question("Enter a guess:", (answer) => {
    let correct = checkGuess(answer);

    if (correct) {
      console.log("You win!");
      rl.close();
    } else {
      askGuess();
    }
  });
}

askGuess();
