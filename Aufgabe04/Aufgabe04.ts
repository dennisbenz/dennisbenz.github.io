namespace task4 {

    //Eventlistener
    document.addEventListener("DOMContentLoaded", showPrice);

    function showPrice(_event: Event): void {
        document.getElementById("checkButton").addEventListener("click", pruefungDerDaten);
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", preisBerechnen);
        }
    }


    //Preisberechnung und Erstellung von p Tag im Checkout
    function preisBerechnen(_event: Event): void {
        let n: number = 0;
        document.getElementById("Order").innerHTML = "";
        let input: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                let preis: number = Number(input[i].value);
                n += preis;
                let orderName: HTMLLIElement = document.createElement("li");
                orderName.innerHTML = `<p>${input[i].className}</p>`;
                document.getElementById("Order").appendChild(orderName);

            }
            if (input[i].name == "Stepper") {
                let stepperNumber: number = Number(input[i].value);

                n += stepperNumber; /* * preisStepper; */
                if (stepperNumber > 0) {
                    let orderName: HTMLLIElement = document.createElement("li");
                    orderName.innerHTML = `<p>${stepperNumber} ${input[i].className}</p>`;
                    document.getElementById("Order").appendChild(orderName);
                }
            }
        }

        document.getElementById("showprice").innerHTML = n.toFixed(2).toString();
    }



    function pruefungDerDaten(): void {
        let leereFormulare: string[] = [];
        let pruefung: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        for (let i: number = 0; i < pruefung.length; i++) {
            if (pruefung[i].value == "") {
                let feldName: string = pruefung[i].name;
                leereFormulare.push(feldName);
            }
            if (pruefung[i].value == "") {
                let orderName: string = pruefung[i].name;
                leereFormulare.push(orderName);
            }




            if (pruefung[i].checked == false) {
                let feldClass: string = pruefung[i].className;
                leereFormulare.push(feldClass);
            }
        }
        if (leereFormulare.length == 0) {
            alert("Ihre Bestellung wurde erfolgreich abgesendet! Vielen Dank:)");
        }
        else { alert(`${leereFormulare} fehlt noch`); }
    }


}