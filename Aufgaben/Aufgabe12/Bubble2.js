var task12;
(function (task12) {
    class Bubble2 extends task12.Objects {
        constructor() {
            super();
            this.x = Math.random() * task12.canvas.width;
            this.y = Math.random() * task12.canvas.height;
            this.dy = Math.random() * -1 - 1;
            this.radius = 7;
            this.radius2 = 4;
        }
        draw() {
            let bubble2 = new Path2D();
            bubble2.arc(this.x, this.y, 12, 0, 2 * Math.PI);
            task12.crc.fillStyle = "darkblue";
            task12.crc.fill(bubble2);
            task12.crc.stroke(bubble2);
        }
        move() {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 600;
            }
        }
    }
    task12.Bubble2 = Bubble2;
})(task12 || (task12 = {}));
//# sourceMappingURL=Bubble2.js.map