export default class Obstacle {
    static colors = {
        0: 'gray',
        1: 'red',
        2: 'blue',
        3: 'green',
    };

    constructor(x, y, rad) {
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.color = Math.floor(Math.random() * 4);
    }

    get position() {
        return [this.x, this.y];
    }

    draw(ctx) {
        ctx.fillStyle = Obstacle.colors[this.color];
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
        ctx.fill();
    }
}