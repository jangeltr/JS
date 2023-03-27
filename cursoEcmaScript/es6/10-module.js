//Primer archivo, o archivo que contiene las funciones, llamado: module.js
const hello = () => {    
    console.log("Hello!")
}
export default hello;

//Segundo archivo, el que usa las funciones del primer archivo
import hello from "./module.js";

hello();

//Agragar al archivo package.js
//"type": "module"