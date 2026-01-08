// Problem 1: Reverse a String 
function reverseString(input) {
  const result = input.split('').reverse().join('');
  return result
}
console.log(reverseString("hello"));


// Problem 2: Count Vowels in a String
function countVowels(input) {
  let count = 0;
  const vowels = "aeiou";
  input = input.toLowerCase();
  for (let i = 0; i < input.length; i++) {
    if (vowels.includes(input[i])) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("programming"));


// Problem 3: Check for Palindrome
function isPalindrome(input) {
  input = input.toLowerCase();
  const reversed = input.split('').reverse().join('');
  return input === reversed;
}
console.log(isPalindrome("Madam"));


// Problem 4: Find the Maximum Number
function findMax(input) {
  let max = input[0];
  for (let i = 1; i < input.length; i++) {
    if (input[i] > max) max = input[i];
  }
  return max;
}
console.log(findMax([5, 11, 9, 3]));


// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


// Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4]));


// Problem 7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
  let evenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));


// Problem 8: Capitalize First Letter of Each Word
function capitalizeWords(input) {
  const result = input
    .split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return result;
}
console.log(capitalizeWords("hello world"));


// Problem 9: Find the Factorial of a Number
function factorial(n) {
  let result = 1;
  let i = 1;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}
console.log(factorial(7));


// Problem 10: PingPong Challenge
function pingPong() {
  const output = [];
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) output.push("PingPong");
    else if (i % 3 === 0) output.push("Ping");
    else if (i % 5 === 0) output.push("Pong");
    else output.push(i);
  }
  return output.join(', ');

}
console.log(pingPong());
