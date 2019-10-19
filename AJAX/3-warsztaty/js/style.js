// let jsonObj = {
//     id: 108,
//     name: "Hans",
//     sex: "male",
//     hobby: ["pływanie", "czytanie", "śpiewanie", "programowanie"],
//     friends: [
//         {
//             id: 109,
//             name: "Ewa",
//             sex: "female",
//             hobby: ["czytanie", "jedzenie", "spanie"]
//         },
//         {
//             id: 110,
//             name: "Jaś",
//             sex: "male",
//             hobby: ["programowanie", "imprezowanie", "śpiewanie"]
//         },
//         {
//             id: 111,
//             name: "Marcin",
//             sex: "male",
//             hobby: ["śpiewanie", "podróżowanie", "programowanie"]
//         }
//     ],
// };

// jsonObj.hobby.forEach(function(hobbyElement) {
//     // console.log(hobbyElement);
// });

// jsonObj.friends.forEach(function (friendElement) {
//     console.log(friendElement);

//     // for in do iteracji po polach obiektów
//     for(let friendProperty in friendElement) {
//         console.log();
//         console.log(`${friendProperty}: ` + friendElement[friendProperty]);
//     }

//     // for of do iteracji po tablicach :)
//     for(let hobbyElement of friendElement.hobby) {
//         console.log(hobbyElement);
//     }
// ;});


let pUserId = document.createElement('p');
            let pUserName = document.createElement('p');
            let pUserURL = document.createElement('p');

            pUserId.innerHTML = "User ID: " + response[i].id;
            pUserName.innerHTML = "User Name: " + response[i].name;
            pUserURL.innerHTML = "User URL: http://" + response[i].website + "<br>--------";

            document.body.appendChild(pUserId);
            document.body.appendChild(pUserName);
            document.body.appendChild(pUserURL);



let konieclicznika = 0;

window.onscroll =function(){

    let d = document.documentElement;

    //wysokość wnętrza okna przeglądarki
    let innerHeight = window.innerHeight;

    //długość całej strony od góry do dołu
    let offsetHeight = d.offsetHeight;
    
    //wysokość na jaką przeskrolowaliśmy
    let scrollTop = d.scrollTop;

    let sumScrollTopInnerHeight = Math.ceil(scrollTop + innerHeight);

    console.log(offset: ${offsetHeight})

    console.log("scrollTop + innerHeight: " + sumScrollTopInnerHeight);

    if(sumScrollTopInnerHeight >= offsetHeight) {
        konieclicznika += 1;

        console.log("Dojdziono doo końca razy: " + konieclicznika);
        }
};