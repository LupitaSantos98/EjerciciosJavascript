//Ejercicios 
//1. Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. 
//Ejemplo del arreglo : [3, 5, 7, 1, 6]
function mayor(Array) {
    Array.sort((a, b) => a - b);
    return Array[Array.length - 1];
}
console.log(mayor([3, 5, 7, 1, 6]));

//2. María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema:
//Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.
function menor(elArreglo){
    elArreglo.sort((a, b) => b - a);
    return elArreglo[elArreglo.length - 1];
}
console.log(menor([-1, 3, 4, 2, 6]));

//3. Escribir una función que permita saber si un número se repite dentro de un arreglo.
/* Casos de prueba:

Caso 1: Resultado esperado: El número 5 se encuentra más de una vez
[1, 22, 5, 17, 10, 5, 40, 5]

Caso 2: Resultado esperado: El número 7 se encuentra más de una vez
[7, 41, 5, 7, 10, 13, 2]

Caso 3: Resultado esperado: No hay números repetidos
[1, 22, 5, 14, 24, 31, 27, 15, 105]*/

function repetir(myArray) {
    let repetido = false;
    myArray.forEach(arreglo =>{
        if(myArray.indexOf(arreglo) !== myArray.lastIndexOf(arreglo))
         repetido = true;
    });
    return repetido;
}
console.log(repetir([1, 22, 5, 17, 10, 5, 40, 5]));
console.log(repetir([7, 41, 5, 7, 10, 13, 2]));
console.log(repetir([1, 22, 5, 14, 24, 31, 27, 15, 105]));

//4. Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado
/*Entrada: [1, 2, 5, 14, 24, 31, 50, 105]
Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]*/
function desordenar(theArray) {
       theArray.sort(()=>{
           return Math.random() - 0.5;  
    });
        return theArray;
}
console.log(desordenar([1, 2, 5, 14, 24, 31, 50, 105]));