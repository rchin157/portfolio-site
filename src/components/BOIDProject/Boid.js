// this is a boid class, it represents a single boid in the flock and handles the associated behaviors

export default class Boid {
    // boids can come in 4 colours
    static colors = {
        0: 'aqua',
        1: 'fuchsia',
        2: 'yellow',
        3: 'orange',
    };

    constructor(x, y, dx, dy, sight = 75, coherence = 0.3, separation = 0.5, alignment = 0.5) {
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
        this.maxSpeed = 2;
        this.maxForce = 0.3;
    }

    get position() {
        return [this.x, this.y];
    }

    get vector() {
        return [this.dx, this.dy];
    }

    // draw an individual boid using html context methods
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

    // factor all nearby boids into vectors that will be added to the current velocity
    update(others, obs, canvas) {
        let accelX = 0, accelY = 0;
        //sight, determine what other boids need to be considered
        let canSeeBoid = [];
        for (let i = 0; i < others.length; i++) {
            if (this.#dist(others[i]) <= this.sight) {
                canSeeBoid.push(others[i]);
            }
        }
        // determine what obstacles need to be considered
        let canSeeOb = [];
        for (let i = 0; i < obs.length; i++) {
            if (this.#dist(obs[i]) <= this.sight) {
                canSeeOb.push(obs[i]);
            }
        }
        //coherence, determine how much the boid should steer towards the flock's centroid
        let cSteering = this.#coherence(canSeeBoid);
        accelX += cSteering[0];
        accelY += cSteering[1];
        //separation, determine how much the boid should steer away from other boids
        let sSteering = this.#separation(canSeeBoid);
        accelX += sSteering[0];
        accelY += sSteering[1];
        //alignment, determine how much the boid should steer to match the flock's average velocity
        let aSteering = this.#alignment(canSeeBoid);
        accelX += aSteering[0];
        accelY += aSteering[1];
        //walls, determine how much the boid should steer to avoid the edges of the canvas
        let wSteering = this.#walls(canvas);
        accelX += wSteering[0];
        accelY += wSteering[1];
        //obs, determine how much the boid should steer to avoid obstacles
        let oSteering = this.#obstacles(obs);
        accelX += oSteering[0];
        accelY += oSteering[1];

        //update rotation requirements
        this.#updateVectors();
        //update position
        this.dx += accelX;
        this.dy += accelY;
        if (this.#norm([this.dx, this.dy]) > this.maxSpeed) {
            let n = this.#norm([this.dx, this.dy]);
            this.dx = this.dx / n * this.maxSpeed;
            this.dy = this.dy / n * this.maxSpeed;
        }
        this.x += this.dx;
        this.y += this.dy;
    }

    #clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
    }

    //helper to get the distance between this boid and another
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

    // helper to normalize a vector
    #norm(v1) {
        return Math.sqrt(v1[0] * v1[0] + v1[1] * v1[1]);
    }

    // computes the centroid of a list of boids and returns a vector pointing towards it.
    // used for determining steering vector for cohesion
    #coherence(boids) {
        if (boids.length === 1) {
            return [0, 0];
        }
        let centroid = [0, 0];
        for (let i = 0; i < boids.length; i++) {
            let p = boids[i].position;
            centroid[0] += p[0];
            centroid[1] += p[1];
        }
        centroid[0] /= boids.length;
        centroid[1] /= boids.length;
        let coherenceVector = [centroid[0] - this.x, centroid[1] - this.y];
        let n = this.#norm(coherenceVector);
        if (n > 0) {
            coherenceVector[0] = coherenceVector[0] * this.maxSpeed / n;
            coherenceVector[1] = coherenceVector[1] * this.maxSpeed / n;
        }
        let steering = [coherenceVector[0] - this.dx, coherenceVector[1] - this.dy];
        n = this.#norm(steering);
        if (n > this.maxForce) {
            steering = [steering[0] * this.maxForce * this.coherence / n, steering[1] * this.maxForce * this.coherence / n];
        }
        return steering;
    }

    // computes the average of vectors pointing away from other boids and returns it.
    // used for determining steering vector for separation
    #separation(boids) {
        if (boids.length === 1) {
            return [0, 0];
        }
        let count = boids.length;
        let separationVector = [0, 0];
        for (let i = 0; i < boids.length; i++) {
            let v = this.#vectorOther(boids[i]);
            let d = this.#dist(boids[i]);
            if (d === 0) {
                count--;
                continue;
            }
            separationVector[0] += v[0] / d;
            separationVector[1] += v[1] / d;
        }
        separationVector[0] /= count;
        separationVector[1] /= count;
        let n = this.#norm(separationVector);
        if (n > 0) {
            separationVector[0] = separationVector[0] * this.maxSpeed / n;
            separationVector[1] = separationVector[1] * this.maxSpeed / n;
        }
        let steering = [separationVector[0] - this.dx, separationVector[1] - this.dy];
        n = this.#norm(steering);
        if (n > this.maxForce) {
            steering = [steering[0] * this.maxForce * this.separation / n, steering[1] * this.maxForce * this.separation / n];
        }
        return steering;
    }

    // computes the average of vectors pointing in the same direction as other boids and returns it.
    // used for determining steering vector for alignment
    #alignment(boids) {
        if (boids.length === 1) {
            return [0, 0];
        }
        let alignmentVector = [0, 0];
        for (let i = 0; i < boids.length; i++) {
            let v = boids[i].vector;
            alignmentVector[0] += v[0];
            alignmentVector[1] += v[1];
        }
        alignmentVector[0] /= boids.length - 1;
        alignmentVector[1] /= boids.length - 1;
        let n = this.#norm(alignmentVector);
        if (n > 0) {
            alignmentVector[0] = alignmentVector[0] * this.maxSpeed / n;
            alignmentVector[1] = alignmentVector[1] * this.maxSpeed / n;
        }
        let steering = [alignmentVector[0] - this.dx, alignmentVector[1] - this.dy];
        n = this.#norm(steering);
        if (n > this.maxForce) {
            steering = [steering[0] * this.maxForce * this.alignment / n, steering[1] * this.maxForce * this.alignment / n];
        }
        return steering;
    }

    // computes the average of vectors pointing away from walls and returns it.
    #walls(canvas) {
        let w = canvas.width;
        let h = canvas.height;
        let result = [0, 0];
        if (this.x < this.sight) {
            result[0] += this.maxSpeed * (1 / this.x);
        }
        if (this.x > w - this.sight) {
            result[0] -= this.maxSpeed * (1 / (w - this.x));
        }
        if (this.y < this.sight) {
            result[1] += this.maxSpeed * (1 / this.y);
        }
        if (this.y > h - this.sight) {
            result[1] -= this.maxSpeed * (1 / (h - this.y));
        }
        return result;
    }

    // computes the average of vectors pointing away from obstacles and returns it.
    #obstacles(obs) {
        if (obs.length === 0) {
            return [0, 0];
        }
        let count = 0;
        let obsVector = [0, 0];
        for (let i = 0; i < obs.length; i++) {
            let v = this.#vectorOther(obs[i]);
            let d = this.#dist(obs[i]);
            if (d > this.sight) {
                continue;
            }
            count++;
            obsVector[0] += v[0] / d;
            obsVector[1] += v[1] / d;
        }
        if (count === 0) {
            return [0, 0];
        }
        obsVector[0] /= count;
        obsVector[1] /= count;
        let n = this.#norm(obsVector);
        if (n > 0) {
            obsVector[0] = obsVector[0] * this.maxSpeed / n;
            obsVector[1] = obsVector[1] * this.maxSpeed / n;
        }
        let steering = [obsVector[0] - this.dx, obsVector[1] - this.dy];
        n = this.#norm(steering);
        if (n > this.maxForce) {
            steering = [steering[0] * this.maxForce / n, steering[1] * this.maxForce * 0.6 / n];
        }
        return steering;
    }

    #updateVectors() {
        this.length = this.#norm([this.dx, this.dy]);
        this.ndx = this.dx / this.length;
        this.ndy = this.dy / this.length;
        this.odx = this.ndy;
        this.ody = -this.ndx;
    }
}