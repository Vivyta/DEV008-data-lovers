export const sortDataAz = (data) => {
  const dataOrderAbc = data;
  dataOrderAbc.sort( (a, b)=> {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
     else return 0;
    
   });
   //console.log(dataOrderAbc)
  return dataOrderAbc;
  
}
export const sortDataZa= (data)=>{
 const  dataOrderCba= data;
 dataOrderCba.sort((a,b)=>{
    if (a.name > b.name) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      } else return 0;
    });
    return dataOrderCba;
}
