// objectsCOntainingArrayEx:
{
    let movie = {
        title: 'Endgame',
        year: 2018,
        rate: 8.5,
        character: ['Captain America ', 'Iron Man ', ' Thor '],
    }
    console.log(movie.title);
    console.log('year: '+movie.year);
    console.log('rate: '+movie.rate);
    let string = "";
    for(let i=0; i<movie.character.length; i++){
        string +=movie.character[i];
    }
    console.log('character: '+string);
    console.log('--------------------------------------------------------------')
    {
    movie.character.push('doctor strange');
    console.log(movie.title);
    console.log('year: '+movie.year);
    console.log('rate: '+movie.rate);
    let string = "";
    for(let i=0; i<movie.character.length; i++){
        string +=movie.character[i];
    }
    console.log('character: '+string);
    }
}