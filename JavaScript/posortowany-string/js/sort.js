let napis = prompt("Podaj tekst");

// console.log(`Podałeś: ${napisStr}`);

function sortuj(tekst){
    let napisTab = tekst.split('');
    let napisSort = napisTab.sort();
    let napisStr = napisSort.join('');
    return napisStr;
};

let posortowany = sortuj(napis);

console.log(`Tekst posortowany: ${posortowany}`);