// Functie om de producten te filteren op basis van de geselecteerde categorie
function filterProducts() {
  const category = document.getElementById('category').value;
  const products = document.querySelectorAll('.product-item');

  products.forEach(product => {
    if (category === 'all' || product.getAttribute('data-category') === category) {
      product.style.display = 'block'; // Toon het product
    } else {
      product.style.display = 'none'; // Verberg het product
    }
  });
}
