const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let napis = document.querySelector('[name=note]').value;

    let napisTab = napis.split('');
    let napisRev = napisTab.reverse('');
    let napisStr = napisRev.join('');

    console.log(`Tekst odwrócony: ${napisStr}`);
});



//inny sposób
// 'use strict';

// function reverseString(inscription){
//   console.log('Wprowadzony napis : ' + inscription );
//   var inscriptionArray = inscription.split('');
  
// var inscriptionArrayReversed =[inscriptionArray.length] ;

// for(var i=0 ; i < inscriptionArray.length ; i++){
//     inscriptionArrayReversed[(inscriptionArray.length-1)-i]=inscriptionArray[i];
//   }
  
//    var inscriptionReversed = inscriptionArrayReversed.join('');
//    return inscriptionReversed ;
// }

// var reversedString =reverseString('Akademia108');

// console.log('Napis Odwrócony : ' + reversedString);