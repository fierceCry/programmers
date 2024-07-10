def solution(numbers):
    answer = 0
    a = range(0, 10)
    for i in a:
        if i not in numbers:
            answer += i
    return answer


# 1. 
# 2. 없는 값을 찾는게 우선 
# 3. 어떻게 없는 값을 찾을수있을까?
# 4. not in을 사용하면 될거 같다.