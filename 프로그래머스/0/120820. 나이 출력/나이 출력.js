function solution(age) {
    if (age <= 0 || age > 120) {
        return;
    }
    
    const currentYear = 2022;
    
    const birthYear = currentYear - age + 1;
    
    return birthYear;
}
