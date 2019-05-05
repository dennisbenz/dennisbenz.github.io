var task4;
(function (task4) {
    //Eventlistener
    document.addEventListener("DOMContentLoaded", showPrice);
    function showPrice(_event) {
        document.getElementById("checkButton").addEventListener("click", pruefungDerDaten);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", preisBerechnen);
        }
    }
    //Preisberechnung und Erstellung von p Tag im Checkout
    function preisBerechnen(_event) {
        let n = 0;
        document.getElementById("Order").innerHTML = "";
        let input = document.getElementsByTagName("input");
        for (let i = 0; i < input.length; i++) {
            if (input[i].checked == true) {
                let preis = Number(input[i].value);
                n += preis;
                let orderName = document.createElement("li");
                orderName.innerHTML = `<p>${input[i].className}</p>`;
                document.getElementById("Order").appendChild(orderName);
            }
            if (input[i].name == "Stepper") {
                let stepperNumber = Number(input[i].value);
                /* let preisStepper: number = Number(input[i].id); */
                n += stepperNumber; /* * preisStepper; */
                if (stepperNumber > 0) {
                    let orderName = document.createElement("li");
                    orderName.innerHTML = `<p>${stepperNumber} ${input[i].className}</p>`;
                    document.getElementById("Order").appendChild(orderName);
                }
            }
        }
        document.getElementById("showprice").innerHTML = n.toFixed(2).toString();
    }
    function pruefungDerDaten() {
        let leereFormulare = [];
        let pruefung = document.getElementsByTagName("input");
        for (let i = 0; i < pruefung.length; i++) {
            if (pruefung[i].value == "") {
                let feldName = pruefung[i].name;
                leereFormulare.push(feldName);
            }
            if (pruefung[i].checked == false) {
                let feldClass = pruefung[i].className;
                leereFormulare.push(feldClass);
            }
        }
        if (leereFormulare.length == 0) {
            alert("Ihre Bestellung wurde erfolgreich abgesendet! Vielen Dank:)");
        }
        else {
            alert(`${leereFormulare} fehlt noch`);
        }
    }
})(task4 || (task4 = {}));
//# sourceMappingURL=Aufgabe042.js.map