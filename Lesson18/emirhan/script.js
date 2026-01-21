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

/*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
1. Add a `removeItem` method to the `ShoppingCart` class.
2. The method should:
   - Accept the `name` of the item to remove.
   - Remove the item from the `_items` array if it exists.
*/

/*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
1. Add a `getTotal` method to the `ShoppingCart` class.
2. The method should:
   - Calculate and return the total cost of all items in 
     the cart.
*/

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

const discountCodes = {
  SAVE10: 10,
  SAVE20: 20,
  SAVE30: 30,
};

class ShoppingCart {
  constructor() {
    this._items = [];
  }
  viewCart() {
    return console.log(this._items);
  }

  addItem(name, price, quantity) {
    const existingItem = this._items.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this._items.push({ name, price, quantity });
    }
  }
  removeItem(name) {
    const index = this._items.findIndex((item) => item.name === name);
    if (index === -1) {
      console.error(`No product found with the name: ${name} `);
    } else {
      this._items.splice(index, 1);
      console.log('Product removed successfully');
    }
  }
  getTotal() {
    let totalPrice = 0;
    for (let i = 0; i < this._items.length; i++) {
      totalPrice += this._items[i].price * this._items[i].quantity;
    }
    return totalPrice;
  }
  applyDiscount(code) {
    const totalPrice = this.getTotal();
    if (!discountCodes[code]) {
      console.log('Invalid discount code');
      return totalPrice;
    }
    const discountPercent = discountCodes[code];
    const discountedTotal = totalPrice - (totalPrice * discountPercent) / 100;
    console.log(`${discountPercent}% discount applied`);
    return discountedTotal;
  }
}

console.log('--- CART TEST START ---');

const cart = new ShoppingCart();

console.log('\n1️⃣ View empty cart');
cart.viewCart();

console.log('\n2️⃣ Add items');
cart.addItem('Shoes', 100, 2);
cart.addItem('T-Shirt', 50, 1);
cart.viewCart();

console.log('\n3️⃣ Add same item again (quantity should increase)');
cart.addItem('Shoes', 100, 1);
cart.viewCart();

console.log('\n4️⃣ Get total (expected: 350)');
console.log('Total:', cart.getTotal());

console.log('\n5️⃣ Apply valid discount (SAVE10 → expected: 315)');
console.log('Discounted total:', cart.applyDiscount('SAVE10'));

console.log('\n6️⃣ Apply invalid discount (NOPE → expected: 350)');
console.log('Discounted total:', cart.applyDiscount('NOPE'));

console.log('\n7️⃣ Remove item (T-Shirt)');
cart.removeItem('T-Shirt');
cart.viewCart();

console.log('\n8️⃣ Remove non-existing item');
cart.removeItem('Laptop');

console.log('\n9️⃣ Final total (expected: 300)');
console.log('Total:', cart.getTotal());

console.log('--- CART TEST END ---');
