// let menu = ['banh mi', 'com rang', 'coca cola', 'coffee'];
// console.log(menu);

// // menu.push('fami');
// // console.log(menu);

// console.log(menu[2]);
// menu[2] = 'tra thai';
// // // console.log(menu[2]);
// console.log(menu);

// menu.splice(0,2);
// console.log(menu);

// for(let i = 0; i < menu.length; i++){
//     console.log(menu[i]);
// }

// // for(let i = 0; i < menu.length; i++){
// //     menu[i]=menu[i].toUpperCase();
// // }
// // console.log(menu);   

// objects

// let person = {
//     name: 'Nam',
//     age: 19,
// };
// console.log(person);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// InitEx
// {
//     let movie = {
//         title: 'The dark night rises',
//         year: 2012,
//         rate: 8.4,
//     }
//     console.log(movie);
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ReadEx
//read1:
// {
//     //cach1:
//     {
//     let movie = {
//         title: 'The dark night rises',
//         year: 2012,
//         rate: 8.4,
//     }
//     console.log(movie.title);
//     console.log(movie.year);
//     console.log(movie.rate);
//     console.log(movie.director);

//     }
//     //cach2:
//     {
//     let movie = {
//         title: 'The dark night rises',
//         year: 2012,
//         rate: 8.4,
//     }
//     console.log(movie['title']);
//     console.log(movie['year']);
//     console.log(movie['rate']); 
//     }
//     // Log an non-existent property of the movie, director, what is the result?
//     // result: undefined     
// }
// //read2:
// {
//     let list = ['Sport', 'LOL', 'BTS'];
//     for(let i = 0; i <list.length; i++){
//         list[i]=list[i].toUpperCase();
//         console.log(list[i]);
//     }
// }
// //read3:
// {
//     let movie = {
//         title: 'The dark night rises',
//         year: 2012,
//         rate: 8.4,
//     }
//     let x = prompt('what you want to know?');
//     if(x == null || x== undefined){
//         alert("does not exist in  our data");
//     }
//     else{
//         switch(x){
//             case 'title':
//                 alert('The dark night rises');
//                 break;
//             case 'year':
//                 alert('2012');
//                 break;
//             case 'rate':
//                 alert('8.4')
//                 break;        
//         }
//     }
// }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//UpdateEX:
//Update1:
// {
//     let movie = {
//         title: 'The dark night rises',
//         year: 2012,
//         rate: 8.4,
//     }
//     movie.rate = 8.7;
//     console.log(movie);
//     movie.rate+=0.5;
//     console.log(movie);
// }
// //Update2:
// {
// let movie = {
//     title :'The dark ninght rises ',
//     year : 2013 ,
//     rate : 8.4,
// }
// let x = prompt(' What you do want to update?');
//  let y = prompt('What is the update ?');
//  if(x != null || x != undefined ){
//      switch(x){
//         case 'title' :
//             movie.title = y;
//             console.log(movie);
//             break; 
//         case 'year':
//             movie.year = y;
//             console.log(movie);
//             break;
//         case 'rate':
//             movie.rate = y;
//             console.log(movie);
//             break;
//      }

         
//      }
// }     
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//CreateEx:
// {
//     let movie = {
//         title: 'The dark night rises',
//         year: 2012,
//         rate: 8.4,
//     }
//     let x = prompt('What you want to update?');
//     if(x!='title' || x!='year' || x!='rate'){
//         alert(x+' does  not exist in our data, we will add new');
//         let y = prompt('Enter the new data');
//         movie[x]=y;
//     }
//     console.log(movie);
// }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ArrayofObjectsEx:
//AfO1:
// {
//     let movie1 = {
//         title: 'The dark night rises',
//         year: 2012,
//         rate: 8.4,
//     }
//     let movie2 = {
//         title: 'Batman',
//         year: 2014,
//         rate: 7.0,
//     }
//     let movie3 = {
//         title: 'Endgame',
//         year: 2018,
//         rate: 8.5,
//     }
//     let movieArr = [];
//     movieArr.push(movie1);
//     movieArr.push(movie2);
//     movieArr.push(movie3);
//     console.log(movieArr);
//     console.log(movieArr[0]);
//     console.log(movieArr[2].title);
//     for(let i=0; i<movieArr.length; i++){
//        console.log(movieArr[i]);
//     }
//     for(let i=0; i<movieArr.length; i++){
//         console.log(movieArr[i].title);
//         console.log(movieArr[i].year);
//         console.log(movieArr[i].rate);
//         console.log('--------------------------------');
//      }
//      movieArr[2].rate+=0.7;
//      console.log(movieArr[2]);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// objectsCOntainingArrayEx:
// {
//     let movie = {
//         title: 'Endgame',
//         year: 2018,
//         rate: 8.5,
//         character: ['Captain America ', 'Iron Man ', ' Thor '],
//     }
//     console.log(movie.title);
//     console.log('year: '+movie.year);
//     console.log('rate: '+movie.rate);
//     let string = "";
//     for(let i=0; i<movie.character.length; i++){
//         string +=movie.character[i];
//     }
//     console.log('character: '+string);
//     console.log('--------------------------------------------------------------')
//     {
//     movie.character.push('doctor strange');
//     console.log(movie.title);
//     console.log('year: '+movie.year);
//     console.log('rate: '+movie.rate);
//     let string = "";
//     for(let i=0; i<movie.character.length; i++){
//         string +=movie.character[i];
//     }
//     console.log('character: '+string);
//     }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Object and Array  mix structure

// {
//        let movie1 = {
//         title: 'Mind Hunter',
//         year: 2012,
//         rate: 8.4,
//         character: [' X ', ' Y ', ' Z ']
//     }
//     let movie2 = {
//         title: 'Batman',
//         year: 2014,
//         rate: 7.0,
//         character: [' A ', ' B ', ' C ']
//     }
//     let movie3 = {
//         title: 'Endgame',
//         year: 2018,
//         rate: 8.5,
//         character: [' Captain America ', ' Iron Man ', ' Thor '],
//     }
//     let movieArr = [];
//     movieArr.push(movie1);
//     movieArr.push(movie2); 
//     movieArr.push(movie3);
//     let string = "";
//     for(let i=0; i<movieArr.length; i++){
//         console.log(movieArr[i].title);
//         console.log('year: '+movieArr[i].year);
//         console.log('rate: '+movieArr[i].rate);
//     let string = "";
//         for(let j=0; j<movieArr[i].character.length; j++){
//             string +=movieArr[i].character[j];
//     }
//     console.log('character: '+string);
//     console.log('-----------------------------------------------------------')
//     } 
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//OptionalEx:
// {
//     let x1 = {
//         popularity: 512.119,
//             vote_count: 460,
//             video: false,
//             poster_path: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
//             id: 475557,
//             adult: false,
//             backdrop_path: "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
//             original_language: "en",
//             original_title: "Joker",
//             genres: [
//                 80,
//                 18,
//                 53
//             ],
//             title: "Joker",
//             vote_average: 8.8,
//             overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
//             release_date: "2019-10-04"
//     }
//     let x2 = {
//         popularity: 241.402,
//         vote_count: 598,
//         video: false,
//         poster_path: "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
//         id: 429203,
//         adult: false,
//         backdrop_path: "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
//         original_language: "en",
//         original_title: "The Old Man & the Gun",
//         genres: [
//             35,
//             80,
//             18
//         ],
//         title: "The Old Man & the Gun",
//         vote_average: 6.3,
//         overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
//         release_date: "2018-09-28"
//     }
//     let x3 = {
//         popularity: 233.735,
//         vote_count: 4139,
//         video: false,
//         poster_path: "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
//         id: 429617,
//         adult: false,
//         backdrop_path: "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
//         original_language: "en",
//         original_title: "Spider-Man: Far from Home",
//         genres: [
//             28,
//             12,
//             878
//         ],
//         title: "Spider-Man: Far from Home",
//         vote_average: 7.6,
//         overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
//         release_date: "2019-07-02"
//     }
//     let x4 = {
//         popularity: 158.333,
//             vote_count: 323,
//             video: false,
//             poster_path: "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
//             id: 522938,
//             adult: false,
//             backdrop_path: "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
//             original_language: "en",
//             original_title: "Rambo: Last Blood",
//             genres: [
//                 28,
//                 53
//             ],
//             title: "Rambo: Last Blood",
//             vote_average: 6.1,
//             overview: "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
//             release_date: "2019-09-20"
//     }
//     let results = [];
//     results.push(x1);
//     results.push(x2);
//     results.push(x3);
//     results.push(x4);
//     for(let i=0; i<results.length; i++ ){
//         console.log(results[i]);
//     }
//     console.log('-------------------------------------')
//     console.log('The movie count: '+results.length);
//     console.log('-------------------------------------')
//     console.log('popularity: '+results[0].popularity);
//     console.log('vote count: '+results[0].vote_count);
//     console.log('video: '+results[0].video);
//     console.log('poster path: '+results[0].poster_path);
//     console.log('id: '+results[0].id);
//     console.log('adult: '+results[0].adult);
//     console.log('backdrop path: '+results[0].backdrop_path);
//     console.log('original language: '+results[0].original_language);
//     console.log('original title: '+results[0].original_title);
//     console.log('genres: '+results[0].genres);
//     console.log('title: '+results[0].title);
//     console.log('vote average: '+results[0].vote_average);
//     console.log('overview: '+results[0].overview);
//     console.log('release date: '+results[0].release_date);
//     console.log('-------------------------------------')
//     for(let i=0; i<results.length; i++ ){
//         console.log('popularity: '+results[i].popularity);
//         console.log('vote count: '+results[i].vote_count);
//         console.log('video: '+results[i].video);
//         console.log('poster path: '+results[i].poster_path);
//         console.log('id: '+results[i].id);
//         console.log('adult: '+results[i].adult);
//         console.log('backdrop path: '+results[i].backdrop_path);
//         console.log('original language: '+results[i].original_language);
//         console.log('original title: '+results[i].original_title);
//         console.log('genres: '+results[i].genres);
//         console.log('title: '+results[i].title);
//         console.log('vote average: '+results[i].vote_average);
//         console.log('overview: '+results[i].overview);
//         console.log('release date: '+results[i].release_date);
//     console.log('-------------------------------------')
//     }
// }