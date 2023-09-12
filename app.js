let input = document.querySelector("input");
let unorderList = document.querySelector("ul");
let btn = document.querySelector("button");


btn.addEventListener("click", function () {

    let items = document.createElement("li");
    items.innerText = input.value;

    let delbtn = document.createElement("button");
    delbtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    delbtn.classList.add("delete");
    items.appendChild(delbtn);

    unorderList.appendChild(items);
    input.value = "";
}
);

unorderList.addEventListener("click", (event) => {
    console.dir(event.target);
    console.dir(event.target.parentElement);
    if (event.target.nodeName == "I") {
        let a = event.target.parentElement;
        a.parentElement.remove();
        console.log("delete");
    }
})


let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    setInterval(() => {
        h1.style.color = color;
    }, delay);
}
changeColor("blue", 1000);
changeColor("rgb(206, 68, 4)", 2000);
