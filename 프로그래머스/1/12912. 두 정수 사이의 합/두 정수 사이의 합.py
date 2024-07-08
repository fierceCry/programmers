def solution(a, b):
    answer = 0
    if a > b:
        a, b = b, a
    for i in range(a, b+1):
        answer += i
    return answer


# 1. 두정수의 사이의 값을 구하기
# 2. 다 더하기.