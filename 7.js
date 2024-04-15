const scores = new Map([
    ["A", 100],
    ["B", 14],
    ["C", 9],
    ["D", 28],
    ["E", 145],
    ["F", 12],
    ["G", 3],
    ["H", 10],
    ["I", 200],
    ["J", 100],
    ["K", 114],
    ["L", 100],
    ["M", 25],
    ["N", 450],
    ["O", 80],
    ["P", 2],
    ["Q", 12],
    ["R", 400],
    ["S", 113],
    ["T", 405],
    ["U", 11],
    ["V", 10],
    ["W", 10],
    ["X", 3],
    ["Y", 210],
    ["Z", 23]
  ]);
  
  const nameScore = (name) => {
    let totalScore = 0;
    for (const char of name.toUpperCase()) {
      if (scores.has(char)) {
        totalScore += scores.get(char);
      }
    }
    if (totalScore >= 600) {
      return "THE BEST";
    } else if (totalScore >= 301) {
      return "VERY GOOD";
    } else if (totalScore >= 61) {
      return "PRETTY GOOD";
    } else {
      return "NOT TOO GOOD";
    }
  };
  console.log(nameScore("MUBASHIR")); 
  console.log(nameScore("YOU")); 
  console.log(nameScore("MATT")); 
  console.log(nameScore("PUBG")); 
  