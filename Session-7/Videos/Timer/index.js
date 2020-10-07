    document.addEventListener("DOMContentLoaded", function(){
        let numberEl = document.getElementById('number_input');
        let startEl = document.getElementById('start_btn');
         startEl.addEventListener(`click`,()=>{
           let time = numberEl.value;
            setInterval (()=>{
              time--;
              if(time>=0){
                   let countdownEl = document.getElementById('countdown');
                   countdownEl.innerHTML = time;   
            }},1000)})
            })