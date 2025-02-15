/*
===========================================================
  RESTAURANT MANAGEMENT APP
===========================================================

*/

class MenuItem {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}
class Restaurant {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.menu = [];
    this.orders = [];
  }
  addMenuItem(name, price, category) {
    const newItem = new MenuItem(name, price, category);
    this.menu.push(newItem);
  }

  viewMenu() {
    if (this.menu.length === 0) {
      console.log("The menu is empty.");
      return;
    }

    console.log("Menu Items:");
    for (const menuItem of this.menu) {
      console.log(
        `${menuItem.name}, Price: $${menuItem.price}, Category: ${menuItem.category}`,
      );
    }
  }

  placeOrder(order) {
    console.log('Order placed successfully!');
    order.viewOrder();
    this.orders.push(order);
  }


  listOrders() {
    if (this.orders.length === 0) {
      console.log('No orders found.');
      return;
    }

    console.log('List of orders:');
    for (let i = 0; i < this.orders.length; i++) {
      console.log(`Order ${i + 1}:`);
      this.orders[i].viewOrder();
    }
  }

  calculateTotalBill() {
    let totalBill = 0;
    for (let i = 0; i < this.orders.length; i++) {
      totalBill += this.orders[i].calculateTotal();
    }
    console.log(`Total bill: $${totalBill.toFixed(2)}`);
    return totalBill;
  }

  applyDiscount(discountCode) {
    const discounts = {
      SAVE10: 0.1,
      SAVE20: 0.2
    };
    if (discounts[discountCode]) {
      const discountRate = discounts[discountCode];
      const totalBill = this.calculateTotalBill();
      const discountAmount = totalBill * discountRate;
      const newTotal = totalBill - discountAmount;
      console.log(`Discount applied: $${discountAmount.toFixed(2)}`);
      console.log(`Price after discount: $${newTotal.toFixed(2)}`);
    } else {
      console.log('Invalid discount code.');
      return;
    }
  }

}

class Order {
  constructor(restaurant) {
    this.restaurant = restaurant;
    this.items = [];
  }

  addItem(menuItemName, quantity) {
    const menuItem = this.restaurant.menu.find(item => item.name === menuItemName);
    if (!menuItem) {
      console.log('Item not found in the menu.');
      return;
    }
    const item = {
      name: menuItem.name,
      price: menuItem.price,
      quantity: quantity
    };
    this.items.push(item);
  }

  calculateTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  }

  viewOrder() {
    if (this.items.length === 0) {
      console.log("The order is empty.");
      return;
    }
    console.log("Order Items:");
    for (const item of this.items) {
      console.log(`${item.name}, Quantity: ${item.quantity}, Price: $${item.price}`);
    }
    console.log(`Total: $${this.calculateTotal()}`);
  }
}

const myRestaurant = new Restaurant("Happy Restaurant", "Sofia, Bulgaria");
myRestaurant.addMenuItem("Spaghetti", 12.99, "Main Course");
myRestaurant.addMenuItem("Pizza", 9.99, "Main Course");
myRestaurant.addMenuItem('Burger', 8.99, 'Main Course');
myRestaurant.viewMenu();

console.log('\n--- Order1 ---');
const order1 = new Order(myRestaurant);
order1.addItem('Spaghetti', 2);
order1.addItem('Pizza', 1);
myRestaurant.placeOrder(order1);

console.log('\n--- Order2 ---');
const order2 = new Order(myRestaurant);
order2.addItem('Burger', 1);
order2.addItem('Spaghetti', 1);
myRestaurant.placeOrder(order2);

console.log('\n--- List of orders ---');
myRestaurant.listOrders();

console.log('\n--- Total bill ---');
myRestaurant.calculateTotalBill();

console.log('\n--- Apply discount-20 ---');
myRestaurant.applyDiscount('SAVE20');

console.log('\n--- Apply discount-30 ---');
myRestaurant.applyDiscount('SAVE30');



/*
In this project, you'll create a simple restaurant 
management system where you can manage restaurants, their 
menus, and customer orders.

You'll practice:
1. Classes and objects
2. Methods and properties
3. Relationships between objects
4. CRUD operations (Create, Read, Update, Delete)

Follow the step-by-step guide below. Test each step 
before moving to the next one. */

/*
-----------------------------------------------------------
  STEP 1: Create the Restaurant Class
-----------------------------------------------------------
1. Define a `Restaurant` class.
2. The class should have the following properties:
   - `name`: Name of the restaurant.
   - `location`: Location of the restaurant.
   - `menu`: An array to store menu items.
3. Add a method `addMenuItem(name, price, category)` to add 
   a new item to the restaurant's menu.
4. Add a method `viewMenu()` to display all menu items.
*/

/*
-----------------------------------------------------------
  STEP 2: Create the MenuItem Class
-----------------------------------------------------------
1. Define a `MenuItem` class to represent a single menu item.
2. The class should have the following properties:
   - `name`: Name of the menu item.
   - `price`: Price of the menu item.
   - `category`: Category of the menu item (e.g., Appetizer, Main Course, Dessert).
3. Update the `addMenuItem()` method in the `Restaurant` 
   class to create a new `MenuItem` object and store it 
   in the `menu` array.
*/

/*
-----------------------------------------------------------
  STEP 3: Create the Order Class
-----------------------------------------------------------
1. Define an `Order` class to represent a customer's order.
2. The class should have the following properties:
   - `items`: An array to store ordered items.
3. Add the following methods:
   - `addItem(name, quantity)`: Add an item to the order.
   - `calculateTotal()`: Calculate the total price of 
     all items in the order.
   - `viewOrder()`: Display all items in the order and 
     the total price.
*/

/*
-----------------------------------------------------------
  STEP 4: Combine Restaurant and Order
-----------------------------------------------------------
1. Add a `placeOrder(order)` method to the `Restaurant` 
   class.
2. The method should:
   - Accept an `Order` object as a parameter.
   - Display the details of the order.
*/

/*
-----------------------------------------------------------
STEP 5: Stretch Goals
-----------------------------------------------------------
1. Add the ability to track multiple orders in the 
 `Restaurant` class.
2. Implement a method to list all orders placed.
3. Allow customers to request the bill (calculate the total 
 of all orders combined).
4. Add functionality for discounts or special offers.
*/
