//variables
var a; //declaracion de variable
var b = "b"; //declaracion y asignacion de variable
b = "bb"; //reasignacion de variable
var a = "aa"; //redeclaracion y reasignacion de variable

//Global Scope
var fruit = "apple"; //global

console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia";
  console.log(country);
}

countries();
console.log(country);
