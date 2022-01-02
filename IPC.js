let axios = require('axios');

let anyoActual = new Date().getFullYear();
const encodedanyo = encodeURI( anyoActual );
let url = `https://servicios.ine.es/wstempus/js/ES/DATOS_TABLA/24077?date=20130101:${encodedanyo}0101`;


const getIPC = async (anyo, mes = 1) => {

       try {
              const resp = await axios.get(url);

              const data = resp.data[0].Data;

              let dataAnyoFin = data.find(periodo => periodo.Anyo === anyoActual && periodo.FK_Periodo === mes);

              if(dataAnyoFin === undefined) dataAnyoFin = data.find(periodo => periodo.Anyo === (anyoActual - 1) && periodo.FK_Periodo === mes); 

              let dataAnyoIni = data.find(periodo => periodo.Anyo === anyo && periodo.FK_Periodo === mes);

              let actuIPC = dataAnyoFin.Valor - dataAnyoIni.Valor;

              return actuIPC; 

       } catch(error) {

              console.log('No se han podido actualizar los valores conforme el IPC, inténtelo de nuevo.');
              console.log('Si continúa la minuta se calculará conforme los valores sin actualizar');

              return 0;

       }



}

module.exports = {
       getIPC,
       anyoActual
}
