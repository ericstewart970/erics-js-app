// for loop for Exercize 1.3

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
  getAll: getAll,
  add: add
 };
})();
console.log ( pokemonRepository.getAll() );
pokemonRepository.add({ name: 'Fearow' });
console.log(pokemonRepository.getAll());





let pokemonList = ['Balbasure', 'Caterpie', 'Seel'];

pokemonList.forEach(function(name)  {
  document.write(name);
});
