document.addEventListener("DOMContentLoaded", function(){
    let add = document.getElementById('up')
    let remove = document.getElementById('down')
    let int = document.getElementById('number')
    let integer = 0;
    add.addEventListener(`click`,() =>{
        integer += 1;
        int.innerHTML=integer;
    });
    remove.addEventListener(`click`,() =>{
        integer -= 1;
        int.innerHTML=integer;
    });
})