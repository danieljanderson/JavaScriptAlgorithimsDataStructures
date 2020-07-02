function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
let t1 = Date.now();
addUpTo(1000000000);
let t2 = Date.now();
console.log(`Time Elapsed: ${(t2 - t1) / 10000} seconds`);
