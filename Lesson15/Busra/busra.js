/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/

function getDomain(email){ 
  const atIndex = email.indexOf('@');
  const domain = email.slice(atIndex+1);
  console.log(domain);
}
getDomain("busrademirkesen@gmail.com");

/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/

function containsWord(sentence,word){
  if(sentence.includes(word)){
    console.log(word + " found in sentence");
  }
    else{
      console.log(word + " is not found in sentence");
    }
  }


containsWord("I need to study","study");

/*
6. File Extension Check
   - Define a function `checkFileExtension(filename)` that checks if the filename
     ends with ".pdf" using .endsWith().
   - If it does, log: "This is a PDF file."
   - Otherwise, log: "Not a PDF file."
*/
function checkFileExtension(filename){
  if(filename.endsWith(".pdf")){
    console.log("This is a PDF file.");
  }
  else{
    console.log("Not a PDF file.");
  }
}
checkFileExtension("dosya.pdf");
checkFileExtension("dosya.jpeg");


/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards (normalize the string and compare it to reversed version of itself).
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/
function isPalindrome(str) {
  
  let normalizeStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");// büyük harf ve karakterli stringi normalize eder


  let ters = normalizeStr.split('').reverse().join('');


  if (normalizeStr === ters) {
    console.log(str +  "  is a palindrome");
  } else {
    console.log(str + "  is not a palindrome");
  }
}

isPalindrome("busra");
isPalindrome("ey Nihat Adana'da tahin ye");  //Adana ve Nihat isimlerini büyük harfle yazdığımızda, Adana'da da kesme işareti kullandığımızda doğru sonucu vermiyor bu yüzden en başta bir düzenleme yapmamız gerek





/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/

function evenOrOdd(number){

  if(number%2===0){
    console.log("number is even");
  }
  else{
    console.log("number is odd");
  }
}

evenOrOdd(224);
evenOrOdd(7485);



/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/

function checkProtocol(url){
  let normalizeUrl = url.toLowerCase();
  if(normalizeUrl.startsWith("https")){
    console.log("Secure connection");
  }
  else{
    console.log("Unsecure connection");
  }

}
checkProtocol("https://www.freecodecamp.org/");

checkProtocol("hptts://www.freecodecamp.org/");



/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/

function repeatWord(word, times){
 
  console.log(word.repeat(times));
}
repeatWord("busra",15);


/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence, target){
  console.log(sentence.replace(target,"****"));
}
censorWord("I need to study","need");



/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/

function startsWithA(str){
  if(str.charAt(0)==='A'){
    console.log("Starts with A");
  }
  else{
    console.log("Does not start with A");
  }
}
startsWithA("I need to study");

startsWithA("And I am going to bring my daugther too");

/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLastN(text, n){
  console.log(text.slice(-n));
}
sliceLastN("I have to study",3);

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

function gradeChecker(score){
 if(score>=90){
  console.log("A");
 }else if(score>=80){
  console.log("B");
 }else if(score>=70){
  console.log("C");
 }else if(score>=60){
  console.log("D");
 }else{
  console.log("F");
 }
}

gradeChecker(95);
gradeChecker(81);
gradeChecker(79);
gradeChecker(65);
gradeChecker(59);

/*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/

function replaceCharacter(str, oldChar, newChar){
  const result = str.replaceAll(oldChar,newChar);
  console.log(result);
}
replaceCharacter("bararlabarbar","a","e");

/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
function titleCase(sentence){
  const words = sentence.split(' ');
  const titleCaseWords = words.map(word =>{
    return word.charAt(0).toUpperCase() +
     word.slice(1).toLowerCase();
  }
  );
  const titleCasedSentence = titleCaseWords.join(' ');
  console.log(titleCasedSentence);
}

titleCase("hello my name is busra");




/*
20. Switch: Traffic Light
   - Define a function `trafficLight(color)` that uses a switch statement:
     - "red" -> log: "Stop"
     - "yellow" -> log: "Caution"
     - "green" -> log: "Go"
     - anything else -> "Invalid color"
*/
function trafficLight(color){
  switch(color){
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
trafficLight("green");
trafficLight("yellow");
trafficLight("purple");

/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str){
  if(str.length >10){
    console.log("Long string");
  }
  else{
    console.log("Short string");
  }
}

isLongString("busra");
isLongString("ey Nihat Adana'da tahin ye");

/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text){
  let lowerText = text.toLowerCase();
  if(lowerText.includes("spam")){
    console.log("This text is spam.");
  }else{
    console.log("This text is not spam.");
  }
}
isSpam("Bu TEXT bir SPAM içerir");
isSpam("bu TEXT herhangi bir sp*m içermez");



/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName){
  const nameParts = fullName.split(' ');
  const initials = [];

  for(let i = 0; i < nameParts.length; i++){
    const initial = nameParts[i].charAt(0).toUpperCase();
    initials.push(initial);
  }
   const result = initials.join('.')+'.';
   console.log(result);
}
getInitials("busra demirkesen");




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
      console.log("winter");
      break;
    case 3:
    case 4:
    case 5:
      console.log("spring");
      break;
    case 6:
    case 7:
    case 8:
      console.log("summer");
      break;
    case 9:
    case 10:
    case 11:
      console.log("autumn");
      break;
    default:
      console.log("Invalid month");
  }
}

getSeason(7);


/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/

function containsNumber(str){
  if(str.match(/\d/g)){
      console.log("Contains number");
  }else{
    console.log("No number found");
  }

}
containsNumber("busra 34 yaşında");
containsNumber("busra yaşında");

/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/

function padString(str, maxLength){
  if(str.length<maxLength){
    str=str.padEnd(maxLength,'*');
  }
  console.log(str);
}

padString("busra",15);


/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age){
  if(age>18){
    console.log("Can vote");
  }
  else{
    console.log("Too young to vote");
  }
}
canVote(17);
canVote(25);



/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back
   - Log the result.
*/

function reverseWords(sentence){
  const reverseSentence = [];
  const sentenceParts = sentence.split(' ');
  for(i=0; i<sentenceParts.length; i++){
    const reverseWord = sentenceParts[i].split('').reverse().join('');
    reverseSentence.push(reverseWord);
  }
  console.log(reverseSentence.join(' '));

}
reverseWords("büşra demirkesen");

/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/

function findWordPosition(sentence, word){
  const wordIndex = sentence.indexOf(word);
  if(wordIndex===-1){
    console.log("Not Found");
  }else{
    console.log("Index",wordIndex);
  }
}
findWordPosition("I need to study","to");
findWordPosition("I need to study","busra");


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

function calculate(a, operator, b){
  switch(operator){
    case "+": 
    return a+b;
    
    case "-": 
    return a-b;
    
    case "*": 
    return a*b;
    
    case "/": 
    return a/b;
    
    default:
      console.log("Invalid operator");
      return null;
  }
}

console.log(calculate(8, "+", 10));
