$(function(){
    'use strict';

    //podpinanie pojedynczego zdarzenia na paragrafie
    $('p').click(function(){
        $(this).css("color", "orange");
    });

    //inny zapis
    // function podczasKliku(){
    //     $(this).css("color", "orange");
    // }

    // $('p').click(podczasKliku);

    //podpinanie kilku zdarzeń
    $('h1').on({
        'click': function(){
            $(this).css("color", "orange");
        },

        'mouseleave': function(){
            $(this).css("color","inherit");
        }
    });
});