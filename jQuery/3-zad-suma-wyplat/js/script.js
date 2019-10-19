$(function(){

    $('#count-sum').click(function(){

        let suma = 0;
                
        // tabwyplat.push($('span.salary').text());
        //     console.log(tabwyplat);

            // $('span.salary').text();

            // $('p').each(function(index){
            //     $(this).addClass('paragraf-' + index);
            //     console.log(jQuery(this));
            // });

            $('span.salary').each(function(index){

                // console.log($('span.salary').text());
                
                suma += parseInt($(`#person${index+1}`).find('span.salary').html());
                
                // console.log(suma);
            });

            console.log(suma);
            $('#sum').text(suma);



            // suma = $('#person3').find('span.salary').html();

                // console.log($('span.salary').text());
                // suma = $('span.salary').html();
                // console.log(suma);

            
    });




});