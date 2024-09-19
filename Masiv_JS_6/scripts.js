// // task1
// var intMasiv = [];

// for (let i = 1; i <= 10; i++){
//     let num = Math.floor((Math.random() * 100) + 1);
//     intMasiv.push(num);
//     console.log(num);
// }

// let MaxValue = Math.max.apply(null, intMasiv);
// let MinValue = Math.min.apply(null, intMasiv)

// console.log(intMasiv);
// console.log("самое большое число в рандомно сгенерированом массиве: " + MaxValue);
// console.log("самое маленькое число в рандомно сгенерированом массиве: " + MinValue);

// // task2
// var intMasiv = [];
// let sum = 0;



// for (let i = 1; i <= 5; i++){
//     let item = +prompt("Введите число:");
//     intMasiv.push(item)

//     sum += Number(item)
//     middleSum = sum / intMasiv.length
// }



// console.log("Массив: " + intMasiv);
// console.log("Сумма массива: " + sum);
// console.log("Средние значение массива: " + middleSum);

// task3
// let massiv1 = [];
// let massiv2 = [];

// for (let i = 1; i <= 5; i++){
//     let item = +prompt("Введите число:");
//     massiv1.push(item)
// }

// for (let i = 1; i <= 5; i++){
//     let item = +prompt("Введите число:");
//     massiv2.push(item)
// }

// function srovnenia(arr1, arr2) {
//     for (let i = 0; i <= length; i++){
//         if (arr1[i] > arr2[i]){
//             return `${arr1} > ${arr2} Первый массив больше`
//         } else if (arr1[i] < arr2[i]){
//             return `${arr1} < ${arr2} Второй массив больше`
//         } else{
//             return `${arr1} = ${arr2} Равны`
//         }
        
//     }
// }


// console.log(massiv1);
// console.log(massiv2);
// console.log(srovnenia(massiv1, massiv2));

// task4
// let massiv = [];
// let chetmassiv = [];

// for (let i = 1; i <= 10; i++){
//     let item = +prompt("Введите число:");
//     massiv.push(item)
// }

// function takeChet(arr1, arr2) {
//     for (let i = 0; i <= arr1.length; i++){
//         if (arr1[i] % 2 === 0){
//             arr2.push(arr1[i]);
//         }    
//     }
//     console.log(arr1);
//     console.log(arr2);
// }

// takeChet(massiv, chetmassiv);
