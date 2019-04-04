/*Aufgabe: Aufgabe2
Name: Dennis Vimon
Matrikel: 
Datum: 04.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace MauSpiel {
    interface Maucard {
        color: string;
        value: string;
    }

    let sign: string[] = ["He", "He2", "He3", "He4", "Ka", "Ka2", "Ka3", "Ka4", "Kr", "Kr2", "Kr3", "Kr4", "Pi", "Pi2", "Pi3", "Pi4"];
    let values: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "+2", "X", "<=>"];
    let cards: Maucard[] = [{ color: "He", value: "0" }, { color: "Ka", value: "0" }, { color: "Kr", value: "0" }, { color: "Pi", value: "0" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "+4" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }, { color: "black", value: "FW" }];

    for (let i: number = 0; i < sign.length; i++) {
        for (let j: number = 0; j < values.length; j++) {
            for (let k: number = 0; k < 2; k++) {
                let card: Maucard = { color: sign[i], value: values[j] };
                cards.push(card);
            }
        }
    }
    console.log(cards);

    let handcards: Maucard[] = [];

    function Eingabe(): void {
        var kartenanzahl: string = prompt("Kartenanzahl");
        let n: number = parseInt(kartenanzahl);

        for (let anz: number = n; anz > 0; anz--) {
            let r: number = Math.floor(Math.random() * (cards.length - 1));
            handcards.push(cards[r]);
            cards.splice(r, 1);
        }

        for (let b: number = 0; b < handcards.length; b++) {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("Handkarten").appendChild(div);
            div.innerHTML = handcards[b].value;
            div.classList.add("Handkarten");
            div.classList.add(handcards[b].color);
        }
        
    }
    document.addEventListener("DOMContentLoaded", Eingabe);
}