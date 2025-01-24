/*
1. Sum Array Elements with a For Loop
   - Define a function `sumArray(numbers)` that uses a for loop
     to sum all elements in an array of numbers.
   - Log the final sum.
*/

const arrEx1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
}

sumArray(arrEx1);
console.log("-------------------");

/*
2. Find Maximum Number in an Array
   - Define a function `findMax(numbers)` that uses a for loop to iterate
     through an array and find the largest value.
   - Log the largest value.
*/

const arrEx2 = [1, 2, 30, 4, 5, 600, 7, 8, 9, 10];

function findMax(numbers) {
  let max = numbers[0];

  // for (const number of numbers) {
  //   if (number > max) {
  //     max = number;
  //   }
  //     console.log(number, max);
  // }

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(findMax(arrEx2));
console.log("-------------------");

/*
3. Count Odd and Even Numbers
   - Define a function `countOddEven(numbers)` that loops through an array
     of numbers and counts how many are odd and how many are even.
   - Log the counts in the format: "Odd: X, Even: Y"
*/
const arrEx3 = [1, 2, 30, 4, 5, 600, 7, 8, 9, 10];
function countOddEven(numbers) {
  let oddTotal = 0;
  let evenTotal = 0;
  for (number of numbers) {
    if (number % 2 === 0) {
      evenTotal = evenTotal + 1;
    } else {
      oddTotal = oddTotal + 1;
    }
  }
  return "Çift sayı toplamı " + evenTotal + ". Tek sayılar toplamı " + oddTotal;
}
console.log(countOddEven(arrEx3));
/*
4. Sum of Numbers in a Range (While Loop)
   - Define a function `sumRange(start, end)` that uses a while loop
     to sum all integers from `start` to `end` (inclusive).
   - Log the final sum.
*/

function sumRange(start, end) {
  if (start > end) {
    console.log("Start value should be smaller than end value.");
    return;
  }

  let total = start;
  let current = start + 1;
  while (current <= end) {
    total += current;
    console.log("current:", current, "total:", total);
    current++;
  }
  console.log(total);
}

sumRange(1, 5);
sumRange(1, 2);
sumRange(1, 1);

/*
5. Reverse an Array
   - Define a function `reverseArray(arr)` that reverses the elements
     of an array manually using a for loop (without using .reverse()).
   - Log the reversed array.
*/
const arrEx5 = [1, 2, 3];

function reverseArray(arr) {
  let reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}
console.log(reverseArray(arrEx5));
console.log(reverseArray(["a", "b", "c"]));

/*
6. Filter Out Negative Numbers
   - Define a function `filterNegative(numbers)` that loops through
     an array of numbers and creates a new array without any negative values.
   - Log the new array.
*/

function filterNegative(numbers) {
  let array = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      array.push(numbers[i]);
    }
  }
  return array;
}
console.log(filterNegative([0, 2, -3, 4, -5, 6, -7, 8, -9, 10]));

/*
7. Double the Values (For-of Loop)
   - Define a function `doubleValues(numbers)` that uses a for-of loop
     to multiply each number by 2, storing results in a new array.
   - Log the new array.
*/
function doubleValues(numbers) {
  let newArray = [];
  for (const number of numbers) {
    console.log(number);
    newArray.push(number * 2);
  }
  return newArray;
}
console.log(doubleValues([1, 3, 5]));


/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  let sentenceSeperate = [];
  for (const string of str) {
    console.log(string);

  }
}
printCharacters("Hello");
/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/



function sumObjectValues(obj) {
  let sum = 0;

  for (const numbers in obj) {
    if (obj[numbers] === +obj[numbers]) {
      sum += obj[numbers];
    }

  }
  console.log(sum);
}

sumObjectValues({ a: 10, b: 20, c: 5 }
);
/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
const person = { name: "Alice", age: 25 };
function printObjectKeys(obj) {

  for (const key in obj) {
    console.log(key);
  }
}

printObjectKeys({ name: "Alice", age: 25 });
/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;
  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);
  console.log(sum);
}

sumWithDoWhile([2, 5, 7, 10, 3]);
/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
function removeDuplicates(arr) {
  let newArray = [];
  for (const item of arr) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }
  console.log(newArray);

}
removeDuplicates([1, 5, 8, 12, 1, 12, 8, 33]);
/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(5));
/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
function reverseWords(sentence) {
  let words = sentence.split('');

  let reversedWords = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
  }
  console.log(reversedWords.join(''));
}

reverseWords("Hello, my name is Ece.");
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
function filterLongWords(words, minLength) {
  let longWords = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      longWords.push(words[i]);
    }
  }
  console.log(longWords);
}
filterLongWords(["elma", "armut", "muz", "ananas", "avokado"], 6);
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

function logElementsWithIndex(arr){
 for (let i=0; i<arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
logElementsWithIndex(["ece","naz",28,15]);
/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/

function findMin(numbers){
  let min= numbers[0];
  for (let i=0; i<numbers.length; i++){
    if (numbers[i]< min){
      min = numbers[i];
    }
  }
  console.log(min);
}
findMin([0,1,2,5,20,80,95]);
/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
function countOccurrences(arr,word){

  let count= 0;
  for (let i=0; i < arr.length; i++){
if(arr[i]===word){
  count++
}
  }
console.log(count);
}
countOccurrences(["elma", "armut", "ananas", "elma", "elma","muz"],"elma");
/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
function removeFalsyValues(arr){
  let newArray=[];
  for (let i=0; i<arr.length; i++){
    if(arr[i]){
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
}
removeFalsyValues([false, 0, "numara","eşya","saat", "", null, undefined, NaN]);
/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str){
  let sum=0;
  for(let i=0; i<str.length; i++){
    if(str[i]>= '0' && str[i]<='9'){
      sum += parseInt(str[i]);
    }
  }
  console.log(sum);
}
sumDigits("abc123");
/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers){
  let sum=0;
  for (let i=0; i<numbers.length; i++ ){
sum += numbers[i];
  }
  let averageArray = sum / numbers.length;
  console.log(averageArray);
}
averageArray([5,10,15,20,25,30]);
/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
function flattenArray(twoDArray){
  let flattenedArray= [];
  for (let i=0; i<twoDArray.length; i++){
    for (let j=0; j<twoDArray.length; j++){
      flattenedArray.push(twoDArray[i][j]);
    }
  }
  console.log(flattenedArray);
}

flattenArray([[1,2],[3,4]]);
/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
function findWordsWithLetter(words, letter){
  let filteredArray=[];
for (let i=0; i<words.length; i++){
  if(words[i].includes(letter)){
    filteredArray.push(words[i]);
  }
}
 console.log(filteredArray);
}
findWordsWithLetter(["elma", "armut","ananas","avokado","muz","turp"],"a");

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
function pushPopExample(arr, itemToPush){

  arr.push(itemToPush);
  console.log("Updated array", arr);

  let poppedItem= arr.pop();
  console.log("Popped Item:", poppedItem);

  console.log("Final array:", arr);
}

pushPopExample([1,2,3,4,5],6);


/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
function manageQueue(queue, newPerson){
  queue.push(newPerson);
  console.log("Updated queue:", queue);

  let removedPerson = queue.shift();
  console.log("Shiftted Item:", removedPerson);

  console.log("Final queue:", queue);

}
manageQueue(["Ece","Naz","Zagli"], "Benim");
/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/

const todoList = ["Study JS", "Eat breakfast", "Walk dog", "clean the house", "make lunch "];
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks){
 console.log("Current list:", todoList);

 todoList.splice(startIndex,deleteCount);

 todoList.push(...newTasks);

 console.log("Updated list:", todoList);
}

updateTodoList(["Study JS","Eat breakfast", "Walk dog", "clean the house", "do laundry"],
  2,
  3,
   "make lunch" );




