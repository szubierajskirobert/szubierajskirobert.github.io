$(function(){

    const colors = [
        "#ccff33",
        "#9966ff",
        "#ffcc99",
        "#66ff66",
        "#1a53ff",
        "#996633"
    ];

    let iter=0;

    function changeBckColor(){
        $('body').css({background: 'red'});
        iter++;
    }


    $('#btn').click(changeBckColor(){
        // let ostatni = $('p:last');
        
        // $('p:first').before(ostatni);
    });
});