$(function(){
    'use strict';

    //wybieranie elementu z kolekcji za pomocą metpdy eq()
    $('body').find('p').eq(1).css({'color': 'green'});

    //foreach
    $('p').each(function(index){
        $(this).addClass('paragraf-' + index);
        console.log(jQuery(this));
    });
});