function wyswietlZUsmiechem(imie) {
    console.log(`${imie} :)`)
}

function przekazImie(przekazywaneImie) {

    return przekazImieZeZgrzytem(przekazywaneImie);
}

function przekazImieZeZgrzytem(poProstuImie) {

    return `${poProstuImie} :/`
}

let imie = "Janek";

let przekazaneImie = przekazImie(imie);
wyswietlZUsmiechem(przekazaneImie);

let przekazaneImieZeZgrzytem = przekazImieZeZgrzytem(przekazaneImie);
wyswietlZUsmiechem(przekazaneImieZeZgrzytem);