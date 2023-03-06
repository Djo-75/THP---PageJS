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