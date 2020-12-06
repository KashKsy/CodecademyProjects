let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' '); //#1
console.log('The total word count is : ' + storyWords.length);  //#2

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const betterWords = storyWords.filter(words =>
{ 
  return !unnecessaryWords.includes(words);
});

//console.log(betterWords);
function wordCount()
{
let numOfWords=0;
for(i=0; i< betterWords.length; i++)
  {
    
  let currWord= betterWords[i];
     for(j=0 ; j< overusedWords.length ; j++)
     {
       let OW = overusedWords[j]
       if(currWord === OW )
       
         numOfWords++ ;
       
     }
  }
  return numOfWords;
}
console.log('Total overused words: ' + wordCount());

let reallyCount = 0;
let veryCount = 0;
let basicallyCount = 0;

for(word of betterWords)
{
  if (word === 'really')
  {
     reallyCount++ ;
  }
  else if (word === 'very')
  {
     veryCount++ ;
  }
  else if (word === 'basically')
  {
    basicallyCount++ ;
  }
}

console.log('Count for "really" : ' + reallyCount);
console.log('Count for "very" : ' + veryCount);
console.log('Count for "basically" : ' + basicallyCount);

let sentenceCount = 0;
betterWords.forEach(word =>
{
if (word[word.length-1] === '.' || word[word.length-1] === '!')
{
  sentenceCount++ ;
}
});

console.log('Total number of sentences in the paragraph is : ' + sentenceCount);

console.log(betterWords.join(' '));

