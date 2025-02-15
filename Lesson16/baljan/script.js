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

const name1 = "Computer";
printCharacters(name1);

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

function sumObjectValues(obj) {
  let sum = 0;
  for (const key in obj) {
    const value = obj[key];
    sum += value;
  }

  return sum;
}

const object = { a: 10, b: 20, c: 5 };
console.log(sumObjectValues(object));

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

const object1 = { name: "Alice", age: 25 };
printObjectKeys(object1);

/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/

function sumWithDoWhile(numbers) {
  let i = 0;
  let sum = 0;

  do {
    sum = sum + numbers[i];
    i++;
  } while (i < numbers.length);
  console.log(sum);
}

const array1 = [1, 5, 6, 7, 8]; //27
sumWithDoWhile(array1);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/


function removeDuplicates(arr) {
  let uniqueArray = [];
  for (const number of arr) {
    if (!uniqueArray.includes(number)) {
      uniqueArray.push(number);
    }
  }

  console.log(uniqueArray);
}

const array2 = [1, 1, 2, 3, 4, 4, 5];
removeDuplicates(array2);


/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result.
    - Example: factorial(5) -> 120
*/

function factorial(n) {
  let result = 1;
  for (let i = 1; i < n + 1; i++) {
    result = i * result;
  }
  console.log(result);
}

const number2 = 5;
factorial(number2);

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/

function reverseWords(sentence) {
  const list = sentence.split(" "); // [ 'Baljan', 'is', 'a', 'JS', 'developer' ]
  let sum = "";
  for (let i = list.length - 1; i >= 0; i--) {
    sum += list[i] + " ";
  }

  console.log(sum);
}

const sentence = "Baljan is a JS developer";
reverseWords(sentence);

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

function filterLongWords(words, minLength) {
  const result = [];
  for (const word of words) {
    if (word.length >= minLength) {
      result.push(word);
    }
  }

  console.log(result);
}

const words1 = ["Baljan", "is", "a", "JS", "developer"];
filterLongWords(words1, 3);


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

const array3 = ["B", "A", "L", "J", "A", "N"];
logElementsWithIndex(array3);


/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/

function findMin(numbers) {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  console.log(min);
}

const array4 = [8, 9, 6, 7, 1, 4, 5];
findMin(array4);

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

function countOccurrences(arr, word) {
  let count = 0;
  for (word1 of arr) {
    if (word1 === word) {
      count++;
    }
  }

  console.log(count);
}

const words2 = [
  "Baljan",
  "is",
  "a",
  "JS",
  "developer",
  "Baljan",
  "developer",
  "developer",
];

countOccurrences(words2, "developer");

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr) {
  const result = [];
  for (const element of arr) {
    if (element) {
      result.push(element);
    }
  }

  console.log(result);
}

const array5 = [1, false, 0, "Baljan", null, "", true, undefined, NaN];

removeFalsyValues(array5);

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

function sumDigits(str) {
  let sum = 0;

  for (const char of str) {
    if (parseInt(char)) {
      sum += parseInt(char);
    }
  }

  console.log(sum);
}

const parameters = "JS123HELLOWORLD789";
sumDigits(parameters);

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

function averageArray(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }

  const average = sum / numbers.length;
  console.log(average);
}

const array6 = [2, 4, 6, 8, 10];
averageArray(array6);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

function flattenArray(twoDArray) {
  const list = [];

  for (const array of twoDArray) {
    for (element of array) {
      list.push(element);
    }
  }

  console.log(list);
}

const array7 = [
  [1, 2],
  [3, 4],
];
flattenArray(array7);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/


function findWordsWithLetter(words, letter) {
  const list = [];

  for (const word of words) {
    if (word.includes(letter)) {
      list.push(word);
    }
  }

  console.log(list);
}

const array8 = ["Apple", "Banana", "Orange"];

findWordsWithLetter(array8, "e");


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
  console.log(itemToPush);
  console.log(arr);
}

const array9 = ["Apple", "Banana", "Orange"];
pushPopExample(array9, "Watermelon");

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
  const firstPerson = queue[0];
  queue.shift();
  console.log(firstPerson);
  console.log(queue);
}

const persons = ["Ali", "Veli", "Ahmet"];
manageQueue(persons, "Baljan");

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

  for (const task of newTasks) {
    todoList.push(task);
  }

  console.log(todoList);
}

const todoList = ["Ödev Yap", "Pratik Yap"];

updateTodoList(todoList, 0, 1, "Kod Yaz", "JS Öğren");

//const todoList = ["Study JS", "Eat breakfast", "Walk dog"];
