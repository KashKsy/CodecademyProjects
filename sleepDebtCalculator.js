const getSleepHours = (day)=>
{
  day = day.toLowerCase();
switch(day)
  {
case 'monday': 
return 8;
break; 
case 'tuesday': 
return 8;
break;
case 'wednesday':
return 7;
break;
case 'thursday':
return 6;
break;
case 'friday': 
return 9;
break;
case 'saturday': 
return 10;
break;
case 'sunday': 
return 8;
break;
  }
}

const getActualSleepHours = () =>
  getSleepHours('monday')+
  getSleepHours('tuesday')+
  getSleepHours('wednesday')+
  getSleepHours('thursday')+
  getSleepHours('friday')+
  getSleepHours('saturday')+
  getSleepHours('sunday');
 
console.log(getActualSleepHours());

const getIdealSleepHours = () =>{
let idealHours = 7.5;
return idealHours * 7;
}

console.log(getIdealSleepHours());

const calculateSleepDebt =()=>
{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours )
  {
      console.log("You got the perfect amount of sleep!");
  }
  else if(actualSleepHours > idealSleepHours)
  {
      console.log("You overslept by " +(actualSleepHours - idealSleepHours) + " hours this week!");
  }
  else if(actualSleepHours < idealSleepHours)
  {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
}

calculateSleepDebt();

