// Ejemplo de diferencia entre objeto y array

// La principal diferencia es que en los arrays no podemos mostrar que tipo de informacion introducimos
const arrayPersona = ['Denís', 27, 'correo@correo.com', true, true]

// Ejemplo de objetos y como mostramos que es cada información
const persona = {
    nombre: 'Denís',
    correo: 'correo@correo.com',
    suscripciones: {
        web: true,
        correo: true
    },
    coloresFavoritos: ['Negro', 'Rojo'],
    saludo: function () {
        alert('Hola!')
    },

}

/* Descomentad para probar, es para que el console.log no salga lleno de cosas

Podemos ver la información que queramos para cerrar nuestro parámetro de búsqueda

// Dos formas distintas de hacerlos
console.log(persona.nombre)
console.log(persona['edad'])

// De esta segunda forma se puede atribuir una variable a otra para hacer una búsqueda directa
const variable = 'correo'
console.log(persona[variable])

const variable = 'suscripciones'
console.log(persona.suscripciones.correo)

*/

// Si hay algun parámetro que aún no existe, de esta misma forma lo podemos crear y sobreescribir

persona.pais = 'España'
persona.pais = 'México'

console.log(persona.pais)

// Para acceder a un método lo único que tenemos que hacer es añadir el paréntesis
persona.saludo()