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

   viewMenu() {
      console.log(`Menu for ${this.name}:`);
      this.menu.forEach(item => {
         console.log(`${item.name} - ${item.price} USD - Category: ${item.category}`);
      });
   }

   placeOrder(order) {
      this.orders.push(order);
      console.log(`Order placed successfully!`);
      order.viewOrder();
      const total = order.calculateTotal(this);
      console.log(`Total amount: ${total} USD`);
   }

   listOrders() {
      this.orders.forEach((order, index) => {
         console.log(`Order ${index + 1}:`);
         order.viewOrder();
      });
   }

   calculateTotal() {
      return this.orders.reduce((total, order) => total + order.calculateTotal(this), 0);
   }
}



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

class MenuItem {
   constructor(name, price, category) {
      this.name = name;
      this.price = price;
      this.category = category;
   }
}


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

class Order {
   constructor() {
      this.items = [];
   }

   addItem(name, quantity) {
      this.items.push({ name, quantity });
   }

   calculateTotal(restaurant) {
      let total = 0;
      this.items.forEach(orderItem => {
         const menuItem = restaurant.menu.find(item => item.name === orderItem.name);
         if (menuItem) {
            total += menuItem.price * orderItem.quantity;
         }
      });
      return total;
   }

   viewOrder() {
      console.log('Order details:');
      this.items.forEach(item => {
         console.log(`${item.name} x${item.quantity}`);
      });
   }
}

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

placeOrder(order) {
   this.orders.push(order);
   console.log(`Order placed successfully!`);
   order.viewOrder();
   const total = order.calculateTotal(this);
   console.log(`Total amount: ${total} USD`);
}

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

listOrders() {
   this.orders.forEach((order, index) => {
      console.log(`Order ${index + 1}:`);
      order.viewOrder();
   });
}

calculateTotal() {
   return this.orders.reduce((total, order) => total + order.calculateTotal(this), 0);
}
}