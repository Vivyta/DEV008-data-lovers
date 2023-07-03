import data from "./data/pokemon/pokemon.js";
import { sortData } from "./data.js"; 
// console.log(data);
 const pokemon = data.pokemon;
 console.log(sortData(pokemon,"name","A-Z"))
// function showpokemon(data) {
//   let htmlContent = "";
//   data.forEach((element) => {
//     htmlContent += `<div class="item">
//     <img src = "${element.img}"/>
//     <div>
//      <h4>${element.name} </h4>
//      <h4>${element.num}</h4>
//      <h4>${element.type}</h4>
//   </div>
//  </div>`;
//   });
//   document.getElementById("root").innerHTML = htmlContent;
// }
// showpokemon(pokemon);

const pokeContainer = document.getElementById("tarjeta");

function pokemonImgCreator(pokeImage) {
  pokeContainer.innerHTML = "";

  for (const pokemon of pokeImage) {
    const imagen = document.createElement("div");
    imagen.setAttribute("num", "name");
    imagen.setAttribute("type", "about");
    
    imagen.innerHTML = ` <div class="card">
                    <div><h2 class="nombrePokemon" id="nombre" >${pokemon.name}</h2>
                    <img class="pokemon-img.url" src=${pokemon.img}
                        alt="pokeImage" width=150 height=150 ></img>
                    <p id="nombre">${pokemon.name}</p>
                    <p id="numero">${pokemon.num}</p>
                    <p id="tipo">${pokemon.type} </p>
                    <p id="sobre">${pokemon.about} </p>
                    </div>
            </div>`;
    pokeContainer.append(imagen);
  }
}
pokemonImgCreator(data.pokemon);


