/*
===========================================================
  SHOPPING CART APPLICATION
===========================================================
In this project, you'll create a simple Shopping Cart to
simulate adding items, removing items, calculating totals,
and applying discounts.

You'll practice:
1. Classes and objects
2. Encapsulation and abstraction
3. Methods (functions inside a class)
4. Arrays and basic array methods (push, filter, find)
5. Conditional statements (if-else)

Below is a step-by-step guide with comments explaining
each part. You can test each step by running the code in
Node.js or a browser console.
*/

/*
-----------------------------------------------------------
  STEP 1: Create the ShoppingCart Class
-----------------------------------------------------------
1. Define a `ShoppingCart` class.
2. Add a constructor that initializes an empty private 
   array `_items` to store the cart items.
3. Add a `viewCart` method to display all items in the cart.
*/

// Removed redundant declaration of ShoppingCart class

/*
-----------------------------------------------------------
  STEP 2: Add Items to the Cart
-----------------------------------------------------------
1. Create an `addItem` method in the `ShoppingCart` class.
2. The method should:
   - Accept `name`, `price`, and `quantity` as parameters.
   - Check if the item already exists in the cart.
     - If it exists, increase the quantity.
     - Otherwise, add the new item to the `_items` array.
*/

class ShoppingCart {
  constructor() {
    this._items = [];
  }

  viewCart() {
    if (this._items.length > 0) {
      console.log('ShoppingCart Items: ');
      for (const item of this._items) {
        console.log(
          `${item.name}, price: ${item.price.value} ${item.price.currency}, quantity: ${item.quantity}`
        );
      }
    } else {
      console.log('Shopping Cart is empty');
    }
  }

  addItem(name, price, quantity) {
    const existingItem = this._items.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem = { name, price, quantity };
      console.log('Adding new item: ', newItem);
      this._items.push(newItem);
    }
  }

  removeItem(name) {
    const updatedItems = [];
    for (const item of this._items) {
      if (item.name !== name) {
        updatedItems.push(item);
      }
    }
    this._items = updatedItems;
  }

  getTotal() {
    let total = 0;
    for (const item of this._items) {
      total += item.price.value * item.quantity;
    }
    return total;
  }

  applyDiscount(code) {
    const discounts = {
      SAVE10: 0.1,
      SAVE20: 0.2,
    };
    const discount = discounts[code];
    if (discount) {
      const total = this.getTotal();
      return total - total * discount;
    } else {
      console.log('Invalid discount code');
      return this.getTotal();
    }
  }
}

const cart1 = new ShoppingCart();
cart1.viewCart();

cart1.addItem('Shoes', { value: 75, currency: 'USD' }, 2);
cart1.addItem('Shoes', { value: 75, currency: 'USD' }, 4);

cart1.addItem('Bag', { value: 100, currency: 'USD' }, 1);
cart1.viewCart();

cart1.removeItem('Bag');
cart1.viewCart();
