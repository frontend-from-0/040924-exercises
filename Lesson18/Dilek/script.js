/*
===========================================================
  SHOPPING CART APPLICATION
===========================================================
*/

class ShoppingCart {
  constructor() {
    this._items = [];
  }

  // VIEW CART
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

  // ADD ITEM
  addItem(name, priceValue, quantity, currency = 'USD') {
    const price = { value: priceValue, currency };
    const existingItem = this._items.find((item) => item.name === name);
    if (existingItem) {
      existingItem.quantity += quantity;
      console.log(
        `Updated quantity for '${name}'. New quantity: ${existingItem.quantity}`
      );
    } else {
      const newItem = { name, price, quantity };
      this._items.push(newItem);
      console.log('New item added: ', newItem);
    }
  }

  // REMOVE ITEM
  removeItem(name) {
    const updatedItems = [];
    for (const item of this._items) {
      if (item.name !== name) {
        updatedItems.push(item);
      }
    }
    this._items = updatedItems;
  }

  // GET TOTAL
  getTotal() {
    let total = 0;
    for (const item of this._items) {
      total += item.price.value * item.quantity;
    }
    return total;
  }

  // APPLY DISCOUNT
  applyDiscount(code) {
    const discounts = {
      SAVE10: 0.1,
      SAVE20: 0.2,
    };

    if (discounts[code]) {
      const discountAmount = this.getTotal() * discounts[code];
      const newTotal = this.getTotal() - discountAmount;
      this.total -= discountAmount;
      console.log(`Discount applied: ${discountAmount.toFixed(2) + ' USD'}`);
      console.log(
        `Price after discount: ${this.getTotal().toFixed(2) + ' USD'}`
      );
    } else {
      console.log('Invalid discount code.');
    }
  }
}

// TEST
const cart = new ShoppingCart();
cart.addItem('Apple', 10, 2, 'USD');
cart.addItem('Banana', 20, 1, 'USD');
cart.addItem('Apple', 10, 3, 'USD');
cart.viewCart();

console.log('\n- Add Item -');
cart.addItem('Cherry', 5, 5, 'USD');
cart.viewCart();

console.log('\n- Remove Item -');
cart.removeItem('Apple');
cart.viewCart();

console.log('\nTotal Price: $' + cart.getTotal().toFixed(2));

console.log('\n- Discount -');
cart.applyDiscount('SAVE10');
cart.applyDiscount('SAVE30');

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
   - Accept a discount code (e.g., 'SAVE10').
   - Apply a percentage discount to the total cost if the 
     code is valid.
3. Use an object to store discount codes and their values.
*/
