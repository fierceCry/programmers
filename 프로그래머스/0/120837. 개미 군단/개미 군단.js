// function solution(hp) {
//     const answer = hp / 4
//     const a = Math.floor(answer)
//     return a;
// }

function solution(hp) {
  const first = Math.floor(hp / 5);
  const second = Math.floor((hp - first * 5) / 3);
  const third = hp - first * 5 - second * 3;
  return first + second + third;
}