$(function(){

    

    let formPizzaOrder = $('#pizzaOrder');
    
    let inputName = $('#name');

    let inputSurname = $('#surname');

    let inputStreet = $('#street');

    let inputHomeNr = $('#homeNr');

    let inputCode = $('#code');

    let inputCity = $('#city');

    let selectPizza = $('#pizzaKind');

    let spanPrice = $('#price');

    let inputTomato = $('#tomato');

    let inputGarlic = $('#garlic');

    let inputRodo = $('#rodo');

    

    let pizzaPriceTable = [
        {value: 1, price: 22}, //Dlaczego w klamrach? Bo to tablica objektów json?
        {value: 2, price: 23},  
        {value: 3, price: 24},  
        {value: 4, price: 25}
    ];

    selectPizza.change(function(){  //change bo to event zmiana? A jaka funkcja jest parametrem?
        let pizzaPrice = 0;

        selectPizza = $(this).val();    //przypisujemy aktualnie wybraną wartość z option 0-4 do zm selectPizza? Metoda val() zwróci nam value z pola formularza?
        // console.log("zmiana pizzy na " + selectPizza);

        if(selectPizza == 0){
            spanPrice.text('0 PLN');    //metoda text() ustawia wartość tekstową
            return;
        }

        pizzaPriceTable.forEach(function(tableElement){ //przechodzimy po tablicy pizzaPriceTable
            if(selectPizza == tableElement.value){ //porównujemy wartość liczbową w select pizza z wartością liczbową w tablicy. Jest .value na table element bo to już nie jest funkcja tylko pole tablicy.
                spanPrice.text(tableElement.price + 'PLN'); //metoda text ustawia wartość tekstową w span na price z tablicy + PLN
                return;
            }
        });
    });

    formPizzaOrder.submit(function(){
        
        errors.empty();

        let errorsArray = [];

        if($.trim(inputName.val()) == ""){
            errorsArray.push('Uzupełnij pole: Imie');
        }        
        
        if($.trim(inputSurname.val()) == ""){
            errorsArray.push('Uzupełnij pole: Nazwisko');
        }

        if(errorsArray.length !=0 ){
            return false;
        }
        
        console.log(errorsArray);

        return false;
        

        

        
    });
   
    
});