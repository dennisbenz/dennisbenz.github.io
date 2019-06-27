namespace task11 {
    export class Fish2 {
        x: number;
        y: number;

        dx: number;
        dy: number;


        draw(): void {
            let flossehinten: Path2D = new Path2D();
            flossehinten.moveTo(this.x - 50, this.y);
            flossehinten.lineTo(this.x - 70, this.y - 10);
            flossehinten.lineTo(this.x - 70, this.y + 10);
            flossehinten.closePath();
            crc.fillStyle = "red";
            crc.fill(flossehinten);
            crc.stroke(flossehinten);

            let fisch: Path2D = new Path2D();
            fisch.arc(this.x, this.y, 25, 0, 2 * Math.PI);
            crc.fillStyle = "yellow";
            crc.fill(fisch);
            crc.stroke(fisch);

            let augeeins: Path2D = new Path2D();
            augeeins.arc(this.x + 35, this.y - 5, 8, 0, 2 * Math.PI);
            crc.fillStyle = "white";
            crc.fill(augeeins);
            crc.stroke(augeeins);

            let augezwei: Path2D = new Path2D();
            augezwei.arc(this.x + 39, this.y - 5, 3, 0, 2 * Math.PI);
            crc.fillStyle = "black";
            crc.fill(augezwei);
            crc.stroke(augezwei);
        }
        update(): void {
            this.move();
            this.draw();
        }

        move(): void {
            this.x += this.dx;
            if (this.x - 100 > 1300) {
                this.x = - 250;
            }
}
    }
}
