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

class ShoppingCart {
  constructor() {
    this._items = [];
  }

  viewCart() {
    if (this._items.length > 0) {
      console.log("ShoppingCart Items: ");
      for (const item of this._items) {
        console.log(
          `${item.name}, price: ${item.price.value} ${item.price.currency}, quantity: ${item.quantity}`
        );
      }
    } else {
      console.log("Shopping Cart is empty");
    }
  }

  addItem(name, price, quantity) {
       // let maybeItem;

    // for (const item of this._items) {
    //   if (item.name === name) {
    //     maybeItem = item;
    //     break;
    //   }
    // }

    const existingItem = this._items.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem = { name, price, quantity };
      this._items.push(newItem);
    }
  }

  removeItem(name) {
    this._items = this._items.filter((item) => item.name !== name);
  }

  getTotal() {
    let total = 0;
    for (const item of this._items) {
      total += item.price.value * item.quantity;
    }
    return total;
  }

  applyDiscount(discountCode) {
    const discountCodes = {
      SAVE10: 10,
      SAVE20: 20,
    };

    const discountPercentage = discountCodes[discountCode] || 0;
    const total = this.getTotal();
    const discountedTotal = total - (total * discountPercentage) / 100;

    return discountedTotal;
  }
}

// Test the ShoppingCart class
const cart = new ShoppingCart();
cart.addItem("Shoes", { value: 75, currency: "USD" }, 2);
cart.addItem("Bag", { value: 100, currency: "USD" }, 1);
cart.viewCart();

console.log("Total before discount:", cart.getTotal());
console.log("Total after SAVE10 discount:", cart.applyDiscount("SAVE10"));

cart.removeItem("Shoes");
cart.viewCart();