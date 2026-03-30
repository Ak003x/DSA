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

function twoSums(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(twoSums([1, 2, 5, 4], 9));
