const argv   = require('./config/yargs').argv;
const colors = require('colors'); 

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando){
    case 'listar':
        console.log("Listar");
        listarTabla(argv.base,argv.limite)
        break;
    case 'crear':
        console.log("Crear");
        crearArchivo(argv.base,argv.limite)
          .then(archivo => console.log(`El archivo ${archivo} ha sido creado`))
          .catch(err => {
            console.log(err)
          })
        break;
    default:
        console.log("Comando no reconocido")
}


// let base = "4";
//let argv2 = process.argv;

console.log(argv.limite)


// console.log(argv2)

// let parametro = argv[2];

// let base = parametro.split("=")[1];

