let a = prompt('Enter a squence of numbers, separated by commas (,)');
let sum = a.split(",");
console.log(sum);
let s=0;
for(let i=0;i<sum.length;i++)
{
    s+=Number(sum[i]);
}
alert('The sum of them is '+ s);