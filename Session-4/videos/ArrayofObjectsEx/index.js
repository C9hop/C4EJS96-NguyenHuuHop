//ArrayofObjectsEx:
//AfO1:
{
    let movie1 = {
        title: 'The dark night rises',
        year: 2012,
        rate: 8.4,
    }
    let movie2 = {
        title: 'Batman',
        year: 2014,
        rate: 7.0,
    }
    let movie3 = {
        title: 'Endgame',
        year: 2018,
        rate: 8.5,
    }
    let movieArr = [];
    movieArr.push(movie1);
    movieArr.push(movie2);
    movieArr.push(movie3);
    console.log(movieArr);
    console.log(movieArr[0]);
    console.log(movieArr[2].title);
    for(let i=0; i<movieArr.length; i++){
       console.log(movieArr[i]);
    }
    for(let i=0; i<movieArr.length; i++){
        console.log(movieArr[i].title);
        console.log(movieArr[i].year);
        console.log(movieArr[i].rate);
        console.log('--------------------------------');
     }
     movieArr[2].rate+=0.7;
     console.log(movieArr[2]);
}