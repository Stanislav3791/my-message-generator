const menu = {
_courses: {
 appetizers: [],
 mains: [],
 desserts: []  
 },

 get courses() {
    return { 
      appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts }
  },

 get appetizers() {
 return this._courses.appetizers;
  },

 set appetizers(appetizerIn) {
 this._courses.appetizers = appetizer;
  },
  
  get mains() {
 return this._courses.mains;
  },
 set mains(mainsIn) {
 this._courses.mains = main;
  },

   get desserts () {
 return this._courses.desserts;
  },
 set desserts (dessertsIn) {
 this._courses.desserts = dessert;
  },
  
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish =
    {
     //courseName : [],
     name: dishName,
     price: dishPrice
    };
    this._courses[courseName].push(dish); 
  },
getRandomDishFromCourse(courseName) {
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length);
  return dishes[randomIndex];
},

generateRandomMeal() {
const appetizer = this.getRandomDishFromCourse('appetizers');
const main = this.getRandomDishFromCourse('mains');
const dessert = this.getRandomDishFromCourse('desserts');
const totalPrice = appetizer.price + main.price + dessert.price;
return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}.`;
}
};
menu.addDishToCourse('appetizers', 'Cesar Salad', 4 );
menu.addDishToCourse('appetizers', 'varna Salad', 5 );
menu.addDishToCourse('appetizers', 'spanish Salad', 3 );
menu.addDishToCourse('mains', 'saslik', 10);
menu.addDishToCourse('mains', 'kebab', 11);
menu.addDishToCourse('mains', 'plov', 13);
menu.addDishToCourse('desserts', 'frukti', 4);
menu.addDishToCourse('desserts', 'icecream', 5);
menu.addDishToCourse('desserts', 'panakota', 4);
let meal = menu.generateRandomMeal();
console.log(meal);