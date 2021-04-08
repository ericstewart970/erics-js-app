//practicing innerText with JavaScript
//let container = document.querySelector('.container');
// let newElement = document.createElement('button') practice
//let button = document.createElement('button');
//button.innerText = 'Click Me';
//container.appendChild(button);


// for loop for Exercize 1.5

let pokemonRepository = (function () {
let repository = [
    {
      name: "balbasure",
      height: 0.7,
      types: ["grass", "poison"],
    },
    {
      name: "caterpie",
      height: 1.2,
      types: ["Shield-dust", "Run-away"],
    },
    {
      name: "Seel",
      height: 1.9,
      types: ["Hydration", "Ice-body"],
    }
  ];

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
}

function getAll() {
  return repository;
}
// including addListItem
function addListItem(pokemon) {
  //Task  making a ul tag.
  let pokemonList = document.querySelector(".pokemon-list");
  //createElement li
  let listPokemon = document.createElement("li");
  //createElement button
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listPokemon.appendChild(button);
  pokemonList.appendChild(listPokemon);
  //adding event listener
  button.addEventListener("click", function(){
    //added showDetails with object (pokemon)
      function showDetails(pokemon){
      console.log(pokemon.name)}
  });
}


return {
  add: add,
  getAll: getAll,
  // addListItem
  addListItem: addListItem
 };
} ) ();

pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });
console.log(pokemonRepository.getAll());
//forEach function
pokemonRepository.getAll().forEach(function(pokemon) {
//addListItem code
pokemonRepository.addListItem(pokemon);
});

//let pokemonList = ['Balbasure', 'Caterpie', 'Seel'];

//pokemonList.forEach(function(name)  {
  //document.write(name);
//});
