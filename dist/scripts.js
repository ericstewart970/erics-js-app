let pokemonRepository = (function() {
  let t = [],
    e = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  function n(e) {
    'object' == typeof e && 'name' in e
      ? t.push(e)
      : console.log('pokemon is not correct');
  }
  function o(t) {
    let e = t.detailsUrl;
    return fetch(e)
      .then(function(t) {
        return t.json();
      })
      .then(function(e) {
        (t.imageUrl = e.sprites.front_default),
          (t.height = e.height),
          (t.weight = e.weight),
          (t.types = e.types);
      })
      .catch(function(t) {
        console.error(t);
      });
  }
  function i(t) {
    o(t).then(function() {
      !(function(t) {
        let e = $('.modal-body'),
          n = $('.modal-title');
        $('.modal-header');
        n.empty(), e.empty();
        let o = $('<h1>' + t.name + '</h1>'),
          i = $('<img class="modal-img" style="width:50%">');
        i.attr('src', t.imageUrl);
        let a = $('<p>Height : ' + t.height + '</p>'),
          l = $('<p>Weight : ' + t.weight + '</p>');
        n.append(o),
          e.append(i),
          e.append(a),
          e.append(l),
          $('#pokemonModal').modal('toggle');
      })(t);
    });
  }
  return {
    add: n,
    getAll: function() {
      return t;
    },
    addListItem: function(t) {
      let e = $('.pokemon-list'),
        n = $('<li></li>');
      const o = $(
        '<button type="button" class="button-class" data-toggle="modal" data-target="pokemonModal">' +
          t.name +
          '</button>'
      );
      o.addClass('btn btn-primary'),
        n.append(o),
        e.append(n),
        o.click(function() {
          i(t);
        });
    },
    loadList: function() {
      return fetch(e)
        .then(function(t) {
          return t.json();
        })
        .then(function(t) {
          t.results.forEach(function(t) {
            n({ name: t.name, detailsUrl: t.url });
          });
        })
        .catch(function(t) {
          console.error(t);
        });
    },
    loadDetails: o,
    showDetails: i
  };
})();
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(t) {
    pokemonRepository.addListItem(t);
  });
});
