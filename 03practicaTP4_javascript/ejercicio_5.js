/*
Crear las siguientes funciones:
- Funcion que retornar un arrya todos los numeros pares que hay entre 1 y X
- Funcion quer retornar un array con todos los numeros impares entre 1 y X
- Funcion que retorna un array con todos los numeros primos entre 1 y X
- Funcion que retorna un array con todos los numeros no primos entre 1 y X
- Una funcion llamada integradora que recibe un numero entero X y una funcion,  
(par, impar, primo, no primo) y muestra el contenido del resultado de la funcion que le pasamos.
*/


var num=parseInt(prompt("Ingresa numero entero: "));

let nPar=function (num){
    let pares=[];
    let cont=0;
    for (let i = 0; i < num; i++) {
        if(i%2==0){ // define pares
         pares[cont++]=i;
        }
    }
    return pares;
}

let nImpar=function (num){
    let impares=[];
    let cont=0;
    for (let i = 0; i < num; i++) {
        if(i%2!=0){ // define impares
         impares[cont++]=i;
        }
    }
    return impares;
}

let nPrimos=function (num){
    let primos=[];
    
    for (let i = 1; i <= num; i++) {
        let cont=0;
        for (let j= 1; j <= i; j++) {
            if((i%j)==0){ // define primos
               cont++;
            }
        }
        if(cont==2){
            primos.push(i);
        }
    }
    return primos;
}

let nNoPrimos=function (num){
    let noprimos=[];
    
    for (let i = 1; i <= num; i++) {
        let cont=0;
        for (let j= 1; j <= i; j++) {
            if((i%j)==0){ // define NO primos
               cont++;
            }
        }
        if(cont!=2){
            noprimos.push(i);
        }
    }
    return noprimos;
}

function nIntegradora(num,Callback){ // define callback
    return Callback(num);
}

document.write("<p>Para el numero ingresado: " + num);

document.write("<p>Pares de 1 a "+num+ ": " + nPar(num));
document.write("<p>Impares de 1 a "+num+ ": " + nImpar(num));
document.write("<p>Primos de 1 a "+num+ ": "  + nPrimos(num));
document.write("<p>No Primos de 1 a "+num+ ": "  + nNoPrimos(num));
document.write("<p>Integradora (con nNoPrimos): de 1 a "+num +": "+ nIntegradora(num,nNoPrimos));

