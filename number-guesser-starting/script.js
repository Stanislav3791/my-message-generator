let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
    return Math.floor(Math.random() * 10);
   };
   function compareGuesses(humgues, compgues, target) {
     
    let humres =  Math.abs(humgues - target);
    let comres = Math.abs(compgues - target);
     if (humres <= comres) {
       return true;
     }
     else {
       return false;
   }
   
   };
   
   function updateScore(winer) {
     if (winer === 'human') {
       humanScore += 1;
   
     }
     else if (winer === 'computer') {
       computerScore += 1;
     }
   };
   
   function advanceRound() {
     currentRoundNumber += 1;
   }