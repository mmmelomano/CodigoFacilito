/*hay dos tipos de alcance
scope global - hace referencia a lo que se puede usar en cualquier parte del codigo
             - las modificaciones que apliquen sobre ellas afectan su valor en cualquier lado
scope local  - 
*/

/* ejemplo scope glogal

# Variable global
nombre = "Juan"

def saludar():
    print("Hola, " + nombre)

saludar()  # Imprime "Hola, Juan"

ejemplo scope local
def saludar():
    # Variable local
    nombre = "María"
    print("Hola, " + nombre)

saludar()  # Imprime "Hola, María"
print(nombre)  # Generará un error, la variable no está definida fuera de la función

*/
/*
var nombre = "chitarita";

function decirHola(){
    var nombre = "minimal";
    console.log("hola "+ nombre);
}

decirHola();

console.log(nombre);
*/

/*ejemplo usar variables usando un valor son la palabra var let const (no es recomentdable) automaticamente se asigna al scope global

function decirHola(){
    nombre = "Chitara";
    console.log("hola "+ nombre);
}

decirHola();
console.log(nombre);*/

function decirHola(){
    let nombre = "Chitara";
    console.log("hola "+ nombre);
}

decirHola();
console.log(nombre);
    
    




