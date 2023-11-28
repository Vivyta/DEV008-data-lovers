import data from "./data/pokemon/pokemon.js";
import { sortDataAz, sortDataZa, obtenerTipos } from "./data.js";
const pokemon = data.pokemon;
const pokeContainer = document.getElementById("tarjeta");

function pokemonImgCreator(pokeImage) {
  pokeContainer.innerHTML = "";

  for (const pokemon of pokeImage) {
    const imagen = document.createElement("div");
    imagen.setAttribute("num", "name");
    imagen.setAttribute("type", "about");
    //console.log(pokemon.type)
    imagen.innerHTML = ` <div class="card">
                    <div><h2 class="nombrePokemon" id="nombre" >${pokemon.name}</h2>
                    <img class="pokemon-img.url" src=${pokemon.img}
                        alt="pokeImage" width=150 height=150 ></img>
                    <p id="nombre">${pokemon.name}</p>
                    <p id="numero">${pokemon.num}</p>
                    <p id="tipo">${pokemon.type} </p>
                    </div>
            </div>`;
    pokeContainer.append(imagen);
  }
}
pokemonImgCreator(data.pokemon);

document.getElementById("ordenalfabetico").addEventListener("change", () => {
  const selectOrder = document.getElementById("ordenalfabetico").value;
  let ordenalfabetico = "Abc";
  if (selectOrder === "Abc") {
    ordenalfabetico = sortDataAz(data.pokemon);
    pokeContainer.innerHTML = "";
    pokemonImgCreator(ordenalfabetico);
    //console.log(ordenalfabetico);
     }
});
document.getElementById("ordenalfabetico").addEventListener("change", () => {//cuando escuche en orden alfabetico lo que selecciona el usuario
  const selectOrder = document.getElementById("ordenalfabetico").value; // toma y guarda lo que el usuario seleciona
  let ordenalfabetico = "Cba"; //variable que define el id de mi html
  if (selectOrder === "Cba") {  //comienza la funcion (echa en data)si el usuario selecciona mi equivalente a cba 
    ordenalfabetico = sortDataZa(data.pokemon);  //trae el orden 
    pokeContainer.innerHTML = "";  
    pokemonImgCreator(ordenalfabetico);//crea la trajeta con los resultados
    //console.log(ordenalfabetico);
      }
});

 document.getElementById("tipos").addEventListener("change", () => {
    const selectipo = document.getElementById("tipos").value;
   let arrayfiltrado = []
    arrayfiltrado = obtenerTipos(data,selectipo);
     pokeContainer.innerHTML = "";  
     pokemonImgCreator(arrayfiltrado);
    
 });
// console.log(arrayfiltrado);