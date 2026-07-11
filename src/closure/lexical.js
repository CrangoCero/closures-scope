//ambito lexico
//un ambito es un espacio de memoria donde se almacenan variables y funciones que pueden ser accedidas desde cualquier parte del codigo

const myGlobal = 0;

function myFunction() {
  const myLocal = 1;
  console.log(myGlobal);
  function myLocalFunction() {
    //funcion local
    const myLocalInner = 2;
    console.log(myLocal, myGlobal);

    function myLocalInnerFunction() {
      //funcion local
      console.log(myLocal, myGlobal, myLocalInner);
    }
    return myLocalInnerFunction();
  }
  return myLocalFunction();
}

myFunction();
