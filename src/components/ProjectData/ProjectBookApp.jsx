import React from "react";

import headerimg from "../../data/ProjectMedia/BookApp/BookApp.png";

export default function Project() {
    return (
        <div className="home">
            <div className="container">
                <div className="mt-4">
                    <img className="img-fluid mx-auto d-block" src={headerimg} alt="Screenshot of the main menu design" />
                </div>
                <h1 className="mt-5">Book Lending App</h1>
                <h3 className="text-muted">Java</h3>
                <p>
                    Android app for lending and borrowing books
                </p>
                <p>
                    agile
                </p>
                <p>
                    firebase integration
                </p>
                <p>
                    This project, including it's implementation and documentation, can be found
                    <a href="https://github.com/CMPUT301F20T23/TheBearMinimum" target="_blank" rel="noopener noreferrer"> here</a>.
                </p>
            </div>
        </div>
    );
}