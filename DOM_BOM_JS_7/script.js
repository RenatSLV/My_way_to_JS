// task1
let button = document.getElementById('functionclick'); 
button.addEventListener('click', function(){

    let day = +prompt("Введите день вашего рождения:");
    let mounth = +prompt("Введите день месяц рождения:");
    let year = +prompt("Введите день год рождения:");

    if (day <= 30){
        day = day;
    } else {
        alert("Дни максимум 30");
    }
    if (mounth <= 12){
        mounth = mounth;
    } else {
        alert("месяцов максимум 12");
    }
    if (year <= 2024){
        year = year;
    } else {
        alert("вы не могли родится в 2025");
    }
    const todayDay = 13;
    const todayMonth = 9;
    const todayYear = 2024;

    let resultDay = todayDay - day;
    let resultMonth = todayMonth - mounth;
    let resultYear = todayYear - year;

    if (resultDay < 0 || resultMonth < 0 || resultYear < 0){
        resultDay = Math.abs(resultDay)
        resultMonth = Math.abs(resultMonth)
        resultYear = Math.abs(resultYear)
    }

    alert("Вам сейчас полных лет: " + resultDay + " дней " + resultMonth + " месяцов " + resultYear+ " лет")
})

// task2
let button2 = document.getElementById('functionclick2'); 
button2.addEventListener('click', function(){
    let num1 = +prompt("Введите первое число");
    let num2 = +prompt("Введите второе число");

    let reult = num1 / num2
    alert(reult.toFixed(2))
})

// task3
let button3 = document.getElementById('functionclick3'); 
button3.addEventListener('click', function(){
    const colors = [
        'blue',
        'green',
        'red',
        'yellow',
        'black'
    ]
    let randomElement = colors[Math.floor(Math.random() * colors.length)]
    alert(randomElement)
})


let button4 = document.getElementById('functionclick4');
button4.addEventListener('click', function(){
    let text = document.getElementById('text');
    text.innerHTML = 'Hello'
    text.style.color = 'green'
    let num =  Math.floor(Math.random() * 50)
    text.style.fontSize = num + 'px'
})

let button5 = document.getElementById('functionclick5');
button5.addEventListener('toggle', function(){
    let hiden = document.getElementById('hiden');
    hiden.style.display = 'block'
})
