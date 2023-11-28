export default function createIteratorObject(report) {
  const my_array = [];
  for (const value of Object.values(report.allEmployees)) {
      my_array.push(...item);
  }

  return my_array;
}
