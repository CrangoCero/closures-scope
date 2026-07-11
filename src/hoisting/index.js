//Hoisting
//es el movimiento de declaraciones de variables y funciones a la parte superior de su scope

// console.log(nameOfDog);
// var nameOfDog = "Fido";
// console.log(nameOfDog);

nameofDog();

function nameofDog() {
  console.log(`el mejor perro es ${nameOfDog}`);
}

var nameOfDog = "Fido";
