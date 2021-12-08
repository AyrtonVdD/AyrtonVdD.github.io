"use strict";
const api = "https://pokeapi.co/api/v2/pokemon/";
let number;
let html = "";
let pokemonId = [];

const ToonPokemon = function (data) {
    html += `
    <div class="panel">
        <h2>${data.name}</h2>
        <div class="c-gegevens">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png" alt="">
            <div class="c-stats">
                <div>${data.stats[0].stat.name}: ${data.stats[0].base_stat}/255</div>
                <span class="c-stat"></span>
                <span class="c-stat c-stat--opvullen" style="width: ${Math.round((data.stats[0].base_stat/255)*100)}px"></span>
                <div>${data.stats[1].stat.name}: ${data.stats[1].base_stat}/255</div>
                <span class="c-stat"></span>
                <span class="c-stat c-stat--opvullen" style="width: ${Math.round((data.stats[1].base_stat/255)*100)}px"></span>
                <div>${data.stats[2].stat.name}: ${data.stats[2].base_stat}/255</div>
                <span class="c-stat"></span>
                <span class="c-stat c-stat--opvullen" style="width: ${Math.round((data.stats[2].base_stat/255)*100)}px"></span>
                <div>${data.stats[3].stat.name}: ${data.stats[3].base_stat}/255</div>
                <span class="c-stat"></span>
                <span class="c-stat c-stat--opvullen" style="width: ${Math.round((data.stats[3].base_stat/255)*100)}px"></span>
                <div>${data.stats[4].stat.name}: ${data.stats[4].base_stat}/255</div>
                <span class="c-stat"></span>
                <span class="c-stat c-stat--opvullen" style="width: ${Math.round((data.stats[4].base_stat/255)*100)}px"></span>
                <div>${data.stats[5].stat.name}: ${data.stats[5].base_stat}/255</div>
                <span class="c-stat"></span>
                <span class="c-stat c-stat--opvullen" style="width: ${Math.round((data.stats[5].base_stat/255)*100)}px"></span>
            </div>
        </div>
    </div>
    `;
    document.querySelector(".js-pokemon").innerHTML = html;
}

const ToonAllePokemon = function () {
    Toon6RandomPokemon()
    const pokemons = document.querySelector(`.js-showRandomPokemon`);

    pokemons.addEventListener("click", function (e) {
    e.preventDefault();
    html = "";
    Toon6RandomPokemon()
    })
}

const Toon6RandomPokemon = function(){
    const max = 898
    const aantalPokemon = 6
    
    for(let i = 0; i < aantalPokemon; i++){
        number = Math.round((Math.random() * max) + 1);
        // console.log(number)
        pokemonId.push(number)
    }
    console.log(pokemonId)
    for(let j = 0; j < pokemonId.length; j++ ){
        getAPI(pokemonId[j]);
    }
    pokemonId = [];
    console.log(pokemonId)

}

const get = (url) => fetch(url).then((r) => r.json());

// 2 Aan de hand van een number gaan we de pokemon API ophalen.
const getAPI = async (number) => {
	const endPoint = `https://pokeapi.co/api/v2/pokemon/${number}`;
	const pokemonResponse = await get(endPoint);

	// console.log(pokemonResponse);
	// Eerst bouwen we onze url op
	// Met de fetch API proberen we de data op te halen.
	// Als dat gelukt is, gaan we naar onze showResult functie.
	ToonPokemon(pokemonResponse);
};

document.addEventListener('DOMContentLoaded', function() {
	// 1 We will query the API with longitude and latitude.

    ToonAllePokemon();
    
});