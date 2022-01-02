const escala = require('../escalas/escalaMAD');
let IPC = require('../../IPC');

let getORD = async( AP = true, JO = true, cuantia = 18000 ) => {

    let honorarios;

    const valorRefActu = await getRefActualizadoMAD( 2100 );

    if(valorRefActu >= escala(cuantia)) {
      honorarios = valorRefActu;
    } else {
      honorarios = escala(cuantia);
    }
  
    if ( AP && !JO) {
      honorarios *= 0.75;
    } else if ( !AP && !JO) {
      honorarios *= 0.5;
    }

    if (honorarios > cuantia / 3) {
      honorarios = (cuantia / 3).toFixed(2);
    }
  
    return honorarios;
  
  }
  
  let getVER = async( vista = true, cuantia = 18000 ) => {
  
    let honorarios;
  
    const valorRefActu = await getRefActualizadoMAD( 1200 );
  
    if(valorRefActu >= escala(cuantia)) {
      honorarios = valorRefActu;
    } else {
      honorarios = escala(cuantia);
    }
  
    if ( !vista ) {
      honorarios *= 0.50;
    } 
  
    if (honorarios > cuantia / 3) {
      honorarios = cuantia / 3;
    }
  
    return honorarios;
    
  }

let getIncidentes = async( num, vista = false, cuantia = 18000 ) => {
  
    let honorarios;
    let valorRefActu;

    if( num === 1 ) {

        valorRefActu =  await getRefActualizadoMAD( 450 );

        if(valorRefActu >= (escala(cuantia) * 0.2)) {

            honorarios = valorRefActu;

        } else {

            honorarios = escala(cuantia) * 0.2;

        }
          
        if ( vista ) {

          valorRefActu =  await getRefActualizadoMAD( 900 );

        if(valorRefActu >= (honorarios * 2)) {

            honorarios = valorRefActu;

          } else {

            honorarios *= 2;

          }

        }

    } else if(num === 2) {

      honorarios =  await getRefActualizadoMAD( 100 );
        
    } else if(num === 3) {

      valorRefActu =  await getRefActualizadoMAD( 450 );

        if(valorRefActu >= (escala(cuantia) * 0.2)) {

            honorarios = valorRefActu;

        } else {

            honorarios = escala(cuantia) * 0.2;

        }

    } else if(num === 4) {

      valorRefActu =  await getRefActualizadoMAD( 450 );

      if( vista ) {

        if(valorRefActu >= (escala(cuantia) * 0.2)) {

            honorarios = valorRefActu;

        } else {

            honorarios = escala(cuantia) * 0.2;

        }

      } else {

        honorarios = valorRefActu;

      }

    }
      
    if (honorarios > cuantia / 3) {
      honorarios = cuantia / 3;
    }
      
    return honorarios;
      
}

let getRecursoRepRevAcl = async( cuantia = 18000 ) => {
  
  let honorarios;

  const valorRefActu =  await getRefActualizadoMAD( 300 );

  if(valorRefActu >= (escala(cuantia) * 0.1)) {
    honorarios = valorRefActu;
  } else {
    honorarios = (escala(cuantia) * 0.1);

  }

  if (honorarios > cuantia / 3) {
    honorarios = cuantia / 3;
  }

  return honorarios;
  
}

let getRecursoApel = async( prueba = false, vista = false, cuantia = 18000 ) => {
  
  let honorarios;

  const valorRefActu = await getRefActualizadoMAD( 1200 );

  if(valorRefActu >= escala(cuantia)) {
    honorarios = valorRefActu;
  } else {
    honorarios = escala(cuantia);
  }

  if ( (prueba && vista) || 
       (!prueba && vista) ||
       (prueba && !vista) ) {

    honorarios *= 0.75;

  } else if ( !prueba && !vista) {

    honorarios *= 0.5;

  }


  if (honorarios > cuantia / 3) {
    honorarios = cuantia / 3;
  }

  return honorarios;
  
}

let getRecursoExtraInfracProces = async( inadmitido = false, prueba = false, vista = false, cuantia = 18000 ) => {
  
  let honorarios;

  const valorRefActu = await getRefActualizadoMAD( 2400 );

  if( inadmitido ) {

      honorarios = escala(cuantia) * 0.1;


  } else {

    if(valorRefActu >= escala(cuantia)) {
      honorarios = valorRefActu;
    } else {
      honorarios = escala(cuantia);

    }
  
    if ( (!prueba && vista) ||
         (prueba && !vista) ) {
  
      honorarios *= 1;
  
    } else if ( !prueba && !vista) {
  
      honorarios *= 0.75;
  
    } else {
  
      honorarios *= 1.25;

    }
    
  }
  
  if (honorarios > cuantia / 3) {
    honorarios = cuantia / 3;
  }

  return honorarios;
  
}

let getRecursoCasacion = async( inadmitido = false, prueba = false, vista = false, cuantia = 18000 ) => {
  
  let honorarios;

  const valorRefActu = await getRefActualizadoMAD( 3200 );

  if(inadmitido) {

    honorarios = escala(cuantia) * 0.1;


  } else {

    if( valorRefActu >= escala(cuantia) ) {
       
      honorarios = valorRefActu;

    } else {

      honorarios = escala(cuantia);


    }

    if ( (!prueba && vista) ||
         (prueba && !vista) ) {

      honorarios *= 1.1;

    } else if ( !prueba && !vista) {

      honorarios *= 0.85;

    } else {

      honorarios *= 1.35;

    }
  }

  if (honorarios > cuantia / 3) {
    honorarios = cuantia / 3;
  }

  return honorarios;
  
}

let getRecursoCasacionYInfracProces = async( inadmitido = false, cuantia = 18000 ) => {
  
  let honorarios;

  // const valorRefActu = await getRefActualizadoMAD( 3200 );

  if(inadmitido) {

    honorarios = escala(cuantia) * 0.1;


  } else {

    if( valorRefActu >= escala(cuantia) ) {
       
      honorarios = valorRefActu;

    } else {

      honorarios = escala(cuantia);
 

    }

    if ( (!prueba && vista) ||
         (prueba && !vista) ) {

      honorarios *= 1.1;

    } else if ( !prueba && !vista) {

      honorarios *= 0.85;

    } else {

      honorarios *= 1.35;

    }
  }

  if (honorarios > cuantia / 3) {
    honorarios = cuantia / 3;
  }

  return honorarios;
  
}

let getEjeDineraria = async( num, opt, cuantia = 18000 ) => {
  
  let honorarios;

  if( num === 1 ) {

    honorarios = await getRefActualizadoMAD( 600 );

  } else if( num === 2 ) {

    let valorRefActu = await getRefActualizadoMAD( 600 );

    if( opt ) {

      if( valorRefActu >= escala(cuantia) * 0.5 ) {
       
        honorarios = valorRefActu;
  
      } else {
  
        honorarios = escala(cuantia) * 0.5;
  
      }

    } else {

      if( valorRefActu >= escala(cuantia) * 0.75 ) {
       
        honorarios = valorRefActu;
  
      } else {
  
        honorarios = escala(cuantia) * 0.75;
  
      }

    }

  } else if( num === 3 ) {

    let valorRefActu = await getRefActualizadoMAD( 1200 );

    if( valorRefActu >= escala(cuantia) * 0.5 ) {
       
      honorarios = valorRefActu;

    } else {

      honorarios = escala(cuantia) * 0.5;

    }
    
  } else if( num === 4 ) {

    if( opt ) {

      honorarios = escala(cuantia);

    } else {

      honorarios = escala(cuantia) * 0.75;

    }

  }

  if (honorarios > cuantia / 3) {

    honorarios = cuantia / 3;

  }

  return honorarios;
  
}

let getRefActualizadoMAD = async( ref ) => {

  const IPCactu = await IPC.getIPC(2013);

  const valorRefActu = ref * ( IPCactu.toFixed(2) / 100 ) + ref;

  return valorRefActu;

}
  
module.exports = {
    getVER,
    getORD,
    getIncidentes,
    getRecursoRepRevAcl,
    getRecursoApel,
    getRecursoExtraInfracProces,
    getRecursoCasacion,
    getRecursoCasacionYInfracProces,
    getRefActualizadoMAD,
    getEjeDineraria
}