let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {

  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');

  if (!cartItems) return;

  let total = 0;

  cartItems.innerHTML = '';

  cart.forEach(item => {

    total += item.price;

    cartItems.innerHTML += `
      <div>
        <h3>${item.name}</h3>
        <p>$${item.price}</p>
      </div>
    `;
  });

  totalPrice.innerText = `Total: $${total}`;
}

async function placeOrder(orderData) {

  const response = await fetch('http://localhost:5000/api/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderData)
  });

  const data = await response.json();

  alert(data.message);

  localStorage.removeItem('cart');
}

const checkoutForm = document.getElementById('checkout-form');

if (checkoutForm) {

  checkoutForm.addEventListener('submit', async (e) => {

    e.preventDefault();

    const orderData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      items: cart
    };

    await placeOrder(orderData);
  });
}

displayCart();