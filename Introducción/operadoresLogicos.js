/* Operadores Lógicos 

    && AND
    || OR
    ! NOT

*/

const nombre = 'Denís'
edad = 17
const tieneEntrada = ture
const tienePermiso = true // por ejemplo de sus padres

/* EJEMPLO #1 - && - AND

Es una forma rápida de ver si es mayor de edad, pero se puede utilizar para más cosas. Con el "&&" agregamos otra condición, en este caso, tiene que tener entrada

const permitirAcceso = edad >= 18 && tieneEntrada  
console.log('Acceso permitido al concierto:' + permitirAcceso)

*/

/* EJEMPLO #2 - ||- OR

Básicamente preguntamos lo mismo de antes pero el "||" funciona como un OR de forma que tiene entrada y es mayor de edad O tiene permiso y entrada, aún siendo menor

const permitirAcceso = (edad >= 18 && tieneEntrada) || (tienePermiso && tieneEntrada) 
console.log('Acceso permitido al concierto:' + permitirAcceso)

*/

// EJEMPLO #3 - ! - NOT 

const variable = false
console.log(!variable)

// Es una lógica inversa, antes haciamos "Si tiene entrada..." y aquí lo hacemos al revés "Si no tiene entrada..."

!tieneEntrada // Si no tiene entrada...
!tienePermiso // Si no tiene permiso...