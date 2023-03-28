// const searchInput = document.querySelector('#search-input');
// searchInput.addEventListener('keypress', function(event) {
//   if (event.key === 'Enter') {
//     const searchTerm = searchInput.value;
//     // código de búsqueda aquí
//     window.location.href = '/busqueda?q=' + searchTerm;
//   }
// });

// Obtiene los elementos de la lista de productos
var productList = document.querySelectorAll('.product');

// Obtiene el input del header
var input = document.getElementById('main-header__input');

// Escucha el evento "keyup" en el input
input.addEventListener('keyup', function() {
  // Obtiene el valor del input
  var searchString = input.value.toLowerCase();

  // Itera a través de cada elemento de la lista de productos
  for (var i = 0; i < productList.length; i++) {
    var product = productList[i];

    // Obtiene el nombre del producto
    var productName = product.getAttribute('data-name').toLowerCase();

    // Verifica si el valor de búsqueda está incluido en el nombre del producto
    if (productName.indexOf(searchString) === -1) {
      // Si el valor de búsqueda no está incluido, oculta el producto
      product.style.display = 'none';
    } else {
      // Si el valor de búsqueda está incluido, muestra el producto
      product.style.display = 'block';
    }
  }
});