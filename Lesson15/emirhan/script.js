/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/

let example1 = 'user@example.com';
function getDomain(email) {
  let isaret = email.indexOf('@');
  let sonuc = email.slice(isaret + 1);
  return sonuc;
}
let domain = getDomain(example1);
console.log(domain);
/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/
let sentence = ('Hello Word');
function containsWord(sentence) {
  let cevap = sentence.includes('Word');
  if (cevap === true) {
    console.log("<word> found in sentence.");
  } else {
    console.log("<word> not found in sentence.");
  }
}
containsWord(sentence, 'Word');
/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
let fileName = "example.udf";

function checkFileExtension(fileName) {
  let endsWith = fileName.endsWith(".pdf");
  if (endsWith === true) {
    console.log("This is a PDF file.");
  } else {
    console.log("Not a PDF file.");
  }
}
checkFileExtension(fileName);

/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards (normalize the string and compare it to reversed version of itself).
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/

let str = "level";
function isPalindrome(str) {
  let reverse = str.split('').reverse().join('');
  if (reverse === str) {
    console.log(str + " is a palindrome");
  } else {
    console.log(str + " is not a palindrome");
  }
} isPalindrome(str);


/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
const number = 13;
function evenOrOdd(number) {
  if (number % 2 === 1) {
    console.log("number is odd");

  } else {
    console.log("number is even");
  }

} evenOrOdd(number);
/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
let url = "https://www.code2career.dev/";
function checkProtocol(url) {
  let urlLowerCase = url.toLowerCase();
  let urlSafe = urlLowerCase.startsWith("https");
  if (urlSafe === true) {
    console.log("Secure connection");

  } else {
    console.log("Unsecure connection");
  }
} checkProtocol(url);

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word, times) {
  const result13 = word.repeat(times);
  console.log(result13);

} repeatWord("Emir", 6);
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
let metin = "Merhabalar ben Emir";
function censorWord(sentence, word) {
  let result14 = metin.replace(sentence, word);
  console.log(result14);
} censorWord("ben", "****");


/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
let startsWithWord = "sA man";
function startsWithA(str) {
  let result15 = startsWithWord.charAt(0);
  if (result15 === "A") {
    console.log("Starts with A");
  } else {
    console.log("Does not start with A");
  }

} startsWithA(str);

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
let text = "Log the result";
function sliceLastN(text, n) {
  let result16 = text.slice(-n);
  console.log(result16);

} sliceLastN(text, 3);
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
let score = 76.5;
function gradeChecker(score) {
  switch (true) {
    case (score >= 90):
      console.log("Grade = A");
      break;
    case (score >= 80):
      console.log("Grade = B");
      break;
    case (score >= 70):
      console.log("Grade = C");
      break;
    case (score >= 60):
      console.log("Grade = D");
      break;
    case (score >= 0):
      console.log("Grade = F");
      break;
    case (score > 100):
      console.log("Hatali Deger Girildi");
      break;
    default:
      console.log("Deger Giriniz");
      break;
  }
} gradeChecker(score);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
let str18 = "Dunya Cok Guzel";
function replaceCharacter(str, oldChar, newChar) {
  let result = str18.replaceAll(oldChar, newChar);
  console.log(result);

} replaceCharacter(str18, "Dunya", "Evren");
/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
let sentence19 = "merhaba bugun hava nasil";
function titleCase(sentence19) {

}

/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
let color = "Green";
function trafficLight(color) {
  switch (color) {
    case "Red":
      console.log("Stop");
      break;
    case "Yellow":
      console.log("Caution");
      break;
    case "Green":
      console.log("Go");
      break;
  }
} trafficLight(color);
/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
let str21 = "Check String Length (if-else)";
function isLongString(str21) {
  let result21 = str21.length;
  if (result21 >= 10) {
    console.log("Long string");
  } else {
    console.log("Short string");
  }
} isLongString(str21);
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
let metin22 = "Convert to Lowercase Then Check spam";
function isSpam(text) {
  let result22 = metin22.toLowerCase().includes("spam");
  if (result22 === true) {
    console.log("This text is spam.");
  } else {
    console.log("This text is not spam.");
  }
} isSpam(metin22);

/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName) {
  let fullName3 = fullName.toUpperCase();
  let fullName2 = fullName3.split(" ");
  let fullName4 = fullName3.charAt(0);

  console.log(fullName4);

} getInitials("Emir Bayatli");
/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/
let monthNum = 5;
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
    default:
      console.log("Invalid month");
      break;
  }

} getSeason(monthNum);



/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
let findNumber = "Check If String Contains Number";

function containsNumber(str){
  let isTrue = findNumber.match(/\d/);
  if (isTrue){
    console.log("Contains number");
  }else{
    console.log("No number found");
  }

}containsNumber(findNumber);
/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str, maxLength){
 let str26 = str.length;
 if (maxLength>str26){
  let newStr = str.padEnd(maxLength , '*');
  console.log(newStr);
 }
 else{
  console.log(str);
 }
}padString("Log the padded string.", 70);
/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
let age = -19;
function canVote(age){

  if (age>=18){
    console.log("Can vote");
  }
  else{
    console.log("Too young to vote");
  }

} canVote(age);
/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/
function reverseWords (sentence){
  

}reverseWords (sentence);
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/

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