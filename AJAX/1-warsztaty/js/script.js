function getData(event){
    console.log('Działa');

    fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(response=>{
        console.log(response);
        // return response;

        let resp = response;
    
    let pUser = document.createElement('p');
    let txtUsr = document.createTextNode(resp);
    let display = document.getElementById('display');

    pUser.appendChild(txtUsr);
    display.appendChild(pUser);

    console.log(pUser);

    document.getElementById('display').innerHTML=resp.name + ', ' + resp.username + ', ' + resp.email;

    });
   
};

document.getElementById('button').addEventListener('click', getData);