/*function saludar(apellido,nombre=""){
    console.log(nombre,apellido);
}

saludar("hernandez");*/

function sumaTodos(){
    let suma = 0;
    for (let i = 0;i <arguments.length; i++ ) { suma += arguments[i]}
    console.log(suma);
}
sumaTodos(1,2,3,4);