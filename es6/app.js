//const fs = require('fs') //es5
import fs from 'fs' //es6
import {suma, resta} from './math.js'

const mensaje = 'Soy un mensaje'

fs.writeFileSync('ejemplo.txt', mensaje)

// crear un archivo llamado math.js y agregar dos funciones una de suma y otra de resta

suma(50,15)

resta(12, 5)