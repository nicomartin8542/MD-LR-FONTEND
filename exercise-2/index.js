import autosDisponibles from "./autosDisponibles.js";

// Ejercicio 1: Funcion para listar autos
const listarAutos = (autos) => {
  //Validos si el array viene vacio
  if (autos.length < 1) return console.log("No se encontraron resultados");
  autos.forEach((auto) =>
    console.log(
      `Marca: ${auto.marca} - Modelo: ${auto.modelo} - Puertas: ${auto.puertas}`
    )
  );
};
/* console.log("******************************************");
console.log("            Autos disponibles             ");
console.log("******************************************");
listarAutos(autosDisponibles); */

// Ejercicio 2: Cantidad de puertas disponibles
const cantidadPuertas = (autos, puertas) => {
  const autosPuertaGenaro = autos.filter((auto) => auto.puertas <= puertas);
  return autosPuertaGenaro;
};
/* console.log("******************************************");
console.log(" Autos disponibles con 4 o menos puertas  ");
console.log("******************************************");
listarAutos(cantidadPuertas(autosDisponibles, 4));  */

//Ejercicio 3: Funcion para comparar valores recibiendo parametros
const autosCondicional = (autos, propiedad, condicion) => {
  //Valido propiedad
  const propTrue = autos.every((auto) => Object.keys(auto).includes(propiedad));
  if (!propTrue) return console.log("Propiedad incorrecta");

  const autosPuertaGenaro = cantidadPuertas(autosDisponibles, 4);

  const autosMarcaPuertaGenaro = autosPuertaGenaro.filter((auto) => {
    if (propiedad === "marca") {
      return auto.marca == condicion;
    } else if (propiedad === "modelo") {
      return auto.modelo == condicion;
    } else {
      return auto.puertas == condicion;
    }
  });

  autosMarcaPuertaGenaro.forEach((auto) =>
    console.log(
      `* Marca: ${auto.marca} - Modelo: ${auto.modelo} - Puertas: ${auto.puertas}`
    )
  );

  return autosMarcaPuertaGenaro;
};
/* console.log("**********************************************");
console.log("Autos disponibles para el modelo seleccionado ");
console.log("********************************************* ");
autosCondicional(autosDisponibles, "marca", "Ford"); */

//Ejercicio 4: Auto comprado
const comprarAuto = (autos, modelo) => {
  const autoComprado = autos.filter((auto) => auto.modelo === modelo);
  return autoComprado[0];
};
/* console.log("***************************************************");
console.log("Felicidades! Acaba de comprar el siguiente auto:   ");
console.log("                                                   ");
comprarAuto(autosDisponibles, 'Mustang'); */

//Ejercicio 5: Listado actualizado
const listadoActualizado = (autos, condicion) => {
  const { modelo } = comprarAuto(autos, condicion);
  const listaActualizada = autos.filter((auto) => auto.modelo !== modelo);
  listarAutos(listaActualizada);
};
console.log("                                          ");
console.log("******************************************");
console.log(" Autos actualizados  ");
console.log("******************************************");
listadoActualizado(autosDisponibles, "Mustang");
