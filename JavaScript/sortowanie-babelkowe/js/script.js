let tab=[12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

function bubbleSort(tablica){
    let n = tablica.length;
    for(let i=0 ; i<n ; i++){
        for(let j=n-1 ; j>=1 ; j--){
            if(tablica[j-1]>tablica[j]){
                let bufor = tablica[j-1];
                tablica[j-1]=tablica[j];
                tablica[j]=bufor;
            }
        }
    }
}

bubbleSort(tab);

console.log(`Tablica posortowana: ${tab}`);