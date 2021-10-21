let datos = ['CARLOS ANDRES FANDIÑO RUEDA', 'JORGE ALBERTO RODRIGUEZ PAEZ', 'EDGAR LEONARDO RODRIGUEZ VASQUEZ', 'KELLY JOHANA VERGARA TORRES', 'LINA MARÍA RODRÍGUEZ RAMÍREZ', 'JOHN JAIRO ORJUELA ESPINOSA', 'JHON FAVER MACHADO ALAPE', 'FRANCISCO JAVIER TORRES VILLAMOR', 'ANDRES FELIPE GIRALDO', 'EDWIN GERMAN VILLALBA GONZALEZ', 'CRISTIAN ORLANDO ROMERO ACOSTA', 'CRISTIAN DAVID SAINEA CÉSPEDES', 'DANIEL CAMILO RAMIREZ MARTINEZ', 'ALEJANDRO RIVAS LOPEZ', 'DIANA GARCIA SANDOVAL', 'MARCOS ORTIZ']

function estudianteUno(datos) {
    let indiceAleatorioUno = Math.floor(Math.random() * datos.length);
    return datos[indiceAleatorioUno];
}
console.log(estudianteUno(datos));

function estudianteDos(datos) {
    let indiceAleatorioDos = Math.floor(Math.random() * datos.length);
    return datos[indiceAleatorioDos];
}

console.log(estudianteDos(datos));

/*
function estudiantes(datos) {
    let grupos = 2
    for (grupo=0; grupo&lt;grupos; i++) {
        aleatorio = Math.floor(Math.random()*(listado.length));
        seleccion = listado[aleatorio];
        trace(seleccion);
        listado.splice(grupos, 1);

    return datos[indiceAleatorio];
}*/