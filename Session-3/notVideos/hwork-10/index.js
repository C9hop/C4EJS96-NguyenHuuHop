let x =prompt("Enter a sequence of names");
let arr = x.split(",");
const map1 = arr.map(x => "<"+x+">");
alert(x + ' => ' + map1);