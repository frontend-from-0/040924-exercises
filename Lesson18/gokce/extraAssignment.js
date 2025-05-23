class Restaurant {
  constructor(name, location) {
    this._name = name;
    this._location = location;
    this._menu = [];
    this._orders = [];
  }
  addMenuItem(name, price, category) {
    const newItem = new MenuItem(name, price, category);
    this._menu.push(newItem);
  }
  viewMenu() {
    if (this._menu.length > 0) {
      console.log(`Menu of ${this._name}:`);
      this._menu.forEach((item) => {
        console.log(`${item._name} - $${item._price} (${item._category})`);
      });
    } else {
      console.log(`The menu for ${this._name} is currently empty.`);
    }
  }
  placeOrder(order) {
    console.log(`Order placed at ${this._name}, ${this._location}`);
    this._orders.push(order);
    order.viewOrder();
  }
  listAllOrders() {
    if (this._orders.length === 0) {
      console.log('There is no any order.');
      return;
    }
    console.log(`Orders for ${this._name}`);
    this._orders.forEach((order, index) => {
      console.log(`Order ${index + 1}`);
      order.viewOrder();
    });
  }
  calculateTotalOfAllOrders() {
    if (this._orders.length === 0) {
      console.log('There is no orders.');
      return;
    }
    let allOrdersTotal = 0;
    this._orders.forEach((order) => {
      allOrdersTotal += order.calculateTotal();
    });
    return allOrdersTotal;
  }
}

class MenuItem {
  constructor(name, price, category) {
    this._name = name;
    this._price = price;
    this._category = category;
  }
}

class Order {
  constructor() {
    this._items = [];
  }
  addItem(name, quantity, price, category) {
    const item = new MenuItem(name, price, category);
    this._items.push({ item, quantity });
  }
  calculateTotal() {
    let total = 0;
    for (let i = 0; i < this._items.length; i++) {
      total += this._items[i].item._price * this._items[i].quantity;
    }
    return total;
  }
  viewOrder() {
    for (let i = 0; i < this._items.length; i++) {
      const entry = this._items[i];
      console.log(
        `${entry.item._name} x ${entry.quantity}: $${
          entry.item._price * entry.quantity
        }`
      );
    }
    console.log('Total: $' + this.calculateTotal());
  }
  applyDiscount(discountCode) {
    const discounts = {
      SAVE10: 10,
      SAVE20: 20,
      SAVE30: 30,
    };
    let total = this.calculateTotal();

    if (total === 0) {
      console.log('No items in order.Discount code cannot be aplied');
      return total;
    }
    if (!(discountCode in discounts)) {
      console.log('The discount code is not valid');
      return total;
    }
    let discountAmount = (total * discounts[discountCode]) / 100;
    let result = total - discountAmount;
    return result;
  }
}
module.exports = { Restaurant, MenuItem, Order };
