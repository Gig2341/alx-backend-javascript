export default function updateStudentGradeByCity(arrays, cities, newGrades) {
  return arrays
    .filter((city) => city.location === cities);
    .map((student) => {
      newGrade.map((studentGrade) => {
          if (student
