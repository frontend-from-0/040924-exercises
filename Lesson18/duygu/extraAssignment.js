class Restaurant {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.menu = [];
    this.orders = []; // To track multiple orders
  }

  addMenuItem(name, price, category) {
    const menuItem = new MenuItem(name, price, category);
    this.menu.push(menuItem);
  }

  viewMenu() {
    console.log(`Menu of ${this.name}:`);
    this.menu.forEach((item) => {
      console.log(`${item.name} - $${item.price} (${item.category})`);
    });
  }

  placeOrder(order) {
    this.orders.push(order);
    console.log("Order placed successfully:");
    order.viewOrder();
  }

  listAllOrders() {
    console.log("All Orders:");
    this.orders.forEach((order, index) => {
      console.log(`Order #${index + 1}:`);
      order.viewOrder();
    });
  }

  calculateTotalRevenue() {
    return this.orders.reduce(
      (total, order) => total + order.calculateTotal(),
      0,
    );
  }

  requestBill() {
    const totalRevenue = this.calculateTotalRevenue();
    console.log(`Total Bill for all orders: $${totalRevenue}`);
  }

  applyDiscount(discountPercentage) {
    const totalRevenue = this.calculateTotalRevenue();
    const discountedTotal =
      totalRevenue - totalRevenue * (discountPercentage / 100);
    console.log(
      `Total after ${discountPercentage}% discount: $${discountedTotal.toFixed(2)}`,
    );
  }
}

class MenuItem {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

class Order {
  constructor() {
    this.items = [];
  }

  addItem(menuItem, quantity) {
    this.items.push({ menuItem, quantity });
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.menuItem.price * item.quantity,
      0,
    );
  }

  viewOrder() {
    console.log("Order Summary:");
    this.items.forEach((item) => {
      console.log(
        `${item.quantity}x ${item.menuItem.name} - $${item.menuItem.price * item.quantity}`,
      );
    });
    console.log(`Total Price: $${this.calculateTotal()}`);
  }
}

const myRestaurant = new Restaurant("CafeNorda", "Downtown");
myRestaurant.addMenuItem("Steak", 12, "Main Course");
myRestaurant.addMenuItem("Salad", 6, "Appetizer");
myRestaurant.addMenuItem("Cheese Cake", 8, "Dessert");

myRestaurant.viewMenu();

const myOrder = new Order();
myOrder.addItem(myRestaurant.menu[0], 2);
myOrder.addItem(myRestaurant.menu[2], 1);

myRestaurant.placeOrder(myOrder);
myRestaurant.listAllOrders();
console.log(`Total Revenue: $${myRestaurant.calculateTotalRevenue()}`);

myRestaurant.requestBill();
myRestaurant.applyDiscount(10);

/*
===========================================================
  RESTAURANT MANAGEMENT APP
===========================================================
In this project, you'll create a simple restaurant 
management system where you can manage restaurants, their 
menus, and customer orders.

You'll practice:
1. Classes and objects
2. Methods and properties
3. Relationships between objects
4. CRUD operations (Create, Read, Update, Delete)

Follow the step-by-step guide below. Test each step 
before moving to the next one.
*/

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
