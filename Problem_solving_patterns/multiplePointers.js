function countUniqueValues(arr) {
  //loop through the array
  // compare values
  //delete or get rid of duplicates
  //return the length of the array
  if (arr.length === 0) {
    return 0;
  }
  let position = 1;
  while (position < arr.length) {
    if (arr[position] == arr[position - 1]) {
      console.log(arr);
      console.log('hi');

      arr.splice(position, 1);
      console.log(arr);
    } else {
      position++;
    }
  }
  return arr.length;
}
console.log(countUniqueValues([-2, -1, -1, 0, 4]));
