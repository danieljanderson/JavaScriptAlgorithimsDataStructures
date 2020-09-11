function isSubsequence(string1, string2) {
  //you compare the strings together
  // if its the same you move to the next
  // if its not you move the second string pointer to the left
  if (string1.length == 0 || string2.length == 0) {
    return false;
  }
  let firstString = 0;
  let secondString = 0;
  while (secondString <= string2.length) {
    if (secondString === string2.length) {
      return false;
    } else if (
      string1[firstString] === string2[secondString] &&
      firstString === string1.length - 1
    ) {
      return true;
    } else if (string1[firstString] === string2[secondString]) {
      firstString++;
      secondString++;
    } else {
      secondString++;
    }
  }
}
console.log(isSubsequence('abc', 'acb'));
