const tab = [0,1,2,3,4,5];

function kwadratyLiczb(tablica){
    let iloczyn = 0;
    let kwadraty = [];
    for(let i=0 ; i<=tablica.length-1 ; i++){
        iloczyn = Math.pow(tablica[i],2);
        kwadraty.push(iloczyn);
        iloczyn = 0;
    }
    // console.log(`Iloczyn liczb = ${iloczyn}`);

    let suma = 0;
    for(let i=0 ; i<=kwadraty.length-1 ; i++){
        suma += kwadraty[i];
    }
    console.log(`Suma kwadratow liczb = ${suma}`);
};    

kwadratyLiczb(tab);