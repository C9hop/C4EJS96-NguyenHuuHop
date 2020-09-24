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