/*Aufgabe: Aufgabe2
Name: Dennis Vimon
Matrikel:
Datum: 04.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var MauSpiel;
(function (MauSpiel) {
    let sign = ["He", "He2", "He3", "He4", "Ka", "Ka2", "Ka3", "Ka4", "Kr", "Kr2", "Kr3", "Kr4", "Pi", "Pi2", "Pi3", "Pi4"];
    let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards = [{ color: "He", value: "0" }, { color: "Ka", value: "0" }, { color: "Kr", value: "0" }, { color: "Pi", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }];
    for (let i = 0; i < sign.length; i++) {
        for (let j = 0; j < values.length; j++) {
            for (let k = 0; k < 2; k++) {
                let card = { color: sign[i], value: values[j] };
                cards.push(card);
            }
        }
    }
    console.log(cards);
    let handcards = [];
    function Eingabe() {
        var kartenanzahl = prompt("Kartenanzahl");
        let n = parseInt(kartenanzahl);
        for (let anz = n; anz > 0; anz--) {
            let r = Math.floor(Math.random() * (cards.length - 1));
            handcards.push(cards[r]);
            cards.splice(r, 1);
        }
        for (let b = 0; b < handcards.length; b++) {
            let div = document.createElement("div");
            document.getElementById("Handkarten").appendChild(div);
            div.innerHTML = handcards[b].value;
            div.classList.add("Handkarten");
            div.classList.add(handcards[b].color);
        }
    }
    document.addEventListener("DOMContentLoaded", Eingabe);
})(MauSpiel || (MauSpiel = {}));
//# sourceMappingURL=Aufgabe02.js.map