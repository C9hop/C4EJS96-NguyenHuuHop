let list = ["Backpack", "MiBand watch", "Ring"];
console.log(list);
document.addEventListener("DOMContentLoaded",function(){
    let show = document.getElementById("item_list_ul");
    console.log(show);
    let remove1 = document.getElementById("test_li_1");
    let remove2 = document.getElementById("test_li_2");
    remove1.remove();
    remove2.remove();
})
document.addEventListener("DOMContentLoaded",function(){
    let add = document.getElementById("add");
    let input = document.getElementById("list_input");
    add.addEventListener(`click`,()=>{
        let x =document.getElementsByTagName("li")
        x.innerHTML=input.value;
    })
    
})