// Exercise 3: Descending Order
// Sort an array of numbers in descending order.
// Expected output: [100, 40, 25, 10, 5, 1]
const scores = [40, 100, 1, 5, 25, 10];

scores.sort((a,b) => b-a);
console.log(scores);


// Exercise 5:
// Sort an array of strings by their length.
// Expected output: ["pen", "book", "paper", "pencil", "notebook"]

const words = ["notebook", "pen", "paper", "book", "pencil"];

words.sort((a,b) => a.length - b.length);
console.log(words);



