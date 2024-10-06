let currenBlock = 1
document.getElementById('btn');

document.addEventListener('click', function(){
    
    let blo1 = document.getElementById('blo1');
    let blo2 = document.getElementById('blo2');
    let blo3 = document.getElementById('blo3');

    if (currenBlock === 1){
        blo1.style.backgroundColor = 'green';
        currenBlock = 2
        blo3.style.backgroundColor = 'grey';
    } else if (currenBlock === 2){
        blo2.style.backgroundColor = 'yellow';
        currenBlock = 3
        blo1.style.backgroundColor = 'grey';
    } else if (currenBlock === 3){
        blo3.style.backgroundColor = 'red';
        currenBlock = 1
        blo2.style.backgroundColor = 'grey';
    }
});