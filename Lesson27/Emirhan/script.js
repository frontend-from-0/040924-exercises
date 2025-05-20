// 5. Nested Object Destructuring
// Given the following nested object, use object destructuring to assign the values of name, age, and city to their respective variables:
const personE17 = {
  name: 'John Doe',
  age: 25,
  address: {
    city: 'New York',
  },
};
const {
  name,
  age,
  address: { city },
} = personE17;

console.log(`Name: ${name}, Age: ${age}, City: ${city}`);

// 7. Default Parameters
// Add Default Parameters to an Existing Arrow Function, Default tax rate 0.1, default discount is 0.
const calculateTotal = (price, taxRate = 0.1, discount = 0) => {
  return price + price * taxRate - discount;
};
console.log(calculateTotal(10, 0.2, 5));

// 9. Handle Missing Properties
// Update the code to use optional chaining to safely access userCountry (userEx9.profile.address.country) and provide a default value of 'Unknown' if the property is missing.

const userEx9 = {
  profile: {
    name: 'Alice',
  },
};
console.log('Exercise 9');
console.log(userEx9.profile?.address?.country ?? 'Unknown');

// 10. Optional Chaining with Function Calls
// Update the code to safely call the getName function using optional chaining, considering that profile or getName might be missing.

const userEx10 = {
  profile: {
    getName: () => 'Alice',
  },
};

console.log('Exercise 10');
console.log(userEx10.profile?.getName() ?? 'No name avilable');

// 11. Rewrite the code using the nullish coalescing operator to assign a default value to storedData only if userInput is null or undefined.
let userInput;
let storedData = userInput ?? 'Default Value';
console.log('Ex 11');
console.log(storedData); // Default Value

// 12. Rewrite the code using the nullish coalescing operator to display number of users even if it is 0.
let userCount = 0;
let displayCount = userCount ?? 'No users';
console.log('Ex 12');
console.log(displayCount); // No users

// 13. Rewrite the code using the nullish coalescing operator to assign a default value of 3000 to timeout if config.timeout is null or undefined.

const config = {
  timeout: undefined,
};

const timeout = config.timeout ?? 3000;
console.log('Ex 13');
console.log(timeout); // 3000
