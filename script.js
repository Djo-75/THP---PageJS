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
var card = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > p");
console.log(card);

// var edit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]
var edit = document.querySelector("body > main > div > div > div > div:nth-child(1) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");
console.log(edit)

var onClickBtnEdit = function () {
    card.style.color = "red"
};

edit.addEventListener("click", onClickBtnEdit)

// Feature 4

var card2 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > p");
console.log(card2);

var edit2 = document.querySelector("body > main > div > div > div > div:nth-child(2) > div > div > div > div > button.btn.btn-sm.btn-outline-secondary");
console.log(edit2)

var onClickBtnEdit = function () {
    card2.style.color = "green"
};

edit2.addEventListener("click", function() {

    if (card2.style.color === 'green'){
        card2.style.color = '' ;
        }
    else {
        card2.style.color = 'green'
    }
})

// Feature 5

var navbar = document.querySelector("body > header > div.navbar.navbar-dark.bg-dark.box-shadow > div")
console.log(navbar)

var link = document.querySelector("head > link")
console.log(link)

const linkElement = document.querySelector('link[rel="stylesheet"]');

var onClickNavbar = linkElement.disabled = false;

// Disable the link element by setting its disabled property to true

navbar.addEventListener("click", function() {
    
    if (linkElement.disabled === false) {
        linkElement.disabled = true;
    }
    else {
        linkElement.disabled = false 
    }
 }
)

// Feature 6



// Feature 7



// Feature 8



// Feature 9