const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let imie = document.querySelector('[name=fname]').value;
    let nazwisko = document.querySelector('[name="lname"]').value;
    console.log(imie, nazwisko);
});