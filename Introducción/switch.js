const usuario = {
    nombre: 'Denís',
    pais: 'España',
}

// if (usuario.pais == 'España') {
//     console.log('El usuario es Español');
// } else if (usuario.pais == 'México') {
//     console.log('El usuario es Mexicano');
// } else if (usuario.pais == 'Argentina') {
//     console.log('El usuario es Argentino');
// } else {
//     console.log('El usuario es de otro país');
// }

switch (usuario.pais) { // Está bien pero no permite condicionales
    case 'España':
        console.log('El usuario es Español');
        break;
    case 'Mexico':
        console.log('El usuario es Mexicano');
        break;
    case 'Argentina':
        console.log('El usuario es Argentino');
        break;
    default:
        console.log('El usuario es de otro país');

        break;
}