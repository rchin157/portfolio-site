export default class Bar {
    constructor(x=0, y=0, width=0, height=0) {
        //x, y are the top left corner of the bar
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.colour = "red";
        this.opacity = 0;
        this.duration = 0;
        this.startTime = 0;
    }

    pointContained(x, y) {
        return this.x <= x && x <= this.x + this.width && this.y <= y && y < this.y + this.height;
    }

    setSize(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    flash(duration, ts) {
        this.duration = duration;
        this.opacity = 1;
        this.startTime = ts;
    }

    draw(ctx, ts) {
        if (this.opacity > 0) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = this.colour;
            ctx.fill();
            this.opacity -= (ts - this.startTime) / this.duration;
        }
    }
}