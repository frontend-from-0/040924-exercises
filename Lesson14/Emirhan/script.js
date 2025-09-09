// Topic: JavaScript Basics
// Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
// CODE HERE
let firstNumber = 5;
let secondNumber = 3;
console.log(firstNumber + secondNumber);
// 2. Declare variables userName and userAge. Log a greeting: "Hello! I am (userName) and I am (userAge) years old."
// CODE HERE
let userName = 'Emirhan';
let userAge = 25;
console.log(`Hello! I am ${userName} and I am ${userAge} years old`);

// 3. Declare variables a=10 and b=4. Log the result of a-b, a*b, and a/b.
// CODE HERE
let a = 10;
let b = 4;
console.log(a - b);
console.log(a * b);
console.log(a / b);
// 1. Create a single string from "Toplam sonucu= " + toplam
// 2. Log the result using console.log()

console.log(`Toplam Sonucu =  ${a + b}`);

// 4. Use template literals to log: "My name is (userName). I like JS."
// CODE HERE
console.log(`My name is${userName}. I like JS.`);

// 5. Declare a string password = "securePass". Log the length of password.
// CODE HERE
let securePass = 'Emir123.';
console.log(securePass.length);
// 6. Convert the string "hello world" to uppercase and log it.
// CODE HERE
let text = 'hello word';
let upperText = text.toUpperCase();
console.log(upperText);

// 7. Concatenate "Hello" and "World" with a space in between and log the result.
// CODE HERE
let hello = 'Hello';
let world = 'World';
console.log(hello + ' ' + world);

// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
// CODE HERE

let x = 42;
let y = 'Emir';
console.log(typeof x);
console.log(typeof y);

// 9. Convert the number 100 to a string and log the result.
// CODE HERE
let number = 100;
let numberStr = number.toString();
console.log(number + ' ' + numberStr);
console.log(typeof number);
console.log(typeof numberStr);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
// CODE HERE

let str = '50';
let newStr = Number(str);
console.log('---' + typeof newStr);

// 11. Generate a random integer between 0 and 10 and log it.
// CODE HERE
let random = Math.floor(Math.random() * 10) + 1;
console.log(random);

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
// CODE HERE
let num = 3.7;
let num1 = 3.2;
let roundDown = Math.floor(num);
let roundUp = Math.ceil(num1);
console.log(roundUp + roundDown);

// 13. Declare a boolean variable isStudent = true. Log it.
// CODE HERE
let isStudent = true;
console.log(isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
// CODE HERE
let counter = 0;
counter++;
console.log(`Counter = ${counter}`);
// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
// CODE HERE
let points = 10;
points += 5;
console.log(points);
// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
// CODE HERE
let name = 'Alice';
let age = 30;
let city = 'Paris';

console.log(`${name} (${age}) lives in  ${city}`);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
// CODE HERE
let x1 = 5;
let y1 = 10;
let z1 = 15;
console.log(x1 + y1 + z1);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
// CODE HERE
let dividend = 10;
let divisor = 3;
let divisionResult = dividend / divisor;
console.log(divisionResult);
// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
// CODE HERE

let firstName = 'Emirhan';
let lastName = 'Bayatli';
let fullName = ` ${firstName} ${lastName}`;
console.log(fullName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
// CODE HERE
let firstFactor = 7;
let secondFactor = 2;
console.log(firstFactor * secondFactor);
// 21. Log the value of Math.PI.
// CODE HERE
console.log(Math.PI);
// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
// CODE HERE
counter1 = 0;
counter1 += 1;
console.log(counter1);
counter1++;
console.log(counter1);
counter1 = counter + 1;
console.log(counter1);
// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
// CODE HERE
let initialTemperature = 20;
initialTemperature += 5;
console.log(initialTemperature);
// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
// CODE HERE
let numberEx9 = 6;
console.log(numberEx9);
++numberEx9;
console.log(numberEx9);
// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
// CODE HERE
let numberEx10 = 8;
console.log(numberEx10);
numberEx10++;
console.log(numberEx10);
// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE

let numberEx11 = -3;
++numberEx11;
console.log(numberEx11 * 2);

// 27. Declare a=2 and b=3. Increment a using the prefix ++ operator, then add b to the result and log it.

let a1 = 2;
let b1 = 3;
++a1;
console.log(a1 + b1);
