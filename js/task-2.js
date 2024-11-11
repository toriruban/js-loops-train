//TODO:========== task 1 ==============
/*
? Напиши цикл for, який виводить у консоль браузера
? числа за зростанням від a до b, але тільки якщо число кратне 5.
*/

// const a = 20;
// const b = 100;

// for (let i = a; i <=b; i++){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }


//TODO:========== task 2 ==============
/*
? Напиши скрипт, який підраховує суму всіх парних чисел,
? які входять в діапазон чисел у змінних від min до max.
? Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в ньому два парних числа - 2 і 4, їх сума 6.
*/
const min = 0;
const max = 5;
let total = 0;

for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {  // Перевірка, чи число парне
        total += i;     // Додаємо парне число до загальної суми
    }
}

console.log("Сума всіх парних чисел в діапазоні:", total);


// Використовуйте console.log() всередині циклу, якщо хочете бачити процес на кожному кроці.
// Використовуйте console.log() після циклу, якщо цікавить лише кінцевий результат.



//TODO:========== task 3 ==============
// Напиши функцію sumEvenNumbers(min, max), яка отримує два числа min і max і повертає суму всіх парних чисел у цьому діапазоні.

function sumEvenNumbers(min, max) {
    let total = 0;  // Змінна для зберігання суми

    for (let i = min; i <= max; i++) {
        if (i % 2 === 0) {  // Перевірка на парність
            total += i;     // Додаємо парне число до суми
        }
    }

    return total;  // Повертаємо загальну суму
}

console.log(sumEvenNumbers(0, 10));  // 30 (2 + 4 + 6 + 8 + 10)
console.log(sumEvenNumbers(5, 15));  // 50 (6 + 8 + 10 + 12 + 14)

//TODO:========== task 4 ==============
// Напиши функцію countOddNumbers(min, max), яка отримує два числа min і max, і повертає кількість непарних чисел у цьому діапазоні.
function countOddNumbers(min, max) {
    let result = 0;  // Ініціалізуємо лічильник

    for (let i = min; i <= max; i++) {
        if (i % 2 !== 0) {  // Перевіряємо, чи число непарне
            result++;       // Збільшуємо лічильник
        }
    }

    return result;  // Повертаємо кількість непарних чисел
}

console.log(countOddNumbers(1, 10));  // 5 (1, 3, 5, 7, 9)
console.log(countOddNumbers(10, 20)); // 5 (11, 13, 15, 17, 19)

//TODO:========== task 5 ==============
// Напиши функцію multiplesOfThree(min, max), яка виводить у консоль усі числа з діапазону від min до max, які кратні 3.
function multiplesOfThree(min, max){
    let result = 0;
    for (let i = min; i <= max; i++) {
        if (i % 3 === 0){
            console.log(i)
        }
    }
}

multiplesOfThree(1, 20);
// Виведе:
// 3
// 6
// 9
// 12
// 15
// 18



//TODO:========== task 6 ==============
// Напиши функцію sumAllNumbers(min, max), яка отримує два числа min і max, і повертає суму всіх чисел у цьому діапазоні.
function sumAllNumbers(min, max){
    let total = 0;

    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total;  
}

sumAllNumbers(1, 5);  // 15 (1 + 2 + 3 + 4 + 5)
sumAllNumbers(3, 7);  // 25 (3 + 4 + 5 + 6 + 7)

