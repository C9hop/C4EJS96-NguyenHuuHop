async function load() {
    const conn = await fetch('http://quotes.rest/qod.json');
    const data = await conn.json();
    console.log(data);
    let q = document.getElementById('quote')
    let a = document.getElementById('author')
    let quote = data.contents.quotes[0].quote;
    let author = data.contents.quotes[0].author;
    q.innerHTML = quote;
    a.innerHTML =author;
}
load();