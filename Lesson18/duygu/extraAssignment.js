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
  }

  addMenuItem(name, price, category) {
      const newItem = new MenuItem(name, price, category);
      this.menu.push(newItem);
  }

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
