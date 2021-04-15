// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 48
// Náhodně z tohoto osudí vyber 7 čísel
// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)
// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:

let osudi = [];
let tah = [];
let historieTahu = [];
let vyherniCisla = document.getElementById("vyherni-cisla");
let prvniTah = true

function naplnOsudi () {
    for (let i = 1; i <= 48; i++) {
        osudi.push(i);
    }
}

function losuj() {

    if (prvniTah) {
        naplnOsudi();
        los();
        vypisTah();
        osudi = [];
        prvniTah = false
    } else {
        vyherniCisla.innerHTML = " ";
        vypisHistorii(tah);
        tah = [];
        naplnOsudi();
        los();
        vypisTah();
        osudi = [];
    }    
}

function los() {
    for (let i = 0; i < 7; i++) {
        let vyherniIndex = Math.floor(Math.random() * osudi.length);
        let vyherniCislo = osudi[vyherniIndex];
    
        tah.push(vyherniCislo);
        osudi.splice(vyherniIndex, 1);
    
        console.log(osudi);
        
        console.log(tah);
    }
}

function vypisTah() {  
    tah.forEach(function(ele, index, arr) {
        setTimeout(function() {
            vyherniCisla.innerHTML += "<span class='cislo'>" + arr[index] + "</span>";
        }, index * 2000);
    })
}    


function vypisHistorii(txt) {
    
    document.getElementById("historie-tahu").innerText += txt + '\n'; 

}