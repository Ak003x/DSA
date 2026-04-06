//? Q1: Print the 2d Arrays
// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let row = 0; row < arr.length; row++) {
//   for (let col = 0; col < arr[row]. length; col++) {
//     console.log(arr[row][col]);
//   }
// }

//? Q2: Sort the Array without using builtin functions

// let arr2 = [42, 7, 95, 13, 68, 31, 84, 56, 19, 77];
// let arr1 = [...arr2]; // & optional just to save original values  using spread if needed

// for (let i = 0; i < arr1.length - 1; i++) {
//   for (j = 0; j < arr1.length - 1 - i; j++) {
//     if (arr1[j] > arr1[j + 1]) {
//* if the Left num is Greater than the right num SWAP! happens

//       let temp = arr1[j];                                                              //* Step 1: Save left value in a temp box
//       arr1[j] = arr1[j + 1];                                                           //* Step 2: Put right value into left position
//       arr1[j + 1] = temp;                                                              //*Step 3: Put saved value into right position
//     }
//   }
// }

// console.log(arr2);
// console.log(arr1);

//? Q3: Two sums with brute force

// function twoSums(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// }

// console.log(twoSums([1, 2, 5, 4], 9));

//? Q3: Two sums with HaspMap

// const twoSums = (nums, target) => {
//   let map = {};

//   for (let i = 0; i < nums.length; i++) {
//     let complement = target - nums[i];

//     if (map[complement] !== undefined) {
//       return [map[complement], i];
//     }
//     map[nums[i]] = i;
//   }
// };

// console.log(twoSums([1, 2, 3, 4, 5], 9));

//? Q4: Reverse the string

// const Reverse = (str) => {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// };

// console.log(Reverse("Hello"));

//? with builtin function

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("Akash"));

//? Q4: Palindrome with builtin function

// function isPalindrome(str) {
//   let reversed = str.split("").reverse().join("");

//   if (str === reversed) {
//     return `${str} is:${str === reversed}`;
//   } else {
//     return `${str} is:${str === reversed}`;
//   }
// }

// console.log(isPalindrome("madam"));

//? Q5: Palindrome without builtin function

// function isPalindrome(value) {
//   let str = "" + value;

//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrome("11211"));

//? Q6: return second largest number - builtin

// function secLarge(arr) {
//   arr.sort((a, b) => b - a);

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[0]) {
//       return arr[i];
//     }
//   }
//   return null;
// }

// console.log(secLarge([1, 45, 20, 22, 18, 60, 60]));

//? without builtin

// function secLarge(arr) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }

// console.log(secLarge([1, 12, 2, 5, 6, 10, 12, 45, 16, 10]));

//? Q7 remove the duplicate values

// function removeDuc(arr) {
//   let seen = {};
//   let result = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (seen[arr[i]] === undefined) {
//       result.push(arr[i]);

//       seen[arr[i]] = true;
//     }
//   }

//   return result;
// }

// console.log(removeDuc([1, 2, 3, 3, 3, 4, 5, 6, 7, 7]));

//? with builtin

// function removeDuc(arr) {
//   let result = [];

//   for (i = 0; i < arr.length; i++) {
//     if (result.indexOf(arr[i]) === -1) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(removeDuc([1, 2, 3, 4, 5, 9,5, 5, 7, 7, 8]));

//? Q7: Fibonacci series

// function Fibonacci(n) {
//   let a = 0;
//   let b = 1;
//   let result = [a];

//   for (let i = 0; i < n; i++) {
//     result.push(b);

//     let next = a + b;
//     a = b;
//     b = next;
//   }
//   return result;
// }
// console.log(Fibonacci(10));

//? Q8: Swap two variable without using 3rd variable

// let a = 10;                                         //^ one way of doing using destructing
// let b = 5;

// [a, b] = [b, a];

// console.log("a:", a, "b:", b);

//? B:

// let a = 30;                                 //^ other way of doing swap
// let b = 50;

// a = a + b;
// console.log(a);
// b = a - b;
// console.log(b);
// a = a - b;
// console.log(a);

//? Q8: pattern program that takes n as input and prints an alphabet pattern

// function patternProgram(n) {
//   for (let i = n.length; i >= 1; i--) {
//     row = "";
//     for (j = 0; j < i; j++) {
//       row += n[j];
//        row += String.fromCharCode(97 + j); //^ with using build in func
//     }
//     console.log(row);
//   }
// }

// patternProgram("Akash");

//? By Using the "*" Up

// function starPattern(n) {
//   for (let i = n; i >= 1; i--) {
//     row = "";
//     for (let j = 0; j < i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }

// starPattern(5);

//? 2:Down
// function starPattern2(n) {
//   for (let i = 1; i <= n; i++) {
//     row = "";
//     for (let j = 0; j < i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }

// starPattern2(5);

//? 3: Triangle pattern

// function triangle(n) {
//   for (let i = 1; i <= n; i++) {
//     row = "";

//     for (let s = 1; s <= n - i; s++) {
//       row += " ";
//     }
//     for (s = 1; s <= 2 * i - 1; s++) {
//       row += "*";
//     }
//     console.log(row);
//   }
// }

// triangle(5);

//? Q:9 Find the larger number

