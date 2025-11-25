function processStudents(students) {
const filteredStudents = students.filter(student => student.marks > 60);
  filteredStudents.sort((a, b) => b.marks - a.marks);
  const sortedNames = filteredStudents.map(student => student.name);
  return sortedNames;
}
const output = processStudents(inputStudents);
console.log(output);