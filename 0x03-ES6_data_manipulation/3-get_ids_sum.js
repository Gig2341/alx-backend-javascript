export default function getStudentIdsSum(arrays) {
  return arrays.reduce((sum, value) => sum + value.id, 0);
}
