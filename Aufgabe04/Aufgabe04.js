var Aufgabe04;
(function (Aufgabe04) {
    document.addEventListener("DOMContentLoaded", init);
    let fieldset = document.getElementsByTagName("fieldset")[2].getElementsByTagName("input").length;
    console.log(fieldset);
})(Aufgabe04 || (Aufgabe04 = {}));
function init(_event) {
    console.log("Init");
    let fieldsets = document.getElementsByTagName("fieldset");
    for (let i = 0; i < fieldsets.length; i++) {
        let fieldset = fieldsets[i];
        fieldset.addEventListener("change", handleChange);
    }
}
function handleChange(_event) {
    console.log(_event);
    //*
    let target = _event.target;
    console.log("Changed " + target.name + " to " + target.value);
    //*/
    //*/ note: this == _event.currentTarget in an event-handler
    if (this.id == "number")
        console.log("Changed " + target.name + " to " + target.checked);
    //*/
    //*
    if (target.name == "Stepper") {
        let meter = document.getElementsByTagName("check3")[0];
        meter.value = parseFloat(target.value);
    }
    //*/
}
//# sourceMappingURL=Aufgabe04.js.map