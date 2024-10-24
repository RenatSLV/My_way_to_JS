let btn = document.getElementById("btn").addEventListener('click', function(){
    let p__card = document.querySelector('.p__card').src;
    let h1 = document.querySelector('#h1').innerText;
    let p = document.querySelector('#p').innerText;

    localStorage.setItem('img', p__card);
    localStorage.setItem('Title', h1);
    localStorage.setItem('Prise',  p);


    localStorage.getItem('img');
    localStorage.getItem('Title');
    localStorage.getItem('Prise');

});

let basket = document.getElementById('basket2').addEventListener('click', function(){
    window.open('index2.html')
})