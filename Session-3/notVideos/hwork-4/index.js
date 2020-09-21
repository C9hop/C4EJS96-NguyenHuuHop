let list=['Jeans', 'T-shirt', 'socks'];
console.log(list);
while(true){
    let n = prompt('Hi there, welcome to shop  admin panel, what do you want(C, R, U, D)?')
    if(n=='' || n==null){
       break;
    }
    else{
    switch(n){
        case 'c':
            let a = prompt('Enter the name of the new item');
            alert('Done');
            list.push(a);
            break;
        case 'r':
            console.log('The current item are:');
            for(let i = 0; i < list.length ; i++){
                   console.log((i+1)+ '. '+list[i]);
            }
            break;
        case 'u':
            let b = prompt('Enter the position you want to update');
            let c = prompt('Enter the new name');
            alert('Done');
            list[b-=1] = c;
            break;
        case 'd':
            let d = prompt('Enter the position you want to delete');
            alert('Done');
            list.splice(d-=1,1);
            break;
        default:
            alert('This command is  not supported')
            break;
        } 
    }  
}