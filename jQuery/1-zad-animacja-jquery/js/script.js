$(function(){
    'use strict';


    $('button').click(function(){

        function zakonczona(){
            $('div').html('<h2>Animacja zakońcona</h2>')
            console.log('callback2');
        };

        function zakAnimacji(){
            $('div').animate({'background-color': 'blue'}, 5000, zakonczona);
            console.log('callback');
        };

        $('div').animate({'margin-left': '100px', 'width': '100px', 'height': '100px'}, 3000, zakAnimacji);

    });


});