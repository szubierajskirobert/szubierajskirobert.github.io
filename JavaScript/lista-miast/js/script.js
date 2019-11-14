let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
let lifs = [];

let ordList = document.createElement("ol");
document.body.appendChild(ordList);

for(let i=0 ; i<cities.length ; i++){
    lifs.push(document.createElement("li"));
    ordList.appendChild(lifs[i]);
    lifs[i].setAttribute("class", "city");
    let cityName = document.createTextNode(cities[i]);
    lifs[i].appendChild(cityName);
};