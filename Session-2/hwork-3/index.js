console.log('a)')
for(var i = 0; i <7; i++){
   console.log(i);
}

{
   console.log('b)')
   let n = prompt('Enter a number?');
   for(var i = 0; i<n; i++){
   console.log(i);
   }
}

{
   console.log('c)')
   let n = prompt('Enter n');
   for(var i = 3; i<n; i++){
      console.log(i);
   }
}

{
   console.log('d)')
   let n = prompt('Enter n');
   let c = prompt('Enter c');
   for(let i = c; i<n; i++){
      console.log(i);
   }

}

{
   console.log('e)')
   let n = prompt('Enter n');
   let c = prompt('Enter c');
   for(let i = c; i<n; i += 2){
      console.log(i);
   }

}

{
   console.log('f)')
   let n = prompt('Enter n');
   let c = prompt('Enter c');
   let s = prompt('Enter s');
   for(let i = c; i<n; i += s){
      console.log(i);
   }
}




