/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/

function getDomain(email) {
  const domain = email.slice(email.indexOf('@') + 1);
  console.log(domain);
}

getDomain('user@example.com');

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

containsWord('JavaScript is a powerful language', 'JavaScript');
containsWord('Learning coding is fun', 'Python');

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/

function checkFileExtension(filename) {
  if (filename.endsWith('.pdf')) {
    console.log('This is a PDF file');
  } else {
    console.log('Not a PDF file');
  }
}

checkFileExtension('document.pdf');
checkFileExtension('image.png');
//checkFileExtension("file.PDF"); // not buyuk ve kucuk harfe duyarli !

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards (normalize the string and compare it to reversed version of itself).
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/

function isPalindrome(str) {
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = normalizedStr.split('').reverse().join('');
  if (normalizedStr === reversedStr) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }
}

isPalindrome('Madam');
isPalindrome('hello');

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number) {
  if (number % 2 === 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}
evenOrOdd(4);
evenOrOdd(5);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

function checkProtocol(url) {
  if (url.toLowerCase().startsWith('https')) {
    console.log('Secure connection');
  } else {
    console.log('Unsecure connection');
  }
}

checkProtocol('https://example.com');
checkProtocol('http://example.com');

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

repeatWord('Hello', 3);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/

function censorWord(sentence, target) {
  const censoredSentence = sentence.replaceAll(target, '****');

  console.log(censoredSentence);
}

censorWord('I love JavaScript, JavaScript is amazing', 'JavaScript');

// 2.ALTERNATIF REPLACE() !!
/* function censorWord(sentence, target) {
 const regex = new RegExp(target, "g");
 const censoredSentence = sentence.replace(regex, "****");
  console.log(censoredSentence);
} */

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/

function startsWithA(str) {
  if (str.charAt(0) === 'A') {
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
function sliceLastN(text, n) {
  const sliceText = text.slice(-n);
  console.log(sliceText);
}
sliceLastN('JavaScript', 3);

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
  switch (true) {
    case score >= 90:
      console.log('A');
      break;
    case score >= 80:
      console.log('B');
      break;
    case score >= 70:
      console.log('C');
      break;
    case score >= 60:
      console.log('D');
      break;
    default:
      console.log('F');
  }
}

gradeChecker(95);
gradeChecker(82);
/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/

function replaceCharacter(str, oldChar, newChar) {
  const updatedStr = str.replaceAll(oldChar, newChar);

  console.log(updatedStr);
}

replaceCharacter('banana', 'a', 'o');

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
  const titleCasedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const titleCasedSentence = titleCasedWords.join(' ');

  console.log(titleCasedSentence);
}

titleCase('hello world');
titleCase('javascript is awesome');

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

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

function isLongString(str) {
  if (str.length > 10) {
    console.log('Long string');
  } else {
    console.log('Short string');
  }
}

isLongString('Hello world!');
isLongString('JavaScript');

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/

function isSpam(text) {
  if (text.toLowerCase().includes('spam')) {
    console.log('This text is spam.');
  } else {
    console.log('This text is not spam.');
  }
}

isSpam('This is a Spam message.');
isSpam('Hello, how are you?');

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/

function getInitials(fullName) {
  const nameParts = fullName.split(' ');
  const initials = nameParts
    .map((name) => name.charAt(0).toUpperCase())
    .join('.');

  console.log(initials + '.');
}

getInitials('Tugba Celik');

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

getSeason(1);
getSeason(5);
getSeason(7);
getSeason(10);
getSeason(13);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/

function containsNumber(str) {
  if (str.match(/\d/)) {
    console.log('Contains number');
  } else {
    console.log('No number found');
  }
}

containsNumber('Hello123'); // Çıktı: "Contains number"
containsNumber('JavaScript'); // Çıktı: "No number found"

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/

function padString(str, maxLength) {
  if (str.length < maxLength) {
    const paddedStr = str.padEnd(maxLength, '*');
    console.log(paddedStr);
  } else {
    console.log(str);
  }
}

padString('Hello', 10);
padString('World', 8);
padString('JavaScript', 5);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/

function canVote(age) {
  if (age >= 18) {
    console.log('Can vote');
  } else {
    console.log('Too young to vote');
  }
}

canVote(20);
canVote(17);

/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/

function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.map((word) => word.split('').reverse().join(''));
  const reversedSentence = reversedWords.join(' ');
  console.log(reversedSentence);
}

reverseWords('Hello World');

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/

function findWordPosition(sentence, word) {
  const position = sentence.indexOf(word);
  if (position === -1) {
    console.log('Not found');
  } else {
    console.log(`Found at index ${position}`);
  }
}

findWordPosition('The quick brown fox', 'quick');
findWordPosition('JavaScript is fun', 'Python');

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

function calculate(a, operator, b) {
  switch (operator) {
    case '+':
      console.log(a + b);
      break;
    case '-':
      console.log(a - b);
      break;
    case '*':
      console.log(a * b);
      break;
    case '/':
      if (b === 0) {
        console.log('Cannot divide by zero');
      } else {
        console.log(a / b);
      }
      break;
    default:
      console.log('Invalid operator');
  }
}

calculate(5, '+', 3);
calculate(10, '-', 4);
calculate(6, '*', 7);
calculate(20, '/', 4);
calculate(10, '/', 0);
calculate(8, '%', 2);
