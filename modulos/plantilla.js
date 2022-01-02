const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');
const utiles = require('./utiles/calculos')

const fs = require('fs');
const path = require('path');

// The error object contains additional information when logged with JSON.stringify (it contains a properties object containing all suberrors).
function replaceErrors(key, value) {
    if (value instanceof Error) {
        return Object.getOwnPropertyNames(value).reduce(function(error, key2) {
            error[key2] = value[key2];
            return error;
        }, {});
    }
    return value;
}


function errorHandler(error) {

    console.log(JSON.stringify({error: error}, replaceErrors));

    if (error.properties && error.properties.errors instanceof Array) {
        const errorMessages = error.properties.errors.map(function (error2) {
            return error2.properties.explanation;
        }).join("\n");
        console.log('errorMessages', errorMessages);
        // errorMessages is a humanly readable message looking like this:
        // 'The tag beginning with "foobar" is unopened'
    }
    throw error;
}

function generarEscrito(objeto) {

    // Load the docx file as binary content
    let content = fs
        .readFileSync(path.join(__dirname, '../assets/minuta.docx'), 'binary');

    let zip = new PizZip(content);
    let doc;
    try {
        doc = new Docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
    } catch(error) {
        // Catch compilation errors (errors caused by the compilation of the template: misplaced tags)
        errorHandler(error);
    }

    // Preestablece las variables

    let { cuantia, criterio, resultado, nombreCompleto, NIF, expediente } = objeto;

    let cantidad = Number(resultado).toFixed(2);
    let fecha = new Date();
    let IVA = (resultado * 0.21).toFixed(2);
    let cantidadIVA = (Number(resultado) + Number(IVA)).toFixed(2);
    let letrasResultado = utiles.numerosLetrasDecimales(cantidadIVA);
    let letrasCuantia = utiles.numerosLetrasDecimales(Number(cuantia).toFixed(2));

    // set the templateVariables

    doc.setData({

        cantidad: utiles.formatoNumero(cantidad),
        letrasResultado,
        letrasCuantia,
        IVA: utiles.formatoNumero(IVA),
        cantidadIVA: utiles.formatoNumero(cantidadIVA),
        criterio,
        cuantia: utiles.formatoNumero(cuantia),
        fechaHoy: `${fecha.getDate()} de ${utiles.mesLetra(fecha.getMonth())} de ${fecha.getFullYear()}`,
        nombreCompleto,
        NIF

    });

    try {
        // render the document 
        doc.render()
    }
    catch (error) {
        // Catch rendering errors 
        errorHandler(error);
    }

    let buf = doc.getZip()
                .generate({type: 'nodebuffer'});
    
    if (!fs.existsSync(path.join(process.cwd(), `./expedientes`))) {
      
        fs.mkdirSync(path.join(process.cwd(), `./expedientes`));
                  
    }

    if (!fs.existsSync(path.join(process.cwd(), `./expedientes/${expediente}`))) {
      
        fs.mkdirSync(path.join(process.cwd(), `./expedientes/${expediente}`));
                  
    }

    // buf is a nodejs buffer, you can either write it to a file or do anything else with it.
    fs.writeFileSync(path.join(process.cwd() + `/expedientes/${expediente}`, `Minuta ${expediente} - ${nombreCompleto}.docx`), buf);
}

module.exports = generarEscrito;