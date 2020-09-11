function solution(S) {
  if (S.length === 0) {
    return 0;
  }
  let position = 0;
  while (position < S.length) {
    if (S[position] == S[position - 1]) {
      //console.log(arr);
      console.log('hi');

      S.slice(position);
      console.log(S);
    } else if (S[position] == S[position + 1]) {
      return S[position];
    } else {
      position++;
    }
  }
}
console.log(solution('zz'));
