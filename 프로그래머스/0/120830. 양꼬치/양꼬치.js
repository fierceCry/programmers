function solution(n, k) {
    var a = 12000
    var b = 2000
    if(n % 10 > 0){
        return n * a + k * b - parseInt(n / 10) * b
    }else{
        return n * a + k * b - parseInt(n / 10) * b
    }
}