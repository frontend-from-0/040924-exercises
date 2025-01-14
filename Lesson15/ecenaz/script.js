// Keys: function, return, if, else , switch

/*
1. Check Password Length
   - Define a function `checkPassword(password)` that checks if `password` length
     is at least 8 characters.
   - If >= 8, log: "Password length is sufficient."
   - Otherwise, log: "Password is too short."
   - Call the function with different passwords and log the result.
*/

function checkPassword(password) {
  const passwordLength = password.length;
  if (passwordLength >= 8) {
    console.log("Password length is sufficient.");
    return "Password length is sufficient.";
  } else {
    console.log("Password is too short.");
    return "Password is too short.";
  }
}

// document.getElementById("submitButton").addEventListener("click", function (e) {
//   e.preventDefault();
//   const password = document.getElementById("passwordInput").value;
//   const feedbackMessage = checkPassword(password);
//   document.getElementById("passwordError").innerText = feedbackMessage;
// });

const passwordExample = "Password123";

checkPassword("Password is too short.");
checkPassword("Short.");
checkPassword(passwordExample);

/*
2. Uppercase Name
   - Define a function `uppercaseName(name)` that converts a given name to uppercase.
   - Log the uppercase result to the console. .toUpperCase()
   - Example: "John Doe" -> "JOHN DOE"
*/
function upperCaseName(name) {
  console.log(name.toUpperCase());
}

upperCaseName("Password is too short.");

/*
3. Lowercase Email
   - Define a function `normalizeEmail(email)` that returns a lowercased version of the email.
   - Log the normalized email to the console.
   - Example: "USER@Example.COM" -> "user@example.com"
*/

function normalizeEmail(email) {
  console.log(email.toLowerCase());
}
normalizeEmail("EMAIL@email.COM");

/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
function getDomain(email) {

  const atIndex = email.indexOf('@');
  return email.slice(atIndex + 1);
}
console.log(getDomain('user@example.com'));


/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/
function containsWord(sentence, word) {

  if (sentence.includes(word)) {
    console.log(`${word} found in sentence.`);
  } else {
    console.log(`${word} not found in sentence.`);
  }
}

containsWord("This sentence has a word", "word");
containsWord("This is a sentence.", "word");



/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
function checkFileExtension(filename) {
  if (filename.endsWith(".pdf")) {
    console.log("This is a PDF file.");
  } else {
    console.log("Not a PDF file.");
  }
}


checkFileExtension("document.pdf");
checkFileExtension("image.jpg");

/*
7. Compare Numbers (if-else)
   - Define a function `compareNumbers(a, b)` that:
     - Logs "a is bigger" if a > b
     - Logs "b is bigger" if b > a
     - Logs "Numbers are equal" if they are the same
*/
function compareNumbers(a, b) {
  if (a > b) {
    console.log("a is bigger");
  } else if (b > a) {
    console.log("b is bigger");
  } else {
    console.log("Numbers are equal");
  }
}

compareNumbers(4, 5);
compareNumbers(8, 3);
compareNumbers(4, 4);
/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards (normalize the string and compare it to reversed version of itself).
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/
function isPalindrome(str) {
  const normalizedStr = str.replace().toLowerCase();

  const reversedStr = normalizedStr.split('').reverse().join('');

  if (normalizedStr === reversedStr) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}
isPalindrome("Radar");
isPalindrome("Hello");



/*
9. String Truncation
   - Define a function `truncateString(text, maxLength)` that uses slice() to
     cut the string to `maxLength` characters, then appends "..." if it was too long.
   - Log the final truncated string.
*/

function truncateString(text, maxLength) {
  if (text.length > maxLength) {
    console.log(text.slice(0, maxLength) + "...");
  } else {
    console.log(text);
  }
}
truncateString(
  "Define a function `truncateString(text, maxLength)` that uses slice()",
  10,
);
truncateString(
  "Define a function `truncateString(text, maxLength)` that uses slice()",
  5,
);

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }

}
evenOrOdd(5);
evenOrOdd(16);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url) {
  const lowerCaseUrl = url.toLowerCase();

  if (lowerCaseUrl.startsWith("https")) {
    console.log("Secure connection");
  } else {
    console.log("Unsecure connection");
  }
}
checkProtocol("https://www.example.com");
checkProtocol("HELLO://www.example.com");


/*
12. Switch: Day of the Week
   - Define a function `getDayOfWeek(num)` that uses a switch statement:
     1 -> "Monday"
     2 -> "Tuesday"
     ...
     7 -> "Sunday"
     - Log the matched day or "Invalid day" if out of range.
*/

function getDayOfWeek(num) {
  switch (num) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Weddnesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break;
    default:
      console.log("Unknow day");
      break;
  }
}

getDayOfWeek(5);
getDayOfWeek(4);
getDayOfWeek(1);
getDayOfWeek('hello');
getDayOfWeek(10);



/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
   
*/
function repeatWord(word, times) {

  const repeatedWord = word.repeat(times);


  console.log(repeatedWord);
}
repeatWord("hello world", 3);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target) {
  const censoredWord = sentence.replaceAll(target, "*****");

  console.log(censoredWord);
}
censorWord("This is a bad sentence with bad words.", "bad");

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startWithA(str) {

  if (str.charAt(0) === 'A') {
    console.log("starts With A");
  } else {
    console.log("Does not start with A");
  }

}

startWithA("Apple");
startWithA("Banana");
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  const slicedText = text.slice(-n);

  console.log(slicedText);
}
sliceLastN("Hello, World!", 5);
/*
17. Switch: Grade Checker
   - Define a function `gradeChecker(score)` that uses a switch (or if-else chain):
     90+ -> "A"
     80-89 -> "B"
     70-79 -> "C"
     60-69 -> "D"
     below 60 -> "F"
   - Log the grade.
*/



function gradeChecker(score) {

  switch (score) {
    case '90+':
      console.log("A");
      break;
    case 80 - 89:
      console.log("B");
      break;
    case 70 - 79:
      console.log("C");
      break;
    case 60 - 69:
      console.log("D");
      break;
    case 'below 60':
      console.log("F");
      break;


  }
  console.log(gradeChecker);
}
gradeChecker(64);
gradeChecker(80);


/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
   
*/
function replaceCharacter(str, oldChar, newChar) {
  return str.replaceAll(oldChar, newChar);
}

console.log(replaceCharacter("hello world", "o", "0"));
/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
function titleCase(sentence) {
  const words = sentence.split(' ');
  const titleCasedSentence = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
  console.log(titleCasedSentence);
}

titleCase("hello world i am ece naz");
/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
  switch (color.toLowerCase()) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Caution");
      break;
    case "green":
      console.log("Go");
      break;

    default:
      console.log("Invalid color");

  }
}
trafficLight("green");
trafficLight("red");
trafficLight("blue");
trafficLight('yellow');

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
   
*/
function isLongString(str) {

  if (str.length > 10) {
    console.log("Long string");

  } else {
    console.log("Short string");
  }


}
isLongString("Merhaba Herkese");
isLongString("mrb");

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
  if (text.toLowerCase().includes("spam")) {
    console.log("This text spam");
  } else {
    console.log("This text is not spam");
  }
}
isSpam("There is a spam.");
isSpam("not at all");

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
  const nameParts = fullName.split(' ');
  const initials = nameParts.map(part => part.charAt(0).toUpperCase());
  console.log(initials.join(''));
}


getInitials("Ece Naz Zagli");
/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/
function getSeason(monthNum) {

  switch (monthNum) {
    case 12:
    case 1:
    case 2:

      console.log("Winter");
      break;
    case 3:
    case 4:
    case 5:

      console.log("Spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("Summer");
      break;

    case 9:
    case 10:
    case 11:
      console.log("Autumn");
      break;
  }
}
getSeason(5);
getSeason(6);
getSeason(12);
getSeason(11);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
function containsNumber(str) {
  if (str.match(/\d/)) {
    console.log("Contains number");
  } else {
    console.log("No number found");
  }

}
containsNumber("with55");
containsNumber("No numbers");

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/


function padString(str, maxLength) {

  if (str.length < maxLength) {
    console.log(str.padEnd(maxLength, '*'));
  } else {
    console.log(str);
  }



}
function padString(str, maxLength) {

  if (str.length < maxLength) {
    console.log(str.padStart(maxLength, '*'));
  } else {
    console.log(str);
  }
}

padString("world", 15);
padString("hello", 10);



/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age) {
  if (age >= 18) {
    console.log("Can vote");
  } else {
    console.log("Too young to vote");
  }
}
canVote(19);
canVote(10);
/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
function reverseWords(sentence) {

  const reversed = sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  console.log(reversed);
}
reverseWords("I am Ece.")

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word){
  const index = sentence.indexOf(word);
  if (index === -1){
    console.log("Not found");
  }else{
    console.log(index);
  }
}
findWordPosition("JavaScript is fun","fun");
findWordPosition("Coding requires hard working.", "easy");
/*
30. Switch: Simple Calculator
   - Define a function `calculate(a, operator, b)` that uses switch to handle:
     - "+" -> a + b
     - "-" -> a - b
     - "*" -> a * b
     - "/" -> a / b
     - Otherwise -> "Invalid operator"
   - Log the result.
*/

function containWord(sentence, word) {
  return sentence.toLowerCase().includes(word.toLowerCase());
}

// Example usage:
console.log(containWord("Hello World!", "world")); // true
console.log(containWord("JavaScript is Fun", "fun")); // true