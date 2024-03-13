export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  return students.map((x) => x.id).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
}
