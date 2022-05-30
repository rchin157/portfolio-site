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
        this.size = null;
        this.player = null;
        this.nextMech = null;
        this.lastTimeStamp = null;

        this.started = false;
    }

    setup(ctx, canvas) {
        if (canvas.width > canvas.height) {
            this.size = canvas.height;
        } else {
            this.size = canvas.width;
        }
        this.vbars = [new Bar(0, 0, this.size / 2, this.size), new Bar(this.size / 2, 0, this.size / 2, this.size)];
        this.hbars = [new Bar(0, 0, this.size, this.size / 2), new Bar(0, this.size / 2, this.size, this.size / 2)];
        this.player = new Player(0, 1);
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
        if (!this.started) {
            return;
        }
        if (this.lastTimeStamp === null) {
            this.lastTimeStamp = ts;
        }
        const tElapsed = ts - this.lastTimeStamp;
        if (this.nextMech === null) {
            this.nextMech = [Math.floor(Math.random() * 2), Math.floor(Math.random() * 2)];
        }
        if (this.timeSinceLastMech >= this.timeBetweenMechs) {
            this.isCasting = true;
            this.timeSinceLastMech = 0;
        }
        if (this.isCasting) {
            //draw cast bar
            this.castProg += tElapsed;
            this.vbars[this.nextMech[0]].warn(ctx);
            this.hbars[this.nextMech[1]].warn(ctx);
        }
        if (this.castProg >= this.mechCastTime) {
            this.isCasting = false;
            this.castProg = 0;
            //trigger mech and determine result in terms of health loss
            this.vbars[this.nextMech[0]].flash(1500, ts);
            this.hbars[this.nextMech[1]].flash(1500, ts);
            if (this.vbars[this.nextMech[0]].pointContained(...this.player.getPosition())) {
                console.log("player hit");
            }
            if (this.hbars[this.nextMech[1]].pointContained(...this.player.getPosition())) {
                console.log("player hit");
            }
            this.nextMech = null;
        }

        for (const bar of this.vbars.concat(this.hbars)) {
            bar.draw(ctx, ts);
        }
        this.player.draw(ctx, this.size, ts);

        this.timeSinceLastMech += tElapsed;
        this.lastTimeStamp = ts;
    }

    handleClick(x, y) {
        console.log("mg click handled", x, y);
        this.started = true;
    }
}