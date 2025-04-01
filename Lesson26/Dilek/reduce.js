// Exercise 1:
// Calculate the sum of all numbers in the given array.
const numbersEx1 = [1, 2, 3, 4, 5];

const sum = numbersEx1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);

// Exercise 2:
// Find the maximum value in the given array. (Hint: Use -Infinity to compare values to)
const numbersEx2 = [8, 3, 11, 6, 4];

const maxValue = numbersEx2.reduce(
  (accumulator, currentValue) => Math.max(accumulator, currentValue),
  -Infinity
);

console.log(maxValue);

// Exercise 4:
// Calculate the average of all numbers in the given array.
const numbersEx4 = [10, 20, 30, 40, 50];

const average =
  numbersEx4.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  ) / numbersEx4.length;

console.log(average);
