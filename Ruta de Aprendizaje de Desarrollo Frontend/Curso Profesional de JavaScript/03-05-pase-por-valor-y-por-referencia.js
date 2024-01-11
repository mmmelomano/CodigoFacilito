let edad = 20;

function modificador(edad){
    edad = 25;
    console.log("dentro de la funcion: "+ edad);
}

console.log(edad);
modificador(edad);
console.log(edad);

/*
let edades = [20];

function modificador(edades){
    edades[0] = 25;
    console.log("dentro de la funcion: "+ edades);
}

console.log(edades);
modificador(edades);

console.log(edades);
*/