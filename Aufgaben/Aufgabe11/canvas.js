var task11;
(function (task11) {
    document.addEventListener("DOMContentLoaded", init);
    let canvas;
    let fish1Array = [];
    let fish2Array = [];
    let bubbleArray = [];
    let bubble2Array = [];
    let fps = 30;
    let imageData;
    function init() {
        canvas = document.getElementsByTagName("canvas")[0];
        task11.crc = canvas.getContext("2d");
        drawBackground();
        imageData = task11.crc.getImageData(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < 10; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 2 - 3;
            let fish1;
            fish1 = new task11.Fish1();
            fish1.x = x;
            fish1.y = y;
            fish1.dx = dx;
            fish1Array.push(fish1);
            fish1.draw();
        }
        for (let i = 0; i < 9; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dx = Math.random() * 5 - 10;
            let fish2;
            fish2 = new task11.Fish2();
            fish2.x = x;
            fish2.y = y;
            fish2.dx = dx;
            fish2Array.push(fish2);
            fish2.draw();
        }
        for (let i = 0; i < 12; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dy = Math.random() * -1 - 1;
            let bubble;
            bubble = new task11.Bubble();
            bubble.x = x;
            bubble.y = y;
            bubble.dy = dy;
            bubbleArray.push(bubble);
            bubble.draw();
        }
        for (let i = 0; i < 12; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            let dy = Math.random() * 10 - 5;
            let bubble2;
            bubble2 = new task11.Bubble2();
            bubble2.x = x;
            bubble2.y = y;
            bubble2.dy = dy;
            bubble2Array.push(bubble2);
            bubble2.draw();
        }
        update();
    }
    function drawBackground() {
        let wasser = new Path2D();
        wasser.rect(0, 0, 1300, 600);
        task11.crc.fillStyle = "steelblue";
        task11.crc.fill(wasser);
        task11.crc.stroke();
        let sand = new Path2D();
        sand.rect(0, 450, 1300, 150);
        task11.crc.fillStyle = "sandybrown";
        task11.crc.fill(sand);
        task11.crc.stroke();
        let kies = new Path2D();
        kies.rect(this.x, this.y, 6, 6);
        task11.crc.fillStyle = "grey";
        task11.crc.fill(kies);
        task11.crc.stroke();
        let stein = new Path2D();
        stein.moveTo(1100, 550);
        stein.quadraticCurveTo(900, 150, 900, 550);
        task11.crc.fillStyle = "dimgrey";
        task11.crc.fill(stein);
        task11.crc.stroke();
        let alge1 = new Path2D();
        alge1.moveTo(155, 550);
        alge1.quadraticCurveTo(150, 350, 145, 550);
        task11.crc.fillStyle = "green";
        task11.crc.fill(alge1);
        task11.crc.stroke();
        let alge2 = new Path2D();
        alge2.moveTo(55, 550);
        alge2.quadraticCurveTo(50, 350, 45, 550);
        task11.crc.fillStyle = "green";
        task11.crc.fill(alge2);
        task11.crc.stroke();
        let alge3 = new Path2D();
        alge3.moveTo(255, 550);
        alge3.quadraticCurveTo(250, 350, 245, 550);
        task11.crc.fillStyle = "green";
        task11.crc.fill(alge3);
        task11.crc.stroke();
        let alge4 = new Path2D();
        alge4.moveTo(175, 550);
        alge4.quadraticCurveTo(170, 350, 165, 550);
        task11.crc.fillStyle = "green";
        task11.crc.fill(alge4);
        task11.crc.stroke();
        let alge5 = new Path2D();
        alge5.moveTo(190, 550);
        alge5.quadraticCurveTo(185, 350, 180, 550);
        task11.crc.fillStyle = "green";
        task11.crc.fill(alge5);
        task11.crc.stroke();
        let alge6 = new Path2D();
        alge6.moveTo(210, 550);
        alge6.quadraticCurveTo(205, 350, 200, 550);
        task11.crc.fillStyle = "green";
        task11.crc.fill(alge6);
        task11.crc.stroke();
        let alge7 = new Path2D();
        alge7.moveTo(225, 550);
        alge7.quadraticCurveTo(215, 350, 210, 550);
        task11.crc.fillStyle = "green";
        task11.crc.fill(alge7);
        task11.crc.stroke();
        let alge8 = new Path2D();
        alge8.moveTo(65, 550);
        alge8.quadraticCurveTo(60, 350, 55, 550);
        task11.crc.fillStyle = "green";
        task11.crc.fill(alge8);
        task11.crc.stroke();
        let alge9 = new Path2D();
        alge9.moveTo(85, 550);
        alge9.quadraticCurveTo(80, 350, 75, 550);
        task11.crc.fillStyle = "green";
        task11.crc.fill(alge9);
        task11.crc.stroke();
        let alge10 = new Path2D();
        alge10.moveTo(105, 550);
        alge10.quadraticCurveTo(100, 350, 95, 550);
        task11.crc.fillStyle = "green";
        task11.crc.fill(alge10);
        task11.crc.stroke();
        let alge11 = new Path2D();
        alge11.moveTo(115, 550);
        alge11.quadraticCurveTo(110, 350, 105, 550);
        task11.crc.fillStyle = "green";
        task11.crc.fill(alge11);
        task11.crc.stroke();
        let alge12 = new Path2D();
        alge12.moveTo(125, 550);
        alge12.quadraticCurveTo(110, 350, 115, 550);
        task11.crc.fillStyle = "green";
        task11.crc.fill(alge12);
        task11.crc.stroke();
        let alge13 = new Path2D();
        alge13.moveTo(145, 550);
        alge13.quadraticCurveTo(130, 350, 135, 550);
        task11.crc.fillStyle = "green";
        task11.crc.fill(alge13);
        task11.crc.stroke();
    }
    function update() {
        window.setTimeout(update, 1000 / fps);
        task11.crc.clearRect(0, 0, canvas.width, canvas.height);
        task11.crc.putImageData(imageData, 0, 0);
        for (let i = 0; i < fish1Array.length; i++) {
            fish1Array[i].update();
        }
        for (let i = 0; i < fish2Array.length; i++) {
            fish2Array[i].update();
        }
        for (let i = 0; i < bubbleArray.length; i++) {
            bubbleArray[i].update();
        }
        for (let i = 0; i < bubble2Array.length; i++) {
            bubble2Array[i].update();
        }
    }
})(task11 || (task11 = {}));
//# sourceMappingURL=canvas.js.map