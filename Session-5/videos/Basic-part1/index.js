//Basic

//part1.1:
// console.log('First run: '+Math.random(0,1));
// console.log('Second run: '+Math.random(0,1));

//part1.2:
// let x = [2, 5, 6, 9, 10];
// let items = x[Math.floor(Math.random() * x.length)];
// console.log(items);

//part1.3/1.4:
let allQuiz =[
    "how many legs does the dog have?\n1. 1 leg\n2. 2 leg\n3. 3 leg\n4. 4 leg\n",
    "25 + 14 = ?\n1. 39\n2. 38\n3.30\n4. 35",
    "What is the capital of Vietnam?\n1. Tp Ho Chi Minh\n2. Ha Noi\n3. Đa Nang\n4. Viet Nam",
]

for(let i=0; i<allQuiz.length; i++){
    let items = allQuiz[Math.floor(Math.random() * allQuiz.length)];
let x = prompt(items);
    items=allQuiz[i];
if(items=allQuiz[0]){
    if(x == null || x== undefined){
        alert("???...");
    }
    else{
        switch(x){
            case '1':
                alert('Good luck next time')        
                break;
            case '2':
                alert('bravo!!!');
                break;
            case '3':
                alert('Good luck next time')        
                break;
            case '4':
                alert('Good luck next time')        
        }
    }
}
else if(items=allQuiz[1]){
    if(x == null || x== undefined){
        alert("???...");
    }
    else{
        switch(x){
            case '1':
                alert('Bravo!!!')        
                break;
            case '2':
                alert('Good luck next time')        
                break;
            case '3':
                alert('Good luck next time')        
                break;
            case '4':
                alert('Good luck next time')        
        }
    }
}
else if(items=allQuiz[2]){
    if(x == null || x== undefined){
        alert("???...");
    }
    else{
        switch(x){
            case '1':
                alert('Good luck next time')        
                break;
            case '2':
                alert('bravo!!!');
                break;
            case '3':
                alert('Good luck next time')        
                break;
            case '4':
                alert('Good luck next time')        
        }
    }
}
// alert('we are out of question :(');
}
