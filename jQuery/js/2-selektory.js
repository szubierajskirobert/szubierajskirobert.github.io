//pobieranie elementów po znaczniku
var paragraphs = $('p');
console.log(paragraphs);

let allElements = $('*');
console.log(allElements);

//używamy let i zmennych lokalnych, globalnych tylko jak musimy

let srcAtrybut = $('[src]'); //wyszukiwanie po atrybucie
console.log(srcAtrybut);