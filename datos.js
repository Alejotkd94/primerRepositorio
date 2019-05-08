conts opciones ={
	nombre:{
		alias:'n',
		demand:true
	},
	matematicas:{
		demand:true,
		alias:'m'
	},
	ingles:{
		demand:true,
		alias:'i'
	},
	programacion:{
		demand:true,
		alias:'p'
	}
}

let obtenerPromedio = (nota_uno, nota_dos, nota_tres)=>(nota_uno+nota_dos + nota_tres)/3;

conts argv = require('yargs')
            .command('promedio','Calcular promedio',opciones)
            .argv

module.exports ={
	obtenerPromedio,
	argv
};