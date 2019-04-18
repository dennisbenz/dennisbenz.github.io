namespace Aufgabe04 {
    document.addEventListener("DOMContentLoaded", init);
    let fieldset: number = document.getElementsByTagName("fieldset")[2].getElementsByTagName("input").length;
    console.log(fieldset);
}





function init(_event: Event): void {
    console.log("Init");
    let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

    for (let i: number = 0; i < fieldsets.length; i++) {
        let fieldset: HTMLFieldSetElement = fieldsets[i];
        fieldset.addEventListener("change", handleChange);
    }
}




function handleChange(_event: Event): void {
    console.log(_event);
    //*
    let target: HTMLInputElement = <HTMLInputElement>_event.target;
    console.log("Changed " + target.name + " to " + target.value);
    //*/
    //*/ note: this == _event.currentTarget in an event-handler
    if (this.id == "number")
        console.log("Changed " + target.name + " to " + target.checked);
    //*/

    //*
    if (target.name == "Stepper") {
        let meter: HTMLMeterElement = <HTMLMeterElement>document.getElementsByTagName("check3")[0];
        meter.value = parseFloat(target.value);

    }

    

    //*/
}
