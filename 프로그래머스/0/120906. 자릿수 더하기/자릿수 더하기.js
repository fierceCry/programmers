function solution(n) {
    var answer = 0;
    const int = String(n)
    for(let i = 0; i < int.length; i++){
        answer += parseInt(int[i])
    }
    return answer;
}