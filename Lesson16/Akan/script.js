/*
8. Print Each Character of a String (For-of)
 - Define a function `printCharacters(str)` that uses a for-of loop
   to log each character in the string on a separate line.
*/


function printCharacters(str) {
  for (const char of str) {
    console.log(char);
  }
}

printCharacters('Mila');

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

const obj = { a: 10, b: 20, c: 5 };

function sumObjectValues(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      sum += obj[key];
    }
  }
  return sum;
}

console.log(sumObjectValues({ a: 10, b: 20, c: 5 }));

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
const testObject = {
  name: 'Mila', age: 5 };

function printObjectKeys(obj) {
      for (const key in obj) {
        console.log(key + ':' + obj[key]);
      }
    }
printObjectKeys(testObject);
/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

const numbers = [1, 2, 3, 4, 5];

  function sumWithDoWhile(numbers) {
    let sum = 0;
let i = 0;
do {
  sum += numbers[i];
  i++;
} while (i < numbers.length);
return sum;
}
sumWithDoWhile([1, 2, 3, 4, 5]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

const arr = [1, 2, 3, 2, 4, 5, 3, 6, 5];

function removeDuplicates(arr) {
  const newArr = [];
  for (const item of arr) {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  }
  console.log(newArr);
}

removeDuplicates([1, 2, 3, 2, 4, 5, 3, 6, 5]);
/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/

const n = 5;
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
const sentence = 'Hello, World!';

function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversedWords = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
  }
  console.log(reversedWords.join(' '));
}

reverseWords(sentence);
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

const words = ['hello', 'world', 'goodbye', 'hi'];

function filterLongWords(words, minLength) {
  const longWords = [];
  for (const word of words) {
    if (word.length >= minLength) {
      longWords.push(word);
    }
  }
  console.log(longWords);
}

filterLongWords(['hello', 'world', 'goodbye', 'hi'], 4);
/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}

logElementsWithIndex(['apple', 'banana', 'cherry']);
/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/

const numbers = [5, 3, 8, 1, 2];

function findMin(numbers) {
  let min = numbers[0];
  for (const num of numbers) {
    if (num < min) {
      min = num;
    }
  }
  console.log(min);
}

findMin([5, 3, 8, 1, 2]);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

function countOccurrences(arr, word) {
  let count = 0;
  for (const item of arr) {
    if (item === word) {
      count++;
    }
  }
  console.log(count);
}

countOccurrences(['apple', 'banana', 'apple', 'cherry'], 'apple');
/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr) {
  const newArr = [];
  for (const item of arr) {
    if (item) {
      newArr.push(item);
    }
  }
  console.log(newArr);
}

removeFalsyValues([0, 'apple', '', 'banana', null, 'cherry', undefined, NaN]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

const str = 'abc123';

function sumDigits(str) {
  let sum = 0;
  for (const char of str) {
    if (!isNaN(char)) {
      sum += Number(char);
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

const numbers = [1, 2, 3, 4, 5];

function averageArray(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  console.log(sum / numbers.length);
}

averageArray(numbers);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

const twoDArray = [[1, 2], [3, 4]];

function flattenArray(twoDArray) {
  const flatArray = [];
  for (const arr of twoDArray) {
    for (const item of arr) {
      flatArray.push(item);
    }
  }
  console.log(flatArray);
}

flattenArray(twoDArray);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/

const words = ['apple', 'banana', 'cherry'];

function findWordsWithLetter(words, letter) {
  const filteredWords = [];
  for (const word of words) {
    if (word.includes(letter)) {
      filteredWords.push(word);
    }
  }
  console.log(filteredWords);
}

findWordsWithLetter(words, 'a');
/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/

const textArrayEx24 = [1, 2, 3];

function pushPopExample(array, itemToPush) {
  arr.push(itemToPush);
  console.log(arr);
  const popped = arr.pop();
  console.log(popped);
  console.log(arr);
}
pushPopExample(textArrayEx24, 4);

/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/

const queue = ['Alice', 'Bob', 'Charlie'];

function manageQueue(queue, newPerson) {
  queue.push(newPerson);
  console.log(queue);
  const removed = queue.shift();
  console.log(removed);
  console.log(queue);
}

manageQueue(queue, 'David');

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log(todoList);
  todoList.splice(startIndex, deleteCount, ...newTasks);
  console.log(todoList);
}

updateTodoList(todoList, 1, 1, 'Go to gym', 'Read book');