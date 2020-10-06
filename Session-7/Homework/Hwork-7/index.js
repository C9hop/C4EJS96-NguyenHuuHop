document.addEventListener("DOMContentLeaded", function(){
    let btn1 = document.getElementsByClassName("button1")
    btn1.addEventListener(`click` ,(e) =>{
        console.log(e.target.btn1);
    })
    let btn2 = document.getElementsByClassName("button2")
    btn2.addEventListener(`click` ,(e) =>{
        console.log(e.target.btn2);
    })
})