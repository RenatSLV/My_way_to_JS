const li = document.querySelectorAll('#my_list li');

li.forEach(item =>{
    item.addEventListener('click', function(elem){
        const target = elem.target;

        target.classList.toggle('color'); 
    }) 
    
});