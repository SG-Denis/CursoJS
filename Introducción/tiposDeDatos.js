// Cadena de texto
const nombre = 'Denís'
const parrafo  = "Este es un parrafo"

// Como hacemos un array
const array = ['texto', 456, true, {propiedad: 'valor'}, [1, 2, 3]]
console.log(array)

// Como funciona un objeto (funciona parecido a un array pero puedes determinar que es cada campo)
const persona = {
    nombre: 'Denís',
    edad: 20,
    coche: { // Podemos abrir un objeto dentro de otro, como subramas para profundizar en el concepto
        marca: 'Porsche',
        modelo: 'Panamera',
        color: 'Rojo'
    
    }
}

// Podemos usar la información que queramos dentro del concepto, por ejemplo si solo queremos el modelo

console.log(persona.coche.modelo)

// Como usar funciones
function hola() {
    console.log('Hola')
}

hola()


// Tipos de variables

/* Hay diferentes tipos de variabels

    Null (deja el campo vacío)
    Undefined (aún no se le otorga el valor a la variable)

    
*/