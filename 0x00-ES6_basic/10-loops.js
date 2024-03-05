export default function appendToEachArrayValue(array, appendString) {
  const ans = [];
  for (const element of array) {
    ans.push(appendString + element);
  }

  return ans;
}
