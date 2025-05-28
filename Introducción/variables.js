// Forma antigua de guardar varianñes
var edad = 27
console.log(edad) // Mostrar la variable en la consola

// Forma actualizada

let nombre = 'Denís' // la ventaja de hacerlo así es poder editar la variable
alert(nombre) // Aquí mostrará el nombre asignado a la variables
const correo = 'correo@correo.com' // Con este tipo de variable, jamás podremos cambiar el valor de la variable

// Ejemplo de error al cambiar una variable const
/* correo = 'correo2@correo.com' */ 

nombre='CambioDeNombre'

console.log(nombre)

// Formas de introducir variables

// 1
let telefono
let pais
let id
 
// 2
let telefono2,pais2,id2

// Le asignaremos un valor de la siguiente forma
telefono = 111111111
console.log(telefono)

// Guardar resultados dentro de variables
const resultado = 4 + 4
console.log(resultado)

const nombre1 = 'Denis'
const nombre2 = 'Mateo'
const nombreCompleto = nombre1 + nombre2

console.log(nombreCompleto)

// Las variables en JS pueden cambiar de uso (String -> int -> boolean -> object -> etc)
let miVariable = ('texto')
miVariable = 7