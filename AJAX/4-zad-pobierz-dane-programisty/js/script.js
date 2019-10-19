function getData(event){
    console.log('Działa');

    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
    .then(response => response.json())
    .then(response=>{
        console.log(response);

        let resp = response;
    
    let pUser = document.createElement('p');
    let txtUsr = document.createTextNode(resp);
    let display = document.getElementById('dane-programisty');

    pUser.appendChild(txtUsr);
    display.appendChild(pUser);

    // console.log(pUser);

    document.getElementById('dane-programisty').innerHTML=resp.imie + ', ' + resp.nazwisko + ', ' + resp.zawod + ', ' + resp.firma;

    });
   
};

document.getElementById('button').addEventListener('click', getData);