// Topic: JavaScript Basics
// Focus: Variables, data types, arithmetic, strings, random numbers, template literals, increments
// Instructions: Complete each exercise below by writing your code where indicated.

// 1. Declare variables firstNumber=5 and secondNumber=3 and log their sum.
// CODE HERE
const firstNumber = 5;
const secondNumber = 3;

const sumEx1 = firstNumber + secondNumber;

console.log(sumEx1);

// 2. Declare variables userName and userAge. Log a greeting: "Hello! I am (userName) and I am (userAge) years old."
// CODE HERE
const userName = "Baljan";
const userAge = 28;

console.log(`Hello! I am ${userName} and I am ${userAge} years old.`);
console.log("Hello! I am " + userName + " and I am " + userAge + " years old.");

// 3. Declare variables a=10 and b=4. Log the result of a-b, a*b, and a/b.
// CODE HERE
const a = 10;
const b = 4;

const toplam = a + b;
const carpim = a * b;
const bolum = a / b;
console.log("Toplam sonucu= " + toplam);
// 1. Create a single string from "Toplam sonucu= " + toplam
// 2. Log the result using console.log()
console.log("Çarpım sonucu= " + carpim);
console.log("Bölüm sonucu= " + bolum);

// 4. Use template literals to log: "My name is (userName). I like JS."
// CODE HERE
console.log(`My name is ${userName}. I like JS.`);

// 5. Declare a string password = "securePass". Log the length of password.
// CODE HERE
const password = "securePass";
console.log(password.length);

// 6. Convert the string "hello world" to uppercase and log it.
// CODE HERE
const word = "hello world";
console.log(word.toUpperCase());
console.log("hello world".toUpperCase());

// 7. Concatenate "Hello" and "World" with a space in between and log the result.
// CODE HERE

// 8. Check the type of a variable, e.g., let x = 42. Log the type using typeof.
// CODE HERE
// const name = "sevcan";
// const city = "mersin";

//console.log(typeof name, typeof city, typeof userAge);

// 9. Convert the number 100 to a string and log the result.
// CODE HERE
const number = 100;
const numberString = number.toString();
console.log(number, numberString);
// This will create a string from a number and a string!!! console.log(number + numberString);

// 10. Convert the string "50" to a number and log its type to confirm the conversion.
// CODE HERE
const string = "50";

console.log(parseInt(string));

// 11. Generate a random integer between 0 and 10 and log it.
// CODE HERE
const randomNumber = Math.random() * 11; // 0 -> 10.99999
console.log('Random number ex. 11', Math.floor(randomNumber));

// 12. Round the number 3.7 down using Math.floor and 3.2 up using Math.ceil, log both.
// CODE HERE
const number1Ex12 = Math.floor(3.7);
console.log(number1Ex12);
const number2Ex12 = Math.ceil(3.2);
console.log(number2Ex12);


// Prompt can only be used in browser environment
const userResponse = prompt("What is your age?").trim();;
const userResposeNumber = parseInt(userResponse);

if (isNaN(userResposeNumber)) {
  throw new Error("Please enter a valid number");
} else {
  console.log('userResponse',  Math.floor(userResposeNumber));
}

// 13. Declare a boolean variable isStudent = true. Log it.
// CODE HERE
let isStudent = true;
console.log(isStudent);

// 14. Initialize counter = 0, then increment it by 1 using counter++ and log it.
// CODE HERE
let counter = 0;
counter++;
console.log(counter);

// 15. Initialize points = 10, add 5 to it using points += 5, then log points.
// CODE HERE
let points = 10;
points += 5;
console.log(points);

// 16. Declare name="Alice", age=30, city="Paris". Log "Alice (30) lives in Paris" using template literals.
// CODE HERE
let name = "Alice"
let age = 30;
let city = "Paris";
console.log(`${name} (${age}) lives in ${city}`);

// 17. Declare variables x=5, y=10, z=15. Log their total sum.
// CODE HERE
let x = 5;
let y = 10;
let z = 15;
let totalSum = x + y + z;

console.log(totalSum);

// 18. Declare dividend=10 and divisor=3. Log the quotient (divisionResult) and difference (differenceResult).
// CODE HERE
let dividend = 10;
let divisor = 3;
let divisionResult = dividend / divisor;
let differenceResult = dividend - divisor;

console.log("Quotient:", divisionResult);
console.log("Difference:", differenceResult);

// 19. Declare firstName and lastName. Create fullName by concatenating them with a space and log it.
// CODE HERE
const firstName = 'Baljan';
const lastName = 'Kanatbek';
const fullName = firstName + " " + lastName; ;

console.log(fullName);

// 20. Declare firstFactor=7 and secondFactor=2. Log the product.
// CODE HERE
const firstFactor = 7;
const secondFactor = 2;
const product = firstFactor * secondFactor;

console.log(product);

// 21. Log the value of Math.PI.
// CODE HERE
console.log(Math.PI);


// 22. Declare counter=0. Increment it using three different methods (e.g., counter++, counter+=1, counter=counter+1) and log the result each time.
// CODE HERE
let count = 0;

count++;
console.log(count);

count+=1;
console.log(count);

count=count+1;
console.log(count);



// 23. Declare initialTemperature=20. Increase it by 5 and log the result.
// CODE HERE
let initialTemperature = 20;
initialTemperature += 5;
console.log(initialTemperature);


// 24. Declare numberEx9=6. Increment it using the prefix ++ operator and log both the variable and the incremented value.
// CODE HERE
let numberEx9 = 6;

console.log("Before increment: ", numberEx9);
console.log("After increment: ", ++numberEx9);


// 25. Declare numberEx10=8. Increment it using the postfix ++ operator and log both the original variable and the incremented value.
// CODE HERE
let numberEx10 = 8;

console.log("Before increment: ", numberEx10);
console.log("After increment: ", numberEx10++);


// 26. Declare numberEx11=-3. Increment it by 1 using prefix ++, then multiply the result by 2 and log the final value.
// CODE HERE
let numberEx11 =- 3;
let result = ++numberEx11 *2;

console.log(result);



// 27. Declare c=2 and d=3. Increment a using the prefix ++ operator, then add d to the result and log it.
// CO
let c = 2;
let d = 3;
let sum = ++c + d;

console.log(sum);