//a
document.addEventListener("DOMContentLoaded", function(){
const conntainer = document.getElementById('list');
for(let i=0; i<3; i++){
    conntainer.insertAdjacentHTML('beforebegin', `<li>${i}</li>`)
    conntainer.insertAdjacentHTML('afterbegin', `<li>${i}</li>`)
    conntainer.insertAdjacentHTML('beforeend', `<li>${i}</li>`)
    conntainer.insertAdjacentHTML('afterend', `<li>${i}</li>`)
}
})
