// Topic: JavaScript Basics
// Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
// CODE HERE
console.log('Example-1');

const firstNumber = 5;
const secondNumber = 3;

const sumEx1 = firstNumber + secondNumber;
console.log(sumEx1);

// 2. Declare variables userName and userAge. Log a greeting: "Hello! I am (userName) and I am (userAge) years old."
// CODE HERE
console.log('Example-2');

const userName = 'Ayse';
const userAge = 26;

console.log(`Hello! I am ${userName} and I am ${userAge} years old.`);
console.log('Hello! I am ' + userName + ' and I am ' + userAge + ' years old.');

// 3. Declare variables a=10 and b=4. Log the result of a-b, a*b, and a/b.
// 3.1. Create a single string from "Toplam sonucu= " + toplam
// 3.2. Log the result using console.log()
// CODE HERE
console.log('Example-3');

const a = 10;
const b = 4;

const sumEx3 = a + b;
const multiplyEx3 = a * b;
const divideEx3 = a / b;

console.log('Toplam Sonucu = ' + sumEx3);
console.log('Çarpim Sonucu = ' + multiplyEx3);
console.log('Bölüm Sonucu = ' + divideEx3);

// 4. Use template literals to log: "My name is (userName). I like JS."
// CODE HERE

console.log('Example-4');
console.log(`My name is ${userName}. I like JS.`);

// 5. Declare a string password = "securePass". Log the length of password.
// CODE HERE
console.log('Example-5');

const password = 'securePass';
console.log(password.length);

// 6. Convert the string "hello world" to uppercase and log it.
// CODE HERE
console.log('Example-6');

const word = 'hello world';
console.log(word.toUpperCase());
console.log('hello world'.toUpperCase());

// 7. Concatenate "Hello" and "World" with a space in between and log the result.
// CODE HERE
console.log('Example-7');

let greeting = 'Hello' + ' ' + 'World!';
console.log(greeting);

// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
// CODE HERE
console.log('Example-8');

const nameEx8 = 'Ayse';
const cityEx8 = 'Istanbul';
let Ex8 = 42;
console.log(
  nameEx8,
  typeof nameEx8,
  ' - ',
  cityEx8,
  typeof cityEx8,
  ' - ',
  Ex8,
  typeof Ex8
);

// 9. Convert the number 100 to a string and log the result.
// This will create a string from a number and a string!!! console.log(number + numberString);
// CODE HERE
console.log('Example-9');

const number = 100;
const numberString = number.toString();
console.log(number, numberString);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
// CODE HERE
console.log('Example-10');

const string = '50';
console.log(parseInt(string));

// 11. Generate a random integer between 0 and 10 and log it.
// CODE HERE
console.log('Example-11');

const randomNumber = Math.random() * 11; // 0 -> 10.99999
console.log('Random number ex. 11.2 - ', randomNumber);
console.log('Random number ex. 11 - ', Math.floor(randomNumber));

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
// CODE HERE
console.log('Example-12');

const number1Ex12 = Math.floor(3.7);
console.log(number1Ex12);

const number2Ex12 = Math.ceil(3.2);
console.log(number2Ex12);

// Prompt can only be used in browser environment
/*
const userResponse = prompt("What is your age?");
const userResposeNumber = parseInt(userResponse);

if (isNaN(userResposeNumber)) {
  throw new Error("Please enter a valid number");
}
else {
  console.log('userResponse',  Math.floor(userResposeNumber));
}
*/

// 13. Declare a boolean variable isStudent = true. Log it.
// CODE HERE

console.log('Example-13');

const isStudent = true;
console.log(isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
// CODE HERE

console.log('Example-14');

let counter = 0;
counter++;
ex14 = counter += 1;
console.log(counter, ex14);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
// CODE HERE

console.log('Example-15');

let points = 10;
points += 5;
console.log(points);

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
// CODE HERE

console.log('Example-16');

const name16 = 'Alice';
const age16 = 30;
const city16 = 'Paris';
console.log(`${name16} (${age16}) lives in ${city16}.`);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
// CODE HERE

console.log('Example-17');

let x = 5;
let y = 10;
let z = 15;

let totalSum = x + y + z;
console.log(totalSum);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
// CODE HERE

console.log('Example-18');

let divident = 10;
let divisor = 3;
let divisionResult = divident / divisor;
let differenceResult = divident - divisor;
console.log(
  'Quotient: ',
  divisionResult,
  ' - ',
  'Difference: ',
  differenceResult
);

// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
// CODE HERE

console.log('Example-19');

const firstNameEx19 = 'Ayse';
const lastNameEx19 = 'Luna';
const fullNameEx19 = firstNameEx19 + ' ' + lastNameEx19;
console.log(fullNameEx19);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
// CODE HERE

console.log('Example-20');
const firstFactor = 7;
const secondFactor = 2;
const product = firstFactor * secondFactor;
console.log(product);

// 21. Log the value of Math.PI.
// CODE HERE

console.log('Example-21');

console.log(Math.PI);

// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
// CODE HERE

console.log('Example-22');

let counterEx22 = 0;
// First method: counter++
counterEx22++;

// Second method: counter+=1
counterEx22 += 1;

// Third method: counter = counter + 1
counterEx22 = counterEx22 + 1;

console.log(counterEx22);

// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
// CODE HERE

console.log('Example-23');

let initialTemperature = 20;
initialTemperature += 5;
console.log(initialTemperature);

// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
// CODE HERE

console.log('Example-24');

let numberEx24 = 6;
console.log(numberEx24);
console.log(++numberEx24);

// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
// CODE HERE

console.log('Example-25');

let numberEx25 = 8;
console.log(numberEx25);
console.log(numberEx25++);
console.log(numberEx25);

// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE

console.log('Example-26');

let numberEx26 = -3;
++numberEx26;
let finalResult = numberEx26 * 2;
console.log(finalResult);

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.
// CODE HERE

console.log('Example-27');

let aa = 2;
let bb = 3;

++aa;
let result = aa + bb;

console.log(result);
