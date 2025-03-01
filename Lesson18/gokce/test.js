const { Restaurant, MenuItem, Order } = require('./extraAssignment.js');
const myRestaurant = new Restaurant('ASPAVA', 'ANKARA');

myRestaurant.addMenuItem('cake', 17, 'dessert');
myRestaurant.addMenuItem('pizza', 25, 'main course');
myRestaurant.addMenuItem('salad', 10, 'appetizer');

myRestaurant.viewMenu();

const myOrder = new Order();

myOrder.addItem('cake', 2, 17, 'dessert');

myRestaurant.placeOrder(myOrder);
myRestaurant.listAllOrders();
console.log(
  'Total of all orders: $' + myRestaurant.calculateTotalOfAllOrders()
);

console.log(
  'Total after discount (SAVE10): $' + myOrder.applyDiscount('SAVE10')
);
