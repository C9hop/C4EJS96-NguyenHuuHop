let a = prompt('Enter a squence of numbers, separated by","');
let x = a.split(",");
let min = x[0];
for(let i = 0; i > x.length; i++){
    if(Math. Number(x[i])<Number(min)){
        min= x[i];        
    }
}
alert('The smallest number is  ' + min)
