//funcion pura: no produce efectos secundarios

let edades = [20]; //aun no vemos arreglos

function modificador(edades){
    let copia = [...edades]; // genero una copia
    copia[0] = 25 // modifico la copia y no el valor original
    return copia; // para comunicar los cambios con el exterior es preferible
}

console.log(edades);
modificador(edades);
console.log(edades);