export default function appendToEachArrayValue(array, appendString) {
  const my_array = [];
  for (const value of my_array) {
      my_array.push(appendString + value);
  }

  return array;
}
