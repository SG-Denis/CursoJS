class Usuario {
    constructor (nombre, correo) {
        this.nombre = nombre;
        this.correo = correo;
    }

    static borrarUsuario(id_usuario) {
        console.log(`El usuario con el id: ${id_usuario} ha sido borrado de la bd `);
    }

    static registrados = 1000;
}

// const usuario = new Usuario ('Carlos', 'correo@correo.com')
// usuario.borrarUsuario(1);

    usuario.borrarUsuario(1);
    console.log(Usuario.registrados);

// 7 