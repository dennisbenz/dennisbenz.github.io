var task11;
(function (task11) {
    class bubble1 {
        draw() {
            // Luftblasen
            let luftblaseA = new Path2D();
            luftblaseA.arc(this.x, this.y, 15, 0, 2 * Math.PI);
            task11.crc.fillStyle = "lightblue";
            task11.crc.fill(luftblaseA);
            task11.crc.stroke(luftblaseA);
            let luftblaseB = new Path2D();
            luftblaseB.arc(this.x + 5, this.y - 30, 7, 0, 2 * Math.PI);
            task11.crc.fillStyle = "lightblue";
            task11.crc.fill(luftblaseB);
            task11.crc.stroke(luftblaseB);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 700;
            }
        }
    }
    task11.bubble1 = bubble1;
})(task11 || (task11 = {}));
//# sourceMappingURL=Bubble.js.map