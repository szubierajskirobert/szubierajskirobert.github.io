const tab = [1,2,3,4,5,6];

function sumaIiloczyn(tablica){
    let suma = 0;
    for(let i=0 ; i<=tablica.length-1 ; i++){
        suma += tablica[i];
    }
    console.log(`Suma liczb = ${suma}`);

    let iloczyn = 1;
    for(let i=0 ; i<=tablica.length-1 ; i++){
        iloczyn *= tablica[i];
    }
    console.log(`Iloczyn liczb = ${iloczyn}`);
};    

sumaIiloczyn(tab);