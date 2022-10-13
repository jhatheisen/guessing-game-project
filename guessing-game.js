const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber;
let numAttempts;

function askLimit(){
  rl.question("How many turns would you like? ", handleLimit)
}

function handleLimit(limit){
  limit = Number(limit)
  if(isNaN(limit)){
    console.log("Not A Number!")
    askLimit()
  }
  numAttempts = limit
  askRange()
}

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
  rl.question("Enter a guess: ", (answer) => {
    let correct = checkGuess(answer);

    numAttempts--

    if (correct) {
      console.log(`You win! You won in ${5 - numAttempts} attempts!`);

      rl.close();
    } else if(numAttempts === 0){
      console.log("YOU LOSE!", "The answer was ", secretNumber)
      rl.close()
    }
    else{
      console.log('Number of attempts left is ', numAttempts)
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

// askRange()
askLimit()
