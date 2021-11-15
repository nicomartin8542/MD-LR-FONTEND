//Variables
const autosDisponibles = [
  { marca: "Chevrolet", modelo: "Camaro", puertas: 2 },
  { marca: "Chevrolet", modelo: "Cruze", puertas: 4 },
  { marca: "Ford", modelo: "Fiesta", puertas: 4 },
  { marca: "Ford", modelo: "Focus", puertas: 4 },
  { marca: "Ford", modelo: "Mustang", puertas: 4 },
  { marca: "Ford", modelo: "Fusion", puertas: 4 },
  { marca: "Ford", modelo: "Ka", puertas: 2 },
  { marca: "Audi", modelo: "A4", puertas: 5 },
  { marca: "Audi", modelo: "A5", puertas: 5 },
  { marca: "Audi", modelo: "A6", puertas: 5 },
  { marca: "Audi", modelo: "A7", puertas: 5 },
  { marca: "Audi", modelo: "A8", puertas: 5 },
  { marca: "Audi", modelo: "Q5", puertas: 5 },
  { marca: "BMW", modelo: "Serie 3", puertas: 5 },
  { marca: "BMW", modelo: "Serie 5", puertas: 5 },
  { marca: "BMW", modelo: "Serie 7", puertas: 5 },
  { marca: "Mercedes Benz", modelo: "Clase A", puertas: 5 },
  { marca: "Mercedes Benz", modelo: "Clase C", puertas: 5 },
  { marca: "Mercedes Benz", modelo: "Clase E", puertas: 5 },
];

let autosPuertaGenaro = [];

//----------------
// Ejercicio 1: Funcion para listar autos
//----------------
const listarAutos = (autos) => {
  //Validos si el array viene vacio
  if (autos.length < 1) return console.log("No se encontraron resultados");

  autos.forEach((auto) =>
    console.log(`Marca: ${auto.marca} - Tenemos disponible un ${auto.modelo}`)
  );
};
//listarAutos(autosDisponibles);

//----------------
// Ejercicio 2: Cantidad de puertas disponibles
//----------------
const cantidadPuertas = (autos, puerta) => {
  const autosPuertaGenaro = autos.filter((auto) => auto.puertas === puerta);
  return autosPuertaGenaro;
};

autosPuertaGenaro = cantidadPuertas(autosDisponibles, 4);
//listarAutos(autosPuertaGenaro);

//----------------
//Ejercicio 3: Funcion para comparar valores recibiendo parametros
//----------------
const autosCondicional = (autos, propiedad, condicion) => {
  //Valido propiedad
  const propTrue = autos.every((auto) => Object.keys(auto).includes(propiedad));
  if (!propTrue) return console.log("Propiedad incorrecta");

  const autosMarcaPuertaGenaro = autos.filter((auto) => {
    if (propiedad == "marca") {
      return auto.marca == condicion;
    } else if (propiedad == "modelo") {
      return auto.modelo == condicion;
    } else {
      return auto.puertas == condicion;
    }
  });

  autosMarcaPuertaGenaro.forEach((auto) =>
    console.log(
      `Tenemos disponibles los autos ${auto.marca} ${auto.modelo} que tienen ${auto.puertas} puertas`
    )
  );

  return autosMarcaPuertaGenaro;
};
//autosCondicional(autosPuertaGenaro, "puertas", 4);

//----------------
//Ejercicio 4: Auto comprado
//----------------
const comprarAuto = () => {
  const filterAuto = autosCondicional(
    cantidadPuertas(autosDisponibles, 4),
    "puertas",
    4
  );
  const autoComprado = filterAuto.filter((auto) => auto.modelo === "Mustang");
  const { marca, modelo, puertas } = autoComprado[0];

  return autoComprado[0];
};
//const { marca, modelo, puertas } = comprarAuto();
/* console.log(
  `Felicitaciones Genaro por haber adquirido tu nuevo y flamante ${marca} ${modelo} que disfrutes tus ${puertas} puertas`
); */

//----------------
//Ejercicio 5: Listado actualizado
//----------------
const listadoActualizado = (autosDisponibles) => {
  const { modelo } = comprarAuto();
  const listaActualizada = autosDisponibles.filter(
    (auto) => auto.modelo !== modelo
  );

  listarAutos(listaActualizada);
};
listadoActualizado(autosDisponibles);
