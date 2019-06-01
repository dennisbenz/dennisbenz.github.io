var L09;
(function (L09) {
    document.addEventListener("DOMContentLoaded", init);
    let crc;
    let canvas;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");
        drawinside();
        for (let i = 0; i < 8; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            drawobjects(x, y);
        }
        for (let i = 0; i < 6; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            drawblase(x, y);
        }
        for (let i = 0; i < 40; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            drawkies(x, y);
        }
    }
    function drawobjects(_x, _y) {
        let flossehinten = new Path2D();
        flossehinten.moveTo(_x + 50, _y);
        flossehinten.lineTo(_x + 70, _y - 10);
        flossehinten.lineTo(_x + 70, _y + 10);
        flossehinten.closePath();
        crc.fillStyle = "brown";
        crc.fill(flossehinten);
        crc.stroke(flossehinten);
        //fisch
        let fisch = new Path2D();
        fisch.arc(_x, _y, 55, 0, 2 * Math.PI);
        crc.fillStyle = "grey";
        crc.fill(fisch);
        crc.stroke(fisch);
        let augeeins = new Path2D();
        augeeins.arc(_x - 35, _y - 5, 8, 0, 2 * Math.PI);
        crc.fillStyle = "white";
        crc.fill(augeeins);
        crc.stroke(augeeins);
        let augezwei = new Path2D();
        augezwei.arc(_x - 39, _y - 5, 3, 0, 2 * Math.PI);
        crc.fillStyle = "black";
        crc.fill(augezwei);
        crc.stroke(augezwei);
    }
    function drawblase(_x, _y) {
        //Blase
        let blase1 = new Path2D();
        blase1.arc(_x, _y, 12, 0, 2 * Math.PI);
        crc.fillStyle = "lightblue";
        crc.fill(blase1);
        crc.stroke(blase1);
        //Blase2
        let blase2 = new Path2D();
        blase2.arc(_x + 10, _y - 30, 6, 0, 2 * Math.PI);
        crc.fillStyle = "darkblue";
        crc.fill(blase2);
        crc.stroke(blase2);
    }
    function drawkies(_x, _y) {
        let kies = new Path2D();
        kies.rect(_x, _y, 6, 6);
        crc.fillStyle = "grey";
        crc.fill(kies);
        crc.stroke();
    }
    function drawinside() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 1300, 600);
        crc.fillStyle = "steelblue";
        crc.fill(wasser);
        crc.stroke();
        let sand = new Path2D();
        sand.rect(0, 450, 1300, 150);
        crc.fillStyle = "sandybrown";
        crc.fill(sand);
        crc.stroke();
        let stein = new Path2D();
        stein.moveTo(1100, 550);
        stein.quadraticCurveTo(900, 150, 900, 550);
        crc.fillStyle = "dimgrey";
        crc.fill(stein);
        crc.stroke();
        let alge1 = new Path2D();
        alge1.moveTo(155, 550);
        alge1.quadraticCurveTo(150, 350, 145, 550);
        crc.fillStyle = "green";
        crc.fill(alge1);
        crc.stroke();
        let alge2 = new Path2D();
        alge2.moveTo(55, 550);
        alge2.quadraticCurveTo(50, 350, 45, 550);
        crc.fillStyle = "green";
        crc.fill(alge2);
        crc.stroke();
        let alge3 = new Path2D();
        alge3.moveTo(255, 550);
        alge3.quadraticCurveTo(250, 350, 245, 550);
        crc.fillStyle = "green";
        crc.fill(alge3);
        crc.stroke();
        let alge4 = new Path2D();
        alge4.moveTo(175, 550);
        alge4.quadraticCurveTo(170, 350, 165, 550);
        crc.fillStyle = "green";
        crc.fill(alge4);
        crc.stroke();
        let alge5 = new Path2D();
        alge5.moveTo(190, 550);
        alge5.quadraticCurveTo(185, 350, 180, 550);
        crc.fillStyle = "green";
        crc.fill(alge5);
        crc.stroke();
        let alge6 = new Path2D();
        alge6.moveTo(210, 550);
        alge6.quadraticCurveTo(205, 350, 200, 550);
        crc.fillStyle = "green";
        crc.fill(alge6);
        crc.stroke();
        let alge7 = new Path2D();
        alge7.moveTo(225, 550);
        alge7.quadraticCurveTo(215, 350, 210, 550);
        crc.fillStyle = "green";
        crc.fill(alge7);
        crc.stroke();
        let alge8 = new Path2D();
        alge8.moveTo(65, 550);
        alge8.quadraticCurveTo(60, 350, 55, 550);
        crc.fillStyle = "green";
        crc.fill(alge8);
        crc.stroke();
        let alge9 = new Path2D();
        alge9.moveTo(85, 550);
        alge9.quadraticCurveTo(80, 350, 75, 550);
        crc.fillStyle = "green";
        crc.fill(alge9);
        crc.stroke();
        let alge10 = new Path2D();
        alge10.moveTo(105, 550);
        alge10.quadraticCurveTo(100, 350, 95, 550);
        crc.fillStyle = "green";
        crc.fill(alge10);
        crc.stroke();
        let alge11 = new Path2D();
        alge11.moveTo(115, 550);
        alge11.quadraticCurveTo(110, 350, 105, 550);
        crc.fillStyle = "green";
        crc.fill(alge11);
        crc.stroke();
        let alge12 = new Path2D();
        alge12.moveTo(125, 550);
        alge12.quadraticCurveTo(110, 350, 115, 550);
        crc.fillStyle = "green";
        crc.fill(alge12);
        crc.stroke();
        let alge13 = new Path2D();
        alge13.moveTo(145, 550);
        alge13.quadraticCurveTo(130, 350, 135, 550);
        crc.fillStyle = "green";
        crc.fill(alge13);
        crc.stroke();
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=canvas.js.map