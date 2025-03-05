/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
console.log('Example-4');

function getDomain(email) {
  const atIndex = email.indexOf('@');
  const domain = email.slice(atIndex + 1);
  console.log(domain);
  return domain;
}
getDomain('user@example.com');

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/
console.log('Example-5');

function containWord(sentence, word) {
  if (!word) {
    console.log('Error: Missing word parameter.');
    return;
  }
  if (sentence.includes(word)) {
    console.log('<word> found in sentence.');
  } else {
    console.log('<word> not found in sentence.');
  }
}
containWord('Hello world!');
containWord('Hello world!', 'world');

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
console.log('Example-6');

function checkFileExtension(filename) {
  if (filename.endsWith('.pdf')) {
    console.log('This is a PDF file.');
  } else {
    console.log('Not a PDF file.');
  }
}
checkFileExtension('document.pdf');
checkFileExtension('vacation.png');

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards (normalize the string and compare it to reversed version of itself).
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/
console.log('Example-8');

function isPalindrome(str) {
  const reversedStr = str.split('').reverse().join('');

  if (str == reversedStr) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}
isPalindrome('level');
isPalindrome('flower');

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
  if (number % 2 == 0) {
    console.log(`${number}, is even.`);
  } else {
    console.log(`${number}, is odd.`);
  }
}
evenOrOdd(5);
evenOrOdd(10);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
console.log('Example-11');

function checkProtocol(url) {
  const lowerCaseUrl = url.toLowerCase();
  if (lowerCaseUrl.startsWith('https')) {
    console.log('Secure connection');
  } else {
    console.log('Unsecure connection');
  }
}
checkProtocol('https://www.google.com');
checkProtocol('https://www.freecodecamp.org/');
checkProtocol('//www.freecodecamp.org/');

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
console.log('Example-13');

function repeatWord(word, times) {
  const repeatWord = word.repeat(times);
  console.log(repeatWord);
}

repeatWord('Hello', 3);
repeatWord('Hi', 5);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
console.log('Example-14');

function censorWord(sentence, target) {
  const censoredSentence = sentence.replaceAll(target, '***');
  console.log(censoredSentence);
}

censorWord('I love apples and apples are great.', 'apples');

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
console.log('Example-15');

function startsWithA(str) {
  if (str.charAt(0) == 'A') {
    console.log('Starts with A');
  } else {
    console.log('Does not start with A');
  }
}
startsWithA('Apple');
startsWithA('Banana');

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
console.log('Example-16');

function sliceLastN(text, n) {
  const result = text.slice(-n);
  console.log(result);
}

sliceLastN('Hello', 3);
sliceLastN('JavaScript', 4);
sliceLastN('Hello, World!', 1);

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
console.log('Example-17');

function gradeChecker(score) {
  switch (true) {
    case score >= 90:
      console.log('A');
      break;
    case score >= 80 && score <= 89:
      console.log('B');
      break;
    case score >= 70 && score <= 79:
      console.log('C');
      break;
    case score >= 60 && score <= 69:
      console.log('D');
      break;
    case score < 60:
      console.log('F');
      break;
    default:
      console.log('Invalid score');
  }
}
gradeChecker(100);
gradeChecker(85);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
console.log('Example-18');

function replaceCharacter(str, oldChar, newChar) {
  const replacedResult = str.replaceAll(oldChar, newChar);
  console.log(replacedResult);
}

replaceCharacter('Hello', 'l', 'y');

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
console.log('Example-19');

function titleCase(sentence) {
  const titleCased = sentence
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  console.log(titleCased);
}
titleCase('hello world!');

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
console.log('Example-20');

function trafficLight(color) {
  switch (color) {
    case 'red':
      console.log('Stop');
      break;
    case 'yellow':
      console.log('Caution');
      break;
    case 'green':
      console.log('Go');
      break;
    default:
      console.log('Invalid color');
  }
}
trafficLight('red');
trafficLight('yellow');
trafficLight('green');
trafficLight('blue');

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
console.log('Example-21');

function isLongString(str) {
  if (str.length > 10) {
    console.log('Long string');
  } else {
    console.log('Short string');
  }
}
isLongString('Hello World!');
isLongString('Hello');

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
console.log('Example-22');

function isSpam(text) {
  const loverCaseText = text.toLowerCase();
  if (loverCaseText.includes('spam')) {
    console.log('This text is spam.');
  } else {
    console.log('This text is not spam.');
  }
}
isSpam('This is a SPAM message.');
isSpam('This is a safe message.');

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
console.log('Example-23');

function getInitials(fullName) {
  const nameParts = fullName.split(' ');
  const initials = nameParts
    .map((part) => part.charAt(0).toUpperCase())
    .join('.');

  console.log(initials + '.');
}
getInitials('John Doe');

/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/
console.log('Example-24');

function getSeason(monthNum) {
  switch (monthNum) {
    case 12:
    case 1:
    case 2:
      console.log('Winter');
      break;
    case 3:
    case 4:
    case 5:
      console.log('Spring');
      break;
    case 6:
    case 7:
    case 8:
      console.log('Summer');
      break;
    case 9:
    case 10:
    case 11:
      console.log('Autumn');
      break;
    default:
      console.log('Invalid month');
  }
}
getSeason(12);
getSeason(6);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
console.log('Example-25');

function containsNumber(str) {
  if (str.match(/\d/)) {
    console.log('Contains number');
  } else {
    console.log('No number found');
  }
}
containsNumber('Hello');
containsNumber('Hello 123');

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
console.log('Example-26');

function padString(str, maxLength) {
  if (str.length < maxLength) {
    str = str.padEnd(maxLength, '*');
  }
  console.log(str);
}

padString('Hello', 10);
padString('Hi', 5);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
console.log('Example-27');

function canVote(age) {
  if (age >= 18) {
    console.log('Can vote');
  } else {
    console.log('Too young to vote');
  }
}
canVote(26);
canVote(17);

/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
console.log('Example-28');

function reverseWords(sentence) {
  const reversed = sentence
    .split(' ')
    .map((word) => word.split('').reverse().join(''))
    .join(' ');
  console.log(reversed);
}
reverseWords('Hello world');

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
console.log('Example-29');

function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);
  if (index !== -1) {
    console.log(index);
  } else {
    console.log('Not found');
  }
}
findWordPosition('Hello world', 'world');
findWordPosition('Hello world', 'planet');

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
console.log('Example-30');

function calculate(a, operator, b) {
  let calculateResult;

  switch (operator) {
    case '+':
      calculateResult = a + b;
      break;
    case '-':
      calculateResult = a - b;
      break;
    case '*':
      calculateResult = a * b;
      break;
    case '/':
      calculateResult = a / b;
      break;
    default:
      console.log('Invalid operator');
      return;
  }
  console.log(calculateResult);
}
calculate(5, '+', 3);
calculate(10, '*', 2);
