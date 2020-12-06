const team = {
_players : [ 
  {firstName: 'Pablo',lastName: 'Sanchez',
  age: 21},
  {firstName: 'Pete',lastName: 'Wheeler', 
  age: 26},
  {firstName: 'Mike',lastName: 'Varshavski',
  age: 29}
  
],
_games : [
  {opponent: 'Broncos',teamPoints: 42,
  opponentPoints: 27},
  {opponent: 'Eagles',
  teamPoints: 32,
  opponentPoints: 40},
  {opponent: 'Knight Riders',teamPoints: 45,
  opponentPoints: 20}
],
get players()
{
  return this._players;
},
get games()
{
  return this._games;
},

addPlayer(firstName,lastName,age)
{
let player = {
  firstName : firstName,
  lastName: lastName,
  age: age
};
this._players.push(player)
},

addGame(opponent, teamPoints, opponentPoints)
{
let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints  
    };
this._games.push(game);
  }
};

team.addPlayer('Steph' ,'Curry', 28);
team.addPlayer('Lisa' ,'Leslie', 44);
team.addPlayer('Bugs' ,'Bunny', 76);

//console.log(team._players);


team.addGame('Knicks', 25, 35);
team.addGame('Bears', 45, 32);
team.addGame('Eagles', 21, 22);

console.log(team._games);
