# MinutApp

# Tabla de contenidos

1. [Introducción](#introduction)
2. [Requisitos para la instalación](#requisitos)
3. [Guía para la instalación](#instalacion)
4. [Guía de uso](#uso)
5. [To DO](#do)

## Introducción <a name="introduction"></a>

Se trata de una aplicación de consola que permite expedir minutas, en base a los criterios del Colegio de Abogados que se seleccione por el usuario.

Por ahora está disponible únicamente para seleccionar los criterios del Ilustre Colegio de Abogados de Madrid aplicables para la jurisdicción civil,
posteriormente se irán incluyendo los criterios correspondientes a otros colegios y órdenes jurisdiccionales.

La calculadora **actualizará los valroes de referencia de la minuta conforme el IPC vigente en el momento de su cálculo**, conectándose a la API del INE. En caso de que no se
pueda conectar a dicha API, calculará la minuta sobre los valores de referencia.

Una vez finalizadas todas las operaciones, la aplicación se cerrará y creará una minuta en formato "docx" para poder modificarla posteriormente.

La aplicación se ha realizado exclusivamente conforme a la base de cálculo objetiva establecida en los mismos, si hay algun criterio cuya valoración
responda a parámetros subjetivos o haya sido objeto de valoración jurisprudencial, deberá estarse a esta para su cálculo. 

## Requisitos para la instalación <a name="requisitos"></a>

1. Nodejs instalado

Nota: El repositorio contiene un PE para windows (MinutApp.exe) para poder usarlo sin necesidad que se haga ninguna instalación, simplemente basta con hacer doble clic.

## Guía para la instalación <a name="instalacion"></a>

Si se descarga el repositorio entero, una vez clonado en local, instalar las dependencias con el comando:

`npm install`

## Guía de uso <a name="uso"></a>

Se ejecutará la aplicación mediante `node app.js`.

Al ejecutar la aplicación se preguntará sobre el conjunto de criterios a seleccionar y, posteriormente, el orden jurisdiccional.  

Tras ello, se preguntará el citerio concreto y las preguntas derivadas del mismo si tuviera varios apartados.

Finalmente, se realizarán unas preguntas relativas al letrado minutante y al expediente.

Se creará una carpeta denominada expedientes en el directorio donde se está ejecutando la aplicación, en la misma, se creará la minuta con el número de expediente y el nombre del letrado.

## To DO <a name="do"></a>

Respecto a las funcionalidades previstas a añadir:

- Añadir todas las jurisdicciones de los criterios del Ilustre Colegio de Abogados de Madrid.
- Añadir criterios de otros colegios de abogados españoles.
- Creación de una API Rest para usar la aplicación.
