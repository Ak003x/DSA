function LongestWord(str) {
  const words = str.split(" ");

  let LongestWord = "";

  for (let word of words) {
    if (word.length > LongestWord.length) {
      LongestWord = word;
    }
  }
  return LongestWord;
}

console.log(LongestWord("My name is Akash & i am Ironman!"));
