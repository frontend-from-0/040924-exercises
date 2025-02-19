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

printCharacters('Hello');

/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/

function sumObjectValues(obj) {
  let sum = 0;
  for (let prop in obj) {
    if (typeof obj[prop] === 'number') {
      sum += obj[prop];
    }
  }
  return sum;
}

console.log(sumObjectValues({ a: 10, b: 20, c: 5 }));
console.log(sumObjectValues({ x: 'merhaba', y: 50, z: 30 }));

/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/

function printObjectKeys(obj) {
  for (let key in obj) {
    console.log(key + ':' + obj[key]);
  }
}

printObjectKeys({ name: 'Tugba', age: 35 });

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
  console.log('sum', sum);
}

sumWithDoWhile([10, 20, 30, 40]);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let item of arr) {
    if (!uniqueArr.includes(item)) {
      uniqueArr.push(item);
    }
  }
  console.log('uniqueArr', uniqueArr);
}

removeDuplicates([1, 2, 3, 2, 4, 5, 3, 6, 5]);

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
  let words = sentence.split(' ');
  let reversedWords = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
  }

  let reversedSentence = reversedWords.join(' ');

  console.log(reversedSentence);
}

reverseWords('Hello World');

/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/

function filterLongWords(words, minLength) {
  let filteredWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= minLength) {
      filteredWords.push(words[i]);
    }
  }

  console.log(filteredWords);
}

filterLongWords(['apple', 'banana', 'word', 'cherry', 'date', 'elderberry'], 5);

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

logElementsWithIndex([1, 2, 3, 4, 5]);

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
  return min;
}
console.log(findMin([10, 3, 7, 1, 9]));
console.log(findMin([-1, 5, -10, 8, 22]));

/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.
*/

function countOccurrences(arr, word) {
  let count = 0;

  for (let element of arr) {
    if (element === word) {
      count++;
    }
  }

  console.log(`"${word}" appears ${count} times.`);
}

countOccurrences(['a', 'b', 'c', 'a', 'a'], 'a'); // Çıktı: "a" kelimesinin tekrar sayısı: 3

/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/

function removeFalsyValues(arr) {
  let newArr = [];
  for (let value of arr) {
    if (value) {
      newArr.push(value);
    }
  }
  return newArr;
}

console.log(removeFalsyValues([0, 1, false, 2, '', 3, null, undefined, NaN]));

/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6
*/

function sumDigits(str) {
  let sum = 0;
  for (let char of str) {
    if (!isNaN(char) && char !== ' ') {
      sum += Number(char);
    }
  }
  console.log(sum);
}

sumDigits('abc123d4');

/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

function averageArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  let average = total / numbers.length;
  console.log(average);
}

averageArray([10, 20, 30, 40]);

/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

function flattenArray(twoDArray) {
  let flattened = [];

  for (let subArray of twoDArray) {
    for (let element of subArray) {
      flattened.push(element);
    }
  }

  console.log('Düzleştirilmiş dizi:', flattened);
}

flattenArray([[10, 20], [30, 40, 50], [60]]);

/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/

function findWordsWithLetter(words, letter) {
  let filteredWords = [];

  for (let word of words) {
    if (word.includes(letter)) {
      filteredWords.push(word);
    }
  }

  console.log(filteredWords);
}

findWordsWithLetter(['apple', 'banana', 'orange', 'kiwi'], 'a');

/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/

function loopPushPopExample(arr, itemsToPush) {
  for (let item of itemsToPush) {
    arr.push(item);
    console.log('Push sonrası dizi:', arr);

    let poppedItem = arr.pop();
    console.log('Pop sonrası çıkarılan eleman:', poppedItem);
  }

  console.log('Dizinin son hali:', arr);
}

loopPushPopExample([1, 2], [3, 4, 5]);

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
  console.log('After adding to the queue:', queue);

  let removedPerson = queue.shift();
  console.log('Removed person:', removedPerson);

  console.log('Final queue:', queue);
}

manageQueue(['Alice', 'Bob', 'Charlie'], 'David');

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/
function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log('Current to-do list:', todoList);

  todoList.splice(startIndex, deleteCount);

  todoList.push(...newTasks);

  console.log('Updated to-do list:', todoList);
}

const todoList = ['Study JS', 'Eat breakfast', 'Walk dog'];
updateTodoList(todoList, 1, 1, 'Do laundry', 'Call friend');
