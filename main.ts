function alg1(x: number): number {
    if (x % 2 == 0) {
        return x * 2
    } else {
        return x + 1
    }
    
}

function alg2(): number {
    let count = 1
    let num = randint(1, 6)
    while (num != 6) {
        count += 1
        num = randint(1, 6)
    }
    return count
}

function alg3(): number {
    let x = 1
    let y = 3
    let summe = x + y
    while (summe < 50) {
        summe = x + y
        x += 2
    }
    return x
}

function alg4(): number {
    let summe = 0
    for (let i = 100; i < 1000; i++) {
        summe += i
    }
    return summe
}

function alg5(): number {
    let a = 1
    let summe = 0
    while (a < 5) {
        summe += a
        if (a > 3) {
            summe -= 1
        }
        
        a += 1
    }
    return summe
}

input.onButtonPressed(Button.A, function on_button_a() {
    basic.showNumber(alg5())
})
