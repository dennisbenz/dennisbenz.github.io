namespace task12 {
    export class Bubble extends Objects {
        radius: number;
        radius2: number;

        constructor() {
            super();
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dy = Math.random() * -1 - 1;
            this.radius = 7;
            this.radius2 = 4;
}


        draw(): void {
            let bubble: Path2D = new Path2D();
            bubble.arc(this.x, this.y, 12, 0, 2 * Math.PI);
            crc.fillStyle = "lightblue";
            crc.fill(bubble);
            crc.stroke(bubble);
            super.draw();
        }

        

        move(): void {
            this.y += this.dy;
            if (this.y + 100 < 0) {
                this.y = 600;
            }
        }
    }
}