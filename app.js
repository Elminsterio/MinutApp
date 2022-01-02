
const inicioPreguntas = require('./modulos/preguntas/preguntasGeneral');
const generarEscrito = require('./modulos/plantilla');

async function excutionCostas() {

    console.log('\n======================= Calculadora de Minutas =============================\n');
    console.log('Esta aplicación realiza un cálculo esrictamente sobre los criterios ');
    console.log('de cada Colegio de Abogados, debiendo tener en cuenta el usuario de la');
    console.log('aplicación, la jurisprudencia en cada materia concreta a la hora de moderar');
    console.log('la minuta a los efectos de evitar impugnaciones.');
    console.log('\n============================================================================\n');

    console.log('Nota: En algunos casos puede que no esté activa la API de INE y no se podrá');
    console.log('calcular el valor de referencia actualizado con el IPC, en esos casos deberá');
    console.log('actualizarse de forma manual.\n');
    console.log('Pruebe a ejecutar de nuevo la aplicación en esos casos \n\n');

    await inicioPreguntas().then((result) => {

        generarEscrito(result);
        
    }).catch((err) => {
        console.log(err);
    });
    
}

excutionCostas();