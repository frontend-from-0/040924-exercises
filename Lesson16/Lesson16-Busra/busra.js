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
printCharacters("busra");


/*
9. Sum All Values in an Object
   - Define a function `sumObjectValues(obj)` that iterates over the
     properties of an object (using a for-in loop) and sums all numeric values.
   - Log the sum.
   - Example: {a: 10, b: 20, c: 5} -> 35
*/
const numbers={
  num1: 10,
  num2:50,
  num3:3.5,
  num4:4,
  num5:"35"
}
let sum = 0;
function sumObjectValues(obj){
for(let num in obj){
  if (typeof numbers[num] === "number"){
    sum = sum + obj[num];
  }
  console.log(sum);
}

}

sumObjectValues(numbers);



/*
10. Print Keys of an Object (For-in)
    - Define a function `printObjectKeys(obj)` that uses a for-in loop
      to log each key of the object.
    - Example: { name: "Alice", age: 25 } -> logs "name", then "age"
*/

let person={
 name:"Busra Demirkesen",
 age:"34",
 job:"Frontend Developer",
 languages:{
    Turkish:"Mother Language",
    English:"B1+",
    German:"A2",
 },
 skills:{
    HTML:"good",
    CSS:"good",
    Javascript:"good"
 }
}


function printObjectKeys(obj){
  for(let key in obj){
    if(typeof obj[key]==="object"&& !Array.isArray(obj[key])){ //I learned this structure by researching in AI because I was curious about what would happen if I used nested objects. Actually, I know that it's not necessary.
      printObjectKeys(obj[key]);
    }else{
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

printObjectKeys(person);
/*
11. Sum Array Using do-while Loop
    - Define a function `sumWithDoWhile(numbers)` that uses a do-while loop
      to sum all numbers in the array.
    - Log the total.
*/
const numbersEx11 = [1,2,3,4,5,6,7,8,9,10];

function sumWithDoWhile(arr){
    let i=0;
    let sumEx11 = 0;
  do{
    sumEx11 += arr[i];
    i++;
  }
  while(i < arr.length);
   
   console.log(sumEx11);

 
}

sumWithDoWhile(numbersEx11);

/*
12. Remove Duplicates from an Array
    - Define a function `removeDuplicates(arr)` that loops through the array
      and creates a new array without duplicate elements.
    - Hint: you could check if the item is already in the new array before pushing.
    - Log the new array without duplicates.
*/

let ArrayEx12 = [1,2,3,3,4,4,5,6,7,8,8,9,10];

function removeDuplicates(arr){
  let newArray = [];
  for(let i=0; i< arr.length; i++){

    if(!newArray.includes(arr[i])){
      newArray.push(arr[i]);
    }
  }
  console.log(newArray);
}

removeDuplicates(ArrayEx12);


/*
13. Calculate Factorial (For Loop)
    - Define a function `factorial(n)` that calculates n! (n factorial)
      using a for loop.
    - Log the result. 
    - Example: factorial(5) -> 120
*/

function factorial(n){
  let calculator = 1;
  for(let i=1; i<=n; i++ ){
     calculator = calculator * i;
  }
  return calculator;
}
factorial(5);

/*
14. String -> Array -> String
    - Define a function `reverseWords(sentence)` that splits the sentence 
      into an array of words, reverses the array order, then joins it back into
      a string. Use loops or built-in methods as you like.
    - Log the reversed sentence.
*/
const sentenceEx14 = "Javascript is the most fun programming language I have ever seen so far";

function reverseWords(sentence) {
  let splitSentence = sentence.split(" ");
  let reversedSentence = [];
  for (let i = splitSentence.length - 1; i >= 0; i--) {
    reversedSentence.push(splitSentence[i]);
  }
  return reversedSentence.join(" ");
}

console.log(reverseWords(sentenceEx14));



/*
15. Filter Words Longer Than X
    - Define a function `filterLongWords(words, minLength)` that uses a for loop
      to collect only the words that have a length >= minLength.
    - Log the resulting array.
*/
const myWords=["bir","iki","üç","dört","beş","altı","yedi","sekiz"];



function filterLongWords(words, minLength){
  let newWords = [];
  for(let i=0; i < words.length; i++){
    if(words[i].length >= minLength){
      newWords.push(words[i]);
    }
    
  }
  return newWords;
}

filterLongWords(myWords, 3);


/*
16. Log Array Elements with Their Indices
    - Define a function `logElementsWithIndex(arr)` that loops through the array
      and logs "Index: i, Value: arr[i]" for each element.
*/

const myArrayEx16 = ["busra","demirkesen",34,true,false];
function logElementsWithIndex(arr){
  for(let i=0; i<myArrayEx16.length; i++){
    console.log(`Index: ${i}, Value: ${myArrayEx16[i]}.`);
  }

}

logElementsWithIndex(myArrayEx16);


/*
17. Find the Smallest Number in an Array
    - Define a function `findMin(numbers)` that loops through the array
      to find and return the smallest number.
    - Log the smallest number.
*/
const MyNumbersEx17 = [4,9,2,1,7,15,3,11];


function findMin(numbers){
  let smallestNumber = numbers[0];
  for(let i=0; i < numbers.length; i++){
    if(numbers[i] < smallestNumber){
      smallestNumber= numbers[i];
    }
  }
  return smallestNumber;
}
findMin(MyNumbersEx17);



/*
18. Count Occurrences of a Word in an Array
    - Define a function `countOccurrences(arr, word)` that loops through `arr`
      to count how many times `word` appears.
    - Log the count.

*/

const foods=["apple","egg","banana","apple","bread","apple"];


function countOccurrences(arr, word){
  let counterEx18 = 0;
    for(let i =0; i < arr.length; i++){
        if(arr[i].toLowerCase() === word.toLowerCase()){
          counterEx18 +=1;
        }
    }
    return counterEx18;
}


countOccurrences(foods,"apple");


/*
19. Remove Falsy Values
    - Define a function `removeFalsyValues(arr)` that loops through an array
      and returns a new array without falsy values (false, 0, "", null, undefined, NaN).
    - Log the new array.
*/
const myArrayEx19=["string", 3 , "number", 8, false, 0 ,"", null, undefined, NaN];

function removeFalsyValues(arr){
   let myNewArrayEx19=[];
   for(let i=0; i < arr.length; i++){
    if(arr[i]){
      myNewArrayEx19.push(arr[i]);
    }
    return myNewArrayEx19;
   }
}
removeFalsyValues(myArrayEx19);



/*
20. Sum of All Digits in a String
    - Define a function `sumDigits(str)` that loops through each character of `str`,
      checks if it's a digit, and if so, adds it to a total sum.
    - Log the final sum.
    - Example: "abc123" -> 6

*/
const strEx20 = "def432ne379";
function sumDigits(str){
  let countEx20 = 0;
  for(let i=0; i<str.length; i++){
    if(typeof str[i] === 'number'){
      counter += Number(str[i]);
    }
  }
  return counter;
}

sumDigits(strEx20);


/*
21. Average of Array Elements
    - Define a function `averageArray(numbers)` that uses a loop
      to calculate the average (sum / length).
    - Log the average.
*/

const myArrayEx21 = [5,7,10,520,789,320,2,84];
function averageArray(numbers){
  let sumEx21 = 0;
  for(let i=0; i<numbers.length; i++){
    sumEx21 = sumEx21 + Number(numbers[i]);
  }
  let avEx21 = sumEx21 / numbers.length;
  return avEx21;
}


averageArray(myArrayEx21);


/*
22. Flatten a 2D Array (Nested Loops)
    - Define a function `flattenArray(twoDArray)` that takes an array of arrays
      (e.g., [[1,2],[3,4]]) and uses nested loops to create a new one-dimensional array.
    - Log the flattened array.
*/

const my2DArray = [[1,4,7],[2,5,8]];


function flattenArray(twoDArray){
  let my1DArray =[];
  for(let i=0; i<twoDArray.length; i++){
    for(let j=0; i< twoDArray[i].length; j++){
      my1DArray.push(twoDArray[i][j]);

    }
  }
return my1DArray;
}

flattenArray(my2DArray);



/*
23. Find Words Containing a Letter
    - Define a function `findWordsWithLetter(words, letter)` that loops through
      an array of words and returns a new array of only the words that contain
      the given letter.
    - Log the filtered array.
*/

const myWordsEx23 = ["Mersin","Manisa","Muğla","Kıriehir","Kırklareli","Kırıkkale"];

function findWordsWithLetter(words, letter){
  let myNewArrayEx23 = [];
  for(let i=0; i < words.length; i++){
    if (words[i].toLowerCase().includes(letter.toLowerCase())) {
      {
      myNewArrayEx23.push(words[i]);
    }
  }
return myNewArrayEx23;
}

}

findWordsWithLetter(myWordsEx23,"M");



/*
24. Push and Pop Operations
    - Define a function `pushPopExample(arr, itemToPush)` that:
      - pushes itemToPush to arr
      - logs the updated array
      - then pops the last element
      - logs the popped element
      - logs the final array
*/


let MyArrEx24=["Mercedes","BMW","Wolkswagen","Audi"];
const MyItem ="Opel";

function pushPopExample(arr, itemToPush){
  arr.push(itemToPush);
  console.log("After push: "+ arr);
  arr.pop();
  console.log("After pop: " + arr);

}

pushPopExample(MyArrEx24,MyItem);

/*
25. Push and Shift Operations
    - Define a function `manageQueue(queue, newPerson)` that:
      - push `newPerson` to the end of `queue`
      - logs the updated queue
      - shifts (removes) the first person in the queue
      - logs the removed person
      - logs the final queue
*/
let PersonelList = ["ayse","ali","mehmet","zeynep"];
const Myperson="ahmet";


function manageQueue(queue, newPerson){
  queue.push(newPerson);
  console.log(queue);
  queue.shift();
  console.log(queue);
 
}

manageQueue(PersonelList,Myperson);

/*
26. To-Do List Application 
  - Define a function `updateTodoList(todoList, startIndex, deleteCount, ...newTasks)`:
   - Logs the current list of tasks.
   - Removes `deleteCount` tasks starting at `startIndex`.
   - Inserts any new tasks at the end of the array.
   - Logs the updated list.
*/



const MytodoList = ["Study JS", "Eat breakfast", "Walk dog"];
const myNewTasks = ["go gym","prep dinner"];

function updateTodoList(todoList, startIndex, deleteCount, ...newTasks){
  todoList.splice(startIndex,deleteCount);
  todoList.push(...newTasks);
  console.log(todoList);

}

updateTodoList(MytodoList,0,2, ...myNewTasks);



