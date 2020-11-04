let click = document.getElementById('numberBtn');
let input = document.getElementById('inputNumber');
let result = document.getElementById('result');

let random = Math.floor(Math.random() * 10);
console.log(random);

function clickButtonCallBack() {
    if(random == input.value){
        // alert('Bạn đã trúng thưởng')
        result.textContent = `Chúc mừng bạn đã trúng thưởng !!!!! :)`
    }
    else{
        // alert('Con số may mắn là: ' + random);
        result.textContent = 'Con số may mắn lần này là: ' + random;
    }
  setTimeout(showSlides, 4000);
  
}
result.textContent = 'Hết thời gian dự đoán!!!';
click.addEventListener(`click`, clickButtonCallBack);

