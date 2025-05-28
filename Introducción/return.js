// EJemplo #1 - Primera forma de hacer un return

// const operacion = (tipo, numero1, numero2) => {
//     let resultado

//     if (tipo == 'suma') {
//         resultado = numero1 + numero2 
//     } else if (tipo == 'resta') {
//         resultado = numero1 - numero2 
//     }

//     return resultado;
// };


// EJemplo #2 - Segunda forma de hacer un return

const operacion = (tipo, numero1, numero2) => {
    let resultado

    if (tipo == 'suma') {
        return numero1 + numero2 
    } else if (tipo == 'resta') {
        return numero1 - numero2 
    }

    return resultado;
};

const miVariable = operacion('suma', 100, 11)
console.log(miVariable);






