function show(){
    if(wish == null || wish== ''){
        let fixWish = prompt('what is your wish for this year?')
        alert(`${name}\n${fixWish}`)
    }
    else{
        alert(`${name}\n${wish}`)
    }
}
    let name = prompt("Your name?")
    let wish = prompt("what is your wish for this year?")
show();