// crea un archivo llamado ejemplo.txt con el siguiente array
const fs = require('fs')

const autos = [
  {
    marca: "Susuki",
    modelo: "Kicks",
  },
  {
    marca: "Toyota",
    modelo: "Corola",
  },
  {
    marca: "GAC",
    modelo: "GS4",
  },
  {
    marca: "Changan",
    modelo: "CS35 Plus",
  },
];


//
//fs.writeFileSync("ejemplo.txt", JSON.stringify(autos));


const minuta = fs.readFileSync("minuta.txt", "utf-8");
//console.log(minuta)

const minuta2 = fs.readFileSync("ejemplo.txt", "utf-8");
console.log(minuta2)