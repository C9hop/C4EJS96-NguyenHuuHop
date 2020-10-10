const API = 'https://sheetdb.io/api/v1/o0welh13cv0f2';
fetch(API)
    .then(respon => respon.json())
    .then(json => console.log(json))