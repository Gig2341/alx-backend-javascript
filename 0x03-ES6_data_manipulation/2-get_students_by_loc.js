export default function getStudentsByLocation(arrays, cities) {
  return arrays.filter((city) => city.location === cities);
}
