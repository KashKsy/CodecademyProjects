const getUserChoice  = (userInput) =>
{
userInput = userInput.toLowerCase();
if(userInput === "rock" || userInput === "paper" || userInput === "scissors")
{
return userInput;
}
if(userInput === 'bomb')
{
 return userInput;
}
else
{
  console.log('Invalid input!');
}
};

//let userChoice =getUserChoice('rock')
//console.log(`You chose: ${userChoice}`);

const getComputerChoice = () =>
{
  let randomNumber =Math.floor(Math.random() * 3);
  switch(randomNumber)
  {
    case 0 :
    return 'rock';
    break;
    case 1 :
    return 'paper';
    break;
    case 2 :
    return 'scissors';
    break;
  }
}

const determineWinner = (userChoice,computerChoice) =>
{
  if(userChoice === 'bomb')
{
    return 'You won!!';
}
if(userChoice === computerChoice)
{
    return 'Game is a tie';
}
if(userChoice === 'rock')
{
   if(computerChoice === 'paper')
   {
     return 'You lost!';
   }
   else
   {
     return 'You won!';
   }
}
 if(userChoice === 'paper')
{
      if(computerChoice === 'scissors')
      {
         return 'You lost!';
      }
      else
      {
     return 'You won!';
      }
}
if(userChoice === 'scissors')
{
      if(computerChoice === 'rock')
      {
         return 'You lost!';
      }
      else
      {
     return 'You won!';
      }
}
};


const playGame =(userChoice,computerChoice) =>
{
 userChoice = getUserChoice('bomb');
console.log(`You chose: ${userChoice}`);
computerChoice =getComputerChoice();
console.log(`The computer chose: ${computerChoice}`);
console.log(determineWinner(userChoice, computerChoice));
}

playGame();
