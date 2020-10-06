document.addEventListener("DOMContentLeaded", function(){
    const btn = document.getElementsByClassName("button1")
    btn.addEventListener(`click` ,(e) =>{
        console.log(e.target.btn.tagName)
    })
})