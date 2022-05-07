export default class Boid {
    static colors = {
        0: 'aqua',
        1: 'fuchsia',
        2: 'yellow',
        3: 'black',
    };

    constructor(x, y, dx, dy, sight = 300, coherence = 0.5, separation = 0.5, alignment = 0.5) {
        this.x = x;
        this.y = y;
        this.length = Math.sqrt((dx * dx) + (dy * dy));
        this.dx = dx;
        this.dy = dy;
        this.sight = sight;
        this.coherence = coherence;
        this.separation = separation;
        this.alignment = alignment;
        if (dx === 0 && dy === 0) {
            this.ndx = 1;
            this.ndy = 0;
            this.odx = 0;
            this.ody = 1;
        } else {
            this.ndx = dx / this.length;
            this.ndy = dy / this.length;
            this.odx = this.ndy;
            this.ody = -this.ndx;
        }
        this.color = Math.floor(Math.random() * 4);
        this.pixelLength = 30;
    }

    get position() {
        return [this.x, this.y];
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.moveTo((this.x - this.ndx * (this.pixelLength / 2)) - (this.odx * (this.pixelLength / 4)),
            (this.y - this.ndy * (this.pixelLength / 2)) - (this.ody * (this.pixelLength / 4)));
        ctx.lineTo(this.x + this.ndx * (this.pixelLength / 2), this.y + this.ndy * (this.pixelLength / 2));
        ctx.lineTo((this.x - this.ndx * (this.pixelLength / 2)) + (this.odx * (this.pixelLength / 4)),
            (this.y - this.ndy * (this.pixelLength / 2)) + (this.ody * (this.pixelLength / 4)));

        ctx.fillStyle = Boid.colors[this.color];
        ctx.fill();
    }

    update(others, obs) {
        //sight

        //coherence

        //separation

        //alignment

        //update position
        this.dx = this.#clamp(this.dx, -10, 10);
        this.dy = this.#clamp(this.dy, -10, 10);
        this.x += this.dx;
        this.y += this.dy;
    }

    #clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    }

    #dist(other) {
        let x = other.position[0];
        let y = other.position[1];
        let xdiff = this.x - x;
        let ydiff = this.y - y;
        return Math.sqrt((xdiff * xdiff) + (ydiff * ydiff));
    }

    #vectorOther(other) {
        //return vector points from other to this
        let x = other.position[0];
        let y = other.position[1];
        let xdiff = this.x - x;
        let ydiff = this.y - y;
        return [xdiff, ydiff];
    }
}