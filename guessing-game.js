const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber = undefined

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

function randomInRange(min, max){
  let randomNum = Math.floor(Math.random() * (max - min) + min)
  return randomNum
}

// console.log(randomInRange(15, 20)); // 16
// console.log(randomInRange(15, 20)); // 17
// console.log(randomInRange(20, 20)); // 20

const handleMaxNum = (answer) => {
  let maxNum = Number(answer)
  if(isNaN(maxNum)){
    console.log("Not A Number!")
    askRange()
  }

  rl.question("Enter a min number: ", handleMinNum())
}

const handleMinNum = (answer, maxNum) => {
  let minNum = Number(answer)
  if(isNaN(minNum)){
    console.log("Not A Number!")
    rl.question("Enter a min number: ", handleMinNum)
  }
  console.log("minNum is ", minNum, "maxNum is ", maxNum)
  secretNumber = randomInRange(minNum, maxNum)
  // askGuess()
}

function askRange(){
  rl.question('Enter a max number: ', handleMaxNum)
}



// askGuess();
askRange()
console.log(secretNumber)
