/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var dni = "26052913P";
 
var exp
var exp1
 
  exp = /^\d{8}[a-zA-Z]$/;
  exp1 = /(\d{8})/;
  
function nif() {
  var numero
  var letr
  var letra
 
 
  if(exp.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
       console.log('Nif erroneo, la letra del NIF no se corresponde');
     }
     else{
         console.log("Nif correcto");
     }
     
     }
     if (exp1.test (dni) == true && exp.test(dni) != true){
         console.log("Dni correcto")
     }
  }
   
function dniONif(){
    if( exp.test (dni) == true){
        console.log("Has introducido un NIF");
    }
   
    if(exp1.test (dni) == true && exp.test(dni) != true){
        console.log("Has introducido un DNI");
    }
    
}
function letraDni(){
    if(exp.test (dni) == true){
        console.log(dni.substring(dni.length-1));
    }
}
function validarLetra(){
    var numero
    var letr
    var letra
     if(exp.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
       console.log('Letra correcta');
     }
     else{
         console.log("Letra incorrecta");
         }
    }
}
var ejer2_1 = nif();
var ejer2_2 = dniONif();
var ejer2_3 = letraDni();
var ejer2_4 = validarLetra();