
const products = [
  { id: 1, name: 'T-Shirt', price: 45 },
  { id: 2, name: 'Jeans', price: 50 },
  { id: 3, name: 'Jacket', price: 90 },
  { id: 4, name: 'Sneakers', price: 80 },
  { id: 5, name: 'Shoes', price: 150 },
];
let cart = [];

const productsDiv = document.getElementById('products');

products.forEach(product => {
  const productDiv = document.createElement('div');
  productDiv.className = 'product';

  productDiv.innerHTML = `
    <h3>${product.name}</h3>
    <p>Price: $${product.price}</p>
    <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productsDiv.appendChild(productDiv);
});
function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  const existingItem = cart.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}
function removeFromCart(productId) {
  var c= confirm('Do You Want To Remove That');
  if(c===true){
  cart = cart.filter(item => item.id !== productId);
  updateCart();
  }
}

function updateCart() {
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';

  let totalPrice = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    totalPrice += itemTotal;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price}</td>
      <td>${item.quantity}</td>
      <td>$${itemTotal}</td>
      <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
    `;
    cartItems.appendChild(row);
  });

  document.getElementById('totalPrice').textContent = `Total Price: $${totalPrice}`;
}

