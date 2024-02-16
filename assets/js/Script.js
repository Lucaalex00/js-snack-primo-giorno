//ESERCIZIO 1 ---> Number Value

let number = 100;
console.log(number);

//ESERCIZIO 2 ---> Number Value

const PI = 3.14;
console.log(PI);

//ESERCIZIO 2B ---> ERROR Value
/*
PI = 3.1416                                     
console.log(PI)
*/

//ESERCIZIO 2C ---> Number Value

let radius = 8;
let circle = (radius * 2) * PI
console.log(circle)

//ESERCIZIO 2C ---> String Value

let name = "Carlo"
name = "Marco"
console.log(name)

// IN QUESTA SCHERMATA "NAME" Rinominata la seconda volta risulta deprecata
// Causa variabile globale con speciali utilizzi.

//SOLUZIONE BONUS

!(function () {
    let name = "Carlo"
    name = "Marco"
    name = "Fabio Pacifici"
    console.log(name)
})()

