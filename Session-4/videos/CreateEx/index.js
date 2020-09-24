//CreateEx:
{
    let movie = {
        title: 'The dark night rises',
        year: 2012,
        rate: 8.4,
    }
    let x = prompt('What you want to update?');
    if(x!='title' || x!='year' || x!='rate'){
        alert(x+' does  not exist in our data, we will add new');
        let y = prompt('Enter the new data');
        movie[x]=y;
    }
    console.log(movie);
}