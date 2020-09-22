let size = [2, 4, 8, 10, 12, 4];
console.log('Hello, my name is C9 Hop and here  is my sleep  sizes: \n' + size);

console.log("Now my biggest sheep has size " + Math.max.apply(Math, size) + ", let's shave it");

let x =size.splice(size.indexOf(Math.max.apply(Math, size)),1);
// console.log(size);
console.log('After shearing, here is my flock \n' + size);


