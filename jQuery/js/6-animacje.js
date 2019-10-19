$(function(){
    'use strict';

    //efekt hide i show
    $('p').hide(3000).show(3000);

    //pojawia się i znika
    $('h1').fadeOut(3000).fadeIn(3000);

    //przejeżdżanie
    $('h2').slideDown(3000);

    //efekt animacji z funkcją zwrotną animacja
    // function koniecAnimacji(){
    //     console.log('zakończono pierwszą animację, zaraz startuje druga :)');

    //     $('h3').animate({'font-size': '3em', 'margin-left': '0px'}, 2000);
    // }

    // $('h3').animate({'font-size': '3em', 'margin-left': '100px'}, 2000, koniecAnimacji);

    function koniecAnimacji(){
        console.log('zmieniam kolor tła');

        $('h3').animate({'background-color': 'red', 'color': 'blue'}, 2000);
    }

    $('h3').animate({'font-size': '3em'}, 2000, koniecAnimacji);
  
});