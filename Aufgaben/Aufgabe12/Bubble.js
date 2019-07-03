var task12;
(function (task12) {
    class Bubble extends task12.Objects {
        constructor() {
            super();
            this.x = Math.random() * task12.canvas.width;
            this.y = Math.random() * task12.canvas.height;
            this.dy = Math.random() * -1 - 1;
            this.radius = 7;
            this.radius2 = 4;
        }
        draw() {
            let bubble = new Path2D();
            bubble.arc(this.x, this.y, 12, 0, 2 * Math.PI);
            task12.crc.fillStyle = "lightblue";
            task12.crc.fill(bubble);
            task12.crc.stroke(bubble);
            super.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 600;
            }
        }
    }
    task12.Bubble = Bubble;
})(task12 || (task12 = {}));
//# sourceMappingURL=Bubble.js.map