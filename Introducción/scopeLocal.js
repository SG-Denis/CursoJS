// SE DECLARAN DENTRO DE LA FUNCIÓN

var numero = 1

var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length

    console.log(`${nombre} tiene ${numero} número de letras`); 

    var funcionAnidada = () => {
        console.log(numero);
    }
    funcionAnidada()
}
obtenerNumeroLetras('Denís')
