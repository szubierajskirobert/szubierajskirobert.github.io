// alert('Akademia 108');
// console.log('Akademia108');
let name = 'Jan Nowak';
console.log(name);

let number = 2;

if(number===2){
    console.log('Spelniony warunek: number==2');
}else if(number===3){
    console.log('Spelniony warunek: number==3');
}else{
    console.log('Zaden z powyzszych warunkow NIE jest spelniony');
}

let num1=2;
let num2=3;

function multiply(num1, num2){
    let result=num1*num2;
    return result;
}
let result1=multiply();
console.log(result1);

let myHeading = document.querySelector('h1');
myHeading.textContent = 'Akademia 108';