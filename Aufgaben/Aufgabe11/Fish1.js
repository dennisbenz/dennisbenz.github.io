var task11;
(function (task11) {
    class Fish1 {
        draw() {
            let flossehinten = new Path2D();
            flossehinten.moveTo(this.x + 50, this.y);
            flossehinten.lineTo(this.x + 70, this.y - 10);
            flossehinten.lineTo(this.x + 70, this.y + 10);
            flossehinten.closePath();
            task11.crc.fillStyle = "brown";
            task11.crc.fill(flossehinten);
            task11.crc.stroke(flossehinten);
            let fisch = new Path2D();
            fisch.arc(this.x, this.y, 55, 0, 2 * Math.PI);
            task11.crc.fillStyle = "grey";
            task11.crc.fill(fisch);
            task11.crc.stroke(fisch);
            let augeeins = new Path2D();
            augeeins.arc(this.x - 35, this.y - 5, 8, 0, 2 * Math.PI);
            task11.crc.fillStyle = "white";
            task11.crc.fill(augeeins);
            task11.crc.stroke(augeeins);
            let augezwei = new Path2D();
            augezwei.arc(this.x - 39, this.y - 5, 3, 0, 2 * Math.PI);
            task11.crc.fillStyle = "black";
            task11.crc.fill(augezwei);
            task11.crc.stroke(augezwei);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x + 100 < 0) {
                this.x = 1700;
            }
        }
    }
    task11.Fish1 = Fish1;
})(task11 || (task11 = {}));
//# sourceMappingURL=Fish1.js.map