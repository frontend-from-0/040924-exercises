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

/*1*/

class Restaurant {
  constructor(name, location, menu = [], order = []) {
    this.name = name;
    this.location = location;
    this.menu = menu;
    this.order = order;
  }

  addMenuItem(name, price, category) {
    const menuItem = { name, price, category };
    this.menu.push(menuItem);
  }

  viewMenu() {
    if (this.menu.length > 0) {
      console.log('Menu: ');
      for (const item of this.menu) {
        console.log(
          `name: ${item.name}, price: ${item.price}, category: ${item.category}`
        );
      }
    } else {
      console.log('Menu is empty');
    }
  }

  /*4*/
  placeOrder(order) {
    if (Array.isArray(order)) {
      this.order.push(...order); // Spread operator to add multiple orders
    } else {
      this.order.push(order); // Add a single order
    }
  }

  /*5*/
}

/*2*/
class MenuItem {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }
}

/*3*/

class Order {
  constructor(items = []) {
    this.items = items;
  }

  addItem(name, quantity, price) {
    const addItem = { name, quantity, price };
    this.items.push(addItem);
  }

  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  viewOrder() {
    if (this.items.length > 0) {
      console.log('Order: ');
      for (const item of this.items) {
        console.log(`${item.name}, price: ${item.price}`);
      }
    } else {
      console.log('Order is empty');
    }
  }
}

// Usage
const myRestaurant = new Restaurant('Royal', 'Downtown');

myRestaurant.addMenuItem('Burger', 8.99, 'Main Course');
myRestaurant.addMenuItem('Pasta', 12.99, 'Main Course');
myRestaurant.addMenuItem('Ice Cream', 4.99, 'Dessert');

myRestaurant.viewMenu();

myRestaurant.placeOrder({ id: 1, item: 'Sushi', quantity: 2 });

const pizza = new MenuItem('Margherita Pizza', 10.99, 'Main Course');
console.log(pizza.name);
console.log(pizza.price);
console.log(pizza.category);

const myOrder = new Order();

myOrder.addItem('Lemonade', 2, 2.99);
myOrder.addItem('Fries', 1, 3.49);
myOrder.addItem('Soda', 3, 1.99);

myOrder.viewOrder();

const total = myOrder.calculateTotal();
console.log(`Total: $${total.toFixed(2)}`);
