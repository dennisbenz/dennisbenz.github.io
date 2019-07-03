var task12;
(function (task12) {
    document.addEventListener("DOMContentLoaded", init);
    let objectsArray = [];
    let fps = 30;
    let imageData;
    function init() {
        task12.canvas = document.getElementsByTagName("canvas")[0];
        task12.crc = task12.canvas.getContext("2d");
        drawBackground();
        imageData = task12.crc.getImageData(0, 0, task12.canvas.width, task12.canvas.height);
        for (let i = 0; i < 10; i++) {
            let fish1;
            fish1 = new task12.Fish1();
            objectsArray.push(fish1);
            fish1.draw();
        }
        for (let i = 0; i < 9; i++) {
            let fish2;
            fish2 = new task12.Fish2();
            objectsArray.push(fish2);
            fish2.draw();
        }
        for (let i = 0; i < 12; i++) {
            let x = Math.random() * task12.canvas.width;
            let y = Math.random() * task12.canvas.height;
            let dy = Math.random() * -1 - 1;
            let bubble;
            bubble = new task12.Bubble();
            bubble.x = x;
            bubble.y = y;
            bubble.dy = dy;
            objectsArray.push(bubble);
            bubble.draw();
        }
        for (let i = 0; i < 12; i++) {
            let x = Math.random() * task12.canvas.width;
            let y = Math.random() * task12.canvas.height;
            let dy = Math.random() * 10 - 5;
            let bubble2;
            bubble2 = new task12.Bubble2();
            bubble2.x = x;
            bubble2.y = y;
            bubble2.dy = dy;
            objectsArray.push(bubble2);
            bubble2.draw();
        }
        update();
    }
    function snack(_event) {
        let xMousePos = _event.clientX;
        let yMousePos = _event.clientY;
        let snackNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }
    function drawBackground() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 1300, 600);
        task12.crc.fillStyle = "steelblue";
        task12.crc.fill(wasser);
        task12.crc.stroke();
        let sand = new Path2D();
        sand.rect(0, 450, 1300, 150);
        task12.crc.fillStyle = "sandybrown";
        task12.crc.fill(sand);
        task12.crc.stroke();
        let kies = new Path2D();
        kies.rect(this.x, this.y, 6, 6);
        task12.crc.fillStyle = "grey";
        task12.crc.fill(kies);
        task12.crc.stroke();
        let stein = new Path2D();
        stein.moveTo(1100, 550);
        stein.quadraticCurveTo(900, 150, 900, 550);
        task12.crc.fillStyle = "dimgrey";
        task12.crc.fill(stein);
        task12.crc.stroke();
        let alge1 = new Path2D();
        alge1.moveTo(155, 550);
        alge1.quadraticCurveTo(150, 350, 145, 550);
        task12.crc.fillStyle = "green";
        task12.crc.fill(alge1);
        task12.crc.stroke();
        let alge2 = new Path2D();
        alge2.moveTo(55, 550);
        alge2.quadraticCurveTo(50, 350, 45, 550);
        task12.crc.fillStyle = "green";
        task12.crc.fill(alge2);
        task12.crc.stroke();
        let alge3 = new Path2D();
        alge3.moveTo(255, 550);
        alge3.quadraticCurveTo(250, 350, 245, 550);
        task12.crc.fillStyle = "green";
        task12.crc.fill(alge3);
        task12.crc.stroke();
        let alge4 = new Path2D();
        alge4.moveTo(175, 550);
        alge4.quadraticCurveTo(170, 350, 165, 550);
        task12.crc.fillStyle = "green";
        task12.crc.fill(alge4);
        task12.crc.stroke();
        let alge5 = new Path2D();
        alge5.moveTo(190, 550);
        alge5.quadraticCurveTo(185, 350, 180, 550);
        task12.crc.fillStyle = "green";
        task12.crc.fill(alge5);
        task12.crc.stroke();
        let alge6 = new Path2D();
        alge6.moveTo(210, 550);
        alge6.quadraticCurveTo(205, 350, 200, 550);
        task12.crc.fillStyle = "green";
        task12.crc.fill(alge6);
        task12.crc.stroke();
        let alge7 = new Path2D();
        alge7.moveTo(225, 550);
        alge7.quadraticCurveTo(215, 350, 210, 550);
        task12.crc.fillStyle = "green";
        task12.crc.fill(alge7);
        task12.crc.stroke();
        let alge8 = new Path2D();
        alge8.moveTo(65, 550);
        alge8.quadraticCurveTo(60, 350, 55, 550);
        task12.crc.fillStyle = "green";
        task12.crc.fill(alge8);
        task12.crc.stroke();
        let alge9 = new Path2D();
        alge9.moveTo(85, 550);
        alge9.quadraticCurveTo(80, 350, 75, 550);
        task12.crc.fillStyle = "green";
        task12.crc.fill(alge9);
        task12.crc.stroke();
        let alge10 = new Path2D();
        alge10.moveTo(105, 550);
        alge10.quadraticCurveTo(100, 350, 95, 550);
        task12.crc.fillStyle = "green";
        task12.crc.fill(alge10);
        task12.crc.stroke();
        let alge11 = new Path2D();
        alge11.moveTo(115, 550);
        alge11.quadraticCurveTo(110, 350, 105, 550);
        task12.crc.fillStyle = "green";
        task12.crc.fill(alge11);
        task12.crc.stroke();
        let alge12 = new Path2D();
        alge12.moveTo(125, 550);
        alge12.quadraticCurveTo(110, 350, 115, 550);
        task12.crc.fillStyle = "green";
        task12.crc.fill(alge12);
        task12.crc.stroke();
        let alge13 = new Path2D();
        alge13.moveTo(145, 550);
        alge13.quadraticCurveTo(130, 350, 135, 550);
        task12.crc.fillStyle = "green";
        task12.crc.fill(alge13);
        task12.crc.stroke();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        task12.crc.clearRect(0, 0, task12.canvas.width, task12.canvas.height);
        task12.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < objectsArray.length; i++) {
            objectsArray[i].update();
        }
    }
})(task12 || (task12 = {}));
//# sourceMappingURL=canvas.js.map