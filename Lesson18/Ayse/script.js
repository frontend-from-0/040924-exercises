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
1. Define a ShoppingCart class.
2. Add a constructor that initializes an empty private
   array _items to store the cart items.
3. Add a viewCart method to display all items in the cart.
*/
/*
-----------------------------------------------------------
  STEP 2: Add Items to the Cart
-----------------------------------------------------------
1. Create an addItem method in the ShoppingCart class.
2. The method should:
   - Accept name, price, and quantity as parameters.
   - Check if the item already exists in the cart.
     - If it exists, increase the quantity.
     - Otherwise, add the new item to the _items array.
*/
/*
-----------------------------------------------------------
  STEP 3: Remove Items from the Cart
-----------------------------------------------------------
1. Add a removeItem method to the ShoppingCart class.
2. The method should:
   - Accept the name of the item to remove.
   - Remove the item from the _items array if it exists.
*/
/*
-----------------------------------------------------------
  STEP 4: Calculate the Total Cost
-----------------------------------------------------------
1. Add a getTotal method to the ShoppingCart class.
2. The method should:
   - Calculate and return the total cost of all items in
     the cart.
*/
/*
-----------------------------------------------------------
  STEP 5: Apply a Discount
-----------------------------------------------------------
1. Add an applyDiscount method to the ShoppingCart class.
2. The method should:
   - Accept a discount code (e.g., 'SAVE10', 'SAVE20').
   - Apply a percentage discount to the total cost if the
     code is valid.
3. Use an object to store discount codes and their values.
*/

console.log('---------- ShoppingCart Class ----------');

class ShoppingCart {
  constructor() {
    this._items = [];
    this._discounts = {
      "SAVE10": 0.10,
      "SAVE20": 0.20,
      "SAVE30": 0.30
    };
  }

  // STEP 1: View Cart
  viewCart() {
    if (this._items.length === 0) {
      console.log('Cart is empty');
    } else {
      console.log('Your cart contains:');
      this._items.forEach(item => {
        console.log(`${item.quantity}x ${item.name} - $${item.price} each`);
      });
      console.log(`Total cost: $${this.getTotal().toFixed(2)}`);
    }
  }

  // STEP 2: Add Item
  addItem(name, price, quantity) {
    const existingItem = this._items.find(item => item.name === name);

    if (existingItem) {
      existingItem.quantity += quantity;
      console.log(`${name} quantity increased to ${existingItem.quantity}`);
    } else {
      this._items.push({ name, price, quantity });
      console.log(`${quantity}x ${name} added to cart`);
    }
    this.showTotalQuantity();
  }

  // STEP 3: Remove Item
  removeItem(name) {
    const initialLength = this._items.length;
    this._items = this._items.filter(item => item.name !== name);

    if (this._items.length === initialLength) {
      console.log(`${name} not found in cart`);
    } else {
      console.log(`${name} removed from cart`);
    }
    this.showTotalQuantity();
  }

  // STEP 4: Calculate Total
  getTotal() {
    const total = this._items.reduce(
      (sum, item) => sum + (item.price * item.quantity),
      0
    );
    return parseFloat(total.toFixed(2));
  }

  // STEP 5: Apply Discount
  applyDiscount(code) {
    if (!this._discounts[code]) {
      console.log(`Invalid discount code: ${code}`);
      return this.getTotal();
    }

    const discount = this._discounts[code];
    const total = this.getTotal();
    const discountedTotal = total * (1 - discount);

    console.log(`Applied ${code} discount (${discount * 100}%)`);
    console.log(`Total after discount: $${discountedTotal.toFixed(2)}`);
    return parseFloat(discountedTotal.toFixed(2));
  }

  // Helper method: Show Total Quantity
  showTotalQuantity() {
    const totalQuantity = this._items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    console.log(`Total items in cart: ${totalQuantity}`);
  }
}

// Test the ShoppingCart
const cart = new ShoppingCart();

// Add items
cart.addItem('Apple', 2.5, 3);
cart.addItem('Banana', 1.75, 5);

// View cart
cart.viewCart();

// Remove item
cart.removeItem('Apple');

// View cart after removal
cart.viewCart();

// Get total cost
console.log("Total:", cart.getTotal());

// Apply discount
cart.applyDiscount("SAVE10");
cart.applyDiscount("SAVE20");
cart.applyDiscount("INVALIDCODE");



/*const myCart5 = new ShoppingCart();

myCart5.addItem('Apple', 5, 2);
myCart5.addItem('Banana', 10, 4);
myCart5.viewCart();

console.log(myCart5.getTotal());

myCart5.applyDiscount("SAVE10");
myCart5.applyDiscount("SAVE20");
myCart5.applyDiscount("INVALIDCODE");*/