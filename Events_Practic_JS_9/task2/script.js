const block1 = document.getElementById('block1')
const block2 = document.getElementById('block2')
const btnOpen = document.getElementById('button_open')
const btnClose = document.getElementById('button_close')
const overlay = document.getElementById('overlay')

btnOpen.addEventListener('click', () => {
    block2.style.display = 'flex';
    overlay.classList.add('show')
});

btnClose.addEventListener('click', () => {
    block2.style.display = 'none';
    overlay.classList.remove('show')
});