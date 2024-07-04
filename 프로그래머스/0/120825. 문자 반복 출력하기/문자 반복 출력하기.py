def solution(my_string, n):
    answer = ''
    for char in my_string:
        answer += char * n
    return answer

# 반복문과 조건문을 사용하여
# 반복문은 n의 횟수를 돌려 my_string의 [i]인덱스를 n의 횟수만큼 곱하여 answer에 더한다