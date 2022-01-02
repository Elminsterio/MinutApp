const numerosLetras = require('jc_numeros_letras');

function numerosLetrasDecimales(numero) {

   isNaN(numero) ? numero = numero.split('.') : numero = String(numero).split('.');
   
   (numero[1] === '00') || (numero[1] === '0') ?  
   numero = numerosLetras.numeros_letras(Number(numero[0])) + 'EUROS' :
   numero = numerosLetras.numeros_letras(Number(numero[0])) + 'EUROS CON ' + numerosLetras.numeros_letras(Number(numero[1])) + 'CÉNTIMOS';
    
    return numero;

}

function formatoNumero(numero) {

    let numeroArr = String(numero).split('.');

    if(numeroArr[0].length > 3 && numeroArr[0].length <= 6) {

        numeroArr[0] = numeroArr[0].slice(0, -3) + '.' + numeroArr[0].slice(-3);


    } else if (numeroArr[0].length > 6 && numeroArr[0].length <= 9) {

        numeroArr[0] = numeroArr[0].slice(0, -6) + '.' + numeroArr[0].slice(-6, -3) + '.' + numeroArr[0].slice(-3);

    }

    return numeroArr.join(',')

}

function mesLetra(mes) {

    mes = Number(mes);

    let arrMes = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre' , 'noviembre' ,'diciembre'];

    return arrMes[mes];

}

module.exports = {
    numerosLetrasDecimales,
    formatoNumero,
    mesLetra
};