const samochody = [
    'Honda',
    'Fiat',
    'Citroen',
    'Mazda',
    'Audi'
];



// dodajemy na końcu tablicy
samochody.push('BMW', 'Porshe');

// dodajemy na początku
samochody.unshift('Dacia', "Skoda");

//usuwamy z końca i zwracamy usunięty element do zmiennej
let usunietyZKonca = samochody.pop();

//usuwamy z początku tablicy i zwracamy usunięty element do zmiennej
let usunietyZPoczatku = samochody.shift();

//usuwamy z konca tablicy 3 elementy i zwracamy usunięty element do zmiennej
let usunietyZKonca3 = samochody.splice(samochody.length - 3);

//zmiana tablicy na string
let tekstZTablicy = samochody.join(' ====== ');

//zmiana stringa na tablicę
let tablicaZeStringa = tekstZTablicy.split(' ====== ');

//odwrócenie tablicy
let odwroconaTablica = samochody.reverse();

//posortowana tablica
let posortowana = samochody.sort();

//sprawdzam czy element istnieje w tablicy (0 - istnieje, -1 jeśli nie istnieje)
let czyIstniejeWTablicy = samochody.indexOf('Citroen');

//sprawdzam czy element istnieje w tablicy (true or false)
let czyIstniejeWTablicy2 = samochody.includes('Polonez');

//sprawdzam czy zmienna jest tablicą
let czyTablica = Array.isArray(samochody);

//metoda do "przechodzenia" po wszystkich elementach tablicy
samochody.forEach(function(elementTablicy, indexTablicy, tablica){
    console.log(`Wartość elementu: ${elementTablicy} | index elementu: ${indexTablicy}`);
});

console.log(samochody, samochody.length);
console.log(`usuniety element z konca to: ${usunietyZKonca}`);
console.log(`usuniety element z Poczatku to: ${usunietyZPoczatku}`);
console.log(`usuniet3 3 elementy z konca to: ${usunietyZKonca3}`);
console.log(`Tekst z tablicy: ${tekstZTablicy}`);
console.log(`Tablica z tekstu: ${tablicaZeStringa}`);
console.log(`Odwrocona tablica: ${odwroconaTablica}`);
console.log(`Posortowana tablica: ${posortowana}`);
console.log(czyIstniejeWTablicy);
console.log(czyIstniejeWTablicy2);
console.log(czyTablica);