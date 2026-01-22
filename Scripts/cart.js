let cartCount = 0;
const cartQuantityElement = document.querySelector('.js-cart-quantity');

// Add click event to all products
document.querySelectorAll('.product-container').forEach(product => {
  product.addEventListener('click', () => {
      cartCount++;
      cartQuantityElement.textContent = cartCount;
      alert('Product added to cart!');
  });
});