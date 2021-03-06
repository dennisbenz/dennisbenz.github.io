namespace task12 {
    document.addEventListener("DOMContentLoaded", init);
    export let crc: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;
    let objectsArray: Objects[] = [];
    let fps: number = 30;
    let imageData: ImageData;

    function init(): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc = canvas.getContext("2d");

        drawBackground();

        imageData = crc.getImageData(0, 0, canvas.width, canvas.height);

        for (let i: number = 0; i < 10; i++) {


            let fish1: Fish1;
            fish1 = new Fish1();


            objectsArray.push(fish1);
            fish1.draw();
        }

        for (let i: number = 0; i < 9; i++) {


            let fish2: Fish2;
            fish2 = new Fish2();


            objectsArray.push(fish2);
            fish2.draw();
        }

        for (let i: number = 0; i < 12; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dy: number = Math.random() * -1 - 1;
            let bubble: Bubble;
            bubble = new Bubble();
            bubble.x = x;
            bubble.y = y;
            bubble.dy = dy;
            objectsArray.push(bubble);
            bubble.draw();
        }
        for (let i: number = 0; i < 12; i++) {
            let x: number = Math.random() * canvas.width;
            let y: number = Math.random() * canvas.height;
            let dy: number = Math.random() * 10 - 5;
            let bubble2: Bubble2;
            bubble2 = new Bubble2();
            bubble2.x = x;
            bubble2.y = y;
            bubble2.dy = dy;
            objectsArray.push(bubble2);
            bubble2.draw();
        }

        update();

    }

    function snack(_event: MouseEvent): void {
        let xMousePos: number = _event.clientX;
        let yMousePos: number = _event.clientY;
        let snackNumber: number = Math.floor(Math.random() * (10 - 1 + 1)) + 1; }
    
    
    


    function drawBackground(): void {
        let wasser: Path2D = new Path2D();
        wasser.rect(0, 0, 1300, 600);
        crc.fillStyle = "steelblue";
        crc.fill(wasser);
        crc.stroke();


        let sand: Path2D = new Path2D();
        sand.rect(0, 450, 1300, 150);
        crc.fillStyle = "sandybrown";
        crc.fill(sand);
        crc.stroke();

        let kies: Path2D = new Path2D();
        kies.rect(this.x, this.y, 6, 6);
        crc.fillStyle = "grey";
        crc.fill(kies);
        crc.stroke();


        let stein: Path2D = new Path2D();
        stein.moveTo(1100, 550);
        stein.quadraticCurveTo(900, 150, 900, 550);
        crc.fillStyle = "dimgrey";
        crc.fill(stein);
        crc.stroke();

        let alge1: Path2D = new Path2D();
        alge1.moveTo(155, 550);
        alge1.quadraticCurveTo(150, 350, 145, 550);
        crc.fillStyle = "green";
        crc.fill(alge1);
        crc.stroke();

        let alge2: Path2D = new Path2D();
        alge2.moveTo(55, 550);
        alge2.quadraticCurveTo(50, 350, 45, 550);
        crc.fillStyle = "green";
        crc.fill(alge2);
        crc.stroke();

        let alge3: Path2D = new Path2D();
        alge3.moveTo(255, 550);
        alge3.quadraticCurveTo(250, 350, 245, 550);
        crc.fillStyle = "green";
        crc.fill(alge3);
        crc.stroke();

        let alge4: Path2D = new Path2D();
        alge4.moveTo(175, 550);
        alge4.quadraticCurveTo(170, 350, 165, 550);
        crc.fillStyle = "green";
        crc.fill(alge4);
        crc.stroke();

        let alge5: Path2D = new Path2D();
        alge5.moveTo(190, 550);
        alge5.quadraticCurveTo(185, 350, 180, 550);
        crc.fillStyle = "green";
        crc.fill(alge5);
        crc.stroke();

        let alge6: Path2D = new Path2D();
        alge6.moveTo(210, 550);
        alge6.quadraticCurveTo(205, 350, 200, 550);
        crc.fillStyle = "green";
        crc.fill(alge6);
        crc.stroke();

        let alge7: Path2D = new Path2D();
        alge7.moveTo(225, 550);
        alge7.quadraticCurveTo(215, 350, 210, 550);
        crc.fillStyle = "green";
        crc.fill(alge7);
        crc.stroke();

        let alge8: Path2D = new Path2D();
        alge8.moveTo(65, 550);
        alge8.quadraticCurveTo(60, 350, 55, 550);
        crc.fillStyle = "green";
        crc.fill(alge8);
        crc.stroke();

        let alge9: Path2D = new Path2D();
        alge9.moveTo(85, 550);
        alge9.quadraticCurveTo(80, 350, 75, 550);
        crc.fillStyle = "green";
        crc.fill(alge9);
        crc.stroke();

        let alge10: Path2D = new Path2D();
        alge10.moveTo(105, 550);
        alge10.quadraticCurveTo(100, 350, 95, 550);
        crc.fillStyle = "green";
        crc.fill(alge10);
        crc.stroke();

        let alge11: Path2D = new Path2D();
        alge11.moveTo(115, 550);
        alge11.quadraticCurveTo(110, 350, 105, 550);
        crc.fillStyle = "green";
        crc.fill(alge11);
        crc.stroke();

        let alge12: Path2D = new Path2D();
        alge12.moveTo(125, 550);
        alge12.quadraticCurveTo(110, 350, 115, 550);
        crc.fillStyle = "green";
        crc.fill(alge12);
        crc.stroke();

        let alge13: Path2D = new Path2D();
        alge13.moveTo(145, 550);
        alge13.quadraticCurveTo(130, 350, 135, 550);
        crc.fillStyle = "green";
        crc.fill(alge13);
        crc.stroke();



    }

    function update(): void {
        window.setTimeout(update, 1000 / fps);
        crc.clearRect(0, 0, canvas.width, canvas.height);
        crc.putImageData(imageData, 0, 0);

        for (let i: number = 0; i < objectsArray.length; i++) {
            objectsArray[i].update();
}
    }


}
