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

// 1. Create the ShoppingCart Class
console.log('---------- 1: Create the ShoppingCart Class ----------');

class ShoppingCart {
  constructor() {
    this._items = [];
  }

  viewCart() {
    if (this._items.length === 0) {
      console.log('Cart is empty');
    } else {
      console.log('Your cart contains: ', this._items);
    }
  }
}
const myCart = new ShoppingCart();
myCart.viewCart();

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
// 2. Add Items to the Cart
console.log('---------- 2: Add Items to the Cart ----------');

class ShoppingCart {
  constructor() {
    this._items = [];
  }

  addItem(name, price, quantity) {
    const existingItem = this._items.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += quantity;
      console.log(
        `${name} quantity increased by ${quantity}. Total: ${existingItem.quantity}`
      );
    } else {
      this._items.push({ name, price, quantity });
      console.log(`${name} added to cart. Quantity: ${quantity}`);
    }
    this.showTotalQuantity();
  }

  viewCart() {
    if (this._items.length === 0) {
      console.log('Cart is empty');
    } else {
      console.log('Your cart contains: ', this._items);
    }
  }

  showTotalQuantity() {
    const totalQuantity = this._items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    console.log(`Total items in cart: ${totalQuantity}`);
  }
}
const myCart2 = new ShoppingCart();
myCart2.viewCart();

myCart2.addItem('Apple', 5, 2);
myCart2.viewCart();

myCart2.addItem('Banana', 10, 4);
myCart2.viewCart();

/*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
1. Add a `removeItem` method to the `ShoppingCart` class.
2. The method should:
   - Accept the `name` of the item to remove.
   - Remove the item from the `_items` array if it exists.
*/

// 3. Remove Items from the Cart
console.log('---------- 3: Remove Items from the Cart ----------');

class ShoppingCart {
  constructor() {
    this._items = [];
  }

  viewCart() {
    if (this._items.length === 0) {
      console.log('Cart is empty');
    } else {
      console.log('Your cart contains: ', this._items);
    }
  }

  addItem(name, price, quantity) {
    const existingItem = this._items.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += quantity;
      console.log(
        `${name} quantity increased by ${quantity}. Total: ${existingItem.quantity}`
      );
    } else {
      this._items.push({ name, price, quantity });
    }
    this.showTotalQuantity();
  }

  removeItem(name) {
    const itemExists = this._items.find((item) => item.name === name);

    if (itemExists) {
      this._items = this._items.filter((item) => item.name !== name);
      console.log(`${name} removed from cart`);
    } else {
      console.log(`${name} not found in cart`);
    }
    this.showTotalQuantity();
  }

  showTotalQuantity() {
    const totalQuantity = this._items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    console.log(`Total items in cart: ${totalQuantity}`);
  }
}

const myCart3 = new ShoppingCart();
myCart3.viewCart();

myCart3.addItem('Apple', 5, 2);
myCart3.addItem('Banana', 10, 4);
myCart3.viewCart();

myCart3.removeItem('Apple');
myCart3.viewCart();

myCart3.removeItem('Grapes');

/*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
1. Add a `getTotal` method to the `ShoppingCart` class.
2. The method should:
   - Calculate and return the total cost of all items in
     the cart.
*/
// 4. Calculate the Total Cost
console.log('---------- 4: Calculate the Total Cost ----------');

class ShoppingCart {
  constructor() {
    this._items = [];
  }

  viewCart() {
    if (this._items.length === 0) {
      console.log(`Cart is empty.`);
    } else {
      console.log(`Your cart contains: `, this._items);
    }
  }

  addItem(name, price, quantity) {
    const existingItem = this._items.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += quantity;
      console.log(
        `${name} quantity increased by ${quantity}. Total: ${existingItem.quantity}`
      );
    } else {
      this._items.push({ name, price, quantity });
    }
    this.showTotalQuantity();
  }

  removeItem(name) {
    const itemExists = this._items.find((item) => item.name === name);
    if (itemExists) {
      this._items = this._items.filter((item) => item.name !== name);
      console.log(`${name} removed from cart`);
    } else {
      console.log(`${name} not found in cart`);
    }
    this.showTotalQuantity();
  }

  showTotalQuantity() {
    const totalQuantity = this._items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    console.log(`Total items in cart: ${totalQuantity}`);
  }

  getTotal() {
    const totalCost = this._items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    console.log(`Total cost: $${totalCost.toFixed(2)}`);
    return totalCost;
  }
}

const myCart4 = new ShoppingCart();

myCart4.addItem('Apple', 5, 2);
myCart4.addItem('Banana', 10, 4);
myCart4.viewCart();

myCart4.getTotal();

/*
-----------------------------------------------------------
  STEP 5: Apply a Discount
-----------------------------------------------------------
1. Add an `applyDiscount` method to the `ShoppingCart` class.
2. The method should:
   - Accept a discount code (e.g., 'SAVE10', 'SAVE20').
   - Apply a percentage discount to the total cost if the
     code is valid.
3. Use an object to store discount codes and their values.
*/
// 5. Apply a Discount
console.log('---------- 5: Apply a Discount ----------');

class ShoppingCart {
  constructor() {
    this._items = [];
    this._discounts = {
      SAVE10: 0.1,
      SAVE20: 0.2,
      SAVE30: 0.3,
    };
  }

  viewCart() {
    if (this._items.length === 0) {
      console.log(`Cart is empty.`);
    } else {
      console.log(`Your cart contains: `);
      this._items.forEach((item) => {
        console.log(`${item.quantity} x ${item.name} - $${item.price}`);
      });
      console.log(`Total cost: $${this.getTotal().toFixed(2)}`);
    }
  }

  addItem(name, price, quantity) {
    const existingItem = this._items.find((item) => item.name === name);

    if (existingItem) {
      existingItem.quantity += quantity;
      console.log(
        `${name} quantity increased by ${quantity}. Total: ${existingItem.quantity}`
      );
    } else {
      this._items.push({ name, price, quantity });
    }
    this.showTotalQuantity();
  }

  showTotalQuantity() {
    const totalQuantity = this._items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    console.log(`Total items in cart: ${totalQuantity}`);
  }

  getTotal() {
    const totalCost = this._items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return totalCost;
  }

  applyDiscount(code) {
    if (this._discounts.hasOwnProperty(code)) {
      const discountRate = this._discounts[code];
      const total = this.getTotal();
      const discountedTotal = total - total * discountRate;
      console.log(`Discount applied: ${code} (${discountRate * 100}%)`);
      console.log(`Total after discount: $${discountedTotal.toFixed(2)}`);
      return discountedTotal;
    } else {
      console.log(`Invalid discount code: ${code}`);
      return this.getTotal();
    }
  }
}

const myCart5 = new ShoppingCart();

myCart5.addItem('Apple', 5, 2);
myCart5.addItem('Banana', 10, 4);
myCart5.viewCart();

console.log(myCart5.getTotal());

myCart5.applyDiscount('SAVE10');
myCart5.applyDiscount('SAVE20');
myCart5.applyDiscount('INVALIDCODE');
