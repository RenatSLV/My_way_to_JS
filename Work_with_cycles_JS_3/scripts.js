// task 1
// let start = +prompt("Введите начало");
// let end = +prompt("Введите конец");

// let sum = 0;

// for (let i = start; i <= end; i++){
//     sum += i;
// }
// document.write(sum);

// // task2
// let num1 = +prompt("Введите первое число");
// let num2 = +prompt("Введите второе число");

// while (num1 != 0 && num2 != 0) {
//     if (num1 > num2){
//         num1 %= num2;
//     } else{
//         num2 %= num1;
//     }
// }
// document.write(num1 + num2);

// task3
// let number = +prompt("Введите число");
// number = Math.abs(number);

// let count = 0;
// if (number === 0){
//     count = 1
// } else{
//     while (number > 0){
//         number = Math.floor(number / 10);
//         count++
//     }
// }
// document.write(count)

// task4
// let numbers = [];
// let numPlus = 0;
// let numMinus = 0;
// let numZero = 0;
// let numChet = 0;
// let numNechet = 0;

// for (let i = 0; i <= 9; i++){
//     let numr = Number(prompt(`Введите число ${i + 1}:`))
//     numbers.push(numr);
// }

// for (let num of numbers){
//     if (num > 0){
//         numPlus++
//     } else if (num < 0){
//         numMinus++
//     } else if (num === 0){
//         numZero++
//     }
// }

// for (num of numbers){
//     if (num % 2 == 0){
//         numChet++
//     }
//     else{
//         numNechet++
//     }
// }
// document.write(numbers + '<br>')
// document.write(`Положительных чисел ${numPlus}` + '<br>')
// document.write(`Отрицательных чисел ${numMinus}` + '<br>')
// document.write(`Нулевых чисел ${numZero}` + '<br>')
// document.write(`Четных чисел ${numChet}` + '<br>')
// document.write(`Не четных чисел ${numNechet}` + '<br>')

// task5
// while (true){
//     let num1 = Number(prompt("Введите первое число:"));
//         num2 = Number(prompt("Введите первое число:"));
//         sign = prompt("Введите операцию +, -, *, /:");
    
//     if (sign === '+'){
//         let totalPlus = num1 + num2;
//         document.write(`${num1} + ${num2} = ${totalPlus}` + '<br>')
//     } else if (sign === '-'){
//         let totalMinus = num1 - num2;
//         document.write(`${num1} - ${num2} = ${totalMinus}` + '<br>')
//     } else if (sign === '*'){
//         let totalMul = num1 * num2;
//         document.write(`${num1} * ${num2} = ${totalMul}` + '<br>')
//     } else if (sign === '/'){
//         let totalDiv = num1 * num2;
//         document.write(`${num1} / ${num2} = ${totalDiv}` + '<br>')
//     }
//     let ask = prompt("Хотите решить еще пример?");

//     if (ask === 'Yes' || ask === 'yes'){
//         continue
//     } else if (ask === 'No' || ask === 'no'){
//         break
//     } else {
//         alert("Вводите коректные значение");
//         continue
//     }
// }

// task6
// let numbers = (prompt("Введите число:"));
// let step = Number(prompt("Введите число для шага:"));

// let lenght = numbers.length;
// let shift = step % lenght;

// for (let i = 0; i < shift; i++){
//     numbers = numbers[lenght - 1] + numbers.slice(0, lenght - 1);
// }

// console.log("Результат сдвига: " + numbers);

// task7
// let day_of_week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
// while (true) {
//     for (let day of day_of_week){
//         alert(day);
//         let ask = prompt("Хотите увидеть следующий день?");
        
//         if (ask === 'OK' || ask === 'ok'){
//             continue
//         } else{
//             break
//         }
//     } 
// }

// task8
// for (let i = 1; i < 11; i++){
//     for (let j = 1; j < 11; j++){
//         let mul = i * j;
//         console.log(j , '*', i, '=', mul);
//     }
// }

// task9
let start = 0;
let end = 100;
let secret_number = Number(prompt("Введите число от 1 до 100: "))

while (start <= end){
    let N = Math.floor((start + end) / 2);
    let User_response = prompt(`Я думаю что ваше число равно ${N}. Ваше число больше меньше или равно ${N}?`);

    if (User_response === 'равно'){
        console.log(`ура я угадал ваше число ${N}`);
        break
    } else if(User_response  === 'больше'){
        start = N + 1;
    } else if(User_response  === 'меньше'){
        end = N - 1;
    } else {
        console.log("Вводите пожалуйста больше меньше или равно");
    }
}