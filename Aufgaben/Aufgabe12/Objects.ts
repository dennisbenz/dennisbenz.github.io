namespace A12 {
    export class Object {
        x: number;
        y: number;
    }

    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
    }

    draw(): void {

    }

    update(): void {
        this.move();
        this.draw();
    }
}