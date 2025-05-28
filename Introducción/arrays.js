const array = ['Texto', 456.10, false, {propiedad: 'valor'}, [1,2,3]]
console.log(array)

const amigos = ['Mateo', 'Alejo', 'Mauro']
console.log(amigos[1]) // Seleccionamos la posición exacta del array, tener en cuenta que se empieza desde la posición 0 (0 -> mateo, 1 -> Alejo, 2 -> Mauro)

// Forma inpráctica de añadir parámetros al array
const colores = []
colores[0] = 'rojo' // Le damos el valor desde fuera del array
colores[1] = 'verde'
colores[3] = 'azul' // Se pueden saltar valores aunque no es recomendable
colores[3] = 'amarillo' // Se pueden sobreescribir valores

console.log(colores) // muestra los colores
console.log('El array colores tiene: ' + colores.length + 'colores') // muestra cuantos hay

// De esta forma siempre introduces los parámtros al final del array
colores.push('Blanco')
console.log(colores)