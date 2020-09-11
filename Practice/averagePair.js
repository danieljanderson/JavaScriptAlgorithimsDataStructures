//loop over a sorted array
// return true if it is
// return false if it isnt
// if the average is smaller i need to move the left pointer to the right
// if the average is bigger I need to move the right pointer to the left
//completed in 30 min

function averagePair(array, average) {
  if (array.length < 1) {
    return false;
  }
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    if (left === right) {
      return false;
    } else if ((array[left] + array[right]) / 2 === average) {
      return true;
    } else if ((array[left] + array[right]) / 2 > average) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
