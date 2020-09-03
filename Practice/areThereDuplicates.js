function areThereDuplicates(...arg) {
  let right = arg.length - 1;
  while (arg.length > 1) {
    let left = 0;
    console.log(arg);
    console.log(arg[left]);
    console.log(arg[right]);
    if (right === left) {
      arg.splice(left, 1);
      right = arg.length - 1;
    } else if (arg[right] === arg[left]) {
      return true;
    } else if (arg[right] !== arg[left]) {
      right--;
    }
  }
  return false;
}
console.log(areThereDuplicates(10, 20, 30));
