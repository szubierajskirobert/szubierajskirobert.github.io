$(function(){
    $('#btn1').click(function(){
        let ostatni = $('p:last');

        $('p:first').before(ostatni);
    });

    $('#btn2').click(function(){
        let pierwszy = $('p:first');

        $('p:last').after(pierwszy);
    });

});