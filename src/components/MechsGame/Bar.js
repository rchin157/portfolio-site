// this class models a rectangle zone for game mechanics as well as visual rendering
export default class Bar {
    constructor(x=0, y=0, width=0, height=0) {
        //x, y are the top left corner of the bar
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.opacity = 0;
        this.duration = 0;
        this.startTime = 0;

        this.warnSizeDenom = 14;
    }

    // checks if a point (x, y) is inside the bar
    pointContained(x, y) {
        return this.x <= x && x <= this.x + this.width && this.y <= y && y < this.y + this.height;
    }

    // sets the size of the bar
    setSize(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    // triggers the flash visual effect
    flash(duration, ts) {
        this.duration = duration;
        this.opacity = 1;
        this.startTime = ts;
    }

    // draws the bar on the canvas
    draw(ctx, ts) {
        if (this.opacity > 0) {
            ctx.beginPath();
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.fillStyle = `hsla(39, 100%, 50%, ${this.opacity})`;
            ctx.fill();
            this.opacity = 1 - (ts - this.startTime) / this.duration;
        }
    }

    // shows warning symbols on the bar
    warn(ctx) {
        ctx.fillStyle = 'yellow';
        const angle1 = Math.PI / 2;
        const angle2 = 7 / 6 * Math.PI;
        const angle3 = 11 / 6 * Math.PI;
        
        if (this.width < this.height) {
            const r = -this.width / this.warnSizeDenom;
            const xCentre = this.x + this.width / 2;
            let yCentre = this.y + this.height / 15;
            ctx.beginPath();
            ctx.moveTo(r * Math.cos(angle1) + xCentre, r * Math.sin(angle1) + yCentre);
            ctx.lineTo(r * Math.cos(angle2) + xCentre, r * Math.sin(angle2) + yCentre);
            ctx.lineTo(r * Math.cos(angle3) + xCentre, r * Math.sin(angle3) + yCentre);
            ctx.fill();
            yCentre = this.y + 14 * this.height / 15;
            ctx.beginPath();
            ctx.moveTo(r * Math.cos(angle1) + xCentre, r * Math.sin(angle1) + yCentre);
            ctx.lineTo(r * Math.cos(angle2) + xCentre, r * Math.sin(angle2) + yCentre);
            ctx.lineTo(r * Math.cos(angle3) + xCentre, r * Math.sin(angle3) + yCentre);
            ctx.fill();
        } else {
            const r = -this.height / this.warnSizeDenom;
            let xCentre = this.x + this.width / 15;
            const yCentre = this.y + this.height / 2;
            ctx.beginPath();
            ctx.moveTo(r * Math.cos(angle1) + xCentre, r * Math.sin(angle1) + yCentre);
            ctx.lineTo(r * Math.cos(angle2) + xCentre, r * Math.sin(angle2) + yCentre);
            ctx.lineTo(r * Math.cos(angle3) + xCentre, r * Math.sin(angle3) + yCentre);
            ctx.fill();
            xCentre = this.x + 14 * this.width / 15;
            ctx.beginPath();
            ctx.moveTo(r * Math.cos(angle1) + xCentre, r * Math.sin(angle1) + yCentre);
            ctx.lineTo(r * Math.cos(angle2) + xCentre, r * Math.sin(angle2) + yCentre);
            ctx.lineTo(r * Math.cos(angle3) + xCentre, r * Math.sin(angle3) + yCentre);
            ctx.fill();
        }
    }
}
