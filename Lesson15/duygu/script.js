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

  let domain = email.slice(email.indexOf("@") + 1);
  console.log(domain);
  return domain;

}
getDomain("duygucetind@gmail.com");
/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/
function containsWord(sentence, word) {
  if (sentence.includes(word)) {
    console.log("<word> found in sentence.");
    return "<word> found in sentence.";
  } else {
    console.log("<word> not found in sentence.");
    return "<word> not found in sentence.";
  }
}

containsWord("This is a sentence that includes word", "word");
containsWord("This is a sentence", "word");

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
    return "This is a PDF file."
  } else {
    console.log("Not a PDF file.");
    return "Not a PDF file."
  }
}
checkFileExtension("The file name is file.pdf");
checkFileExtension("The file name is file.doc");

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
function isPalindrome(input) {
  const str = input.toString();
  const reversedStr = str.split("").reverse().join("");

  if (reversedStr === str) {
    console.log(`${input} is a palindrome`);
  } else {
    console.log(`${input} is not a palindrome`);
  }
}

isPalindrome(303);
isPalindrome("SOS");
isPalindrome(105);
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
    console.log("Odd")
  }
}

evenOrOdd(2);
evenOrOdd(7);


/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

function checkProtocol(url) {
  const securedCon = url.toLowerCase().startsWith("https");
  if (securedCon ) {
    console.log("Secure connection" );
  } else {
    console.log("Unsecure connection");
  }
}
checkProtocol("HTTP://WWW.HELLOWORLD.COM");
checkProtocol("https://www.helloworld.com");



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
  const repeated = word.repeat(times);
  console.log(repeated);
}

repeatWord("Hohoo", 4);

/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, censored){
  console.log (sentence.replaceAll(censored, '****'));
}
censorWord("This is a censored word.", "censored");

/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str) {
  if (str.charAt(0) === 'A') {
  console.log("Starts with A");
}
 else {
  console.log("Does not start with A");
}
}
startsWithA("Ayakkabı");
startsWithA("Pantolon");
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n) {
  const slicedWord = text.slice(-n);
  console.log(nthword);
}
sliceLastN("How are you?", -4);
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
    console.log("A");
  } else if (score >= 80) {
    console.log("B");
  } else if (score >= 70) {
    console.log("C");
  } else if (score >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}

gradeChecker(95);
gradeChecker(85);
gradeChecker(75);
gradeChecker(65);
gradeChecker(50);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(word, oldChar, newChar){
  console.log (word.replaceAll(oldChar, newChar));
  
}
replaceCharacter("Anlamadım", "n", "ğ");
/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
function titleCase(sentence) {
  let words = sentence.split(" ");
  let capitalizedWords = words.map(word => 
    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  );
  let transformedSentence = capitalizedWords.join(" ");

  console.log(transformedSentence);
  return transformedSentence;
}


titleCase("hello world");
titleCase("this is a test");
titleCase("javaScript IS fun!");


/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color) {
  switch (color) {
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

trafficLight("red");
trafficLight("yellow");
trafficLight("green");
trafficLight("Red");
trafficLight("BLUE");

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

isLongString("Hello world!");
isLongString("Hi!");


/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text) {
  const checkedText = text.toLowerCase().includes("spam");
  if (checkedText) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
}
isSpam("PLEASE CHECK YOUR SPAM MAIL");
isSpam("HI, HOW ARE YOU?");


/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
  let seperated = fullName.split(" ").map(name => name[0].toUpperCase()).join(".");
  return seperated;
}

console.log(getInitials("Süreyya Ekin Şen"));
console.log(getInitials("İskender Yalım Şen"));
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
  switch (true) {
    case monthNum === 12 || monthNum === 1 || monthNum === 2:
      console.log("Winter");
      break;
    case monthNum === 3 || monthNum === 4 || monthNum === 5:
      console.log("Spring");
      break;
    case monthNum === 6 || monthNum === 7 || monthNum === 8:
      console.log("Summer");
      break;
    case monthNum === 9 || monthNum === 10 || monthNum === 11:
      console.log("Autumn");
      break;
    default:
      console.log("Invalid month");
  }
}

getSeason(1);
getSeason(4);
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
    console.log("Contains number");
  } else {
    console.log("No number found");
  }
}

containsNumber("Hello123");
containsNumber("NoNumbersHere");
containsNumber("2023 is here!"); 
containsNumber("");

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength) {
  if (str.length < maxLength) {
    
    let paddedStr = str.padEnd(maxLength, "*");
    console.log(paddedStr);
    return paddedStr;
  } else {
  
    console.log(str);
    return str;
  }
}


padString("Hello", 10);
padString("Hi", 5);
padString("JavaScript", 15);
padString("Already Long Enough", 10);


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

canVote(17);
canVote(18);
canVote(21);
/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
function reverseWords(sentence) {
  let words = sentence.split(" ");
  let reversedWords = words.map(word => word.split("").reverse().join(""));
  return reversedWords.join(" ");
}

console.log(reverseWords("Hello world"));

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence, word) {
  const index = sentence.indexOf(word);
  if ( index !== -1) {
    console.log(index);
  } else {
    console.log("Not found");
  }
}

findWordPosition("This is a pencil", "pencil");
findWordPosition("I like to read book", "novel");

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
    case "+":
      console.log(a + b);
      break;
    case "-":
      console.log(a - b);
      break;
    case "*":
      console.log(a * b);
      break;
    case "/":
      if (b !== 0) {
        console.log(a / b);
      } else {
        console.log("Division by zero is not allowed");
      }
      break;
    default:
      console.log("Invalid operator");
  }
}

calculate(10, "+", 5);
calculate(10, "-", 5);
calculate(10, "*", 5);
calculate(10, "/", 2);
calculate(10, "/", 0); 
calculate(10, "%", 5);