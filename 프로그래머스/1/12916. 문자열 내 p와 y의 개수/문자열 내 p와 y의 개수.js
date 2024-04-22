function solution(s) {
    const lowerCaseS = s.toLowerCase(); // 대소문자 구분 없이 비교하기 위해 문자열을 소문자로 변환
    const countP = lowerCaseS.split('p').length - 1; // 'p'의 수 계산
    const countY = lowerCaseS.split('y').length - 1; // 'y'의 수 계산
    return countP === countY;
}