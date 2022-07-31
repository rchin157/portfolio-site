export default class Player {
    constructor(xHalf, yHalf) {
        this.x = 0;
        this.y = 0;
        this.isMoving = false;
        this.moveTime = -1;
        this.moveProgTime = 2;
        this.moveStartTime = -1;
        this.previousHalf = [xHalf, yHalf];
        this.destinationHalf = [xHalf, yHalf];
        this.colour = "lime";

        this.health = 1;
        this.castTime = 800;
        this.castProg = 0;
        this.isCasting = false;
        this.castType = null;
        this.fillerValue = 100;

        this.lastTimeStamp = null;

        this.score = 0;
    }

    draw(ctx, size, ts) {
        if (this.lastTimeStamp === null) {
            this.lastTimeStamp = ts;
        }
        const timeElapsed = ts - this.lastTimeStamp;
        const prevXY = [this.previousHalf[0] === 0 ? size / 4 : 3 * size / 4, this.previousHalf[1] === 0 ? size / 4 : 3 * size / 4];
        const destXY = [this.destinationHalf[0] === 0 ? size / 4 : 3 * size / 4, this.destinationHalf[1] === 0 ? size / 4 : 3 * size / 4];
        const moveVect = [destXY[0] - prevXY[0], destXY[1] - prevXY[1]];
        if (this.moveProgTime <= 1 && this.isMoving) {
            this.x = prevXY[0] + moveVect[0] * this.moveProgTime;
            this.y = prevXY[1] + moveVect[1] * this.moveProgTime;
            this.moveProgTime = (ts - this.moveStartTime) / this.moveTime;
        } else if (this.isMoving && this.moveProgTime > 1) {
            this.isMoving = false;
            this.previousHalf = [...this.destinationHalf];
        } else {
            this.x = prevXY[0];
            this.y = prevXY[1];
        }
        
        if (this.isCasting) {
            //draw cast bar
            if (this.castType === 0) {
                this.drawCastBar(size/4, 14*size/15, 2*size/5, size/20, this.castProg, this.castTime, ctx, 'red');
            } else if (this.castType === 1) {
                this.drawCastBar(3*size/4, 14*size/15, 2*size/5, size/20, this.castProg, this.castTime, ctx, 'aqua');
            }
            this.castProg += timeElapsed;
            if (this.castProg >= this.castTime) {
                this.isCasting = false;
                this.castProg = 0;
                if (this.castType === 0) {
                    this.score += this.fillerValue;
                } else if (this.castType === 1 && this.health === 1) {
                    this.health = 2;
                    this.colour = "aqua";
                }
            }
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, size / 32, 0, 2 * Math.PI);
        ctx.fillStyle = this.colour;
        ctx.fill();

        this.lastTimeStamp = ts;
    }

    move(xHalf, yHalf, time, ts) {
        if (this.isCasting) {
            this.isCasting = false;
            this.castProg = 0;
        }
        this.destinationHalf = [xHalf, yHalf];
        this.moveTime = time;
        this.moveProgTime = 0;
        this.moveStartTime = ts;
        this.isMoving = true;
    }

    castFiller() {
        if (this.isMoving || (this.isCasting && this.castType === 0)) {
            return;
        }
        this.isCasting = true;
        this.castType = 0;
        this.castProg = 0;
    }

    castShield() {
        if (this.isMoving || (this.isCasting && this.castType === 1)) {
            return;
        }
        this.isCasting = true;
        this.castType = 1;
        this.castProg = 0;
    }

    getScore() {
        return this.score;
    }

    getPosition() {
        return [this.x, this.y];
    }

    damage(hit) {
        this.health -= hit;
        //console.log(`new hp: ${this.health}`);
        if (this.health <= 0) {
            return true;
        } else if (this.health === 1) {
            this.colour = "lime";
        }
        return false;
    }

    drawCastBar(x, y, w, h, current, total, ctx, colour) {
        //draws a progress bar where x,y is the centre top of the bar
        x = x - (w/2);
        ctx.strokeStyle = colour;
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, w, h)
        ctx.fillStyle = colour;
        ctx.strokeRect(x, y, w, h);
        ctx.fillRect(x, y, Math.min(current/total, 1) * w, h);
    }
}