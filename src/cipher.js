window.cipher = {
  offset: 1,
  encode: (offset, string) => {
  let normal="";
  for (let i = 0; i < string.length; i++) {
  let lugares = string.charCodeAt(i);
  if (lugares === 32) {
    normal += string[i];
  } else if (string.charCodeAt(i)>= 33 && string.charCodeAt(i)<= 64) {
    let formula = (lugares - 33 + parseInt(offset)) % 26 +33;
    let ascii = String.fromCharCode(formula);
    normal += ascii;
  } else if (string.charCodeAt(i)>= 65 && string.charCodeAt(i)<=90) {
    let formula = (lugares - 65 + parseInt(offset)) % 26 +65;
    let ascii = String.fromCharCode(formula);
    normal += ascii;
  } else if (string.charCodeAt(i)>= 97 && string.charCodeAt(i)<= 122) {
    let formula = (lugares - 97 + parseInt(offset)) % 26 +97;
    let ascii = String.fromCharCode(formula);
    normal += ascii;
  }
  console.log(normal);

}

  mensaje2.value= normal;
//  mensaje1.value= normal;
  return normal;
//  console.log(resultado); return
},

decode: (offset, string) => {
//mensaje1= document.getElementById("caja1").value.toUpperCase();
//llave= (document.getElementById("numero").value);
//mensaje2= document.getElementById("caja2");
//let resultado= "";
let normal="";
for (let i = 0; i < string.length; i++) {
let lugares = string.charCodeAt(i);
if (lugares === 32) {
  normal += string[i];
} else if (string.charCodeAt(i)>= 33 && string.charCodeAt(i)<= 64) {
  let formula = (lugares - 64 - parseInt(offset)) % 26 +64;
  let ascii = String.fromCharCode(formula);
  normal += ascii;
} else if (string.charCodeAt(i)>= 65 && string.charCodeAt(i)<=90) {
  let formula = (lugares - 90 - parseInt(offset)) % 26 +90;
  let ascii = String.fromCharCode(formula);
  normal += ascii;
} else if (string.charCodeAt(i)>= 97 && string.charCodeAt(i)<= 122) {
  let formula = (lugares - 122 - parseInt(offset)) % 26 +122;
  let ascii = String.fromCharCode(formula);
  normal += ascii;
}
console.log(normal);

}

mensaje2.value= normal;
//  mensaje1.value= normal;
return normal;
//  console.log(resultado); return
},
};
