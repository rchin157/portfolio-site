export default class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.isMoving = false;
        this.moveTime = -1;
        this.moveProgTime = 1;
        this.moveStartTime = -1;
        this.prevLocation = [x, y];
        this.destination = [x, y];
    }

    draw(ctx, canvas, size, ts) {
        //draw player at x, y
        const moveVect = [this.destination[0] - this.prevLocation[0], this.destination[1] - this.prevLocation[1]];
        if (this.moveProgTime <= 1 && this.isMoving) {
            this.x = this.prevLocation[0] + moveVect[0] * this.moveProgTime;
            this.y = this.prevLocation[1] + moveVect[1] * this.moveProgTime;
            this.moveProgTime = (ts - this.moveStartTime) / this.moveTime;
        } else if (this.isMoving) {
            this.isMoving = false;
        }
    }

    move(x, y, time, ts) {
        this.destination = [x, y];
        this.moveTime = time;
        this.moveProgTime = 0;
        this.moveStartTime = ts;
        this.isMoving = true;
    }
}