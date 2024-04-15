function transformString(input) {
    let words = input.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      let transformedWord = "";
      let length = word.length;
        if (length >= 3) {
        transformedWord += word[0];
        transformedWord += (length - 2);
        transformedWord += word[length - 1];
      } else {
        transformedWord = word;
      }
      words[i] = transformedWord;
    }
    return words.join(" ");
  }
  const input = "Every developer likes to mix kubernetes and javascript";
  const result = transformString(input);
  console.log(result);
  