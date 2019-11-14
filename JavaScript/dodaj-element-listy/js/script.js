// let lastLif = document.getElementById("items").lastElementChild.innerHTML

let lastLif = document.getElementById("items").childElementCount;

function addLif(n){
    let newLif = document.createElement("li");
    document.getElementById("items").appendChild(newLif).setAttribute("class", "item");
    document.getElementById("items").lastChild.innerText = `Item ${lastLif+1}`;
    lastLif = document.getElementById("items").childElementCount;
};

// document.getElementsByTagName("button").setAttribute("onClick", "addLif");

document.getElementById("items").nextElementSibling.addEventListener("click", addLif);

// document.getElementsByTagName("button").addEventListener("click", addLif(lastLif));

// document.getElementsByTagName("button").onclick = addLif(lastLif);

// document.getElementById("btn").onclick = addLif(lastLif);

// document.getElementsByTagName("button").onClick = addLif(lastLif);

console.log(lastLif);