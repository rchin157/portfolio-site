import React from "react";

import headerimg from "../../data/ProjectMedia/rescheduling/nsercjobscheduler.png";
import nsercrapaper from "../../data/32dafaad-c032-4dd1-9d10-4dd607e6d179.pdf";

export default function Project() {
    return (
        <div className="home">
            <div className="container">
                <div className="mt-4">
                    <img className="img-fluid mx-auto d-block" src={headerimg} alt="Screenshot from the paper" />
                </div>
                <h1 className="mt-5">NSERC Job Rescheduling Research</h1>
                <h3 className="text-muted">C</h3>
                <p>
                    Implementation of "A tardiness-augmented approximation scheme for rejection-allowed multiprocessor rescheduling".
                </p>
                <p>
                    Performance oriented C
                </p>
                <p>
                    Memory management hell
                </p>
                <p>
                    This project, including it's implementation and documentation, can be found
                    <a href="https://github.com/rchin157/NSERC2020-RescheduleFPTAS" target="_blank" rel="noopener noreferrer"> here</a>.
                    <br />
                    The published paper can be viewed
                    <a href={nsercrapaper} target="_blank" rel="noopener noreferrer"> here</a>.
                </p>
            </div>
        </div>
    );
}