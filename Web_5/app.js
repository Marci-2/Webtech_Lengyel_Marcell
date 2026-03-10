const celSzam = Math.floor(Math.random() * 1000001);
const maxProba = 20;
let probalkozasokSzama = 0;
let kitalalta = false;

alert("Gondoltam egy számra 0 és 1 000 000 között. 20 lehetőséged van kitalálni!");

while (probalkozasokSzama < maxProba && !kitalalta) {
    probalkozasokSzama++;
    
    let bemenet = prompt(`${probalkozasokSzama}. tipp:`);
    let tipp = parseInt(bemenet);


    if (isNaN(tipp)) {
        alert("Kérlek, valid számot adj meg! Ez a kör most elveszett.");
        continue;
    }


    if (tipp === celSzam) {
        alert(`Gratulálok, ${probalkozasokSzama} lépésből eltaláltad!`);
        kitalalta = true;
    } else if (tipp > celSzam) {
        alert(`${probalkozasokSzama}. tipp nem talált: A megoldás kisebb.`);
    } else {
        alert(`${probalkozasokSzama}. tipp nem talált: A megoldás nagyobb.`);
    }
}

if (!kitalalta) {
    alert(`Sajnos ez most nem sikerült! A megoldás: ${celSzam}`);
}