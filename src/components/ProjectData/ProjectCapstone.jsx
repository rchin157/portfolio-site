import React from "react";

import headerimg from "../../data/ProjectMedia/Capstone/capstonedashboard.png";
import ghtile from "../../data/ProjectMedia/Capstone/capstonegh.png";
import mmtile from "../../data/ProjectMedia/Capstone/capstonemm.png";
import ghauto from "../../data/ProjectMedia/Capstone/ghautomation.png"

// this is the project page for the job scheduler project
export default function Project() {
    return (
        <div className="home">
            <div className="container">
                <div className="mt-4">
                    <img className="img-fluid mx-auto d-block" src={headerimg} alt="Screenshot of the dashboard with test data" />
                </div>
                <h1 className="mt-5">Capstone Dashboard</h1>
                <h3 className="text-muted">Javascript, Python</h3>
                <p>
                    My university capstone project was a dashboard for tracking students
                    through their computing science capstone course, allowing teaching staff to
                    monitor students' progress, provide feedback, and watch for any red flags.
                    While created to serve the needs of the computing science department,
                    from the beginning our client wanted the dashboard to be flexible enough
                    for other courses and universities to use as well. With this in mind,
                    the dashboard was designed to be modular and easy to modify or add components
                    with the knowledge that the project would become open source after completion.

                </p>
                <p>
                    This project was my first experience with a full stack web development project.
                    As part of the course we were required to use agile practices like scrum and
                    continuous delivery. While I felt it was helpful, agile doesn't seem to work as
                    well as it could have given the limited time we could spend on the project each week
                    since it was just one of our courses.
                    Since it was a capstone project, our team decided to try new frameworks like Svelte
                    and Fastapi since most of us had already worked with React and Django previously.
                    Svelte ended up being problematic but was still good experience to try.
                    Overall I think fullstack development is something I would like to do more
                    of in the future since it has very tangible results and feedback during the process.
                </p>
                <br />
                <div>
                    <img className="img-fluid" src={ghtile} alt="Screenshot of the github integration" />
                </div>
                <p>
                    One of the modules specifically made for computing courses was the github integration.
                    It pulls and charts data from github repositories to help visualize activity.
                </p>
                <br />
                <div>
                    <img className="img-fluid" src={mmtile} alt="Screenshot of the meeting minutes section" />
                </div>
                <p>
                    Our backend was a REST API written in Python using Fastapi and MongoDB.
                    It manages all the data about students and courses for the dashboard and provides endpoints
                    for getting and uploading data to and from the frontend.
                    Among the data was meeting minutes which where the most challenging to ingest since they were mostly
                    unstructured text. Pulling information like date and content to identify each entry was difficult
                    if the writer didn't format the minutes in a specific way.
                    MongoDB was chosen for its popularity and support and since its nosql structure
                    fit the data well.
                </p>
                <br />
                <div>
                    <img className="img-fluid" src={ghauto} alt="Screenshot of a completed github workflow" />
                </div>
                <p>
                    We used continuous integration/delivery with github actions to run tests and deploy the dashboard.
                    I found that having pull requests and the like require a passing build before merging
                    was very helpful in keeping the project in a working state, especially since our team
                    was quite large at 7 people.
                </p>
                <p>
                    This project, now open source, can be found
                    <a href="https://github.com/open-uofa/capstone-course-dashboard" target="_blank" rel="noopener noreferrer"> here</a>.
                </p>
            </div>
        </div>
    );
}