let psy = [];

class pies{
    constructor(imie, rasa, masc, wiek, plec){
        this.imie = imie;
        this.rasa = rasa;
        this.masc = masc;
        this.wiek = wiek;
        this.plec = plec;
    }

    wyswietlInfo(){
        document.body.insertAdjacentHTML('beforeend',`
            pies\n
            imie: ${this.imie}\n
            rasa: ${this.rasa}\n
            masc: ${this.masc}\n
            wiek: ${this.wiek}\n
            plec: ${this.plec}
            <br>        
        `);
    }
    zapiszDoBazy(){
        psy.push(this);
    }
}

let pies1 = new pies(
    'Lessie',
    'colie',
    'rudy',
    2,
    's',
);

pies1.zapiszDoBazy();

pies1 = new pies(
    'cywil',
    'wilk',
    'popielaty',
    3,
    'p'
);

pies1.zapiszDoBazy();

for(let i=0 ; i <= psy.length-1 ; i++){
    console.log(psy[i]);
}

pies1.wyswietlInfo();