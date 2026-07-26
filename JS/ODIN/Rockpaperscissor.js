//using Math.random

// function getRandomIntInclusive(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
// }
// console.log(getRandomIntInclusive(34,2));
// // Example: getRandomIntInclusive(1, 6) behaves like a 6-sided die roll.
 
// //@@@@@@@@@@Advance use 
// const colors = ['red', 'blue', 'green', 'yellow'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];

function rps(){
    const ice =Math.floor(Math.random()*10+1)

    if      (ice<=3)        return "rock"
    else if (ice<=7)        return "paper"
    else                    return "scissor"

    return ice ;
  

}
const computer =console.log(rps());

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Please enter your input: ", (userchoice ) => {
//   return userchoice
//   rl.close();
// });

// const player  = rl;
// if(useroutput === rps()){
//     console.log("tie")
// }




//@@@@@@@@There are actually two types to take input of the user 
//so here is the prompt method 
let player = prompt("Enter you input (Rock,Paper or Scissor):", "input");

if (player !== null) {
//   console.log(`Hello, ${userName}!`);
} else {
  console.log("User canceled the action.");
}
// console.log(userinput)





//function of choices comparision
// gameLogic.js
function compareChoices(player, computer) {
  if (player === computer) return "Draw";
  if (
    (player === "rock" && computer === "scissor") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissor" && computer === "paper")
  ) {
    return "Player wins!";
  }
  return "Computer wins!";
}

console.log(compareChoices())
// module.exports = { compareChoices };






//@@@@@@@@@@@@@@@@@ its not done 









//######the correct code 
function rps() {
    const ice = Math.floor(Math.random() * 10 + 1);

    if (ice <= 3) return "rock";
    else if (ice <= 7) return "paper";
    else return "scissor";
}

const computer = rps();
console.log("Computer:", computer);

let player = prompt("Enter Rock, Paper or Scissor:");

if (player !== null) {
    player = player.toLowerCase();

    function compareChoices(player, computer) {
        if (player === computer) return "Draw";

        if (
            (player === "rock" && computer === "scissor") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissor" && computer === "paper")
        ) {
            return "Player wins!";
        }

        return "Computer wins!";
    }

    console.log(compareChoices(player, computer));
} else {
    console.log("User canceled the action.");
}