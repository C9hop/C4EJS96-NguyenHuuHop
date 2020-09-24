//Object and Array  mix structure

{
       let movie1 = {
        title: 'Mind Hunter',
        year: 2012,
        rate: 8.4,
        character: [' X ', ' Y ', ' Z ']
    }
    let movie2 = {
        title: 'Batman',
        year: 2014,
        rate: 7.0,
        character: [' A ', ' B ', ' C ']
    }
    let movie3 = {
        title: 'Endgame',
        year: 2018,
        rate: 8.5,
        character: [' Captain America ', ' Iron Man ', ' Thor '],
    }
    let movieArr = [];
    movieArr.push(movie1);
    movieArr.push(movie2); 
    movieArr.push(movie3);
    let string = "";
    for(let i=0; i<movieArr.length; i++){
        console.log(movieArr[i].title);
        console.log('year: '+movieArr[i].year);
        console.log('rate: '+movieArr[i].rate);
    let string = "";
        for(let j=0; j<movieArr[i].character.length; j++){
            string +=movieArr[i].character[j];
    }
    console.log('character: '+string);
    console.log('-----------------------------------------------------------')
    } 
}