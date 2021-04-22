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

(function() {
  let form = document.querySelector('#register-form');
  let emailInput = document.querySelector('#email');
  let passwordInput = document.querySelector('#password');

  function showErrorMessage(input, message) {
    let container = input.parentElement; // The .input-wrapper

    // Remove an existing error
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    // Now add the error, if the message is not empty
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateEmail() {
    let value = emailInput.value;

    if (!value) {
      showErrorMessage(emailInput, 'E-mail is a required field.');
      return false;
    }

    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  function validatePassword() {
    let value = passwordInput.value;

    if (!value) {
      showErrorMessage(passwordInput, 'Password is a required field.');
      return false;
    }

    if (value.length < 8) {
      showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long.');
      return false;
    }

    showErrorMessage(passwordInput, null);
    return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPassword = validatePassword();
    return isValidEmail && isValidPassword;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  });

  emailInput.addEventListener('input', validateEmail);
  passwordInput.addEventListener('input', validatePassword);
})();
