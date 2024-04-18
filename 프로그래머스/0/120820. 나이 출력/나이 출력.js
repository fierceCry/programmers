function solution(age) {
    if (age <= 0 || age > 120) {
        return;
    }
    
    const currentYear = new Date().getFullYear();
    const birthYear = currentYear - age -1;
    
    return birthYear;
}
