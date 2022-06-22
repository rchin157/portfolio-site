import React from "react";

import headerimg from "../../data/ProjectMedia/Gamejam-nov-2020/gamejam-nov-2020.png";

export default function Project() {
    return (
        <div className="home">
            <div className="container">
                <div className="mt-4">
                    <img className="img-fluid mx-auto d-block" src={headerimg} alt="Screenshot from the project" />
                </div>
                <h1 className="mt-5">Game Jam Project (Nov 2020)</h1>
                <h3 className="text-muted">Godot</h3>
                <p>
                    procedural sidescrolling survival
                </p>
                <p>
                    time management
                </p>
                <p>
                    maintaining state across clients
                </p>
                <p>
                    This project, including its implementation, can be found
                    <a href="https://github.com/rchin157/gamejam-Nov-2021" target="_blank" rel="noopener noreferrer"> here</a>.
                </p>
            </div>
        </div>
    );
}