//Block Scope

//es una variable que solo esta disponible dentro del bloque
function fruits() {
  if (true) {
    var fruit1 = "apple"; //global
    let fruit2 = "kiwi"; //local
    const fruit3 = "banana"; //local
    console.log(fruit2);
    console.log(fruit3);
  }
  console.log(fruit1);
  //   console.log(fruit2);
  //   console.log(fruit3);
}

fruits();
