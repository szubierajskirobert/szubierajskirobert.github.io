let kolekcjaKsiazek = [];

class Ksiazka{
    constructor(tytul,autor,przeczytana){
        this.tytul=tytul;
        this.autor=autor;
        this.przeczytana=przeczytana;
    }

    opiszKsiazke(){
        console.log(`Książka ma tytuł ${this.tytul}, autorem jest ${this.autor}`);
    }

}

let ksiazka1 = new Ksiazka(
    'Lalka',
    'Bolesław Prus',
    false,
);

let ksiazka2 = new Ksiazka(
    'Potop',
    'Henryk Sienkiewicz',
    false,
);

let ksiazka3 = new Ksiazka(
    'Wiedźmin',
    'Andrzej Sapkowski',
    true,
);

kolekcjaKsiazek.push(ksiazka1);
kolekcjaKsiazek.push(ksiazka2);
kolekcjaKsiazek.push(ksiazka3);


function iloscPrzeczytanych(tabObj){
    
    let licznik = 0;
    tabObj.forEach(element => {
        element.opiszKsiazke();        
        if(element.przeczytana == true){
            licznik++;
            console.log(` i została przeczytana.`);
        }else{
            console.log(` i nie została przeczytana.`);
        }
    });
    return console.log(`Ilość przeczytanych książek to: ${licznik}`);
}

console.log(kolekcjaKsiazek);

iloscPrzeczytanych(kolekcjaKsiazek);