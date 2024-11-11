//TODO:========== task 1 ==============
// Виведіть метод console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином 
// *
// **
// ***
// ****
// *****

let star = "*";//в циклі ств. const/let при кожній ітерації вона буде створюватися заново 


for (let i =1; i <= 7; i++){ //i++ краще писати i+=1
    console.log(star);
    star += "*";
}//якщо поставимо з цикл ,то вона буде 1

for (let i = 0; i <= 20; i+= 2){ //виведення парних чисел
    console.log(i);
}
//let i = 0; самі прописуємо з чого починати відрахунок
//i <= 20 до якого числа йде відлік

for (let i = 1; i <= 20; i+= 2){ //виведення НЕпарних чисел
    console.log(i);
}

//TODO:========== task 2 ==============
//Знайдіть число 49 у проміжку чисел від 1 до 100 та вийдіть з циклу 

for (let i = 1; i <=100; i +=1){
    console.log(i)
    if(i === 49){
        console.log(i)
        break;
    }
}


for (let i = 1; i <=100; i +=1){
    // console.log(i)
    if(i !== 49){ 
        continue; //skip everything what is not 49 but loop is working work in console will see only 49 for example
    }
    console.log(i);
}

// loops don't have return
// but if our loop will be in function we use return

function findNumber(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === target) {
            return i; // Повертаємо індекс знайденого числа і завершуємо цикл та функцію
        }
    }
    return -1; // Якщо число не знайдено, повертаємо -1
}

//TODO:========== task 3 ==============
// Вивести числа до 10000
for (let i = 0; i < 10000; i++){
   console.log(i);
}

