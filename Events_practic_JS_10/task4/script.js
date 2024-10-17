const button_result = document.getElementById('button_result');

button_result.addEventListener('click', ()=>{
    let textResult = document.getElementById('textResult');
    let textarea = document.getElementById('textarea').value;

    textResult.style.maxWidth = '380px'

    if(document.querySelector('input[name="choose1"]:checked') 
    && document.querySelector('input[name="choose1"]:checked') 
    && document.querySelector('input[name="choose1"]:checked').value == "1"){
            textResult.style.fontWeight = 'Bold'
            textResult.style.Width = '380px'
            textResult.textContent = textarea
        }

    if(document.querySelector('input[name="choose1"]:checked') 
        && document.querySelector('input[name="choose1"]:checked') 
        && document.querySelector('input[name="choose1"]:checked').value == "2"){
            textResult.style.textDecoration = 'underline'
            textResult.style.Width = '380px'
            textResult.textContent = textarea
        }

    if(document.querySelector('input[name="choose1"]:checked') 
        && document.querySelector('input[name="choose1"]:checked') 
        && document.querySelector('input[name="choose1"]:checked').value == "3"){
            textResult.style.fontStyle = 'italic'
            textResult.style.Width = '380px'
            textResult.textContent = textarea
        }

    if(document.querySelector('input[name="choose2"]:checked') 
        && document.querySelector('input[name="choose2"]:checked') 
        && document.querySelector('input[name="choose2"]:checked').value == "1"){
            textResult.style.textAlign = 'left'
            textResult.style.Width = '380px'
            textResult.textContent = textarea
        }
    
    if(document.querySelector('input[name="choose2"]:checked') 
        && document.querySelector('input[name="choose2"]:checked') 
        && document.querySelector('input[name="choose2"]:checked').value == "2"){
            textResult.style.textAlign = 'right'
            textResult.style.Width = '380px'
            textResult.textContent = textarea
        }
    
    if(document.querySelector('input[name="choose2"]:checked') 
        && document.querySelector('input[name="choose2"]:checked') 
        && document.querySelector('input[name="choose2"]:checked').value == "3"){
            textResult.style.textAlign = 'Justify'
            textResult.style.Width = '380px'
            textResult.textContent = textarea
        }
    
})