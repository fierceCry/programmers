def solution(phone_number):

    answer = ''
    for i in range(0, len(phone_number)-4):
        answer += '*'
    return answer + phone_number[-4:]

# 1. phone_number의 문자열 마지막 인덱스를 확인
# 2. 마지막 인덱스에서 마지막 4자리수까지 값 확인
# 3. 나머지 *로 변환 후 리턴
