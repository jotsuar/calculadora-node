const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: '10'
    } 
}
const argv = require('yargs')
    .command("listar", "Imprime en consola la tabla de multiplicar",opt)
    .command("crear", "Crear archivo la tabla de multiplicar de un número dado y un límite", opt)
    .help()
    .argv;

module.exports = {
    argv
}