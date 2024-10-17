let ball = document.getElementById('ball');

document.addEventListener('click', function(e){
    
    const x = e.clientX
    const y = e.clientY

    ball.style.left = (x - ball.offsetHeight / 2) + 'px';
    ball.style.top = (y - ball.offsetHeight / 2) + 'px';
})