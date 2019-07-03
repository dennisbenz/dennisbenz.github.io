var task12;
(function (task12) {
    class Fish2 extends task12.Objects {
        constructor() {
            super();
            this.x = Math.random() * task12.canvas.width;
            this.y = Math.random() * task12.canvas.height;
            this.dx = Math.random() * 1 - 2;
            this.dy = Math.random() * 2 - 1;
        }
        draw() {
            let flossehinten = new Path2D();
            flossehinten.moveTo(this.x - 45, this.y);
            flossehinten.lineTo(this.x - 65, this.y - 10);
            flossehinten.lineTo(this.x - 65, this.y + 10);
            flossehinten.closePath();
            task12.crc.fillStyle = "red";
            task12.crc.fill(flossehinten);
            task12.crc.stroke(flossehinten);
            let fisch = new Path2D();
            fisch.arc(this.x, this.y, 45, 0, 2 * Math.PI);
            task12.crc.fillStyle = "yellow";
            task12.crc.fill(fisch);
            task12.crc.stroke(fisch);
            let augeeins = new Path2D();
            augeeins.arc(this.x + 35, this.y - 5, 6, 0, 2 * Math.PI);
            task12.crc.fillStyle = "white";
            task12.crc.fill(augeeins);
            task12.crc.stroke(augeeins);
            let augezwei = new Path2D();
            augezwei.arc(this.x + 39, this.y - 5, 3, 0, 2 * Math.PI);
            task12.crc.fillStyle = "black";
            task12.crc.fill(augezwei);
            task12.crc.stroke(augezwei);
        }
        move() {
            this.x += this.dx;
            if (this.x - 100 > 1300) {
                this.x = -250;
            }
        }
    }
    task12.Fish2 = Fish2;
})(task12 || (task12 = {}));
//# sourceMappingURL=Fish2.js.map