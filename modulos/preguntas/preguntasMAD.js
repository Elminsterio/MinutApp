
const auxiliarPreguntas = require('../utiles/auxiliarPreguntas');
const honorariosMAD = require('../honorarios/honorariosMAD');
const honorariosTextoMAD = require('../textoHonorarios/honorariosTextoMAD')

async function preguntasCriterioMad() {

    console.log('Por favor, indica la jurisdicción:\n');
    console.log('(1) Civil');                 
    //console.log('(2) Penal');                 
    //console.log('(3) Contencioso-administrativa');                 
    //console.log('(4) Laboral');                 
    //console.log('(5) Constitucional y comunitario');                 

    let liquidacion;
    let num = await auxiliarPreguntas.ejecutorPregunta('\n', 'Por favor, selecciona un número dentro del rango especificado.', 'seleccion', 1);

    switch ( Number(num) ) {

        case 1:

            liquidacion = await preguntasCivil();

        break;

    }

    return liquidacion;

}

async function preguntasCivil() {

    console.log('Por favor, indica el tipo de procedimiento:\n');

    console.log('(1) Ordinario');                 
    console.log('(2) Verbal');                 
    console.log('(3) Recurso de reposición, revisión y aclaración');                 
    console.log('(4) Recurso de Apelación');                 
    console.log('(5) Recurso extraordinario de infracción procesal');
    console.log('(6) Recurso de casación');
    console.log('(7) Ejecución dineraria');
    console.log('(8) Incidentes y reclamación de honorarios');

    let liquidacion = {};
    let inadmitido;
    let vista;
    let prueba;
    let numero;

    let num = await auxiliarPreguntas.ejecutorPregunta('\n', 'Por favor, selecciona un criterio dentro del rango especificado.', 'seleccion', 8);
    liquidacion.cuantia = await auxiliarPreguntas.ejecutorPregunta('Por favor introduzca la cuantía del procedimiento: ', 'Por favor introduzca los valores dentro del rango especificado.', 'cuantia');


    switch ( Number(num) ) {

        case 1:
            
            let AP = await auxiliarPreguntas.ejecutorPregunta('Por favor, especifique si hubo Audiencia Previa. sí/no', 'Por favor introduzca sí o no.', 'si/no');
            let JO = await auxiliarPreguntas.ejecutorPregunta('Por favor, especifique si hubo Juicio Ordinario. sí/no', 'Por favor introduzca sí o no.', 'si/no');

            liquidacion.criterio = honorariosTextoMAD.ordinario;
            liquidacion.resultado = await honorariosMAD.getORD(AP, JO, liquidacion.cuantia);

        break;
        case 2:

            vista = await auxiliarPreguntas.ejecutorPregunta('Por favor, especifique si hubo vista. sí/no', 'Por favor introduzca sí o no.', 'si/no');
            
            liquidacion.criterio = honorariosTextoMAD.verbal;
            liquidacion.resultado = await honorariosMAD.getVER(vista, liquidacion.cuantia);

        break;
        case 3:

            liquidacion.criterio = honorariosTextoMAD.repRevAcl;
            liquidacion.resultado = await honorariosMAD.getRecursoRepRevAcl(liquidacion.cuantia);

        break;
        case 4:

            prueba = await auxiliarPreguntas.ejecutorPregunta('Por favor, especifique si hubo práctica de prueba. sí/no', 'Por favor introduzca sí o no.', 'si/no');
            vista = await auxiliarPreguntas.ejecutorPregunta('Por favor, especifique si hubo vista. sí/no', 'Por favor introduzca sí o no.', 'si/no');

            liquidacion.criterio = honorariosTextoMAD.apelacion;
            liquidacion.resultado = await honorariosMAD.getRecursoApel(prueba, vista, liquidacion.cuantia);

        break;
        case 5:

            inadmitido = await auxiliarPreguntas.ejecutorPregunta('Por favor, especifique si el recurso fue admitido. sí/no', 'Por favor introduzca sí o no.', 'si/no');
            prueba = await auxiliarPreguntas.ejecutorPregunta('Por favor, especifique si hubo práctica de prueba. sí/no', 'Por favor introduzca sí o no.', 'si/no');
            vista = await auxiliarPreguntas.ejecutorPregunta('Por favor, especifique si hubo vista. sí/no', 'Por favor introduzca sí o no.', 'si/no');

            liquidacion.criterio = honorariosTextoMAD.extraIntracProc;
            liquidacion.resultado = await honorariosMAD.getRecursoExtraInfracProces(inadmitido, prueba, vista, liquidacion.cuantia);

        break;
        case 6:

            inadmitido = await auxiliarPreguntas.ejecutorPregunta('Por favor, especifique si el recurso fue admitido. sí/no', 'Por favor introduzca sí o no.', 'si/no');
            prueba = await auxiliarPreguntas.ejecutorPregunta('Por favor, especifique si hubo práctica de prueba. sí/no', 'Por favor introduzca sí o no.', 'si/no');
            vista = await auxiliarPreguntas.ejecutorPregunta('Por favor, especifique si hubo vista. sí/no', 'Por favor introduzca sí o no.', 'si/no');

            liquidacion.criterio = honorariosTextoMAD.casacion;
            liquidacion.resultado = await honorariosMAD.getRecursoCasacion(inadmitido, prueba, vista, liquidacion.cuantia);

        break;
        case 7:

            console.log('Por favor, indica el criterio concreto:\n');

            console.log('(1) Cuestiones incidentales');                 
            console.log('(2) Impugnación de honorarios por excesivos');                 
            console.log('(3) Impugnación de honorarios por indebidos'); 
            console.log('(4) Procedimiento de Cuenta de Abogado');                 

            numero = await auxiliarPreguntas.ejecutorPregunta('\n', 'Por favor, selecciona el criterio dentro del rango especificado.', 'seleccion', 4);

            switch( Number(numero) ) {

                case 1:

                    vista = await auxiliarPreguntas.ejecutorPregunta('¿Se celebró vista? sí/no', 'Por favor, especifique sí o no.', 'si/no');

                    liquidacion.criterio = honorariosTextoMAD.incidenteHonorariosAbogado.incidenteA;
                    liquidacion.resultado = await honorariosMAD.getIncidentes(1, vista, cuantia);

                break;
                case 2:

                    liquidacion.criterio = honorariosTextoMAD.incidenteHonorariosAbogado.incidenteB;
                    liquidacion.resultado = await honorariosMAD.getIncidentes(2, false, cuantia);

                break;
                case 3:

                    liquidacion.criterio = honorariosTextoMAD.incidenteHonorariosAbogado.incidenteC;
                    liquidacion.resultado = await honorariosMAD.getIncidentes(3, false, cuantia);

                break;
                case 4:

                    vista = await auxiliarPreguntas.ejecutorPregunta('¿Se impugnó por el cliente los honorarios? sí/no', 'Por favor, especifique sí o no.', 'si/no');

                    liquidacion.criterio = honorariosTextoMAD.incidenteHonorariosAbogado.incidenteD;
                    liquidacion.resultado = await honorariosMAD.getIncidentes(4, vista, cuantia);

                break;

            }

        break;
        case 8:

            console.log('Por favor, indica el criterio concreto:\n');

            console.log('Criterio 15.a).1');                 
            console.log('Criterio 15.a).2');                 
            console.log('Criterio 15.a).3'); 
            console.log('Criterio 15.a).4');                 

            numero = await auxiliarPreguntas.ejecutorPregunta('\n', 'Por favor, selecciona el criterio dentro del rango especificado.', 'seleccion', 4);

            switch( Number(numero) ) {

                case 1:

                    liquidacion.criterio = honorariosTextoMAD.ejeDiner.ejeDiner1;
                    liquidacion.resultado = await honorariosMAD.getEjeDineraria(1, false, liquidacion.cuantia);

                break;
                case 2:
                
                    vista = await auxiliarPreguntas.ejecutorPregunta('¿Se embargaron únicamente cuentas corrientes, salarios, pensiones, retenciones de Hacienda, etc? sí/no', 'Por favor, especifique sí o no.', 'si/no');

                    liquidacion.criterio = honorariosTextoMAD.ejeDiner.ejeDiner2;
                    liquidacion.resultado = await honorariosMAD.getEjeDineraria(2, vista, liquidacion.cuantia);

                break;
                case 3:

                    liquidacion.criterio = honorariosTextoMAD.ejeDiner.ejeDiner3;
                    liquidacion.resultado = await honorariosMAD.getEjeDineraria(3, false, liquidacion.cuantia);

                break;
                case 4:

                    let oposicion = await auxiliarPreguntas.ejecutorPregunta('¿Se opuso la parte contraria? sí/no', 'Por favor, especifique sí o no.', 'si/no');

                    liquidacion.criterio = honorariosTextoMAD.ejeDiner.ejeDiner4;
                    liquidacion.resultado = await honorariosMAD.getEjeDineraria(4, oposicion, liquidacion.cuantia);

                break;

            }




        break;

    }

    return liquidacion;

}


module.exports = preguntasCriterioMad;