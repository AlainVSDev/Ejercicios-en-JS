//////////////////////////////////////////////////////////////
//////////E J E R C I C I O  1///////////////////////////////
////////////////////////////////////////////////////////////


// Escribir una funcion que regrese la cantidad de valores true que hay en un array
/* 
countTrue([true, false, false, true, false]) ➞ 2
countTrue([false, false, false, false]) ➞ 0
countTrue([]) ➞ 0
Regresar 0 si el array es vacio
*/


const arr = [false, false, false, false]
const resultado = arr.reduce((prev, cur) => ((prev[cur] = prev[cur] + true || true), prev), {});
if (resultado == 0) {
return 0;
}
//console.log(resultado[true]);


//////////////////////////////////////////////////////////////
//////////E J E R C I C I O  2///////////////////////////////
////////////////////////////////////////////////////////////

//console.log(resultado[true]);

// Escribir una funcion para encontrar el mayor comun divisor de 2 numeros positivos enteros
// Usar recursion

function mcd(x, y) {
    if (typeof x != 'number');
    
    if (typeof y != 'number');

    x = Math.abs(x);
    y = Math.abs(y);
    let z;

    while(y) {
        z = y;
        y = x % y;
        x = z;
    }

    return x;
}
//console.log(mcd(78, 125));


//////////////////////////////////////////////////////////////
//////////E J E R C I C I O  3///////////////////////////////
////////////////////////////////////////////////////////////


// Encontrar los primeros n elementos de la serie fibonacci
// Usar recursion

const fibonacci = n => {
    if (n < 2) return n
    return fibonacci(n - 2) + fibonacci(n - 1)
}
//console.log(fibonacci(5));
//////////////////////////////////////////////////////////////
//////////E J E R C I C I O  4///////////////////////////////
////////////////////////////////////////////////////////////

/*Crear el sistema de calendario para verificar si el dia actual, junto a la hora es considerada dia y horario laboral estandar
    -9am-6pm es horario laboral
    -new Date().getDay() resulta en el dia de la semana del 0-6
Funcion businessHours
Parametros
    -hour <----Hora actual
Return
    -true/false si la hora actual es horario laboral
Funcion businessDay
Parametros
    -day
Return
    -true/false si el dia actual es laboral 
Verificacion de la resolucion de ambas funciones debe mostrar un mensaje.*/

//////////////////////////////////////////////////////////////
//////////E J E R C I C I O  5///////////////////////////////
////////////////////////////////////////////////////////////

// Encontrar el numero n de una figura piramidal triangular (tetrahedron)
// (nivel) -> cantidad de numeritos

//////////////////////////////////////////////////////////////
//////////E J E R C I C I O  6///////////////////////////////
////////////////////////////////////////////////////////////

// Crear una funcion que tome el nombre de un pais y su area
// (nombre, a)
// Debe regresar la proporcion del area del pais en acorde a el area de tierra en el planeta
//('Russia', 17098242) -> Russia is 11.48%
// ("USA", 9372610) -> "USA is 6.29%

const aTierra = 148940000
const aPais = (pais, area) => {
    total = (area * 100 / aTierra);
    return pais + ' tiene una proporcion de acuerdo al area de la tierra de: ' + total + '%';
}

// console.log(aPais("Russia", 17098242));

//////////////////////////////////////////////////////////////
//////////E J E R C I C I O  7///////////////////////////////
////////////////////////////////////////////////////////////

// Escribir una funcion que retorne 0 si el input es 1 y 1 si el input es 0
// No se pueden utilizar condicionales, ternarios, negaciones ni operatores bit

const entrada = (n) => {
    return 1 - n;
}

//console.log(entrada(0))

//////////////////////////////////////////////////////////////
//////////E J E R C I C I O  8///////////////////////////////
////////////////////////////////////////////////////////////

// Messenger bzzz
// (0 ) n
// Si no hay nadie -> "No hay nadie en linea"
// Si hay 1 persona -> "user1 esta en linea"
// Si hay 2 personas -> "user1 y user2 estan en linea"
// Si hay n>2 personas, "user1 y n-1 mas estan en linea"


const bzzz = (m) => {
    switch (m) {
        case 0:
            res = "No hay nadie en línea"
            break;
        case 1:
            res = "user1 está en línea"
            break;
        case 2:
            res = "user1 y user2 están en línea"
            break;
        default:
            res = "user1 y " + (m) + " Usuarios mas estan en linea";

    }
    return res;
}

console.log(bzzz(9999))