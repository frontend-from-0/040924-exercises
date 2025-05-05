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

console.log(name);
console.log(age);
console.log(city);

// 7. Default Parameters
// Add Default Parameters to an Existing Arrow Function, Default tax rate 0.1, default discount is 0.
const calculateTotal = (price, taxRate, discount) => {
  return price + price * taxRate - discount;
};

const calculateTotalWithDefaults = (price, taxRate = 0.1, discount = 0) => {
  return price + price * taxRate - discount;
};

console.log(calculateTotalWithDefaults(100));
console.log(calculateTotalWithDefaults(100, 0.2));

// 9. Handle Missing Properties
// Update the code to use optional chaining to safely access userCountry (userEx9.profile.address.country) and provide a default value of 'Unknown' if the property is missing.

const userEx9 = {
  profile: {
    name: 'Alice',
  },
};

const userCountry = userEx9.profile?.address?.country ?? 'Unknown';
console.log(userCountry);

// 10. Optional Chaining with Function Calls
// Update the code to safely call the getName function using optional chaining, considering that profile or getName might be missing.

const userEx10 = {
  profile: {
    getName: () => 'Alice',
  },
};

const userName = userEx10.profile?.getName?.();
console.log(userName);

// 11. Rewrite the code using the nullish coalescing operator to assign a default value to storedData only if userInput is null or undefined.
let userInput;
let storedData = userInput ?? 'Default Value';

console.log(storedData); // Default Value

// 12. Rewrite the code using the nullish coalescing operator to display number of users even if it is 0.
let userCount = 0;
let displayCount = userCount ?? 'No users';

console.log(displayCount); // No users

// 13. Rewrite the code using the nullish coalescing operator to assign a default value of 3000 to timeout if config.timeout is null or undefined.

const config = {
  timeout: null,
};

const timeout = config.timeout ?? 3000;

console.log(timeout); // 3000
