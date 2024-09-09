// // task1
// function check_num(num1, num2) {

//     if (num1 < num2){
//         alert("-1");
//     } else if (num1 > num2){
//         alert("1");
//     } else{
//         alert("0");
//     }
// }

// let num1 = +prompt("Введите первое число: ");
// let num2 = +prompt("Введите второе число: ");
// check_num(num1, num2)

// // task2
// function factorial(num1){

//     let result = 1;

//     for (let i = 1; i <= num1; i++) {
//         result *= i;
//     }

//     alert(`Факториал ${num1} = ${result}`);
// }

// let num1 = +prompt("Введите число: ");
// factorial(num1)

// // task3

// function unites_num(num1, num2, num3) {
//     if (num1 >= 10){
//         alert("Вводите число в длину до 1 символа");
//     } else if (num2 >= 10){
//         alert("Вводите число в длину до 1 символа"); 
//     } else if (num3 >= 10){
//         alert("Вводите число в длину до 1 символа");
//     } else {
//         let sum_num = num1 + num2 + num3;
//         let int_num = Number(sum_num);

//         alert(int_num);
//     }
// }

// let num1 = prompt("Введите первое число: ");
// let num2 = prompt("Введите второе число: ");
// let num3 = prompt("Введите третье число: ");

// unites_num(num1, num2, num3)

// // task4
// function calculation_shape(lenght, width) {
//     if (lenght >= 1 && width >= 1){
//         console.log("площадь прямоугольника", lenght * width);
//     } else if (width === ""){
//         console.log("площадь квадрата", lenght * 4);
//     } else{
//         alert("Некорректный ввод данных")
//     }
// }

// let lenght = prompt("Введите длину: ");
// let width = prompt("Введите ширину: ");
// calculation_shape(lenght, width)

// // task5
// function cheack_sovershenie_num(num) {
//     let sum = 0;

//     if (num === 6){
//         sum = 1 + 2 + 3;
//     } else if (num === 28){
//         sum = 1 + 2  + 4 + 7 + 14;
//     } else if (num === 498){
//         sum = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248;
//     } else if (num === 8128){
//         sum = 1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 + 256 + 512 + 1024 +2048 + 4096;
//     } else {
//         console.log(`Число ${num} не является совершеным число или не входит в деапазон проверяемых числел`);
//     }

//     if (sum === num){
//         console.log(`число ${num} является совершенным`);
//     } else {
//         console.log(`число ${num} не является совершенным`);
//     }
// }

// let num = +prompt("Введите число для проверки: ");
// cheack_sovershenie_num(num)

// // task6
// function cheack_sovershenie_num(num) {
//     let sum = 0;

//     if (num === 6){
//         sum = 1 + 2 + 3;
//     } else if (num === 28){
//         sum = 1 + 2  + 4 + 7 + 14;
//     } else if (num === 498){
//         sum = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248;
//     } else if (num === 8128){
//         sum = 1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 + 256 + 512 + 1024 +2048 + 4096;
//     } else {
//         console.log(`Число ${num} не является совершеным число или не входит в деапазон проверяемых числел`);
//     }

//     if (sum === num){
//         console.log(`число ${num} является совершенным`);
//     } else {
//         console.log(`число ${num} не является совершенным`);
//     }
// }

// let num1 = +prompt("Введите первое число для диапозона");
// let num2 = +prompt("Введите второе число для диапозона");

// for (let i = num1; i <= num2; i++) {
//     cheack_sovershenie_num(i)
// }

// // task7 and 8
// function Time(hour, minuts, secunds) {
//     if (hour >= 1 && hour <= 24 && minuts >= 1 && minuts <= 60 && secunds >= 1 && secunds <= 60){
//         console.log(`${hour}:${minuts}:${secunds}`);
//     } else if (secunds === ""){
//         console.log(`${hour}:${minuts}:00`);
//     } else{
//         alert("Некорректный ввод данных")
//     }
// }

// let hour = prompt("Введите часы:");
// minuts = prompt("Введите минуты:");
// secunds = prompt("Введите секунды:");
// Time(hour, minuts, secunds);

// // task9
// function time_in_secunds(hour, minuts, secunds) {
//     if (hour >= 1 && hour <= 24 && minuts >= 1 && minuts <= 60 && secunds >= 1 && secunds <= 60){
//         console.log((hour * 3600) + (minuts * 60) + (secunds * 1));
//     } else{
//         alert("Некорректный ввод данных")
//     }
// }

// let hour = prompt("Введите часы:");
// minuts = prompt("Введите минуты:");
// secunds = prompt("Введите секунды:");

// time_in_secunds(hour, minuts, secunds)

// // task10
// function secunds_in_time(seconds) {

//     let hour = Math.floor(seconds / 3600);
//     seconds %= 3600;
//     let minuts = Math.floor(seconds / 60);
//     seconds %= 60;

//     console.log(`${hour}:${minuts}:${seconds}`);
// }

// let seconds = prompt("Введите секунды:");
// secunds_in_time(seconds)

// // task11

// function time_in_secunds(hour, minuts, secunds) {
//     data_time  = (hour * 3600) + (minuts * 60) + (secunds * 1);
//     return data_time
// }

// function secunds_in_time(seconds) {
//     let hour = Math.floor(seconds / 3600);
//     seconds %= 3600;
//     let minuts = Math.floor(seconds / 60);
//     seconds %= 60;

//     console.log(`${hour}:${minuts}:${seconds}`);
// }

// function main(hour_inp, minuts_inp, seconds_inp, hour2_inp, minuts2_inp, seconds2_inp) {

//     if (hour_inp >= 1 && hour_inp <= 24 && minuts_inp >= 1 && minuts_inp <= 60 && seconds_inp >= 1 && seconds_inp <= 60){
//         data_in_seconds1 = time_in_secunds(hour_inp, minuts_inp, seconds_inp);
//     } else{
//         alert("Некорректный ввод данных")
//     }

//     if (hour2_inp >= 1 && hour2_inp <= 24 && minuts2_inp >= 1 && minuts2_inp <= 60 && seconds2_inp >= 1 && seconds2_inp <= 60){
//         data_in_seconds2 = time_in_secunds(hour2_inp, minuts2_inp, seconds2_inp);
//     } else{
//         alert("Некорректный ввод данных")
//     }

//     if (data_in_seconds1 > data_in_seconds2){
//         alert("Первоя дата больше второй");
//     } else if (data_in_seconds2 > data_in_seconds1){
//         alert("Вторая дата больше первой");
//     } else{
//         alert("Две даты одинаковы");
//     }

//     secunds_in_time(data_in_seconds1);
//     secunds_in_time(data_in_seconds2);
// }

// let hour_inp = +prompt("Введите часы для первой даты:");
// minuts_inp = +prompt("Введите минуты для первой даты:");
// seconds_inp = +prompt("Введите секунды для первой даты:");

// let hour2_inp = +prompt("Введите часы для второй даты:");
// minuts2_inp = +prompt("Введите минуты для второй даты:");
// seconds2_inp= +prompt("Введите секунды для второй даты:");

// main(hour_inp, minuts_inp, seconds_inp, hour2_inp, minuts2_inp, seconds2_inp)