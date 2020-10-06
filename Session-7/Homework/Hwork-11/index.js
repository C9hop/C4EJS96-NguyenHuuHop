document.addEventListener("DOMContentLoaded",function(){
    let x = document.getElementById("upper_btn")
    console.log(x);

    let upper = document.getElementById("upper_btn")
    upper.addEventListener(`click`, (e) =>{
        let update = document.getElementById("name_input").value.toUpperCase();
        document.getElementById('result_div').innerHTML = update;
        console.log(update);
    });


    let y = document.getElementById("name_input")
    console.log(y);

    let z = document.getElementById("result_div")
    console.log(z);

})

