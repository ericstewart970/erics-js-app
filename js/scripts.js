// for loop for Exercize 1.5

let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  //"detailsUrl" in pokemon
  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon)

     {
      pokemonList.push(pokemon);
     } else {
      console.log("pokemon is not correct");
    }
}
// creating function to return list
function getAll() {
  return pokemonList;
}
// creat pokemon-list and button
function addListItem(pokemon) {
  let listGroup = $(".pokemon-list");
  let listItem = $("<li></li>");
  // listItem.addClass('list-group-item-action');
  // listGroup.append(listItem);

  const button = $('<button type="button" class="button-class" data-toggle="modal" data-target="pokemonModal">' + pokemon.name + '</button>');

  button.addClass('btn btn-primary');
  listItem.append(button);
  listGroup.append(listItem);

  button.click (function(event) {
    showDetails(pokemon);
  })
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
    item.weight = details.weight;
    item.types = details.types;
  }).catch(function (e){
    console.error(e);
  });
}

//add showDetails function & creating showModal
function showDetails(pokemon) {
  loadDetails(pokemon).then(function () {

    showModal(pokemon);
  });
}


function showModal(pokemon) {
  let modalBody = $(".modal-body");
  let modalTitle = $(".modal-title");
  let modalHeader = $(".modal-header");
  modalTitle.empty();
  modalBody.empty();

  // creating element for name in modal content
  let nameElement = $("<h1>" + pokemon.name + "</h1>");
  // creating img in modal content
  let imageElement = $('<img class="modal-img" style="width:50%">');
  imageElement.attr("src", pokemon.imageUrl);
  // creating height in modal content
  let heightElement = $("<p>" + "Height : " + pokemon.height + "</p>");
  // creating weight in modal content
  let weightElement = $("<p>" + "Weight : " + pokemon.weight + "</p>");

modalTitle.append(nameElement);
modalBody.append(imageElement);
modalBody.append(heightElement);
modalBody.append(weightElement);
$('#pokemonModal').modal('toggle');
}



 //calling a return, exercise 1.7
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
