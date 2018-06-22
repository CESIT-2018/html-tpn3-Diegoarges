/*
Ejercicio 3:
Crear una funcion que retorne el primer elemento de un array. 
Si a la funcion le pasamos un segundo parametro n (entero) nos retornara los n primeros elementos.
Datos de prueba : 
console.log(primer([7, 9, 0, -2])); 
console.log(primer([],3));
console.log(primer([7, 9, 0, -2],3));
console.log(primer([7, 9, 0, -2],6));
console.log(primer([7, 9, 0, -2],-3));
Salida : 
7
[] 
[7, 9, 0] 
[7, 9, 0, -2] 
[] 
*/


function primer(array,entero) {
    let matriz=[];
    let cont=0;
    for (let i = 0; i < array.length; i++) {
        if(i<entero){
            matriz[cont++]=array[i];
        }
    }
    return matriz;
}
let arr=[7,9,0,-2];
num=1;

document.write("<p>1: " + primer(arr,num));
document.write("<p>2: " + primer([],3));
document.write("<p>3: " + primer(arr,3));
document.write("<p>4: " + primer(arr,6));
document.write("<p>5: " + primer(arr,-3));

