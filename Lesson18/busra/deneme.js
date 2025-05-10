class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(name, price) {
    let item = this.items.find(i => i.name === name);
    if (item) {
      item.quantity++;
    } else {
      this.items.push({ name, price, quantity: 1 });
    }
    this.updateCart();
  }

  updateCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    let total = 0;

    this.items.forEach(item => {
      total += item.price * item.quantity;
      cartItems.innerHTML += `<div class='cart-item'>${item.name} x${item.quantity} <button onclick="cart.removeItem('${item.name}')">Kaldır</button></div>`;
    });

    document.getElementById('total').innerText = total;
  }

  removeItem(name) {
    this.items = this.items.filter(i => i.name !== name);
    this.updateCart();
  }

  applyDiscount() {
    let code = document.getElementById('discountCode').value;
    let discounts = { 'SAVE10': 0.1, 'SAVE20': 0.2 };
    let discount = discounts[code] || 0;
    let total = parseFloat(document.getElementById('total').innerText);
    total = total - (total * discount);
    document.getElementById('total').innerText = total.toFixed(2);
  }

  clearCart() {
    this.items = [];
    this.updateCart();
  }
}


document.addEventListener("DOMContentLoaded", () => {
  window.cart = new ShoppingCart();
});
