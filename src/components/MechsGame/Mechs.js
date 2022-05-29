import Bar from "./Bar";
import Player from "./Player";

export default class Mechs {
    constructor() {
        this.vbars = null;
        this.hbars = null;
        this.timeSinceLastMech = 0;
        this.timeBetweenMechs = 10000; //milliseconds
        this.isCasting = false;
        this.mechCastTime = 2000;
        this.castProg = 0;
        this.score = 0;
        this.size = null;
        this.player = null;
        this.nextMech = null;
        this.lastTimeStamp = null;

        this.health = 1;
    }

    setup(ctx, canvas) {
        if (canvas.width > canvas.height) {
            this.size = canvas.height;
        } else {
            this.size = canvas.width;
        }
        this.vbars = [new Bar(0, 0, this.size / 2, this.size), new Bar(this.size / 2, 0, this.size / 2, this.size)];
        this.hbars = [new Bar(0, 0, this.size, this.size / 2), new Bar(0, this.size / 2, this.size, this.size / 2)];
        this.player = new Player(this.size / 4, 3 * this.size / 4);
    }

    handleResize(ctx, canvas) {
        if (canvas.width > canvas.height) {
            this.size = canvas.height;
        } else {
            this.size = canvas.width;
        }
        this.vbars = [new Bar(0, 0, this.size / 2, this.size), new Bar(this.size / 2, 0, this.size / 2, this.size)];
        this.hbars = [new Bar(0, 0, this.size, this.size / 2), new Bar(0, this.size / 2, this.size, this.size / 2)];
    }

    draw(ctx, canvas, ts) {
        if (this.lastTimeStamp === null) {
            this.lastTimeStamp = ts;
        }
        const tElapsed = ts - this.lastTimeStamp;
        for (const bar of this.vbars.concat(this.hbars)) {
            bar.draw();
        }
        if (this.nextMech === null) {
            this.nextMech = [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)];
        }
        if (this.timeSinceLastMech >= this.timeBetweenMechs) {
            this.isCasting = true;
            this.timeSinceLastMech = 0;
            //show warning markers
        }
        if (this.isCasting) {
            //draw cast bar
            this.castProg += tElapsed;
        }
        if (this.castProg >= this.mechCastTime) {
            this.isCasting = false;
            this.castProg = 0;
            //hide warning markers
            //trigger mech and determine result in terms of health loss
            this.nextMech = null;
        }

        this.timeSinceLastMech += tElapsed;
        this.lastTimeStamp = ts;
    }
}