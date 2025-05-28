// SE DECLARAN FUERA DE LA FUNCION Y SE UTILIZAN DENTRO

var nombre = 'Denís'
console.log(nombre);

const saludo = () => {
    console.log('Hola ' + nombre);

    nombre = 'Arturo'
    console.log('El nuevo nombre es: ' + nombre);
}
saludo()