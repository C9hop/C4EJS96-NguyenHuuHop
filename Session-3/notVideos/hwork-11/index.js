let x =prompt("Enter a sequence number");
let arr = x.split(",");
const result = arr.filter(x => x%2==1);
alert(x + " => " + result);