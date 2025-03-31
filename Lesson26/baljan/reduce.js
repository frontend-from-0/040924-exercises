/* array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);

- callback: A function that is executed on each element of the array. It takes four arguments:
- accumulator: The accumulated value that is returned after each iteration. It starts with the value of initialValue on the first iteration and is the result of the previous iteration in subsequent iterations.
- currentValue: The current element being processed in the array.
- currentIndex: The index of the current element being processed.
- array: The array on which reduce() was called.

- initialValue: An optional initial value for the accumulator. If not provided, the first element of the array is used as the initial value and the iteration starts from the second element.
*/

// Exercise 1:
// Calculate the sum of all numbers in the given array.
const numbersEx1 = [1, 2, 3, 4, 5];
const sumEx1 = numbersEx1.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sumEx1);

// Exercise 2:
// Find the maximum value in the given array. (Hint: Use -Infinity to compare values to)
const numbersEx2 = [8, 3, 11, 6, 4];
const maxEx2 = numbersEx2.reduce((accumulator, currentValue) => {
  return currentValue > accumulator ? currentValue : accumulator;
}, -Infinity);

console.log(maxEx2);

// Exercise 4:
// Calculate the average of all numbers in the given array.
const numbersEx4 = [10, 20, 30, 40, 50];
const averageEx4 = numbersEx4.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
const avgEx4 = averageEx4 / numbersEx4.length;

console.log(avgEx4);
