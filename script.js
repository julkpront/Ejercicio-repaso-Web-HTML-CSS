//10. Sumar todos los números de un array:
// Escribe una función que tome un array de números y
// devuelva la suma de todos sus elementos.
const numeros = [];
let total = 0;
function sumararray (array) {
   
   for (let i = 0; i < array.length; i++) {
    total += array[i];
    
   }
   return total;
}
console.log(sumararray(numeros));




//19. Contar palabras en una cadena:
// Escribe una función que cuente cuántas palabras hay en una cadena.
/*let frase = ""; 
function cuentapalabras (texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
         
        }
        else { (texto[i] === " ")
            contador++;

        }
    }
    return contador;
}                                                       
console.log(cuentapalabras("Hola, mi nombre es Julián"));
*/
function cuentapalabrasInfalible(texto) {
    let contador = 0;
    let enPalabra = false; 

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== " ") {
            
            if (enPalabra === false) {
                contador++;       // ¡Encontramos el inicio de una palabra real!
                enPalabra = true;  // Encendemos el interruptor para no volver a contar las letras que siguen
            }
        } else {
            enPalabra = false;
        }
    }

    return contador;
}
console.log("Cuenta palabras: "+cuentapalabrasInfalible( " pal a bras con es pa cios "));
//20.
// Comprobar si todos los elementos de un array son iguales:
// Dado un array, verifica si todos sus elementos son iguales o no.

let elementos = ["pizarra", "leche", "azucar", "huevos", "leche", "pan", "azucar"];
let todosiguales = true;

const primerelemento = elementos;

for (let i = 0; i < elementos.length; i++) {
    if (elementos[i] !== primerelemento) {
        todosiguales = false;
        break;
    }
    
}
console.log("¿Son todos iguales?", todosiguales);

const primerelemento2 = elementos;
for (let i = 0; i < elementos.length || !todosiguales; i++) {
    if (elementos[i] !== primerelemento) {
        todosiguales = false;
    }
    
}
console.log("¿Son todos iguales? (V2)", todosiguales);