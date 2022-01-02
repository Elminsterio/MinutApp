const auxiliarPreguntas = require('../utiles/auxiliarPreguntas');
const preguntasCriterioMad = require('./preguntasMAD');

async function inicioPreguntas() {

  console.log('Introduzca el número correspondiente a los criterios con los que se va a minutar y pulse enter:\n');
  console.log('1. Criterios Ilustre Colegio de Abogados de Madrid.\n');
  //console.log('2. Criterios Ilustre Colegio de Abogados de Valencia.');

  let criterios = await auxiliarPreguntas.ejecutorPregunta('', 'Por favor introduzca los valores dentro del rango especificado', 'seleccion', 1);
  let liquidacion;

  switch( Number(criterios) ) {

    case 1:

      liquidacion = await preguntasCriterioMad();

    break;

  }

  liquidacion.nombreCompleto = await auxiliarPreguntas.ejecutorPregunta('Por favor, introduzca el nombre completo del letrado:', 'Los nombres no pueden contener números', 'nombre');
  liquidacion.NIF = await auxiliarPreguntas.ejecutorPregunta('Por favor, introduzca el NIF del letrado:', 'El NIF no es válido, introdúzcalo de nuevo', 'NIF');
  liquidacion.expediente = await auxiliarPreguntas.ejecutorPregunta('Por favor, introduzca el número de expediente:', 'El número de expediente debe ser mayor que 0 y no contener letras ni carácteres especiales', 'expediente');

  auxiliarPreguntas.cerrar();
  
  return liquidacion;

}

module.exports = inicioPreguntas;
