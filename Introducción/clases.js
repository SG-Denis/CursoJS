// Estructura de una clase 

class Usuario {
    tipo = 'usuario';

    constructor(nombre, apellido) {
        this.nombre = nombre; // Propiedad de instancia
        this.apellido = apellido; // Propiedad de instancia
        
        console.log('Nuevo usuario registrado');
    }

    obtenerNombreCompleto() {
        console.log('Obteniendo datos...');   
        return `${this.nombre} ${this.apellido}`; // Método de instancia que retorna el nombre completo
    }
}

const usuario = new Usuario('Denís', 'Guerrero'); // Crea una nueva instancia de la clase Usuario
console.log(usuario.obtenerNombreCompleto()); 
 const usuario2 = new Usuario('María', 'López'); // Crea otra instancia de la clase Usuario
console.log(usuario2.obtenerNombreCompleto()); // const usuario2 = new Usuario('María', 'López'); // Crea otra instancia de la clase Usuario
