namespace task12 {
    export class Fish2 extends Objects {

        constructor() {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 1 - 2;
            this.dy = Math.random() * 2 - 1;
        }


        draw(): void {
            let flossehinten: Path2D = new Path2D();
            flossehinten.moveTo(this.x - 45, this.y);
            flossehinten.lineTo(this.x - 65, this.y - 10);
            flossehinten.lineTo(this.x - 65, this.y + 10);
            flossehinten.closePath();
            crc.fillStyle = "red";
            crc.fill(flossehinten);
            crc.stroke(flossehinten);

            let fisch: Path2D = new Path2D();
            fisch.arc(this.x, this.y, 45, 0, 2 * Math.PI);
            crc.fillStyle = "yellow";
            crc.fill(fisch);
            crc.stroke(fisch);

            let augeeins: Path2D = new Path2D();
            augeeins.arc(this.x + 35, this.y - 5, 6, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(augeeins);
            crc.stroke(augeeins);

            let augezwei: Path2D = new Path2D();
            augezwei.arc(this.x + 39, this.y - 5, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(augezwei);
            crc.stroke(augezwei);
            super.draw();
        }
        

        move(): void {
            this.x += this.dx;
            if (this.x - 100 > 1300) {
                this.x = - 250;
            }
        }
    }
}
