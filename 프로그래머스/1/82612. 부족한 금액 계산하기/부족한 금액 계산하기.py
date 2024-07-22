def solution(price, money, count):

    for i in range(1,count+1):
        money -= price*i
    if money < 0:
        money = abs(money)
    else:
        money = 0 

    return money

# 반복문을 사용하여 count에 따라 price 총 가격을 메긴다
# 그리고 if문으로 총 price와 가지고있는 money와 비교하여 모자라는지 아니면 부족하지않은지 return 