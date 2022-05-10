import SimplexNoise from "simplex-noise";

export default class SimplexColours {
    static size = 30;
    constructor() {
        this.field = null;
        this.noise = new SimplexNoise();
    }

    draw(ctx, canvas, reqId) {
        let rows = this.field.length;
        let cols = this.field[0].length;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let angle = this.field[i][j][0];
                let length = this.field[i][j][1];
                let colour = Math.floor((angle * 180) / Math.PI);
                ctx.save();
                ctx.translate(j * SimplexColours.size, i * SimplexColours.size)
                ctx.rotate(angle);
                ctx.strokeStyle = `hsl(${colour}, 100%, 50%)`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(0, length * SimplexColours.size);
                ctx.moveTo(0, 0);
                ctx.lineTo(length * SimplexColours.size, 0);
                ctx.stroke();
                ctx.restore();
            }
        }
        this.#updateField(reqId);
    }

    setup(canvas) {
        let rows = Math.floor(canvas.height / SimplexColours.size) + 1;
        let cols = Math.floor(canvas.width / SimplexColours.size) + 1;
        this.field = new Array(rows);
        for (let i = 0; i < rows; i++) {
            this.field[i] = new Array(cols);
            for (let j = 0; j < cols; j++) {
                this.field[i][j] = [0, 0];
            }
        }
        this.#updateField();
    }

    #updateField(n) {
        for (let i = 0; i < this.field.length; i++) {
            for (let j = 0; j < this.field[0].length; j++) {
                this.field[i][j][0] = this.noise.noise3D(i / 50, j / 50, n / 400) * Math.PI * 2;
                this.field[i][j][1] = this.noise.noise3D(i / 100, j / 100, n / 400);
            }
        }
    }
}
