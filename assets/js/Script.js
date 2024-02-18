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
let circle = (radius * 2) * PI;
console.log(circle);

//ESERCIZIO 3 ---> String Value

let name = "Carlo";
name = "Marco";
console.log(name);

// IN QUESTA SCHERMATA "NAME" Rinominata la seconda volta risulta deprecata
// Causa variabile globale con speciali utilizzi.

//SOLUZIONE BONUS

!(function () {
    let name = "Carlo"
    name = "Marco"
    name = "Fabio Pacifici"
    console.log(name)
})();

//ESERCIZIO 4 ---> Number Value
let temperature = 22.5;
temperature = temperature + 5;
console.info(`the temperature is  + ${temperature}`);

//ESERCIZIO 5 ---> Comment Value

/*
COME SCRITTO NEL DOCUMENTO README.md :
La differenza sta nella parte decimale aggiuntiva al numero o no.
Spesso serve avere un numero intero e perciò si utilizzano comandi come toFixed o parseInt
*/

//ESERCIZIO 6 ---> Command value
var anInfo = "yes, im here";
let info = "Sono un informazione " + anInfo
let problema = "Sono un problema";
let allerta = "Sono un' allerta";

anInfo = ` Now, im here :)`

console.info(info + anInfo) //INFO
console.log(info, problema, allerta) //DEFAULT

console.error(problema) //ERROR
console.warn(allerta)//WARNING



//BONUS
var delayMs = 5000; //5sec
var promptDelayMs = 10000;// 10sec

setTimeout(function () {
    document.getElementById("ee").innerHTML = "////////////////////////////////" + "Sono un uovo di pasqua :)" + "///////////////////////////////";

}, delayMs);

setTimeout(function () {
    let user_message = window.prompt(`Si, mi stavo annoiando e ho creato cose a caso, scrivi qualcosa dai`);
    console.log(user_message)
    document.writeln(`${user_message} - Ho creato una variabile solo per te :)`)
}, promptDelayMs);

