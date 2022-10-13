const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber;

function askRange(){
  rl.question('Enter a max number: ', handleMaxNum)
}

function handleMaxNum(answer) {
  let maxNum = Number(answer)
  if(isNaN(maxNum)){
    console.log("Not A Number!")
    askRange()
  }

  secretNumber = maxNum;
  rl.question("Enter a min number: ", handleMinNum)
}

function handleMinNum(answer) {
  let minNum = Number(answer)
  if(isNaN(minNum)){
    console.log("Not A Number!")
    rl.question("Enter a min number: ", handleMinNum)
  }

  secretNumber = randomInRange(minNum, secretNumber)
  askGuess()
}

function randomInRange(min, max){
  let randomNum = Math.floor(Math.random() * (max - min) + min)
  return randomNum
}

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

askRange()
