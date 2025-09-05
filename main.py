def alg1(x: int):
    if x % 2 == 0:
        return x * 2
    else:
        return x + 1

def alg2():
    count = 1
    num = randint(1, 6)
    while num != 6:
        count += 1
        num = randint(1, 6)
    return count
    
def alg3():
    x = 1
    y = 3
    summe = x + y
    while summe < 50:
        summe = x + y
        x += 2
    return x

def alg4():
    summe = 0
    for i in range(100, 1000):
        summe += i
    return summe

def alg5():
    a = 1
    summe = 0
    while a < 5:
        summe += a
        if a > 3:
            summe -= 1
        a += 1
    return summe

def on_button_a():
    basic.show_number(alg5())
input.on_button_pressed(Button.A, on_button_a)