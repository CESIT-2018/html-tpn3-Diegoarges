/*Ejercicio 1:
Crear una funcion que acepta una oracion de tipo string como parametro y busca  la palabra que tiene mayor longitud.
Ejemplo entrada: 'El desarrollo Web es entretenido' 
Salida: 'entretenido' 
*/

var iOracion=prompt("Ingresa oracion: ");
document.write("<p>Oracion: "+ iOracion +"</p>");

function buscaPalabraMasLarga(oracion) {
    palabra_mas_larga = ""
    palabras = oracion.replace(",", " ").split(" "); //replace usado para eliminar "," 
    palabras.forEach(function(palabra){
    if (palabra.length > palabra_mas_larga.length){
         palabra_mas_larga = palabra
     };
    });
    return palabra_mas_larga 
  };
  
  //alert("Palabra más larga: " + buscaPalabraMasLarga("El desarrollo Web es entretenido"));
  document.write("<p>Palabra mas larga: " + buscaPalabraMasLarga(iOracion)+"</p>");