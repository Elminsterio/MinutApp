let criterios = {

    ordinario: `Criterio 4 Juicio Ordinario: Por toda la tramitación del juicio hasta Sentencia 
-incidentes y recursos excluidos- se considerará un valor de referencia
de 2.100 € o, si fuera superior, lo que pudiera resultar de
aplicar la Escala a la cuantía o interés económico discutido
en el pleito.
                
En aquellos casos en los que el interés económico en
litigio resulte imposible de calcular, ni siquiera de modo
aproximado o relativo, se tomará como base para el cálculo
la establecida con carácter general para los asuntos de
"interés económico indeterminable" y sobre la misma se
aplicará la Escala. Todo ello sin perjuicio de lo establecido
a continuación. `,

    incidenteHonorariosAbogado: {

        incidenteA: `Criterio 2.A) Cuestiones incidentales: 
Para calcular los honorarios por la intervención en las
cuestiones incidentales, se podrá aplicar hasta un 20% de la
Escala, sobre la cuantía del incidente, si la tuviere. Valor de
referencia 450€.`,

        incidenteB: `Criterio 2.B) Incidente de impugnación de honorarios por
excesivos: Por la intervención del Letrado impugnante o
defensor de los honorarios impugnados, el valor de
referencia será de 100€. No se atenderá al importe de los
honorarios impugnados. `,

        incidenteC: `Criterio 2.C) Incidente de impugnación de honorarios por
indebidos: Se aplicará hasta el 20% de la Escala sobre la
cuantía de las partidas impugnadas. Valor de referencia
450€.`,

        incidenteD: `Criterio 2.D) Procedimiento de Cuenta de Abogado (para
reclamación de honorarios): En el caso de que el
demandado pague tras el requerimiento, el valor de
referencia será de 450€. Si en lugar de proceder a abonar
los honorarios, el demandado los impugnara, se aplicará
hasta un 20% de la Escala sobre la cuantía de los honorarios
pretendidos o los fijados en la resolución judicial que
resuelva el procedimiento, dependiendo de cual sea el
interés de cada una de las partes`

    },

    verbal: `Criterio 5 Juicio verbal: Por toda la tramitación del juicio hasta Sentencia -
incidentes y recursos excluidos- se considerará un valor de
referencia de 1.200 € o, si fuera superior, lo que pudiera
resultar de aplicar la Escala a la cuantía o interés económico
discutido en el pleito. `,

    repRevAcl: `Criterio 6 Recurso de reposición, de revisión, y de aclaración de 
resoluciones judiciales: Por su formulación u oposición se considerará un valor de referencia de 300 € o, si fuera superior, 
lo que pudiera resultar de aplicar hasta el 10% de la Escala sobre la cuantía del Recurso`,

    apelacion: `Criterio 7 Recurso de apelación: Por toda su tramitación (interposición o impugnación) se
atenderá a un valor de referencia de 1.200 € o, si fuera
superior:
a) con carácter general, lo que pudiera resultar de
aplicar el 50% de la Escala sobre la cuantía del
recurso;
b) para los supuestos en que en primera Instancia
venga atribuido un porcentaje inferior al 100% de la 
Escala, en el recurso de apelación se podrá considerar
el 50% de lo que correspondería en primera Instancia.
De haber lugar a práctica de prueba, procederá el
incremento de los honorarios en hasta un 25%.
De celebrarse Vista los honorarios resultantes podrán
incrementarse hasta un 25%.`,

    extraIntracProc: `Criterio 8 Recurso extraordinario por infracción procesal: Por toda su tramitación se atenderá a un valor de referencia
de 2.400 € o, si fuera superior, lo que pudiera resultar de
aplicar hasta el 75% de la Escala sobre el interés económico
debatido en el Recurso.
De haber lugar a práctica de prueba, procederá el
incremento de los honorarios en hasta un 25%.
De celebrarse Vista los honorarios resultantes podrán
incrementarse hasta un 25%.
En caso de inadmisión del Recurso, el Letrado de la parte
recurrida podrá minutar hasta el 10% del resultado obtenido
por la Escala, siempre atendiendo a la efectiva extensión y
dedicación prestada a tal intervención.`,

    casacion: `Criterio 9 Recurso de Casación: Por toda su tramitación se considerará un valor de referencia
de 3.200 € o, si fuera superior, lo que pudiera resultar de
aplicar hasta el 85% de la Escala sobre el interés económico
debatido en el Recurso.
De haber lugar a práctica de prueba, procederá el
incremento de los honorarios en hasta un 25%.
De celebrarse Vista los honorarios resultantes podrán
incrementarse hasta un 25%.
En caso de inadmisión del Recurso, el letrado de la parte
recurrida podrá minutar hasta el 10% del resultado obtenido
por la Escala, siempre atendiendo a la efectiva extensión y
dedicación prestada a tal intervención.`,

    casYextraInfracProc: `Criterio 10 Intervención en la tramitación conjunta de los Recursos
de Casación y extraordinario por infracción procesal: 
En estos supuestos no se aplicarán de forma automática los
porcentajes contenidos en los Criterios 8 y 9, sino que
deberá ponderarse en cada caso el trabajo efectivamente
realizado, la mayor o menor complejidad del asunto, las
consecuencias en el orden real y práctico, etc. De manera
que se aplicará hasta el 85% de la Escala con un incremento
de hasta un 50% del resultado obtenido, en función del
trabajo realizado en el otro Recurso.
En los casos de inadmisión, los honorarios del Letrado de
la parte recurrida podrán valorarse en hasta el 10% de la
cantidad que resulte de la aplicación de la Escala y, en todo
caso, en función de trabajo efectivamente realizado,
incrementar hasta en un 50% el resultado por las
alegaciones realizadas en relación con el otro Recurso. `,

    interesDeLey: `Criterio 11 Recurso en interés de Ley: Se considerará un valor de referencia de 4.000 €, si bien
debe prestarse atención a las circunstancias concurrentes. `,

    queja: `Criterio 12 Recurso de queja: Se considerará un valor de referencia de 600 €, si bien
deberá atenderse a la trascendencia de la resolución a la que vayan referidos.`,

    ejeDiner: {

        ejeDiner1: `Criterio 15.a.1 Ejecución dineraria –provisional o forzosa- de Título Judicial: 
        Si el demandado no se opone, realizando la
consignación de las cantidades reclamadas en los días
previos al vencimiento del plazo para oponerse, se
considerará como valor de referencia la cantidad de 600 €,
siempre teniendo en cuenta las circunstancias concretas del
asunto. `,

        ejeDiner2: `Criterio 15.a.2 Ejecución dineraria –provisional o forzosa- de Título Judicial: 
Si el demandado no se opone, pero continúa la
ejecución, iniciándose la vía de apremio, y procediendo a la
averiguación de bienes, embargo, pero sin llegar al avalúo y
subasta de aquéllos, se considerará un valor entre los 600 €
y hasta el 75% de la Escala, en función de la cuantía por la
que se haya despachado la ejecución, el trabajo realizado
por el Letrado, el tiempo transcurrido desde el inicio de la
ejecución, etc.
En el supuesto de embargo de cuentas corrientes, salarios,
pensiones, retenciones de Hacienda, etc., se aplicará hasta
el 50% de la Escala.`,

        ejeDiner3: `Criterio 15.a.3 Ejecución dineraria –provisional o forzosa- de Título Judicial: 
Si el ejecutado se opone y se estima su oposición, o bien
si se desestima pero hubiere consignación, se considerará
hasta el 50% de la Escala sobre la cantidad por la que se
despachó ejecución. Valor de referencia 1.200 €.`,

        ejeDiner4: `Criterio 15.a.4 Ejecución dineraria –provisional o forzosa- de Título Judicial:
Si la ejecución se tramita en su integridad, es decir,
interposición de demanda, oposición en su caso, instando al
órgano judicial para la averiguación de bienes, trabando
embargo sobre los mismos, procediendo al avalúo de los
mismos y a la subasta pública o bien por lo menos al
señalamiento de las fechas para su práctica, se considerará
hasta el 100% de la Escala en los casos en que haya
oposición o bien hasta el 75% de la Escala en aquellos
supuestos en que no haya oposición. `

    }



}

module.exports = criterios;