/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  for (let character of str) {
    console.log(character);
  }
}
printCharacters('function');
/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
function sumObjectValues(obj) {
  let result = 0;
  for (let values in obj) {
    result += obj[values];
  }
  console.log(result);
}
sumObjectValues({ a: 10, b: 20, c: 5 });

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
function printObjectKeys(obj) {
  for (let key in obj) {
    console.log(`${key} `);
  }
}
printObjectKeys({ name: 'Alice', age: 25 });
/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
function sumWithDoWhile(numbers) {
  result = 0;
  let i = 0;
  do {
    result += numbers[i];
    i++;
  } while (i < numbers.length);
  console.log(`do-while ${result}`);
}

sumWithDoWhile([15, 10, 100]);
/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/
function removeDuplicates(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
}
removeDuplicates([1, 2, 2, 3, 4, 5, 5]);

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
  console.log(result);
}
factorial(5);
/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

function reverseWords(sentence) {
  const reversed = sentence.split(' ').reverse().join(' ');
  console.log(reversed);
}

reverseWords('Filter Words Longer Than');
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

function filterLongWords(words, minLength) {
  const newArray = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      newArray.push(words[i]);
    }
  }
  console.log(newArray);
}

filterLongWords(['Log', 'Array', 'Elements', 'with', 'Their', 'Indices'], 5);

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/
function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}
logElementsWithIndex([
  'Log',
  'Array',
  'Elements',
  'with',
  'Their',
  'Indices',
]); /*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/

function findMin(numbers) {
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  console.log(min);
}
findMin([7, 2, 2, 3, 4, 5, 5]);
/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/
function countOccurrences(arr, word) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      count++;
    }
  }
  console.log(count);
}
countOccurrences(
  ['log', 'log', 'Array', 'Elements', 'C', 'with', 'with', 'Their', 'Indices'],
  'with'
);
/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i]);
    }
  }

  console.log(newArray);
}

removeFalsyValues([0, 1, false, 2, '', 3, null, undefined, NaN, 'Hello', true]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/
function sumDigits(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      sum += Number(str[i]);
    }
  }
  console.log(sum);
}
sumDigits('abc123');
/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/
function averageArray(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;

  console.log(average);
}
averageArray([7, 2, 2, 3, 4, 5, 5]);
/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

function flattenArray(twoDArray) {
  newArray = [];
  for (let i = 0; i < twoDArray.length; i++) {
    // console.log(twoDArray[i]);
    for (let j = 0; j < twoDArray[i].length; j++) {
      newArray.push(twoDArray[i][j]);
    }
  }
  console.log(newArray);
}
flattenArray([
  [1, 2],
  [3, 4],
]);
/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/

function findWordsWithLetter(words, letter) {
  let newArray = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      newArray.push(words[i]);
    }
  }
  console.log(newArray);
}
findWordsWithLetter(
  ['log', 'log', 'Array', 'Elements', 'C', 'with', 'with', 'Their', 'Indices'],
  'e'
);

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/
function pushPopExample(arr, itemToPush) {
  arr.push(itemToPush);
  console.log(arr);
  arr.pop();
  console.log(arr);
}
pushPopExample(
  ['log', 'Array', 'Elements', 'C', 'with', 'Their', 'Indices'],
  'newWord'
);
/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/

function manageQueue(queue, newPerson) {
  queue.push(newPerson);

  console.log(queue);
  const removedPerson = queue.shift();
  console.log(removedPerson);
  console.log(queue);
}
manageQueue(['Alice', 'Bob', 'Charlie', 'David'], 'Emir');
/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log(todoList);
  todoList.splice(startIndex, deleteCount);
  console.log(todoList);
  todoList.push(...newTasks);
  console.log(todoList);
}
const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];
updateTodoList(todoList, 1, 2, 'drink somethink');
