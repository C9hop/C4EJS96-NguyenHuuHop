let a = {
    debug: "The process of figuring out why your program has a certain error and how to fix it",
    done:"When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
    defect: "The formal word for ‘error’",
    pm: "The short version of Project Manager, the person in charge of the final result of a project",
    uiux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
}
var check;
    alert('Hi there, this is dev dictionary');
    let n= prompt("enter a keyword");
for(let prop in a)
{
    if(n==prop)
    {
        check=true;
        break;
    }
}
if(check==true)
{
    alert(`${n} \n ${a[n]}`);
}
else 
{
    let p = prompt('We could not find your word: '+n+', leave your explanation');
    alert("Done");
    a[n]=p;
    alert(`${n} \n ${a[n]}`);
}