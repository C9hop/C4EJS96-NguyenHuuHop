let a = prompt('Enter a squence of numbers, separated by","');
let x = a.split(",");
let min = Math.min.apply(Math, x);
alert('The smallest number is  ' + min);
