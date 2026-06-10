function Occurrences(str) {
  const counts = {};
  //   for (let i = 0; i < str.length; i++) { Using for loop
  for (let char of str) {              //Using for of loop
     if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }
  }
  return counts;
}

console.log(Occurrences("akash"));


