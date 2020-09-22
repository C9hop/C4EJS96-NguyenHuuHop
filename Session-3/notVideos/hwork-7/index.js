const arr = [3, 4, 6, -9, 10, -88, 2];
let check = prompt('Enter a number you wwant check in my array');
let x = arr.find(Element => Element == check);
let i = arr.findIndex(Element => Element == check );
if(x){
  alert(check +' is FOUND in my array at '+i);
}
else{
  alert(check +' is NOT found in my array');
}
