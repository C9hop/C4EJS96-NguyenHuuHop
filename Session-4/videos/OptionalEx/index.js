//OptionalEx:
{
    let x1 = {
        popularity: 512.119,
            vote_count: 460,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            id: 475557,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/f5F4cRhQdUbyVbB5lTNCwUzD6BP.jpg",
            original_language: "en",
            original_title: "Joker",
            genres: [
                80,
                18,
                53
            ],
            title: "Joker",
            vote_average: 8.8,
            overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
            release_date: "2019-10-04"
    }
    let x2 = {
        popularity: 241.402,
        vote_count: 598,
        video: false,
        poster_path: "https://image.tmdb.org/t/p/w500/a4BfxRK8dBgbQqbRxPs8kmLd8LG.jpg",
        id: 429203,
        adult: false,
        backdrop_path: "https://image.tmdb.org/t/p/w500/6X2YjjYcs8XyZRDmJAHNDlls7L4.jpg",
        original_language: "en",
        original_title: "The Old Man & the Gun",
        genres: [
            35,
            80,
            18
        ],
        title: "The Old Man & the Gun",
        vote_average: 6.3,
        overview: "The true story of Forrest Tucker, from his audacious escape from San Quentin at the age of 70 to an unprecedented string of heists that confounded authorities and enchanted the public. Wrapped up in the pursuit are a detective, who becomes captivated with Forrest’s commitment to his craft, and a woman, who loves him in spite of his chosen profession.",
        release_date: "2018-09-28"
    }
    let x3 = {
        popularity: 233.735,
        vote_count: 4139,
        video: false,
        poster_path: "https://image.tmdb.org/t/p/w500/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
        id: 429617,
        adult: false,
        backdrop_path: "https://image.tmdb.org/t/p/w500/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
        original_language: "en",
        original_title: "Spider-Man: Far from Home",
        genres: [
            28,
            12,
            878
        ],
        title: "Spider-Man: Far from Home",
        vote_average: 7.6,
        overview: "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
        release_date: "2019-07-02"
    }
    let x4 = {
        popularity: 158.333,
            vote_count: 323,
            video: false,
            poster_path: "https://image.tmdb.org/t/p/w500/kTQ3J8oTTKofAVLYnds2cHUz9KO.jpg",
            id: 522938,
            adult: false,
            backdrop_path: "https://image.tmdb.org/t/p/w500/spYx9XQFODuqEVoPpvaJI1ksAVt.jpg",
            original_language: "en",
            original_title: "Rambo: Last Blood",
            genres: [
                28,
                53
            ],
            title: "Rambo: Last Blood",
            vote_average: 6.1,
            overview: "When John Rambo's niece travels to Mexico to find the father that abandoned her and her mother, she finds herself in the grasps of Calle Mexican sex traffickers. When she doesn't return home as expected, John learns she's crossed into Mexico and sets out to get her back and make them pay.",
            release_date: "2019-09-20"
    }
    let results = [];
    results.push(x1);
    results.push(x2);
    results.push(x3);
    results.push(x4);
    for(let i=0; i<results.length; i++ ){
        console.log(results[i]);
    }
    console.log('-------------------------------------')
    console.log('The movie count: '+results.length);
    console.log('-------------------------------------')
    console.log('popularity: '+results[0].popularity);
    console.log('vote count: '+results[0].vote_count);
    console.log('video: '+results[0].video);
    console.log('poster path: '+results[0].poster_path);
    console.log('id: '+results[0].id);
    console.log('adult: '+results[0].adult);
    console.log('backdrop path: '+results[0].backdrop_path);
    console.log('original language: '+results[0].original_language);
    console.log('original title: '+results[0].original_title);
    console.log('genres: '+results[0].genres);
    console.log('title: '+results[0].title);
    console.log('vote average: '+results[0].vote_average);
    console.log('overview: '+results[0].overview);
    console.log('release date: '+results[0].release_date);
    console.log('-------------------------------------')
    for(let i=0; i<results.length; i++ ){
        console.log('popularity: '+results[i].popularity);
        console.log('vote count: '+results[i].vote_count);
        console.log('video: '+results[i].video);
        console.log('poster path: '+results[i].poster_path);
        console.log('id: '+results[i].id);
        console.log('adult: '+results[i].adult);
        console.log('backdrop path: '+results[i].backdrop_path);
        console.log('original language: '+results[i].original_language);
        console.log('original title: '+results[i].original_title);
        console.log('genres: '+results[i].genres);
        console.log('title: '+results[i].title);
        console.log('vote average: '+results[i].vote_average);
        console.log('overview: '+results[i].overview);
        console.log('release date: '+results[i].release_date);
    console.log('-------------------------------------')
    }
}