/*
8. Print Each Character of a String (For-of)
   - Define a function `printCharacters(str)` that uses a for-of loop
     to log each character in the string on a separate line.
*/
function printCharacters(str) {
  for (const character of str) {
    console.log(character);
  }
}

const exampleString = 'Hello World';
printCharacters(exampleString);
/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

function sumObjectValues(obj) {
  let sumKey = 0;
  for (const key in obj) {
    sumKey += obj[key];
  }
  console.log(sumKey);
}

const person = {
  name: 'Ali',
  age: 25,
  height: 175,
  weight: 70,
};
sumObjectValues(person);
/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/
function printObjectKeys(obj) {
  for (const key in obj) {
    console.log(key);
  }
}

printObjectKeys(person);
/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
function sumWithDoWhile(numbers) {
  let total = 0;
  let index = 0;
  do {
    total += numbers[index];

    index++;
  } while (index < numbers.length);
  console.log(total);
}
sumWithDoWhile(numbers);
sumWithDoWhile([1, 2, 3, 4, 5]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

const ex1Array = [1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
  let removeDup = [];
  for (let i = 0; i < arr.length; i++) {
    if (removeDup.indexOf(arr[i] === -1)) {
      removeDup.push(arr[i]);
    }
  }
  console.log(removeDup);
}
removeDuplicates(ex1Array);

/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/
function factorial(n) {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result = result * i;
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
  let reversedSentence = [];
  reversedSentence = sentence.split(' ').reverse().join(' ');
  console.log(reversedSentence);
}

reverseWords('Life is challenging sometimes.');
/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
function filterLongWords(words, minLength) {
  let resultArray = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      resultArray.push(words[i]);
    }
  }
  console.log(resultArray);
}
filterLongWords(['apple', 'banana', 'cherry', 'kiwi'], 6);

/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

function logElementsWithIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Index ${i},Value ${arr[i]}`);
  }
}

logElementsWithIndex([1, 2, 3, 4, 5]);

/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
function findMin(numbers) {
  let smallestNum = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallestNum) {
      smallestNum = numbers[i];
    }
  }

  return smallestNum;
}

findMin([2, 4, 6, 7, 34, 1, -1, -4]);

function findMin2(numbers) {
  let minNum = numbers[0];
  let index = 1;
  do {
    if (numbers[index] < minNum) {
      minNum = numbers[index];
    }
    index++;
  } while (index < numbers.length);
  console.log(minNum);
  return minNum;
}
findMin2([2, 4, 6, 7, 34, 1, -1, -4]);
/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

let exampleArray = ['apple', 'banana', 'apple', 'orange', 'apple'];
let wordToCount = 'apple';

function countOccurrences(arr, word) {
  let occurrencesNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      ++occurrencesNum;
    }
  }
  return occurrencesNum;
}

countOccurrences(exampleArray, wordToCount);

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr) {
  let withoutFalsyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      withoutFalsyArr.push(arr[i]);
    }
  }
}
removeFalsyValues([0, 1, false, 2, '', 3, null, 'hello', undefined, NaN]);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

function sumDigits(str) {
  let totalDigit = 0;
  for (let i = 0; i < str.length; i++) {
    let digit = parseInt(str[i]);
    if (!isNaN(digit)) {
      totalDigit += digit;
    }
  }
  console.log(`The total ${totalDigit}`);
}

sumDigits('example345');

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

let averageEx = [1, 3, 4, 2, 1, 3];
function averageArray(numbers) {
  let sumOftheArray = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumOftheArray += numbers[i];
  }
  let averageOftheArray = sumOftheArray / numbers.length;
  console.log(averageOftheArray);
}

averageArray(averageEx);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

let arrayEx = [
  [1, 2],
  [3, 4],
  [5, 6],
];
function flattenArray(twoDArray) {
  let oneDarray = [];
  for (let i = 0; i < twoDArray.length; i++) {
    for (let j = 0; j < twoDArray[i].length; j++) {
      oneDarray.push(twoDArray[i][j]);
    }
  }
  console.log(oneDarray);
}

flattenArray(arrayEx);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/

function findWordsWithLetter(words, letter) {
  let filteredArray = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(letter)) {
      filteredArray.push(words[i]);
    }
  }
  console.log(filteredArray);
}
let wordsArray = ['apple', 'banana', 'cherry', 'date', 'grape'];
let searchLetter = 'a';

findWordsWithLetter(wordsArray, searchLetter);

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
  console.log(`The updated array after pushing the item ${arr}`);

  let poppedElement = arr.pop();
  console.log(`The popped element is ${poppedElement}`);
  console.log(`Final array after pop: ${arr}`);
}

let sampleArray = [1, 2, 3];
let newItem = 4;

pushPopExample(sampleArray, newItem);

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
  console.log(`The updated queue is ${queue}`);

  let removedPerson = queue.shift();
  console.log(`Removed person is ${removedPerson}`);
  console.log(`The final queue is ${queue}`);
}

let queue = ['Alice', 'Bob', 'Charlie'];
let newPerson = 'David';

manageQueue(queue, newPerson);

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];
function updateToDoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log(`The current list of tasks ${todoList}`);
  todoList.splice(startIndex, deleteCount);
  todoList.push(...newTasks);
  console.log(`You can follow the updated list ${todoList}`);
}

updateToDoList(todoList, 1, 1, 'Go for a run', 'Complete homework');
