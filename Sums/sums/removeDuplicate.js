let arr = [1, 2, 3, 3, 4, 5, 6, 7, 8, 8, 77,99];

function Duc(arr) {
  return arr.filter((val, index) => arr.indexOf(val) === index);
}
console.log(Duc(arr));

