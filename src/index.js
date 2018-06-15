let botonCifrar= document.getElementById("boton1");
let botonDescifrar= document.getElementById("boton2");
let mensaje1= document.getElementById("caja1");
let llave= (document.getElementById("numero"));
let mensaje2= document.getElementById("caja2");
//let resultado;

botonCifrar.addEventListener ("click" , event => {
  let detonadorValor= window.cipher.encode (
    llave.value, mensaje1.value
  );
  //console.log(detonadorValor);
  mensaje2.innerHTML = detonadorValor;
  //mensaje2.defaultValue = detonadorValor;
});

botonDescifrar.addEventListener("click" , event => {
  let detonadorValor= window.cipher.decode (
  llave.value, mensaje1.value
  );
  mensaje2.innerHTML= detonadorValor;
});
