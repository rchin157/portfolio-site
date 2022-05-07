import React, { useEffect, useRef } from "react";
import Boid from "./Boid";
import './boid.css';
import Obstacle from "./Obstacle";

export default function Manager() {
    const canvasRef = useRef(null);

    useEffect(() => {
        let canvas = canvasRef.current;
        let context = canvas.getContext('2d');

        let requestId, numBoids = 20, numObs = 5;
        let boids = [];
        let obstacles = [];

        function reset() {
            canvas = canvasRef.current;
            context = canvas.getContext('2d');
            boids = [];
            obstacles = [];
            let ratio = getPixelRatio(context);
            let width = getComputedStyle(canvas)
                .getPropertyValue('width')
                .slice(0, -2);
            let height = getComputedStyle(canvas)
                .getPropertyValue('height')
                .slice(0, -2)
            
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            console.log(canvas.width, canvas.height);
            setup();
            draw();
        }

        function setup() {
            for (let i = 0; i < numBoids; i++) {
                let newX = Math.floor(Math.random() * canvas.width);
                let newY = Math.floor(Math.random() * canvas.height);
                boids.push(new Boid(newX, newY, 0, 0));
            }
            for (let i = 0; i < numObs; i++) {
                let newX = Math.floor(Math.random() * (canvas.width - 200)) + 100;
                let newY = Math.floor(Math.random() * (canvas.height - 200)) + 100;
                let newRad = Math.floor(Math.random() * (canvas.height / 24)) + 20;
                obstacles.push(new Obstacle(newX, newY, newRad));
            }
        }

        function draw() {
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < numObs; i++) {
                obstacles[i].draw(context);
            }
            for (let i = 0; i < numBoids; i++) {
                boids[i].update(boids, obstacles);
                boids[i].draw(context);
            }
            requestId = requestAnimationFrame(draw);
        }

        window.addEventListener("resize", reset);
        reset();
        return () => {
            cancelAnimationFrame(requestId);
            window.removeEventListener("resize", reset);
        };
    }, [])

    return (
        <canvas id="boid-manager" ref={canvasRef} />
    );
}

function getPixelRatio(ctx) {
    var dpr = window.devicePixelRatio || 1;
    var bsr = ctx.backingStorePixelRatio ||
    ctx.webkitBackingStorePixelRatio ||
    ctx.mozBackingStorePixelRatio ||
    ctx.msBackingStorePixelRatio ||
    ctx.oBackingStorePixelRatio ||
    1;

    return dpr / bsr;
}