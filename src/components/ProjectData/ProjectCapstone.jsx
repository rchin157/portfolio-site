import React from "react";

import headerimg from "../../data/ProjectMedia/Capstone/capstonedashboard.png";
import ghtile from "../../data/ProjectMedia/Capstone/capstonegh.png";
import mmtile from "../../data/ProjectMedia/Capstone/capstonemm.png";

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
                    General about
                </p>
                <p>
                    gh integration
                </p>
                <p>
                    meeting minutes and backend
                </p>
            </div>
        </div>
    );
}