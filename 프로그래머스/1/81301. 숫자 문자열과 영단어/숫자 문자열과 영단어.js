function solution(s) {
    const eng = ['zero','one','two','three','four','five','six','seven','eight','nine']
    function engToNum(str){
        for(let i = 0; i < eng.length ; i++){
            if(str === eng[i])
            return i
        } 
    }
    return s.replace(/zero|one|two|three|four|five|six|seven|eight|nine/g,engToNum) * 1;
}
