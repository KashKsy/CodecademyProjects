let raceNumber = Math.floor(Math.random() * 1000);
const earlyBird=false;
const age = 18;

if (age > 18 && earlyBird)
{
raceNumber += 1000;
}
if(age> 18 && earlyBird)
{
console.log(`Your race starts at 9:30 am and your number is ${raceNumber}`);
}
else if(age>18 && !earlyBird)
{
console.log(`Your race starts at 11:00 am and your number is ${raceNumber}`);
}
else if (age < 18 )
{
  console.log(`Your race starts at 12:30 pm and your number is ${raceNumber}`);
}
else
{
  console.log(`Check with the registration desk`)
}
