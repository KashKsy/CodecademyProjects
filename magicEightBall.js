let userName = "";

let name = userName ? console.log(`Hello ${userName}`) : console.log(`Hello!`);


const userQuestion = 'Will I ever become a billionaire?';
console.log(`The user asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random()* 8);

let eightBall = "";

switch(randomNumber){
  case 0: 
  eightBall='Try again!';
  break;
  case 1: 
  eightBall = 'It is certain!';
  break;
  case 2:
  eightBall =  "It is decidedly so!";
  break;
  case 3: 
  eightBall = "Reply hazy try again!";
  break;
  case 4: 
  eightBall = "Cannot predict now!";
  break;
  case 5: 
  eightBall = "Do not count on it!";
  break;
  case 6: 
  eightBall = "My sources say no :(";
  break;
  case 7: 
  eightBall = "Outlook not so good :O ";
  break;
  case 8: 
  eightBall = "Signs point to yes! :D";
  break;
}

console.log(eightBall);
