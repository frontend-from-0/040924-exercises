/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/

console.log('Ex - 8');

function printCharacters(str) {
  for (const str1 of str) {
    console.log(str1);
  }
}
printCharacters('Strawberyy');

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

console.log('Ex - 9');

function sumObjectValues(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }
  console.log(sum);
}
sumObjectValues({ x: 10, y: 20, z: 0, q: 70 });

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
console.log('Ex - 10');

function printObjectKeys(obj) {
  for (const key in obj) {
    console.log(key);
  }
}
printObjectKeys({ name: 'Ashley', age: 26 });

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
console.log('Ex - 11');

function sumWithDoWhile(numbers) {
  let sum = 0;
  let i = 0;

  do {
    sum += numbers[i];
    i++;
  } while (i < numbers.length);

  console.log(sum);
}
sumWithDoWhile([10, 20, 30]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
console.log('Ex - 12');

function removeDuplicates(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
let arr = [1, 2, 3, 4, 3, 5, 2];
console.log(removeDuplicates(arr));

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result.
    - Example: factorial(5) -> 120
*/
console.log('Ex - 13');

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
console.log('Ex - 14');

function reverseWords(sentence) {
  let wordsArray = sentence.split(' ');

  let reversedArray = wordsArray.reverse();

  let reversedSentence = reversedArray.join(' ');

  return reversedSentence;
}

let sentence = 'I am a web developer';
console.log(reverseWords(sentence));

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
console.log('Ex - 15');

function filterLongWords(words, minLength) {
  let longWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      longWords.push(words[i]);
    }
  }
  return longWords;
}

let words = ['Apple', 'Banana', 'Strawberry', 'Kiwi', 'Peach'];
let minLength = 5;
console.log(filterLongWords(words, minLength));

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
console.log('Ex - 16');

function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}
let myArray = ['Apple', 'Banana', 'Strawberry', 'Kiwi', 'Peach'];
logElementsWithIndex(myArray);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
console.log('Ex - 17');

function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}
let numbers = [12, 7, 24, 31, 147, 55];
console.log(findMin(numbers));

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
console.log('Ex - 18');

function countOccurrences(arr, word) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  return count;
}
let makeupItems = ['lipstick', 'mascara', 'eyeliner', 'bronzer', 'lipstick'];
let wordToFind = 'lipstick';
console.log(countOccurrences(makeupItems, wordToFind));

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
console.log('Ex - 19');

function removeFalsyValues(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
let testArray = [
  0,
  `hello`,
  false,
  true,
  NaN,
  26,
  ``,
  `flower`,
  undefined,
  null,
  42,
];
console.log(removeFalsyValues(testArray));

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
console.log('Ex - 20');

function sumDigits(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i]) && str[i] !== ' ') {
      sum += parseInt(str[i]);
    }
  }
  return sum;
}

let result = sumDigits('abc1230 45');
console.log(result);

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
console.log('Ex - 21');

function averageArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  let average = sum / numbers.length;
  return average;
}

let result1 = averageArray([10, 20, 30, 40, 50]);
console.log(result1);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/
console.log('Ex - 22');

function flattenArray(twoDArray) {
  let flattened = [];

  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      flattened.push(twoDArray[i][j]);
    }
  }
  return flattened;
}

let result2 = flattenArray([
  [1, 2],
  [3, 4],
  [5, 6],
]);
console.log(result2);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/
console.log('Ex - 23');

function findWordsWithLetter(words, letter) {
  let filteredWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      filteredWords.push(words[i]);
    }
  }
  return filteredWords;
}

let wordsArray = ['chocolatte', 'nut', 'vodka', 'cherry'];
console.log(findWordsWithLetter(wordsArray, 'c'));

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
console.log('Ex - 24');

function pushPopExample(arr, itemToPush) {
  arr.push(itemToPush);
  console.log('Updated Array:', arr);

  let poppedItem = arr.pop();
  console.log('Popped Element:', poppedItem);

  console.log('Final Array:', arr);
}
pushPopExample([1, 2, 3], 4);

/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
console.log('Ex - 25');

function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log('Updated Queue:', queue);

  let removedPerson = queue.shift();
  console.log('Removed Person:', removedPerson);

  console.log('Final Queue:', queue);
}

manageQueue(['Selin', 'Luna', 'Ömer'], 'Anton');

/*
26. To-Do List Application
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
console.log('Ex - 26');

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log('Current To-Do List:', todoList);

  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks);

  console.log('Updated To-Do List:', todoList);
}

updateTodoList(
  ['Shopping', 'Cleaning', 'Studying', 'Cooking'],
  1,
  2,
  'Reading',
  'Exercising'
);
