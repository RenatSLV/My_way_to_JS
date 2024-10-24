let img = localStorage.getItem('img');
let h1 = localStorage.getItem('Title');
let p = localStorage.getItem('Prise');

let div = document.querySelector('#basket')
let imgbasket = document.querySelector('#img')
let h3basket = document.querySelector('#h3')
let p2basket = document.querySelector('#p2')
let btn__basket = document.querySelector('#btn__basket')

imgbasket.src = img
h3basket.innerText = h1
p2basket.innerText = p

btn__basket.addEventListener('click', function(){
    localStorage.clear();
    div.display = 'none';
})