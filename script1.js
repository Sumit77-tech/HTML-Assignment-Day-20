// Example Input 1
let students = [
    { name: "Alice", marks: 45, subject: "Math" },
    { name: "Bob", marks: 75, subject: "Science" },
    { name: "Charlie", marks: 50, subject: "English" },
    { name: "David", marks: 30, subject: "History" }
  ];
  
  // Function to print students with marks >= 50
  function filterStudents(students) {
    for (const student of students) {
      if (student.marks >= 50) {
        console.log(`${student.name} - ${student.subject}`);
      }
    }
  }
  
  filterStudents(students);
  
  // Example Input 2
  let words = ["apple", "banana", "grapefruit", "kiwi", "pineapple"];
  
  // Function to print words with length > 5
  function filterWords(words) {
    for (const word of words) {
      if (word.length > 5) {
        console.log(word);
      }
    }
  }
  
  filterWords(words);
  