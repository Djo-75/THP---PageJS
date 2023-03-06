// Feature 1

var feature1 = document.querySelector("footer")
    console.log(feature1)

var clique = function() {
    console.log("clique");}

feature1.addEventListener("click", clique)

// Feature 1 bis

let counter = 0

var feature1 = document.querySelector("footer")
    console.log(feature1)

var clique = function() {
    console.log(`clic numéro ${++counter}`)
}

feature1.addEventListener("click", clique)

// Feature 2

var navbar_burger = document.querySelector(".navbar-toggler");
console.log(navbar_burger);

var onClickBtn = function () {
    let class_to_toggle = document.getElementById("navbarHeader");
    console.log(class_to_toggle);
    class_to_toggle.classList.toggle("collapse");
};

navbar_burger.addEventListener("click", onClickBtn);

// Feature 3

// var card = document.getElementsByClassName("card mb-4 box-shadow")[0]
var card = document.querySelector("body > main > div > div > div > div:nth-child(1) > div");

console.log(card);

// var edit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]
var edit = card.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");

console.log(edit)

edit.style ="color: red"

// Feature 4

