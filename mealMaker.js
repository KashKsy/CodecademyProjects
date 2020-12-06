const menu =
{
  _courses : {
    appetizers : [],
    mains : [],
    desserts : []
     },
     
get  appetizers(){
return this._courses.appetizers;
},
set appetizers (appetizersIn){
this._courses.appetizers = appetizersIn;
},
get mains(){
return this._courses.mains;
},
set mains(mainsIn){
this._courses.mains = mainsIn;
},
get desserts()
{
return this._courses.desserts;
},
set desserts(dessertsIn)
{
this._courses.desserts = dessertsIn;
},
get courses()
{
  return {
    appetizers : this.appetizersIn,
    mains : this.mainsIn,
    desserts : this.dessertsIn
  }
},
addDishToCourse(courseName, dishName, dishPrice)
{
  const dish = {
    name : dishName, 
    price: dishPrice
  }
return this._courses[courseName].push(dish);
},
getRandomDishFromCourse(courseName)
{
const dishes = this._courses[courseName];
const randomIndex = Math.floor(Math.random() * dishes.length);
return dishes[randomIndex];
},
generateRandomMeal()
{
const appetizer = this.getRandomDishFromCourse('appetizers');
const main = this.getRandomDishFromCourse('mains');
const dessert = this.getRandomDishFromCourse('desserts');
const totalPrice = appetizer.price + main.price + dessert.price
return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name} and the total price is   ${totalPrice}`
}
}
menu.addDishToCourse('appetizers', 'Caesar salad' , 4.25);
menu.addDishToCourse('appetizers', 'Wings' , 5.00);
menu.addDishToCourse('appetizers', 'Tomato soup' , 6.25);
menu.addDishToCourse('mains', 'Butter chicken' , 7.25);
menu.addDishToCourse('mains', 'Chicken tandoori' , 6.00);
menu.addDishToCourse('mains', 'Fish curry' , 4.25);
menu.addDishToCourse('desserts', 'Kulfi' , 4.25);
menu.addDishToCourse('desserts', 'Cheesecake' , 4.25);
menu.addDishToCourse('desserts', 'Brownie' , 4.25);
let meal = menu.generateRandomMeal();
console.log(meal);
