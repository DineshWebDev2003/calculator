



function display(val) {
    document.getElementById("result").value += val;
}

function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
}

function clr() {
    document.getElementById("result").value = "";
}

function root() {
    let x = document.getElementById("result").value;
    let y = Math.sqrt(x);
    document.getElementById("result").value = y;
}

let clear = document.querySelector(".clear");
clear.addEventListener("click", clr);

let rootBtn = document.querySelector(".root");
rootBtn.addEventListener("click", root);



