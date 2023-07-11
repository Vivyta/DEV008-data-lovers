import data from "./data/pokemon/pokemon.js";
import { sortDataAz,sortDataZa } from "./data.js"; 
 const pokemon = data.pokemon;
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

document.getElementById("ordenalfabetico").addEventListener('change', () =>{
  const selectOrder = document.getElementById("ordenalfabetico").value;
 let ordenalfabetico= "Abc"
 if (selectOrder==="Abc"){
  ordenalfabetico= sortDataAz(data.pokemon)
  pokeContainer.innerHTML = "";
  pokemonImgCreator(ordenalfabetico);
      console.log(ordenalfabetico);
      return ordenalfabetico
} 
})
document.getElementById("ordenalfabetico").addEventListener('change', () =>{
  const selectOrder = document.getElementById("ordenalfabetico").value;
let ordenalfabetico= "Cba"
if (selectOrder==="Cba"){
 ordenalfabetico= sortDataZa(data.pokemon)
 pokeContainer.innerHTML = "";
 pokemonImgCreator(ordenalfabetico);
     console.log(ordenalfabetico);
     return ordenalfabetico
}
})