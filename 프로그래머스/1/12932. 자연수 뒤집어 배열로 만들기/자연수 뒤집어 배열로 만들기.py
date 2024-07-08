def solution(n):
    answer = []
    a = str(n)
    for i in a:
        b = int(i)
        answer.insert(0, b)
    return answer