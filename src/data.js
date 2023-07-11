export const sortData = (data, name, sortOrder) => {
  const dataOrder = data;
  dataOrder.sort( (a, b)=> {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    } else return 0;
  });
  return dataOrder.sort((a,b)=>{
    if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      } else return 0;
    });
  }

  export const filtertype = (data, tipo) => {
    return data.filter((typePokemon) => typePokemon.type.includes(tipo)); 
  }

