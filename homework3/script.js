do {a = parseInt(prompt("Введите значення a").replaceAll(" ",""));
} while(isNaN(a) || a < 1)

do {
    b = parseInt(prompt(`Введите значення b, котре більше ${a}`).replaceAll(" ","")); 
} while(a >= b || isNaN(b));

do {
    h = parseInt(prompt(`Введіть шаг, котрий менше ${b - a}`).replaceAll(" ",""));
} while(h > b - a || isNaN(h));



for(sum = 0; a <= b; a += h) {
    factorial = 1;
    console.log(`факторіал числа ${a}`);

    for(i = 1; i <= a; i++) {
        factorial *= i;
    }
    console.log(`дорівнює ${factorial}`);
    sum += factorial;

    console.log(`сума всіх факторіалів дорівнює ${sum}`);
}




