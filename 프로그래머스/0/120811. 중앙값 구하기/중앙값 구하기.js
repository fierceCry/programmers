function solution(arr) {
    arr.sort((a,b) => a-b);
    const val = parseInt(arr.length/2);
    return arr[val];
}
