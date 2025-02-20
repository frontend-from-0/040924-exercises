/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
function getDomain(email) {
  let atIndex = email.indexOf('@');
  return email.slice(atIndex + 1);
}

console.log(getDomain('dilek.tas@yahoo.com'));

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/

function containsWord(sentence, word) {
  if (sentence.includes(word)) {
    return `$ {word} found in sentence.`;
  } else {
    return `$ {word} not found in sentence.`;
  }
}

console.log(containsWord('This is an apple.', 'apple'));

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/

function checkFileExtension(filename) {
  if (filename.endsWith('.pdf')) {
    return 'This is a PDF file.';
  } else {
    return 'Not a PDF file.';
  }
}
console.log(checkFileExtension('teklifler.pdf'));
console.log(checkFileExtension('görsel.jpg'));

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards (normalize the string and compare it to reversed version of itself).
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  let reversed = str.split('').reverse().join('');

  if (str === reversed) {
    return `$ {str} is a palindrome`;
  } else {
    return `$ {str} is not a palindrome`;
  }
}
console.log(isPalindrome('kek'));
console.log(isPalindrome('Dilek'));

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(evenOrOdd(57));
console.log(evenOrOdd(68));

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

function checkProtocol(url) {
  url = url.toLowerCase();

  if (url.startsWith('https')) {
    return 'Secure connection';
  } else {
    return 'Unsecure connection';
  }
}

console.log(checkProtocol('https://www.vitafizyoterapi.com'));

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

function repeatWord(word, times) {
  console.log(word.repeat(times));
}

repeatWord('Elma', 4);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/

function censorWord(sentence, target) {
  let cencoredSentence = sentence.replaceAll(target, '****');

  console.log(cencoredSentence);
}

censorWord('My name is Dilek', 'Dilek');

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/

function startsWithA(str) {
  if (str.charAt(0) === 'A') {
    return 'Starts with A';
  } else {
    return 'Does not start with A';
  }
}

console.log(startsWithA('Vinegar'));

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/

function sliceLastN(text, n) {
  console.log(text.slice(-n));
}

sliceLastN('Elma', 2);

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
  if (score >= 90) {
    return 'A';
  } else if (score >= 80 && score <= 89) {
    return 'B';
  } else if (score >= 70 && score <= 79) {
    return 'C';
  } else if (score >= 60 && score <= 69) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(gradeChecker(62));

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

replaceCharacter('It is o red toble', 'o', 'a');

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

  const titleCasedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  const changedSentence = titleCasedWords.join(' ');
  console.log(changedSentence);
}

titleCase('log the transformed string');

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/

function trafficLight(color) {
  let answer = '';
  switch (color) {
    case 'red':
      answer = 'Stop';
      break;
    case 'yellow':
      answer = 'Caution';
      break;
    case 'green':
      answer = 'Go';
      break;
    default:
      answer = 'Invalid color';
  }
  return answer;
}

console.log(trafficLight('green'));

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/

function isLongString(str) {
  if (str.length > 10) {
    return 'Long string';
  } else {
    return 'Short string';
  }
}

console.log(isLongString('Dilek'));

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/

function isSpam(text) {
  text = text.toLowerCase();
  console.log(text); // Just to check the Lowercase output.

  if (text.includes('spam')) {
    console.log('This text is spam.');
  } else {
    console.log('This text is not spam.');
  }
}

isSpam('This text is just a TEXT.');

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/

function getInitials(fullName) {
  const nameParts = fullName.split(' ');
  const initials = nameParts.map((part) => part.charAt(0).toUpperCase());
  const initialsString = initials.join('.') + '.';
  console.log(initialsString);
}

getInitials('John C. Maxwell');

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
      console.log('Invalid Month');
  }
}
getSeason(13);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/

function containsNumber(str) {
  let digits = str.match(/\d/g);

  if (digits) {
    console.log('Contains number');
  } else {
    console.log('No number found');
  }
}

containsNumber('We have 5 pizza slices.');
/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/

function padString(str, maxLength) {
  if (str.length < maxLength) {
    return str.padEnd(maxLength, '*');
  } else {
    return str;
  }
}

console.log(padString('Car', 8));

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

canVote(14);

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

reverseWords('My name is Dilek');

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/

function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);
  if (index === -1) {
    console.log('not found');
  } else {
    console.log(index);
  }
}

findWordPosition('This is a white cat.', 'cat');

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
  let result;

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      result = 'Invalid operator';
  }
  console.log(result);
}
calculate(6, '+', 2);
calculate(6, '-', 2);
calculate(6, '*', 2);
calculate(6, '/', 0);
calculate(6, '?', 2);
