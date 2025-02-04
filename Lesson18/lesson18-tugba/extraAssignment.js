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

// Menüdeki her bir öğeyi temsil eden sınıf
class MenuItem {
  constructor(name, price, category) {
    this.name = name; 
    this.price = price; 
    this.category = category; 
  }
}

// Restoran sınıfı (Burada restoranın tüm işleri hallediliyor!)
class Restaurant {
  constructor(name, location) {
    this.name = name; 
    this.location = location; 
    this.menu = [];  // Menü burada saklanacak
    this.orders = [];  // Alınan tüm siparişleri burada tutuluyor!
  }

  // Menüye yeni bir öğe eklemek için
  addMenuItem(name, price, category) {
    const menuItem = new MenuItem(name, price, category); 
    this.menu.push(menuItem); // Menüyü güncelle!
  }

  // Menüyü ekrana yazdır 
  viewMenu() {
    console.log(`Menu for ${this.name} in ${this.location}:`);
    this.menu.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name} - ${item.price} USD (${item.category})`);
    });
  }

  // Bir sipariş al (Siparişi kayıt altına alıyoruz ve detayları gösteriyoruz)
  placeOrder(order) {
    this.orders.push(order); 
    console.log("Order placed successfully!"); 
    order.viewOrder(); 
  }

  // Tüm siparişleri listele 
  listAllOrders() {
    console.log("All Orders:");
    this.orders.forEach((order, index) => {
      console.log(`Order ${index + 1}:`);
      order.viewOrder(); // Her siparişi sırayla göster
    });
  }

  // Restoranın toplam gelirini hesaplama!
  calculateTotalRevenue() {
    let totalRevenue = 0; 
    this.orders.forEach(order => {
      totalRevenue += order.calculateTotal(); // Her siparişin toplamını ekliyoruz
    });
    console.log(`Total Revenue: ${totalRevenue} USD`); 
    return totalRevenue;
  }

  // Bir siparişe indirim uygula (Müşteriye jest yapıyoruz!)
  applyDiscount(order, discountRate) {
    const totalBeforeDiscount = order.calculateTotal(); // İndirim öncesi toplam
    const discount = totalBeforeDiscount * (discountRate / 100); // İndirim miktarı
    const totalAfterDiscount = totalBeforeDiscount - discount; // İndirim sonrası toplam
    console.log(
      `Discount Applied: ${discountRate}% (${discount} USD). New Total: ${totalAfterDiscount} USD`
    );
    return totalAfterDiscount;
  }
}

// Sipariş sınıfı (Müşterinin siparişini burada yönetiyoruz!)
class Order {
  constructor() {
    this.items = []; // Sipariş edilen öğeler burada saklanıyor!
  }

  // Siparişe yeni bir öğe ekle 
  addItem(name, quantity, price) {
    const item = { name, quantity, price }; // Sipariş detaylarını bir nesneye ata!
    this.items.push(item); 
  }

  // Toplam fiyatı hesapla 
  calculateTotal() {
    let total = 0; 
    this.items.forEach(item => {
      total += item.price * item.quantity; // Fiyat ve miktarı çarpıp toplama ekliyorum
    });
    return total;
  }

  // Siparişi ekrana yazdır !
  viewOrder() {
    console.log("Your Order:");
    this.items.forEach((item, index) => {
      console.log(
        `${index + 1}. ${item.name} - ${item.quantity} x ${item.price} USD`
      );
    });
    console.log(`Total: ${this.calculateTotal()} USD`);
  }
}

// -----------------------------------------------------------
// Test Kodu
// -----------------------------------------------------------

// Restoran oluştur 
const myRestaurant = new Restaurant("Gourmet Haven", "New York");

// Menü öğeleri 
myRestaurant.addMenuItem("Cheeseburger", 8, "Main Course");
myRestaurant.addMenuItem("Apple Pie", 4, "Dessert");


myRestaurant.viewMenu();

// Siparişler oluştur 
const order1 = new Order();
order1.addItem("Cheeseburger", 2, 8);
order1.addItem("Apple Pie", 1, 4);

const order2 = new Order();
order2.addItem("Cheeseburger", 3, 8);
order2.addItem("Apple Pie", 2, 4);

// Siparişleri restoran üzerinden yerleştir!
myRestaurant.placeOrder(order1);
myRestaurant.placeOrder(order2);

// Tüm siparişleri listele 
myRestaurant.listAllOrders();

// Toplam geliri hesapla 
myRestaurant.calculateTotalRevenue();

//Indirim Uygula!
myRestaurant.applyDiscount(order1, 10);