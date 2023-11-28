export const sortDataAz = (data) => {
  const dataOrderAbc = data;
  dataOrderAbc.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    } else return 0;
  });
  //console.log(dataOrderAbc)
  return dataOrderAbc;
};
export const sortDataZa = (data) => { //funcion que ordena de z-a
  const dataOrderCba = data;
  dataOrderCba.sort((a, b) => {
    if (a.name > b.name) {
      return -1;
    }
    if (a.name < b.name) {
      return 1;
    } else return 0;
  });
  return dataOrderCba;
};
export function obtenerTipos(data, tipo) {
  const newArreglo = [];
  for (let i = 0; i < data.pokemon.length; i++) {
    if (data.pokemon[i].type.includes(tipo)) {
      // que voy a agregar
      newArreglo.push(data.pokemon[i]);
      // como agregar elementos a un arreglo
    }
  }
  // devolver mi arreglo resultado con todos los poikemones que dentro del atributo tipo incluyen al tipo que el usuario selecciono
  return newArreglo;
}
