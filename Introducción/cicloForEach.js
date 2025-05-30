// // Ciclo forEach 

// const amigos = ['Juan', 'Ana', 'Pedro', 'Luisa'];
// amigos.forEach((amigo, index) => {
//     console.log(`El amigo #${index} es: ${amigo}`);
// })

// // Ciclo for in
// const persona = {
//     nombre: 'Juan',
//     edad: 30,
//     ciudad: 'Madrid'
// };

// for(propiedad in persona) {
//     persona[propiedad] ='';
// }
// console.log(persona); // Muestra el objeto persona con todas las propiedades vacías

// Ciclo for of 
const etiquetas = document.head.children;
// console.log(etiquetas); // Muestra todas las etiquetas del head

for(elemento of etiquetas) {
    console.log(elemento); // Muestra cada elemento del head
}

[...etiquetas].forEach((elemento) => {
    console.log(elemento); // Muestra cada elemento del head
});
// Ejemplo de ciclo forEach ya que solo funciona con arrays