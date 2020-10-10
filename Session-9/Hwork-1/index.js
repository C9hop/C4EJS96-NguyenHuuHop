  
let promise= new Promise(function(resolve, reject){
    setTimeout((e)=>resolve("Promise is da beste"), 5000);
});
promise 
    .then(function(successMessage) { 
        console.log(successMessage); 
    }, function(errorMessage) { 
        console.log(errorMessage); 
    })
    // async function asyncCall() {
    //     let result = await promise();
    //     console.log(result)
    // }
    // asyncCall(); 