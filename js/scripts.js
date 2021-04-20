//practicing innerText with JavaScript
//let container = document.querySelector('.container');
// let newElement = document.createElement('button') practice
//let button = document.createElement('button');
//button.innerText = 'Click Me';
//container.appendChild(button);


// for loop for Exercize 1.5

let pokemonRepository = (function () {
  //Emptied array
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';


  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon //&&
      //"detailsUrl" in pokemon

    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
}

function getAll() {
  return pokemonList;
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
  button.addEventListener("click", function(event){
    //invoked showDetails
showDetails(pokemon);
});
}

// load list function
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url
      };
    add(pokemon);
    console.log(pokemon);
  });
}).catch(function (e) {
  console.error(e);
})
}

// load details function
function loadDetails(item) {
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl =details.sprites.front_default;
    item.height = details.height;
    item.types =details.types;
  }).catch(function (e){
    console.error(e);
  });
}

//add showDetails function
function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    console.log(item);
  });
}


return {
  add: add,
  getAll: getAll,
  // addListItem
  addListItem: addListItem,
  //add loadList, loadDetails, & showDetails exercise 1.7
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails
 };
} ) ();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

//Form Validation Email & Password

(function()  {
  let form = document.querySelector('#register-form');
  let emailInput = document.querySelector('#email');
  let passwordInput = document.querySelector('#password');

  function validateEmail() {

    return false;
  }

  function validateForm() {
    return validateEmail() && validatePassword();
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Success');
    }
  })
})();
