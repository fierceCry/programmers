function solution(n, m) {
    var answer = [];
    let a = Math.min(n, m);
    let b = Math.max(n, m);
    const gcd = (x, y) => {
        return x % y === 0 ? y : gcd(y, (x % y))
    }
    let gd = gcd(b, a);
    answer = [gd, a * b / gd]
    
    return answer;
}
출처: https://peach-milk.tistory.com/entry/프로그래머스-Lv1-최대공약수와-최소공배수-JavaScript [복숭아 우유는 매일매일 즐거워:티스토리]