// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 48
// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:

let osudi = [];
let los;
let tah = [];
let historieTahu = [];
let vyherniCisla = document.getElementById("vyherni-cisla");

function naplnOsudi () {
    for (let i = 1; i <= 48; i++) {
        osudi.push(i);
    }
}

naplnOsudi()

let timeOut

/*

function delayedNumber() {
    timeOut = window.setTimeout(losuj(), 2000)
}

*/

function losuj() {
    vyherniCisla.innerHTML = " "
    
    for (let i = 0; i < 7; i++) {
        let vyherniIndex = Math.floor(Math.random() * osudi.length);
        let vyherniCislo = osudi[vyherniIndex];
    
        tah.push(vyherniCislo);
        osudi.splice(vyherniIndex, 1);
    
        console.log(osudi);
        console.log(tah);
    }
    vypisTah();
    osudi = [];
    
    vypisHistorii();
    tah = [];
    naplnOsudi();
}

function vypisTah() {    

    for (let i = 0; i < tah.length; i++) {
        vyherniCisla.innerHTML += "<span class='cislo'>" + tah[i] + "</span>";
    }
}

function vypisHistorii() {
    historieTahu.push(tah);

    let predesleTahy = document.getElementById("historie-tahu");
    predesleTahy.textContent = historieTahu
    
}
   


