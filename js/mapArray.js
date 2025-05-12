const frutas = ["pera", "manzana", "melocoton", "sandía"];

//.map crea recorre un array y crea uno nuevo con los elementos del array modificados
let frutas2 = frutas.map(fruta => {
    return`<p>${fruta.toUpperCase}</p>`;
})
console.log(frutas2);

const precios = [2, 4, 6, 7];

let precios2 = precios.map(precio => {
    return precio * 2;
})

/*
* .map se utiliza para crear un array a partir de otro cuando queremos modificar todos los elementos del original
*/

/* .join combinar todos los elementos de un array
*/

console.log(frutas.join(''));

const numeros =[2, 4, 6, 7,];

let suma = 0;
for(let i = 0 ; i < numeros.lenght ; i++){

    suma = suma + numeros[i];
}

//.reduce(funcion, 0)
//por cad elemento del array numeros, guarda en la variable la suma del elemento
//va guardando la suma de todos los elementos
//el segundo parametro 0 es el valor inicial
let total = numeros.reduce((suma, item) => suma + item, 0)
let totalMultiplicacion = numeros.reduce((multiplicacion, item) => multiplicacion * item, 1);

//.findIndex
//busca en el array un elemento que cumpla con las condiciones especificadeas en la función
//Devuelve la posiciom en el arreay del primer elemento que cumpla con dichas condiciones
//si no encuentra ninguno que cumpla con las condiciones que devuelve

const frutas3 = ["pera", "manzana"]
const frutaBuscada = "manzana";

const indice = frutas3.findIndex(item => item === frutaBuscada)

let(indice2 =  )