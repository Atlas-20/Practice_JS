//  // return ice ;
//  const  userName = prompt("Please enter your name:", "Guest");

// if (userName !== null) {
//   console.log(`Hello, ${userName}!`);
// } else {
//   console.log("User canceled the action.");
// }

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Please enter your name: ", (name) => {
//   console.log(`Hello, ${name}!`);
//   rl.close();
// });

const playerChoice = readline.question("Rock, paper, or scissors? ").toLowerCase();

const computerChoices = ["rock", "paper", "scissors"];
const computerChoice =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

const result = compareChoices(playerChoice, computerChoice);

console.log(`You: ${playerChoice}`);
console.log(`Computer: ${computerChoice}`);
console.log(result);