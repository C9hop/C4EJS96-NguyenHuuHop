let click = document.getElementById('numberBtn');
let input = document.getElementById('inputNumber');
let result = document.getElementById('result');
let count = 0;

let random = Math.floor((Math.random() * 10)+1);
console.log(random);

function clickButtonCallBack() {
    if(random == input.value){
        result.textContent = `Chúc mừng bạn đã trúng thưởng !!!!! :)`
        count = 0;
    }
    if(random != input.value){
        count++;
    result.textContent = `Bạn còn  ${3-count}  lần đoán lại con số may mắn`
    }
    if(count == 3){
        result.textContent = 'Con số may mắn lần này là: ' + random;
    }
}
    
    setTimeout(function(){ result.textContent = 'Hết thời gian dự đoán!!!'; input.style.display = `none`; click.style.display = `none`;}, 15000);

click.addEventListener(`click`, clickButtonCallBack);

