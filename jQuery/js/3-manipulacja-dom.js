jQuery(document).ready(function(){

    //pobieranie tekstu
    let teksParagrafuPierwszego = $('#paragraf').text();
    console.log(teksParagrafuPierwszego);

    //dodawanie tekstu
    $(".paragraf").eq(1).text('Ala ma kota'); //eq(index) mamy 2 elementy pobieramy pierwszy

    //dodanie htmla strong
    $(".paragrafnext").html('Ala ma kota <strong>grubego</strong>');

    //dodawanie treści na końcu selektora
    $(".paragrafnext").append ("Treść na końcu selektora");

    //dodawanie treści na początku selektora
    $(".paragrafnext").prepend ("Treść na początku selektora");

    //dodawanie treści na przed selektorem
    $(".paragrafnext").before ("Treść na przed selektorem");

    //dodawanie treści na po selektorze
    $(".paragrafnext").after ("Treść na po selektorze");

    //usuwanie elementu i jego zawartości
   $("strong").remove();

    //usuwanie tylko jego zawartości
    $(".paragraf").empty();

    //dodanie właściwości css
    $(".paragrafnext").css("color", "blue"); //jedną
    $(".paragrafnext").css({'font-size': '3em', "color": "red"}); //kilka i wygląda jak json

    //pobranie value elementu
    $('input#imie').val("Krystian");

    //dodawanie klas
    $('h1').addClass('blue');
});

