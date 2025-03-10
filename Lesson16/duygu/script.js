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
printCharacters('hello');
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
    sum += obj[key];
  }

  console.log(sum);
  return sum;
}

sumObjectValues({ a: 10, b: 20, c: 5 });
sumObjectValues({ x: 100, y: 200, z: 300 });

/*
  10. Print Keys of an Object (For-in)
      - Define a function `printObjectKeys(obj)` that uses a for-in loop
        to log each key of the object.
      - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
  */
function printObjectKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

let person = { name: 'Duygu', age: 33 };
printObjectKeys(person);

/*
  11. Sum Array Using do-while Loop
      - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
        to sum all numbers in the array.
      - Log the total.
  */
function sumWithDoWhile(numbers) {
  let sum = 0;
  let index = 0;

  do {
    sum += numbers[index];
    index++;
  } while (index < numbers.length);

  console.log('Total sum:', sum);
  return sum;
}

sumWithDoWhile([1, 2, 3, 4, 5]);
sumWithDoWhile([10, 20, 30]);

/*
  12. Remove Duplicates from an Array
      - Define a function `removeDuplicates(arr)` that loops through the array
        and creates a new array without duplicate elements.
      - Hint: you could check if the item is already in the new array before pushing.
      - Log the new array without duplicates.
  */
function removeDuplicates(arr) {
  const uniqueArray = [];
  for (const item of arr) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }
  console.log(uniqueArray);
  return uniqueArray;
}
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
  console.log(`The factorial of ${n} is: ${result}`);
  return result;
}

factorial(5);
factorial(7);

/*
  14. String -> Array -> String
      - Define a function `reverseWords(sentence)` that splits the sentence 
        into an array of words, reverses the array order, then joins it back into
        a string. Use loops or built-in methods as you like.
      - Log the reversed sentence.
  */
function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversedWords = [];

  for (let i = words.length - 1; i >= 0; i--) {
    reversedWords.push(words[i]);
  }

  const reversedSentence = reversedWords.join(' ');
  console.log(reversedSentence);
  return reversedSentence;
}

reverseWords('Hello world');
reverseWords('JavaScript is fun');

/*
  15. Filter Words Longer Than X
      - Define a function `filterLongWords(words, minLength)` that uses a for loop
        to collect only the words that have a length >= minLength.
      - Log the resulting array.
  */
function filterLongWords(words, minLength) {
  const filteredWords = [];
  for (const word of words) {
    if (word.length >= minLength) {
      filteredWords.push(word);
    }
  }
  return filteredWords;
}

console.log(
  filterLongWords(['apple', 'banana', 'pear', 'grape', 'strawberry'], 5)
);
console.log(filterLongWords(['cat', 'dog', 'elephant', 'rat'], 4));

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
logElementsWithIndex([10, 20, 30, 40]);

/*
  17. Find the Smallest Number in an Array
      - Define a function `findMin(numbers)` that loops through the array
        to find and return the smallest number.
      - Log the smallest number.
  */
function findMin(numbers) {
  let min = numbers[0];
  let i = 1;
  while (i < numbers.length) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
    i++;
  }
  return min;
}

console.log(findMin([10, 5, 8, 3, 7]));
console.log(findMin([15, 20, -5, 0, 30]));

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
  return count;
}

console.log(
  countOccurrences(['apple', 'banana', 'apple', 'cherry', 'apple'], 'apple')
);
console.log(countOccurrences(['cat', 'dog', 'cat', 'mouse', 'cat'], 'cat'));
console.log(countOccurrences(['red', 'blue', 'green'], 'yellow'));

/*
  19. Remove Falsy Values
      - Define a function `removeFalsyValues(arr)` that loops through an array
        and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
      - Log the new array.
  */
function removeFalsyValues(arr) {
  const result = [];
  for (const item of arr) {
    if (item) {
      result.push(item);
    }
  }
  return result;
}

console.log(
  removeFalsyValues([0, 1, false, 2, '', 3, null, undefined, NaN, 4])
);
console.log(removeFalsyValues(['apple', '', 'banana', null, 'cherry', false]));

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
    if (!isNaN(char) && char !== ' ') {
      sum += Number(char);
    }
  }
  console.log(sum);
  return sum;
}

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
  return average;
}

console.log(averageArray([10, 20, 30, 40]));
console.log(averageArray([5, 15, 25]));

/*
  22. Flatten a 2D Array (Nested Loops)
      - Define a function `flattenArray(twoDArray)` that takes an array of arrays
        (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
      - Log the flattened array.
  */
function flattenArray(twoDArray) {
  const flattened = [];
  for (const subArray of twoDArray) {
    for (const item of subArray) {
      flattened.push(item);
    }
  }
  return flattened;
}

console.log(
  flattenArray([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
console.log(flattenArray([[7, 8], [9], [10, 11, 12]]));

/*
  23. Find Words Containing a Letter
      - Define a function `findWordsWithLetter(words, letter)` that loops through
        an array of words and returns a new array of only the words that contain
        the given letter.
      - Log the filtered array.
  */
function findWordsWithLetter(words, letter) {
  const result = [];
  for (const word of words) {
    if (word.includes(letter)) {
      result.push(word);
    }
  }
  return result;
}

console.log(findWordsWithLetter(['apple', 'banana', 'cherry', 'date'], 'a'));
console.log(findWordsWithLetter(['kiwi', 'grape', 'melon', 'berry'], 'e'));

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
  console.log('After push:', arr);

  const poppedItem = arr.pop();
  console.log('Popped item:', poppedItem);

  console.log('After pop:', arr);
}

pushPopExample([1, 2, 3], 4);
pushPopExample(['apple', 'banana'], 'cherry');

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
  console.log('After push:', queue);

  const removedPerson = queue.shift();
  console.log('Removed person:', removedPerson);

  console.log('After shift:', queue);
}

manageQueue(['Alice', 'Bob', 'Charlie'], 'Diana');
manageQueue(['Tom', 'Jerry'], 'Spike');

/*
  26. To-Do List Application 
    - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
     - Logs the current list of tasks.
     - Removes `deleteCount` tasks starting at `startIndex`.
     - Inserts any new tasks at the end of the array.
     - Logs the updated list.
  */

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks) {
  console.log('Current list:', todoList);

  todoList.splice(startIndex, deleteCount, ...newTasks);

  console.log('Updated list:', todoList);
}

updateTodoList(
  ['Task 1', 'Task 2', 'Task 3'],
  1,
  1,
  'New Task 2',
  'New Task 3'
);
updateTodoList(
  ['Buy groceries', 'Clean house', 'Do laundry'],
  0,
  2,
  'Walk the dog'
);
