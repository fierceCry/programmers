function solution(money) {
    return [Math.floor(money / 5500), money % 5500];
}

// function solution(money) {
//     var answer = [];
//     if(money >= 5500){
//         const a = parseInt(money / 5500);
//         const b = money - a * 5500;
//         answer.push(a, b);
//     }
//     return answer;
// }