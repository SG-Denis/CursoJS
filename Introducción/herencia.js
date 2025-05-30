class Usuario {
  constructor(usuario, password) {
    this.usuario = usuario;
    this.password = password;
  }

  obtenerPosts() {
    const posts = ["Post 1", "Post 2"];
  }
}

class Moderador extends Usuario {
  constructor(usuario, password, permisos) {
    super(usuario, password)
    this.permisos = permisos;
  }

  borrarPost(id) {
    if(this.permisos.includes('borrar')) {
      console.log(`El post con el ${id} ha sido creado`);
    } else {
      console.log('No tinees los permisos para borrar posts');
    }
  }
  
}

const usuario = new Usuario("Denís", "123");
console.log(usuario.obtenerPosts()); // Llama al método obtenerPosts() de la instancia usuario

const usuario2 = new Moderador('Arturo', '456', ['borrar', 'editar']);
console.log(usuario2.obtenerPosts);
console.log(usuario2.permisos);
usuario2.borrarPost(7)