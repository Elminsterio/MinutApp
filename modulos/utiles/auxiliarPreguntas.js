const readline = require('readline');

const rl = readline.createInterface(
    process.stdin,
    process.stdout
  );

const question = (frase) => {

    return new Promise((resolve) => {

      rl.question(`${frase} `, (resp) => {

        resolve(resp);

    })
  })
}

async function ejecutorPregunta(frase, fraseFail, tipo, cantidad) {

    let response = await question(frase);
  
    switch(tipo) {

      case 'seleccion':

        process.stdout.write('\u001B[2J\u001B[0;0f');

        if(!isNaN(response) && Number(response) > 0 && Number(response) <= cantidad) {

            return response;
        
           } else {

            return await ejecutorPregunta(fraseFail, fraseFail, tipo, cantidad);
    
          }

      case 'cuantia':

        process.stdout.write('\u001B[2J\u001B[0;0f');

        response = response.replace(/,/g, '.')

        if(!isNaN(response) && Number(response) > 0) {
  
          return response;
      
         } else {
          return await ejecutorPregunta(fraseFail, fraseFail, tipo);
  
        }
      

      case 'si/no':

        process.stdout.write('\u001B[2J\u001B[0;0f');

        let validResponsesSi = ['SI', 'si', 'sí', 's', 'S', 'Sí', 'Si', 'SÍ'];
        let validResponsesNo = ['NO', 'N', 'n', 'no', 'No'];

        response = response.trim();

        if(validResponsesSi.includes(response)) {

            return true;
        
        } else if (validResponsesNo.includes(response)) {

            return false;

        } else {

            return await ejecutorPregunta(fraseFail, fraseFail, tipo);
    
        }

      case 'nombre':

      process.stdout.write('\u001B[2J\u001B[0;0f');

      response = response.replace(/[^a-zA-ZÀ-ÿ\u00f1\u00d1 ]/g, "");
      
      if(!tieneNumeros(response)) {

        return response;

      } else {

        return await ejecutorPregunta(fraseFail, fraseFail, tipo);

      }
      

      case 'NIF':
        
        process.stdout.write('\u001B[2J\u001B[0;0f');

        if(/((([X-Z])|([LM])){1}([-]?)((\d){7})([-]?)([A-Z]{1}))|((\d{8})([-]?)([A-Z]))/g.test(response)) {

            return response;

        } else {

            return await ejecutorPregunta(fraseFail, fraseFail, tipo);
    
        }

      case 'expediente':

        process.stdout.write('\u001B[2J\u001B[0;0f');
        
        if(!isNaN(response) && Number(response) > 0) {

          return response;

        } else {

          return await ejecutorPregunta(fraseFail, fraseFail, tipo);

        }

    }
}

function cerrar() {

  rl.close();

}

function tieneNumeros(texto){

    let numeros = '0123456789';

    for(let i = 0; i < texto.length; i++){

       if(numeros.indexOf(texto.charAt(i),0)!=-1) {
          return true;
       }
    }
    return false;
 }

module.exports = {
  ejecutorPregunta,
  cerrar
}
