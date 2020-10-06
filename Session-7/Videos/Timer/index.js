document.addEventListener("DOMContentLoaded", function(){
    let numberEl = document.getElementById('number_input');
    let startEl = document.getElementById('start_btn');
    setInterval (startEl.addEventListener(`click`,()=>{
    let time = numberEl.value;
        time--;
        if(time>=0){
    let countdownEl = document.getElementById('countdown');
            countdownEl.innerHTML = time;
        }
}),3000);
})