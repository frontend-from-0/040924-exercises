/*
4. Extract Domain
   - Define a function `getDomain(email)` that uses `slice` or `substring` to
     extract everything after '@'.
   - Log the domain to the console.
   - Example: "user@example.com" -> "example.com"
*/
function getDomain(email){
  const findIndex=email.indexOf('@');
  return email.slice(findIndex+1);
}
console.log(getDomain("gokce@gmail.com"));
/*
5. Check Substring
   - Define a function `containsWord(sentence, word)` that checks if the `sentence`
     includes `word` (use the .includes() method).
   - If true, log: "<word> found in sentence."
   - Else, log: "<word> not found in sentence."
*/
function containsWord(sentence,word){
  if (sentence.includes(word)){
    console.log("<word> found in sentence.");
  }else{
console.log("<word> not found in sentence.");
}
}
containsWord("sentence is sentence","wor");

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
  }else{
    console.log("Not a PDF file.");
  }
}
checkFileExtension("gokce.jpg");


/*
8. Palindrome Check
   - Define a function `isPalindrome(str)` that checks if `str` is the same
     forwards and backwards (normalize the string and compare it to reversed version of itself).
   - If it is, log: "<str> is a palindrome"
   - Otherwise, log: "<str> is not a palindrome"
*/
function isPalindrome(str){
  let strPalindrome=str.split("").reverse("").join("");
  if(str===strPalindrome){
    console.log("<str> is a palindrome")
  }else{
    console.log("<str> is not a palindrome");
  }
}
isPalindrome("gokce");
isPalindrome("level");

/*
10. Check Even or Odd (if-else)
   - Define a function `evenOrOdd(number)` that:
     - Logs "Even" if the number is even
     - Logs "Odd" if the number is odd
*/
function evenOrOdd(number){
  let numberCheck=number%2;
  if(numberCheck===0){
    console.log("Even");
  }else{
    console.log("Odd");
  }
}
evenOrOdd(5);
evenOrOdd(6);

/*
11. URL Protocol Checker
   - Define a function `checkProtocol(url)` that converts the URL to lowercase
     and checks if it starts with "https" using .startsWith().
   - Log "Secure connection" if true, otherwise "Unsecure connection".
*/
function checkProtocol(url){
const urlLower=url.toLowerCase();
if(urlLower.startsWith("https")){
  console.log("Secure connection");
}else{
  console.log("Unsecure connection");}
}
checkProtocol("https://www.google.com");
checkProtocol("http://www.google.com");

/*
13. Repeat a String
   - Define a function `repeatWord(word, times)` that uses the .repeat() method
     to repeat `word` `times` times.
   - Log the repeated result.
*/
function repeatWord(word,times){
  console.log(word.repeat(times));
}
repeatWord("gokce",3);
repeatWord("gokce",2.5);
/*
14. Replace Substring
   - Define a function `censorWord(sentence, target)` that replaces `target`
     with "****" (use .replaceAll() or multiple .replace()).
   - Log the censored sentence.
*/
function censorWord(sentence,target){
  let censorWord=[];
  let newSentence=sentence.replaceAll(target,function(match){censorWord.push(match);
    return "****";});

  console.log("new sentence:", newSentence);
  console.log("censored word:", censorWord);
}
censorWord("gokce is a student","gokce");
/*
15. Check First Character (if-else)
   - Define a function `startsWithA(str)` that checks if the string starts with 'A'
     (use .charAt(0) or [0]).
   - Log "Starts with A" or "Does not start with A".
*/
function startsWithA(str){
  const controlString=str.charAt(0);
  if (controlString==="A"){
    console.log("Starts with A");
  }else{
    console.log("Does not start with A");
  }
}
startsWithA("Alignment");
/*
16. Slice Last N Characters
   - Define a function `sliceLastN(text, n)` that uses .slice(-n) to extract
     the last `n` characters of `text`.
   - Log the result.
*/
function sliceLast(text,n){
  console.log(text.slice(-n));
}
sliceLast("Technology",2);
sliceLast("Develop",3);

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

  if (score >= 90){
    return "A";
   }else if(score>=80){
   return "B";
  }else if(score>=70){
    return "C";
  }else if(score>=60){
    return "D";
  }else(score<60){
    return "F";
  }
 };
  
  console.log(gradeChecker(85));
  /*
18. Character Replacement
   - Define a function `replaceCharacter(str, oldChar, newChar)` that uses .replaceAll()
     (or a loop) to swap all occurrences of oldChar with newChar.
   - Log the result.
*/
function replaceCharacter(str,oldChar,newChar){
  console.log(str.replaceAll(oldChar,newChar));
}
replaceCharacter("arrangements","e",".");
/*
19. Title Case a Sentence
   - Define a function `titleCase(sentence)` that:
     - Splits the sentence by spaces
     - Uppercases the first letter of each word
     - Joins them back
   - Log the transformed string.
*/
function titleCase(sentence){
  let sentenceArray=sentence.split(" ");
  sentenceArray=sentenceArray.map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase());
  return sentenceArray.join(" ");

}
console.log(titleCase("Splits the sentence by spaces Uppercases the first letter of each word Joins them back"));
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
    case "red":      console.log("Stop");
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
trafficLight("blue");
/*
21. Check String Length (if-else)
   - Define a function `isLongString(str)` that checks if the string length
     is more than 10.
   - Log "Long string" or "Short string".
*/
function isLongString(str) {
  if(str.length>10){
    console.log("Long string");
  }else{
    console.log("Short string");
  }
}
isLongString("string");
/*
22. Convert to Lowercase Then Check
   - Define a function `isSpam(text)` that converts the text to lowercase
     and checks if it includes "spam".
   - If it does, log "This text is spam."
   - Otherwise, log "This text is not spam."
*/
function isSpam(text){
  let textCheck=text.toLowerCase();
  if(textCheck.includes("spam")){
    console.log("This text is spam.");
}else{
  console.log("This text is not spam.");
}}
isSpam("This text is spam.");
/*
23. Extract Initials
   - Define a function `getInitials(fullName)` that uses .split() to get each name part,
     then logs the capitalized first letter of each.
   - Example: "John Doe" -> "J.D."
*/
function getInitials(fullName){
let fname=fullName.split(" ");
let inialsTogether=fname.map(name=>name.charAt(0).toUpperCase());
return inialsTogether.join(".");
}
console.log(getInitials("aysel gökçe kurt"));
/*
24. Switch: Month to Season
   - Define a function `getSeason(monthNum)` (1-12). Use switch or if-else:
     - 12, 1, 2  -> "Winter"
     - 3, 4, 5   -> "Spring"
     - 6, 7, 8   -> "Summer"
     - 9, 10, 11 -> "Autumn"
   - Log the season or "Invalid month" if out of range.
*/
function getSeason(monthNum){
  switch(monthNum){
    case 12,1,2:
    return "Winter";
    case 3,4,5:
    return "Spring";
    case 6,7,8:
    return "Summer";
    case 9,10,11:
    return "Autumn";
    default:
      console.log("Invalid month");
  }
}
getSeason(5);
getSeason(13);

/*
25. Check If String Contains Number
   - Define a function `containsNumber(str)` that uses a loop or a method like
     .match() to check if there's any digit in the string.
   - Log "Contains number" or "No number found".
*/
function containsNumber(str){
  let arrayCheck=str.match(/\d+/g);
  if(arrayCheck && arrayCheck.length>0){
    console.log("Contains number");
}else{
  console.log("No number found");
}
}
containsNumber("helloworld1997");
containsNumber("notfound");


/*
26. Pad a String
   - Define a function `padString(str, maxLength)` that if str.length < maxLength,
     uses .padEnd() or .padStart() to make the string reach maxLength with '*'.
   - Log the padded string.
*/
function padString(str,maxLength){
  if (str.length<maxLength){
    console.log(str.padStart(maxLength,"*"));
  }

}
padString("gokce",10);

/*
27. If-Else: Voting Eligibility
   - Define a function `canVote(age)` that logs:
     - "Can vote" if age >= 18
     - "Too young to vote" otherwise
*/
function canVote(age){
if(age>=18){
  console.log("Can vote");
}else{
  console.log("Too young to vote");
}
}

canVote(18);
/*
28. Reverse Words in a Sentence
   - Define a function `reverseWords(sentence)` that:
     - Splits the sentence by spaces
     - Reverses each word individually
     - Joins them back 
   - Log the result. 
*/
function reverseWords(sentence){
  let arraySentence=sentence.split(" ");
  newArray=arraySentence.map(words=>words.split("").reverse("").join(""));
  return newArray.join(" ");
}
console.log(reverseWords("gokce is a student"));
/*
29. Check Substring Position
   - Define a function `findWordPosition(sentence, word)` that uses .indexOf(word)
     to find the starting index. If not found, return -1.
   - Log the index or log "Not found" if it's -1.
*/
function findWordPosition(sentence,word){
  let findIndex=sentence.indexOf(word);
  console.log(findIndex);
}
findWordPosition("gokce is a student","student");
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
function calculate(a,operator,b){
  switch(operator){
    case "+":
      console.log(a+b);
      break;  
    case "-": 
      console.log(a-b);
      break;
    case "*":
      console.log(a*b);
      break;
    case "/":
      console.log(a/b);
      break;
    default:  
      console.log("Invalid operator");
  }
}
calculate(2,"/",1);