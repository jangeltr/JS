//Para usar fetch en node
//No se usa dentro de una funcion async
//products.js

import fetch from "node-fetch";

const response = await fetch("https://api.escuelajs.co/api/v1/products");
const products = await response.json();

export { products };

//En el js principal
import { products } from "./products.js";

console.log(products);
console.log("Hey!!");