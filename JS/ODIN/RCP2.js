 // Even if you want to generate rock , paper scissor it can be done randomly by string 

 // User clicks Rock  -> userChoice = "rock" -> Generate computerChoice  -> Compare both choices  -> Display Winner
 //This is the simple flow of the game the only little problem you will get in while geneating the user input 
        




const gamepossibilities = ["rock", "paper", "scissor"]

 const final = gamepossibilities[Math.floor(Math.random()*gamepossibilities.length)]

 console.log(final)

 // Look how simple the computer output generating was 