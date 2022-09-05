import React from "react";

import headerimg from "../../data/ProjectMedia/BookApp/BookApp.png";
import umlimg from "../../data/ProjectMedia/BookApp/Nov29UML.png";
import protoimg from "../../data/ProjectMedia/BookApp/prototype.png";
import storybimg from "../../data/ProjectMedia/BookApp/storyboard.png";

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
                    This project served as an introduction to and exercise in agile development. While requiring more initial work, the planning and organization
                    noticably helped during development especially in areas of task tracking and distribution of work. Our team used github projects
                    to create, track, and assign user stories over the course of the project. I personally found this particularly useful for managing
                    my own time and work. Some of our documentation and such are shown below.
                </p>
                <div className="row gap-2 my-3">
                    <img className="img-fluid col-auto" src={umlimg} alt="UML diagram" />
                    <img className="img-fluid col-auto" src={protoimg} alt="Prototype" />
                </div>
                <p>
                    The realtime aspect of the app was enabled by Google's firebase realtime database service. This service allowed
                    book status among other things to be kept up to date in realtime via its provided callbacks. Since this project's completion
                    firebase has been a low-cost, or even free in some cases, option for database hosting in a few of my other projects.
                </p>
                <p>
                    This project, including its implementation and documentation, can be found
                    <a href="https://github.com/CMPUT301F20T23/TheBearMinimum" target="_blank" rel="noopener noreferrer"> here</a>.
                </p>
            </div>
        </div>
    );
}