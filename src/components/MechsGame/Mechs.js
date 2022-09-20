import { getFirestore, addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { v4 as uuidv4 } from "uuid";

import Bar from "./Bar";
import Player from "./Player";

// The main class that represents a mechs game instance
export default class Mechs {
    // mostly handles stage and enemy mechanics
    constructor(app, setScores) {
        this.vbars = null;
        this.hbars = null;
        this.timeSinceLastMech = 0;
        this.timeBetweenMechs = 10000; //milliseconds
        this.minPeriod = 4000;
        this.isCasting = false;
        this.mechCastTime = 2000;
        this.castProg = 0;
        this.size = null;
        this.player = null;
        this.nextMech = null;
        this.lastTimeStamp = null;

        this.started = false;
        this.gameOver = false;
        this.nickRecorded = false;
        this.scoreSubmitted = false;

        this.scoredb = getFirestore(app);
        this.scores = [];
        this.setScores = setScores;
    }

    // setup game (ie. bars, player, etc.)
    setup(canvas) {
        if (this.gameOver) {
            return;
        }
        //console.log("mechs setup called");
        if (canvas !== null) {
            if (canvas.width > canvas.height) {
                this.size = canvas.height;
            } else {
                this.size = canvas.width;
            }
        }
        this.vbars = [new Bar(0, 0, this.size / 2, this.size), new Bar(this.size / 2, 0, this.size / 2, this.size)];
        this.hbars = [new Bar(0, 0, this.size, this.size / 2), new Bar(0, this.size / 2, this.size, this.size / 2)];
        this.player = new Player(Math.floor(Math.random() * 2), Math.floor(Math.random() * 2));
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

    // render to canvas, also main game loop
    draw(ctx, canvas, ts) {
        //draw border and quadrants
        ctx.strokeStyle = 'lightgray';
        ctx.beginPath();
        ctx.moveTo(0, this.size/2);
        ctx.lineTo(this.size, this.size/2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.size/2, 0);
        ctx.lineTo(this.size/2, this.size);
        ctx.stroke();
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, this.size, this.size);
        if (this.gameOver) {
            if (!this.scoreSubmitted) {
                //this.reportScore();
                //console.log("scores updated", this.scores)
                this.scores.unshift({key: uuidv4(), score: this.player.score});
                this.setScores([...this.scores]);
                this.scoreSubmitted = true;
            }
            this.cleanup(ctx);
        }
        if (!this.started || this.gameOver) {
            return;
        }
        // track time to relate game mechanics to time rather than framerate
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
        // handle mechanic windup
        if (this.isCasting) {
            //draw cast bar
            this.drawCastBar(this.size/2, 10, this.size/3, this.size/20, this.castProg, this.mechCastTime, ctx, 'red');
            this.castProg += tElapsed;
            this.vbars[this.nextMech[0]].warn(ctx);
            this.hbars[this.nextMech[1]].warn(ctx);
        }
        // handle mechanic windup finishing
        if (this.castProg >= this.mechCastTime) {
            if (this.timeBetweenMechs > this.minPeriod) {
                this.timeBetweenMechs -= 1000;
            }
            this.isCasting = false;
            this.castProg = 0;
            //trigger mech and determine result in terms of health loss
            this.vbars[this.nextMech[0]].flash(1500, ts);
            this.hbars[this.nextMech[1]].flash(1500, ts);
            let result = false;
            if (this.vbars[this.nextMech[0]].pointContained(...this.player.getPosition())) {
                result = this.player.damage(1) || result;
            }
            if (this.hbars[this.nextMech[1]].pointContained(...this.player.getPosition())) {
                result = this.player.damage(1) || result;
            }
            this.gameOver = result;
            this.nextMech = null;
        }

        //draw game elements
        for (const bar of this.vbars.concat(this.hbars)) {
            bar.draw(ctx, ts);
        }
        this.player.draw(ctx, this.size, ts);

        this.timeSinceLastMech += tElapsed;
        this.lastTimeStamp = ts;
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

    handleClick(x1, y1) {
        //console.log("mg click handled", x, y);
        if (!this.gameOver && this.started) {
            //gameplay
            this.started = true;
            let x = x1 * window.devicePixelRatio;
            let y = y1 * window.devicePixelRatio;
            //console.log(x,y);
            let h1 = x < this.size/2 ? 0 : 1;
            let h2 = y < this.size/2 ? 0 : 1;
            //console.log(this.size);
            this.player.move(h1, h2, 800, this.lastTimeStamp);
        } else if (this.gameOver) {
            //end screen/score submission
            this.reset();
        }
    }

    // attempt to trigger a filler cast
    fillerRequested() {
        if (!this.started) {
            this.started = true;
        }
        if (this.gameOver) {
            this.reset();
        }
        this.player.castFiller();
    }

    // attempt to trigger a shield cast
    shieldRequested() {
        if (!this.started) {
            this.started = true;
        }
        if (this.gameOver) {
            this.reset();
        }
        this.player.castShield();
    }

    // display end screen
    cleanup(ctx) {
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black'
        ctx.font = '48px sans';
        ctx.fillText(`Final Score: ${this.player.score}`, this.size/2, this.size/2 - 12);
        ctx.fillText('Press cast to play again.', this.size/2, this.size/2 + 50);
    }

    // send scores to firebase on request
    async reportScores(nick) {
        if (this.scores.length === 0 || nick.length === 0) {
            return;
        }
        const scoreCollection = collection(this.scoredb, 'scores');
        for (let i=0; i<=this.scores.length; i++) {
            try {
                await addDoc(scoreCollection, {
                    'nick': nick,
                    'score': this.scores[i].score,
                    'time': Timestamp.fromDate(new Date()),
                    'key': this.scores[i].key,
                });
            } catch (err) {
                console.log('failed to submit score');
            }
        }
        this.setScores([]);
        this.scores = [];
    }

    setdb(db) {
        this.scoredb = db;
    }

    // reset game state
    reset() {
        this.timeSinceLastMech = 0;
        this.timeBetweenMechs = 10000; //milliseconds
        this.isCasting = false;
        this.castProg = 0;
        this.lastTimeStamp = null;

        this.started = false;
        this.gameOver = false;
        this.nickRecorded = false;
        this.scoreSubmitted = false;

        this.setup(null);
    }

    getScores() {
        return this.scores;
    }
}