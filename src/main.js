import data from './data/pokemon/pokemon.js';
console.log(data);
const pokemon = data.pokemon

function showpokemon(data){

  let htmlContent= ""
  data.forEach((element)=>{
    htmlContent+=`<div class="item">
    <img src = "${element.img}"/>
    <div>
     <h4>${element.name} </h4>
     <h4>${element.num}</h4>
     <h4>${element.type}</h4>
  </div>
 </div>`
    
    ;
    
    
} )
document.getElementById("root").innerHTML=htmlContent 
  
}
showpokemon(pokemon)