/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 var cadena="ana";
function esString(){
   
    function esoNo(){
        if(isNaN(cadena))
        console.log(cadena+" es un String");
        else 
            console.log(cadena+" no es un String");
    }
    return esoNo;
}
function invertir(){
    function invirtiendo(){
        if (isNaN(cadena))
            console.log("La cadena "+cadena+" invertida es "+cadena.split("").reverse().join(""));
        else
            console.log();
    }
    return invirtiendo;
}
function hacerMayus(){
    function mayus(){
        if(isNaN(cadena))
            console.log(cadena.toUpperCase());
        else
            console.log();
    }
    return mayus;
}
function caracteres(){
    function num(){
        if (isNaN(cadena))
            console.log(cadena.length);
        else 
            console.log();
    }
    return num;
}
function esPalin(){
    function palindromo(){
        if  (isNaN(cadena) && cadena == cadena.split("").reverse().join("") )
            console.log(cadena+" es un palindromo");
        else if(cadena != cadena.split("").reverse().join(""))
            console.log(cadena+" no es un palindromo");
        else
            console.log();
    }
    return palindromo;
}
var ejer1_1 = esString();
var ejer1_2 = invertir();
var ejer1_3 = hacerMayus();
var ejer1_4 = caracteres();
var ejer1_5 = esPalin();
ejer1_1();
ejer1_2();
ejer1_3();
ejer1_4();
ejer1_5();
