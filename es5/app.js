//console.log('Hola mundo desde node')

const fs = require("fs"); // commonjs

const mensaje = "Hola me llamo NODE";

const tareas = `
1. Aprender Javascript
2. Aprender de BBDD
3. Aprender de AWS
4. Aprender Ingles
5. Aprender de Node
6. Aprender de Typescript

`;

const tareasObj = [
  { text: "Ir al gym" },
  { text: "Ir al banco" },
  { text: "Ir a buscar los niños al cole " },
  { text: "ir al supermercado" },
];

//crear un archivo

fs.writeFileSync('tareas.txt', tareas)
//fs.writeFileSync('tareas.json', JSON.stringify(tareasObj))

const excel = "Node Js \t Express Js";

//fs.writeFileSync('archivo.xls', excel)
//console.log('Aechivo excel creado satisfactoriamente')

// leer el archivo

const mensajeLeido = fs.readFileSync("saludo.txt", "utf-8");
const mensajeLeido2 = fs.readFileSync("tareas.txt", "utf-8");
const mensajeLeido3 = fs.readFileSync("tareas.json", "utf-8");

//console.log(mensajeLeido3)

/* JSON.parse(mensajeLeido3).forEach((tarea) => {
  console.log(tarea);
});
 */

//Eliminar un archivo
//fs.unlinkSync('saludo.doc')
fs.unlinkSync('archivo.xls')
//console.log('Archivo eliminado correctamente')

