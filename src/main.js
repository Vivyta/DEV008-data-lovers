import pokemon from './data/pokemon/pokemon.js';
import data from './data/pokemon/pokemon.js';
console.log(data);
// const datapokemon = data.pokemon;
// console.log(datapokemon);
// for (let i = 0; i <= datapokemon.length; i++) {
//     console.log(datapokemon[i]);


// }
// const findElement = (datos, searchedname) => {
//     let elementpokemon = [];
//     for (let i = 0; i < datos.length; i++) {
//         const element = datos[i];
//         if (element.name === searchedname) {

//             console.log(element)
//         }
//     }
//     return elementpokemon
// }
// findElement(datapokemon, "pikachu")
function getItemsHtml(items) {
  let htmlContent = "";
  items.forEach((element) => {
    htmlContent+= '';
   <div class="item">
      <img src = "${data.pokemon.js/img}">
      <div>
       <h4>${element.name} ${Element.num}</h4>
    </div>
   </div>
   ;
  });
  return htmlContent;

}
document.getElementById("datapokemon.js").innerHTML=getItemsHtml(data.items)