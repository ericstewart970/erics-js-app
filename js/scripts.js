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
    )
     {
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
    showDetails(pokemon);
   });
}

// load list function from apiUrl
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
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (e){
    console.error(e);
  });
}

//add showDetails function & creating showModal
function showDetails(pokemon) {
  pokemonRepository.loadDetails(pokemon).then(function () {
    showModal(pokemon);
  });
}

 // Modal

  let modalContainer = document.querySelector('#modal-container');
   function showModal(pokemon) {
     modalContainer.innerHTML = '';

   let modal = document.createElement('div');
     modal.classList.add('modal');

     let closeButtonElement = document.createElement('button');
     closeButtonElement.classList.add('modal-close');
     closeButtonElement.innerText = 'Close';
     closeButtonElement.addEventListener('click', hideModal);

     let titleElement = document.createElement('h1')
     titleElement.innerText = pokemon.name;

     let contentElement = document.createElement('p');
     contentElement.innerText = pokemon.height;

     let imageElement = document.createElement('img');
     imageElement.src = pokemon.imageUrl;

     modal.appendChild(closeButtonElement);
     modal.appendChild(titleElement);
     modal.appendChild(contentElement);
     modal.appendChild(imageElement);
     modalContainer.appendChild(modal);


     modalContainer.classList.add('is-visible');
   }

 function hideModal() {
   modalContainer.classList.remove('is-visible');
 }

 window.addEventListener('keydown', (e) => {
   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
     hideModal();
   }
 });
 modalContainer.addEventListener('click', (e) => {
   //triggered when clicking inside the modal
   //want to close if user clickes directly on the overlay
   let target = e.target;
   if (target === modalContainer) {
     hideModal();
   }
 });


 // addListItem
 //add loadList, loadDetails, & showDetails exercise 1.7
 return {
   add: add,
   getAll: getAll,
   addListItem: addListItem,
   loadList: loadList,
   loadDetails: loadDetails,
   showDetails: showDetails
 };
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
