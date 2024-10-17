let btn = document.getElementById("btn");

let width = 0; 

btn.addEventListener('click', function(){
    let blue_block = document.getElementById("blue_block");

    width += 10;
    blue_block.style.width = width + "px"
    if (width === 250){
        width = -10
    }
        

})

let btn_HTML = document.getElementById("HTML");
let btn_CSS = document.getElementById("CSS");
let btn_JS = document.getElementById("JS");

btn_HTML.addEventListener('click', function(){
    document.getElementById("text").textContent = "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.";
    document.getElementById("text2").textContent = "Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.";

})

btn_CSS.addEventListener('click', function(){
    document.getElementById("text").textContent = "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]";
    document.getElementById("text2").textContent = "The name cascading comes from the specified priority scheme to determine which declaration applies if more than one declaration of a property match a particular element. This cascading priority scheme is predictable.";

})

btn_JS.addEventListener('click', function(){
    document.getElementById("text").textContent = "JavaScript often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.[10]";
    document.getElementById("text2").textContent = "Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js.";

})

let btn_finish = document.getElementById("finish");

btn_finish.addEventListener('click', function(){
    var countTrueAnswer = 0;

    if (document.querySelector('input[name="choise1"]:checked') &&  
    document.querySelector('input[name="choise1"]:checked') &&  
    document.querySelector('input[name="choise1"]:checked').value == "1"){
        countTrueAnswer++;
    }

    if (document.querySelector('input[name="choise2"]:checked') &&  
    document.querySelector('input[name="choise2"]:checked') &&  
    document.querySelector('input[name="choise2"]:checked').value == "1"){
        countTrueAnswer++;
    }

    if (document.querySelector('input[name="choise3"]:checked') &&  
    document.querySelector('input[name="choise3"]:checked') &&  
    document.querySelector('input[name="choise3"]:checked').value == "1"){
        countTrueAnswer++;
    }

    document.getElementById('text3').textContent = "Вы ответили правельно на " + countTrueAnswer + " из 3 вопросов.";
})