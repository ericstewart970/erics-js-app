//practicing innerText with JavaScript
let container = document.querySelector('.container');
container.innerHTML = '<button>Click Me</button>';
console.log(container.innerHTML);



// for loop for Exercize 1.5

var pokemonRepository = (function () {
var pokemonList = [
    {
      name: "balbasure",
      height: 0.7,
      types: ['grass', 'poison']
    },
    {
      name: "caterpie",
      height: 1.2,
      types: ['Shield-dust', 'Run-away']
    },
    {
      name: "Seel",
      height: 1.9,
      types: ['Hydration', 'Ice-body']
    }
  ];

function getAll() {
  return pokemonList;
}

function add(pokemon) {
  pokemonList.push(pokemon);
}

return {
  add: add,
  getAll: getAll

 };
})();
{
console.log ( pokemonRepository.getAll() )};

//added forEach function
pokemonRepository.getAll().forEach(function(pokemon) {
  console.log(pokemon)
})
