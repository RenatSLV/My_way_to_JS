// Задание 1

// 1.1

// let age = +prompt("Введите сколько вам лет: ");

// if (age >= 0 && age <= 11){
//     alert("ребенком ")
// }

// else if (age >= 12 && age <= 17){
//     alert("подростком")
// }

// else if (age >= 18 && age <= 59){
//     alert("взрослым")
// }

// else if (age >= 60 && age <= 85){
//     alert("пенсионером")
// }

// else if (age >= 86){
//     alert("Вааау")
// }

// else{
//     alert("Некорректный ввод данных")
// }

// 1.2

// let number = +prompt("Введите число от 0 - 9: ");

// if (number > 9){
//     alert("В диапазоне от 0 до 9");
// }

// switch (number) {
//     case 0:
//         alert("числу 0 равен этот спецсимвол: )");
//     break;

//     case 1:
//         alert("числу 1 равен этот спецсимвол: !");
//     break;
    
//     case 2:
//         alert("числу 2 равен этот спецсимвол: @");
//     break;

//     case 3:
//         alert("числу 3 равен этот спецсимвол: #");
//     break;

//     case 4:
//         alert("числу 4 равен этот спецсимвол: $");
//     break;

//     case 5:
//         alert("числу 5 равен этот спецсимвол: %");
//     break;

//     case 6:
//         alert("числу 6 равен этот спецсимвол: ^");
//     break;

//     case 7:
//         alert("числу 7 равен этот спецсимвол: &");
//     break;

//     case 8:
//         alert("числу 8 равен этот спецсимвол: *");
//     break;

//     case 9:
//         alert("числу 9 равен этот спецсимвол: (");
//     break;

// }

// 1.3

// let number = +prompt("Введите трёх значное число: ");

// num1 = Math.floor(number / 100)

// num2 = number / 10
// num2 = Math.floor(num2 % 10)

// num3 = Math.floor(number % 10)

// if (number > 999){
//     alert("ТРЁХ ЗНАЧНОЕ ЧИСЛО");
// }

// else if (num1 == num2 || num1 == num3 || num2 == num3){
//     alert("Есть числа которые совпадают");
// }

// else{
//     alert("Нет совпадений");
// }

// 1.4

// let year = +prompt("Введите год для проверки: ");

// if (year > 9999){
//     alert("Введите год");
// }

// else if (year % 400 == 0){
//     alert("Високосный год");
// }

// else if (year % 4 == 0){
//     alert("Високосный год");
// }

// else if (year % 100 == 0){
//     alert("Не високосный год");
// }

// else if (year % 4 != 0){
//     alert("Не високосный год");
// }

// 1.5

// let number = +prompt("Введите пятиразрядное число: ");

// num1 = Math.floor(number / 10000);
// num2 = Math.floor(number % 10);

// let result = num1 === num2 ? "да" : "Нет";

// alert(result)

// 1.6

// let $Dolars = +prompt("Введите сумму в долларах:");
// let Volute = prompt("Введите во что хотите перевести: EUR, UAN, AZN: ");

// const EUR = 0.92;
// const UAN = 7.27;
// const AZN = 1.7;

// let sum_EUR = $Dolars * EUR / 1;
// let sum_UAN = $Dolars * UAN / 1;
// let sum_AZN = $Dolars * AZN / 1;

// switch(Volute) {
//     case "EUR":
//         alert(`${$Dolars}$ = ${sum_EUR}\u20ac`);
//         break;

//     case "UAN":
//         alert(`${$Dolars}$ = ${sum_UAN}\u00A5`);
//         break;

//     case "AZN":
//         alert(`${$Dolars}$ = ${sum_AZN}\u20BC`);
//         break;
// }

// 1.7

// let price = prompt("Введите цену товара: ")

// if (price >= 200 && price <= 300){
//     let result = (price / 100) * 3;
//     let final_price = Math.floor(price - result);
//     alert(`У вас скидка 3% товар будет стоить: ${final_price}`)
// }

// else if (price >= 350 && price <= 500){
//     let result = (price / 100) * 5;
//     let final_price = Math.floor(price - result);
//     alert(`У вас скидка 5% товар будет стоить: ${final_price}`)
// }

// else if (price > 550){
//     let result = (price / 100) * 7;
//     let final_price = Math.floor(price - result);
//     alert(`У вас скидка 7% товар будет стоить: ${final_price}`)
// }

// else{
//     alert("Некорректный ввод данных")
// }

// 1.8

// let P_square = +prompt("Введите сторону квадрата: ");
// let D_circle = +prompt("Введите радиус круга: ");

// let D = 2 * D_circle;

// if (D <= P_square){
//     alert("Окружность поместиться в указанный квадрат");
// }

// else if (P_square != D){
//     alert("Окружность не поместиться в указанный квадрат");
// }
// else {
//     alert("Некорректный ввод данных")
// }

// 1.9

// let task1 = prompt("Какой элемент является основным в воде? a) Спирт  b) Азот  c) Кислород");
// let task2 = prompt("Какой из следующих городов является столицей Франции? a) Лондон  b) Париж  c) Берлин");
// let task3 = prompt(" Какой животное является млекопитающим? а) Крокодил b) Дельфин c) Черепаха");

// var grade = 0

// if (task1 == "c"){
//     grade = grade + 2
// }

// else{
//     grade = grade + 0
// }

// if (task2 == "b"){
//     grade = grade + 2
// }

// else{
//     grade = grade + 0
// }

// if (task3 == "b"){
//     grade = grade + 2
// }

// else{
//     grade = grade + 0
// }

// alert(`вы набрали ${grade} из 6`);

// 1.10

// var day = +prompt("Введите день: ");
// var mounth = +prompt("Введите месяц к примеру 4: ");
// var year = +prompt("Введите год: ");

// let Year = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

// let days_in_mounth;
// if (mounth === 2){
//     if(Year){
//         days_in_mounth === 29;
//     } else {
//         days_in_mounth === 28;
//     }
// } else if (mounth === 4 || mounth === 6 || mounth === 9 || mounth === 11){
//     days_in_mounth = 30;
// } else {
//     days_in_mounth = 31;
// }

// day++;

// if (day > days_in_mounth){
//     day = 1;
//     mounth++;
// }

// if (mounth > 12){
//     mounth = 1;
//     year++;
// }

// alert(`Следующая дата: ${day}/${mounth}/${year}`);

// 2.1

// let num1 = +prompt("Введите первое число: ");
// let num2 = +prompt("Введите второе число: ");

// if (num1 < num2){
//     alert("-1");
// } else if (num1 > num2){
//     alert("1");
// } else{
//     alert("0");
// }

// 2.2

// let num1 = +prompt("Введите число: ");

// let result = 1;

// for (let i = 1; i <= num1; i++) {   // Я не смог сделать просто через условия так как для этого нужно либо фукции или циклы по этому я посмотрел как пишется цикл for в JS
//     result *= i;
// }
// console.log(`Факториал ${num1} = ${result}`);

// 2.3

// let num1 = prompt("Введите первое число: ");
// let num2 = prompt("Введите второе число: ");
// let num3 = prompt("Введите третье число: ");

// if (num1 >= 10){
//     alert("Вводите число в длину до 1 символа");
// } else if (num2 >= 10){
//     alert("Вводите число в длину до 1 символа"); 
// } else if (num3 >= 10){
//     alert("Вводите число в длину до 1 символа");
// } else {
//     let sum_num = num1 + num2 + num3;
//     let int_num = Number(sum_num);

//     alert(int_num);
// }

// 2.4

// let lenght = prompt("Введите длину: ");
// let width = prompt("Введите ширину: ");

// if (lenght >= 1 && width >= 1){
//     console.log("площадь прямоугольника", lenght * width);
// } else if (width === ""){
//     console.log("площадь квадрата", lenght * 4);
// } else{
//     alert("Некорректный ввод данных")
// }

// 2.5

// let num = +prompt("Введите число для проверки: ");

// let sum = 0;

// if (num === 6){
//     sum = 1 + 2 + 3;
// } else if (num === 28){
//     sum = 1 + 2  + 4 + 7 + 14;
// } else if (num === 498){
//     sum = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248;
// } else if (num === 8128){
//     sum = 1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 + 256 + 512 + 1024 +2048 + 4096;
// } else {
//     console.log(`Число ${num} не является совершеным число или не входит в деапазон проверяемых числел`);
// }

// if (sum === num){
//     console.log(`число ${num} является совершенным`);
// } else {
//     console.log(`число ${num} не является совершенным`);
// }

// 2.7 and 2.8

// let hour = prompt("Введите часы:");
// minuts = prompt("Введите минуты:");
// secunds = prompt("Введите секунды:");

// if (hour >= 1 && hour <= 24 && minuts >= 1 && minuts <= 60 && secunds >= 1 && secunds <= 60){
//     console.log(`${hour}:${minuts}:${secunds}`);
// } else if (secunds === ""){
//     console.log(`${hour}:${minuts}:00`);
// } else{
//     alert("Некорректный ввод данных")
// }

// 2.9

// let hour = prompt("Введите часы:");
// minuts = prompt("Введите минуты:");
// secunds = prompt("Введите секунды:");

// if (hour >= 1 && hour <= 24 && minuts >= 1 && minuts <= 60 && secunds >= 1 && secunds <= 60){
//     console.log((hour * 3600) + (minuts * 60) + (secunds * 1));
// } else{
//     alert("Некорректный ввод данных")
// }

// 2.10

// let seconds = prompt("Введите секунды:");

// let hour = Math.floor(seconds / 3600);
// seconds %= 3600;
// let minuts = Math.floor(seconds / 60);
// seconds %= 60;

// console.log(`${hour}:${minuts}:${seconds}`);

// 2.11

// let hour_inp = +prompt("Введите часы для первой даты:");
// minuts_inp = +prompt("Введите минуты для первой даты:");
// seconds_inp = +prompt("Введите секунды для первой даты:");

// let hour2_inp = +prompt("Введите часы для второй даты:");
// minuts2_inp = +prompt("Введите минуты для второй даты:");
// seconds2_inp= +prompt("Введите секунды для второй даты:");

// if (hour_inp >= 1 && hour_inp <= 24 && minuts_inp >= 1 && minuts_inp <= 60 && seconds_inp >= 1 && seconds_inp <= 60){
//     data_in_seconds = (hour_inp * 3600) + (minuts_inp * 60) + (seconds_inp * 1);
// } else{
//     alert("Некорректный ввод данных");
// }

// if (hour2_inp >= 1 && hour2_inp <= 24 && minuts2_inp >= 1 && minuts2_inp <= 60 && seconds2_inp >= 1 && seconds2_inp <= 60){
//     data_in_seconds2 = (hour2_inp * 3600) + (minuts2_inp * 60) + (seconds2_inp * 1);
// } else{
//     alert("Некорректный ввод данных");
// }

// if (data_in_seconds > data_in_seconds2){
//     alert("Первоя дата больше второй");
// } else if (data_in_seconds2 > data_in_seconds){
//     alert("Второя дата больще первой");
// } else{
//     alert("Две даты одинаковы");
// }

// let hour = Math.floor(data_in_seconds / 3600);
// data_in_seconds %= 3600;
// let minuts = Math.floor(data_in_seconds / 60);
// data_in_seconds %= 60;

// let hour2 = Math.floor(data_in_seconds2 / 3600);
// data_in_seconds2 %= 3600;
// let minuts2 = Math.floor(data_in_seconds2 / 60);
// data_in_seconds2 %= 60;

// console.log(`${hour}:${minuts}:${data_in_seconds}`);
// console.log(`${hour2}:${minuts2}:${data_in_seconds2}`);