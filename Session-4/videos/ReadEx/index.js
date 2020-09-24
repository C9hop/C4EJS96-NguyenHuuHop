// ReadEx
//read1:
{
    //cach1:
    {
    let movie = {
        title: 'The dark night rises',
        year: 2012,
        rate: 8.4,
    }
    console.log(movie.title);
    console.log(movie.year);
    console.log(movie.rate);
    console.log(movie.director);

    }
    //cach2:
    {
    let movie = {
        title: 'The dark night rises',
        year: 2012,
        rate: 8.4,
    }
    console.log(movie['title']);
    console.log(movie['year']);
    console.log(movie['rate']); 
    }
    // Log an non-existent property of the movie, director, what is the result?
    // result: undefined     
}
// //read2:
{
    let list = ['Sport', 'LOL', 'BTS'];
    for(let i = 0; i <list.length; i++){
        list[i]=list[i].toUpperCase();
        console.log(list[i]);
    }
}
// //read3:
{
    let movie = {
        title: 'The dark night rises',
        year: 2012,
        rate: 8.4,
    }
    let x = prompt('what you want to know?');
    if(x == null || x== undefined){
        alert("does not exist in  our data");
    }
    else{
        switch(x){
            case 'title':
                alert('The dark night rises');
                break;
            case 'year':
                alert('2012');
                break;
            case 'rate':
                alert('8.4')
                break;        
        }
    }
}