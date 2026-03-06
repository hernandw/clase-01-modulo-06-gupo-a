const saludo = (nombre)=>{
    console.log(`Hola ${nombre} ¿Cómo estas?`)
}

const despedida = (nombre) =>{
    console.log(`${nombre} buenas noches`)
}

module.exports = {
    saludo, despedida
}