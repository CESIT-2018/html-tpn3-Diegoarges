/*
Dado dos arrays con valores individuales, hacer una funcion que retorne un array con la suma de cada valor individual del mismo �ndice de cada array.
Ejemplo : 
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Salida : 
[4, 5, 8, 10, 12, 13] 
*/

let array1=[1,0,2,3,4];
let array2=[3,5,6,7,8,13];

function sumaDeArrays(arr1,arr2){
    let suma=[];
    let cont=0;
    let long=0;

    if(arr1.length>arr2.length){
        long=arr1.length;
    }else{
        long=arr2.length
    }
    for (let i = 0; i < long; i++) {
        if(arr1.length<long){
            arr1.push(0);
        }else if(arr2.length<long){
            arr2.push(0);
        }
        
    }
        for (let i = 0; i < long; i++) {
       suma.push(arr1[i]+arr2[i]);
    }
    
    return suma;
}

document.write("<p>Array1: [1,0,2,3,4]");
document.write("<p>Array2: [3,5,6,7,8,13]");
document.write("<p>Suma de Arrays: [" + sumaDeArrays(array1,array2)+"]");