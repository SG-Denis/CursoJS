const usuario = {
    nombre: "Juan",
    edad: 30,
    amigos: ["Pedro", "Ana", "Luis"],
    saludo: () => {
        console.log('Hola!');
    }
}

// Métodos propios del objeto
usuario.saludo(); // Llama al método saludo del objeto usuario

// Object.keys()
const resultados = Object.keys(usuario);
console.log(resultados); // ['nombre', 'edad', 'amigos', 'saludo'] 

// Object.values() 
const resultados2 = Object
console.log(resultados2); // ['Juan', 30, ['Pedro', 'Ana', 'Luis']

// Object.entries()
const resultados3 = Object.entries(usuario);
console.log(resultados3);

console.log(`El objeto tiene ${resultado.length} propiedades.`);