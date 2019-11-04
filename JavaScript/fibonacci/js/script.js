let wyraz = prompt("Który wyraz ciągu Fibonacciego mam wyznaczyć?");

function fibonacci(n){
    let fib = [1,1];
    for(let i=2 ; i<n ; i++ ){
        fib[i]=fib[i-2]+fib[i-1];
    };
    return fib[n-1];
};

let wynik = fibonacci(wyraz);

console.log(`Wyraz o numerze ${wyraz} to ${wynik}`);