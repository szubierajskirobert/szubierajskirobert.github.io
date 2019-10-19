$(function () {
    let button = $("#button");
    button.click(function () {
        console.log("działa klik")
        $.getJSON(
            "https://jsonplaceholder.typicode.com/users/1",
            function (data){
                console.log(data);
                let print = data;
            

                $("#display").append("<p>" + print.id + 'Nazwa uzytkownika: ' + print.name + ', E-mail: ' + print.email + "</p>")
            }
        )
    })
});