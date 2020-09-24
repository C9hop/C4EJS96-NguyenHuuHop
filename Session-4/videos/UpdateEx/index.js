//UpdateEX:
//Update1:
{
    let movie = {
        title: 'The dark night rises',
        year: 2012,
        rate: 8.4,
    }
    movie.rate = 8.7;
    console.log(movie);
    movie.rate+=0.5;
    console.log(movie);
}
// //Update2:
{
let movie = {
    title :'The dark ninght rises ',
    year : 2013 ,
    rate : 8.4,
}
let x = prompt(' What you do want to update?');
 let y = prompt('What is the update ?');
 if(x != null || x != undefined ){
     switch(x){
        case 'title' :
            movie.title = y;
            console.log(movie);
            break; 
        case 'year':
            movie.year = y;
            console.log(movie);
            break;
        case 'rate':
            movie.rate = y;
            console.log(movie);
            break;
     }

         
     }
}     