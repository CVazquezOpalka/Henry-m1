'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let arr= num.toString().split('').reverse().join('') //convierto el numero a string, realizo split para que entre en un array
  let Decimal = 0;                                     // lo revierto para que se itere de derecha a izquierda y lo convierto nuevamente en numero dentro del arr
  for(let i=0; i<arr.length;i++) {                    // itero sobre el bucle for
    Decimal += (Math.pow(2,i)*arr[i])                  // utilizo la funcion matpow y multiplico por cada elemento del array
    }                                                   // luego sumo todas las partes
  return Decimal;                                      //retorno el resultado
}

function DecimalABinario(num) {
  // tu codigo aca
  let arr = [];
  let resto=0;                           // creo un array vacio, en el cual ire pusheando los valores obtenidos
  while(num>0) {                          // utilizo un bucle while, mientras que el numero sea mayor a 0
    resto = num % 2;                      // obtengo el resto y pusheo al arr vacio
    num = Math.floor(num/2);              // obtengo la divisor y lo expreso como entero con mathfloor 
    arr.unshift(resto);                   
    }
  return arr.join('');          //el resultado obtenido esta en un array, por lo que utilizando el metodo join, lo expresara como string, y elmetodo number, forzara a la string a ser un numero.
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}