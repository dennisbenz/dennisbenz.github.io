/*Aufgabe: Aufgabe2
Name: Dennis Vimon
Matrikel: 
Datum: 04.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace MauSpiel {
    document.addEventListener("DomContenLoaded", Eingabe);

    let sign: string[] = ["He7", "He8", "He9", "He1", "HeA", "HeB", "HeK", "HeD", "Ka7", "Ka8", "Ka9", "Ka1", "KaA", "KaB", "KaK", "KaD", "Kr7", "Kr8", "Kr9", "Kr1", "KrA", "KrB", "KrK", "KrD", "Pi7", "Pi8", "Pi9", "Pi1", "PiA", "PiB", "PiK", "PiD"];
    let handCardsArray: string[];
    //Zufallszahl 

    function Eingabe(): void {
        var kartenanzahl: string = prompt("Kartenanzahl");
        let n: number = parseInt(kartenanzahl);

        for (let anz: number = n; anz > 0; anz--) {
            let r: number = Math.floor(Math.random() * (sign.length - 1));

            let cardtype: string = sign[r].substring(0, 2);
            let cardnumber: string = sign[r].substring(2);
            console.log(cardtype);
            console.log(cardnumber);
            cardgenerate(cardtype, cardnumber);

        }
        function cardgenerate(_cardtype: string, _cardnumber: string): void {
            let div: HTMLElement = document.createElement("div");
            document.getElementById("Handkarten").appendChild(div);
            if (_cardtype == "Pi" || _cardtype == "Kr") {
                console.log(_cardtype + " if");
                div.classList.add("schwarz");

            } else {
            div.classList.add("rot"); }

            div.classList.add("Handkarten");

            div.innerHTML = "<p>" + _cardnumber + "</p>";
        }


    }
    document.addEventListener("DOMContentLoaded", Eingabe);
}