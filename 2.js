const students = new Set([
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "Jack", scores: [100, 100, 100] }
  ]);
  
  function calculateAverages(students) {
    let highestAverage = 0;
    let highestScorers = [];
    students.forEach(student => {
      const average = student.scores.reduce((acc, curr) => acc + curr, 0) / student.scores.length;
      if (average > highestAverage) {
        highestAverage = average;
        highestScorers = [{ name: student.name, average: average }];
      }
      else if (average === highestAverage) {
        highestScorers.push({ name: student.name, average: average });
      }
    });
      return highestScorers;
  }
  console.log(calculateAverages(students));
  