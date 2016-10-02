/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Ejercicio2(cadena){
    var _cadena = cadena;
    return{
        esValido: function(){
            if((/[0-9]{8}[A-Z]?$/).test(_cadena)){
                letras="TRWAGMYFPDXBNJZSQVHLCKET";
                posicion = parseInt(_cadena) % 23;
                letra = letras.substring(posicion,posicion+1);
         return "DNI correcto"; 
     } else{
         console.log("DNI incorrecto");
     }
    
  },
    esDnioNif: function(){
        if((/[0-9]{8}[A-Z]$/).test(_cadena)){
            return "Has introducido un NIF";       
        }else if ((/[0-9]{8}$/).test(_cadena)){
            return "Has introducido un DNI";
        }else{
            return "Has introducido un valor erroneo";
        }
    },
    obtenerLetra: function(){
        
    if((/[0-9]{8}[A-Z]$/).test(_cadena)){
        console.log(_cadena.substring(_cadena.length-1));
    
     }else {
         return "Has introducio un Dni sin Letra"
     }
    },
    LetraDni: function(){
        if((/[0-9]{8}[A-Z]?$/).test(_cadena)){
                letras="TRWAGMYFPDXBNJZSQVHLCKET";
                posicion = parseInt(_cadena) % 23;
                letra = letras.substring(posicion,posicion+1);
         return letra ;
    }else{
        return "Has introducido el DNI mal";
    }
  }
}
}
var prueba = Ejercicio2("26052913");
console.log(prueba.esValido());
console.log(prueba.esDnioNif());
console.log(prueba.obtenerLetra());
console.log(prueba.LetraDni());
