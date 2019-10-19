const btn = document.getElementById('przycisk');
const p = document.getElementsByTagName('p');

// const colors = [
//     'red',
//     'yellow'
// ];

const ustawTlo = () => {
    p[0].classList.add('kolor1');
    p[1].classList.add('kolor2');
    // [...p].forEach((Element), index) => {
    //     element.style.backgroundColor = colors[index];
    // }
}



btn.addEventListener('click', ustawTlo);