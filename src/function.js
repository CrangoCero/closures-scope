//function Scope
//es una variable que solo esta disponible dentro de la funcion

function greeting() {
  let username = "Laura";
  console.log("Hello " + username);
  if (username === "Laura") {
    console.log(`Welcome ${username}!`);
  }
}

greeting();
//console.log(username);
