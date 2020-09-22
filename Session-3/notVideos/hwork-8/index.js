let size = [2, 4, 8, 10, 12, 4];
console.log('Hello, my name is C9 Hop and here  is my sleep  sizes: \n' + size);

console.log("Now my biggest sheep has size " + Math.max.apply(Math, size) + ", let's shave it");

let x =size.splice(size.indexOf(Math.max.apply(Math, size)),1);
console.log('After shearing, here is my flock \n' + size);

for(let i = 1; i <= 3; i++){
console.log('MONTH ' + i);
console.log('One month  has, passed, my sheeps have grown, here are their sizes')
console.log(size.map(Element => Element+50));
size = size.map(Element => Element+50);
console.log("Now my biggest sheep has size " + Math.max.apply(Math, size) + ", let's shave it");
}

let s=0;
for(let i=0;i<size.length;i++)
{
    s+=Number(size[i]);
}
console.log('My flock has size in total: ' + s);
console.log('I would get  ' + s + ' *2$ =' + s*2);
