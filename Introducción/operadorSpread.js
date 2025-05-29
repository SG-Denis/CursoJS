// Operador de tipo spread
const frutas = ['Manzana', 'Pera', 'Naranja', 'Melon'];
const comidasFavoritas = ['Pizza', 'Hamburguesa', 'Tacos', ...frutas]; // Agrega el array frutas al final del array comidasFavoritas
console.log(comidasFavoritas);

const datosLogin = {
    correo: 'correo@correo.com',
    password: '123'
}

const usuario = {
    nombre: 'Denís',
    ...datosLogin, // Utiliza el operador spread para agregar las propiedades de datosLogin al objeto usuario
    edad: 20,
};

console.log(usuario);

// Ejemplo de parámetro Rest

const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales);
}

registrarUsuario('Denís', 'correo@correo.com'); // Llama a la función con dos parámetros
registrarUsuario('Mateo', 'mateo@correo.com', 28, 'España'); // Llama a la función con más de dos parámetros, pero solo se usan los primeros dos


// Ejemplo de destructuración de objetos
const amigos = ['Mateo', 'Mauro', 'Alejo'];
// const primerAmigo = amigos[0]; // Opción tradicional para acceder al primer elemento del array
// const segundoAmigo = amigos[1]; // Funciona pero es un poco tedioso si hay muchos elementos

const [] = amigos; // Desestructuración de arrays
const [primerAmigo, segundoAmigo, tercerAmigo] = amigos; // Desestructuración de arrays para acceder a los elementos directamente

console.log(amigos); // Muestra el array completo

const persona = {
    nombre: 'Denís',
    edad: 20,
    pais: 'España'
};

const {nombre, pais} = persona; // Desestructuración de objetos para acceder a las propiedades directamente
console.log(nombre, pais); // Muestra las propiedades desestructuradas

const mostrarEdad = (nombre, edad) => {
    console.log(`${nombre} tiene ${edad} años`);
};

mostrarEdad(persona); 