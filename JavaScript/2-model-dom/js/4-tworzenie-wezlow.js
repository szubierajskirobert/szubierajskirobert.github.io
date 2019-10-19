//tworzenie węzłów

let counter = 0;
let timer = setInterval(() => {
    if(counter == 3){
        clearInterval(timer);
        return;
    }
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', 'css/style.css');
document.head.appendChild(link);

const p = document.createElement('p');
const pText = document.createTextNode(`Nowy akapit cos cos cos ${++counter}`);
p.appendChild(pText);
document.querySelector('#section-first').insertAdjacentElement('afterbegin', p);
document.querySelector('#section-first').insertAdjacentElement('afterbegin', `<h1>Nowy tytul tralalala</h1>`);

}, 1600);

//function() | () =>

setTimeout(() => {
    const h1 = document.querySelector('#main-header');
    h1.parentElement.removeChild(h1);
}, 2000);