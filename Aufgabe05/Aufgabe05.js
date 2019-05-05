var aufgabe5;
(function (aufgabe5) {
    window.addEventListener("load", init);
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        document.getElementById("prufe").addEventListener("click", pruefeAusgefuellt);
        elementeAnzeigen(aufgabe5.data);
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    // tslint:disable-next-line:typedef
    function handleChange(_event) {
        preisBerechnen(_event);
        bestellung(_event);
    }
    let summe = 0;
    function preisBerechnen(_event) {
        let target = _event.target;
        let eisSumme = 0;
        //let liefern:number=0;
        let input = document.getElementsByTagName("input");
        document.getElementById("bestellung").innerHTML = "";
        /*f (target.type=="radio") {
            let preis: string = target.getAttribute("preis")
            liefern = liefern + Number(preis);
        }*/
        if (target.checked == true && target.type == "checkbox") {
            let preis = target.getAttribute("preis");
            summe = summe + Number(preis);
        }
        if (target.type == "checkbox" && target.checked == false) {
            let preis = target.getAttribute("preis");
            summe = summe - Number(preis);
        }
        for (let i = 0; i < input.length; i++) {
            if (input[i].type == "number") {
                let preis1 = input[i].getAttribute("preis");
                eisSumme = eisSumme + Number(preis1) * Number(input[i].value);
            }
        }
        let gesamt = eisSumme + summe;
        //console.log(liefern);
        let prodElement = document.createElement("div");
        document.getElementById("bestellung").appendChild(prodElement);
        let gewählt = `<p>Summe: ${gesamt} €</p>`;
        prodElement.innerHTML = gewählt;
    }
    //Bestellung anzeigen
    function bestellung(_event /*_datenArray: Auswahl*/) {
        let input = document.getElementsByTagName("input");
        let target = _event.target;
        if (target.type == "checkbox" || target.type == "radio") {
            document.getElementById("behaelter").innerHTML = "";
            for (let l = 0; l < input.length; l++) {
                if (input[l].checked == true) {
                    let text = input[l].getAttribute("text");
                    let prodElement = document.createElement("div");
                    document.getElementById("behaelter").appendChild(prodElement);
                    prodElement.innerHTML = text;
                }
            }
        }
        if (target.type == "number") {
            document.getElementById("rechnung").innerHTML = "";
            for (let x = 0; x < input.length; x++) {
                if (target.type == "number" && Number(input[x].value) >= 1) {
                    let prodElement = document.createElement("div");
                    document.getElementById("rechnung").appendChild(prodElement);
                    let gewählt = `<p>${input[x].value} x${input[x].name}</p>`;
                    prodElement.innerHTML = gewählt;
                }
            }
        }
    }
    //Elemente darstellen
    function elementeAnzeigen(datenArray) {
        for (let key in datenArray) {
            let name = datenArray[key];
            console.log(name);
            let fieldset = document.createElement("fieldset");
            /*for(let key of datenArray){
                let preis: Alles[]=datenArray[key];
            }*/
            for (let h = 0; h < name.length; h++) {
                let input = document.createElement("input");
                let label = document.createElement("label");
                //console.log(datenArray);
                input.setAttribute("name", name[h].name);
                input.setAttribute("type", name[h].type);
                input.setAttribute("value", name[h].value.toString());
                input.setAttribute("id", name[h].id);
                input.setAttribute("text", name[h].text);
                input.setAttribute("step", name[h].step.toString());
                input.setAttribute("min", name[h].min.toString());
                input.setAttribute("max", name[h].max.toString());
                input.setAttribute("preis", name[h].preis.toString());
                label.innerText = name[h].text;
                label.setAttribute("for", name[h].id);
                fieldset.appendChild(input);
                fieldset.appendChild(label);
                document.body.appendChild(fieldset);
            }
        }
    }
    //Button 
    function pruefeAusgefuellt(_event) {
        let name = document.getElementById("a");
        let adresse = document.getElementById("b");
        let postleizahl = document.getElementById("c");
        let pruefen;
        if (adresse.value == "" || postleizahl.value == "" || name.value == "") {
            document.getElementById("pruefeEinfuegen").innerHTML = "";
            pruefen = document.getElementById("pruefeEinfuegen");
            pruefen.innerHTML += " Es fehlen Name, Adresse oder Postleitzahl";
        }
        else {
            document.getElementById("pruefeEinfuegen").innerHTML = "";
            pruefen = document.getElementById("pruefeEinfuegen");
            pruefen.innerHTML += " Alles ausgefüllt :)";
        }
    }
})(aufgabe5 || (aufgabe5 = {}));
//# sourceMappingURL=Aufgabe05.js.map