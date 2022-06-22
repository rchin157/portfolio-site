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
                    An android app for lending and borrowing books where any user can be both a lender and a borrower. This project
                    was developed over the course of a semester as part of a software engineering class in a group of 6 classmates using agile practices.
                    It also utilized firebase for its responsive database integration which offered live updates via provided callbacks. The class also
                    covered project lifecycle and as such documentation was created throughout.
                </p>
                <p>
                    agile
                </p>
                <p>
                    firebase integration
                </p>
                <p>
                    This project, including its implementation and documentation, can be found
                    <a href="https://github.com/CMPUT301F20T23/TheBearMinimum" target="_blank" rel="noopener noreferrer"> here</a>.
                </p>
            </div>
        </div>
    );
}